#!/usr/bin/env bash
set -euo pipefail

# Usage: sudo ./setup.sh <GIT_REPO_URL> <DOMAIN_NAME>
# Example: sudo ./setup.sh https://github.com/you/site.git example.com

if [[ "$EUID" -ne 0 ]]; then
  echo "Please run as root (use sudo)." >&2
  exit 1
fi

if [[ $# -ne 2 ]]; then
  echo "Usage: $0 <GIT_REPO_URL> <DOMAIN_NAME>" >&2
  exit 1
fi

REPO_URL="$1"
DOMAIN="$2"
SITENAME="${DOMAIN}"
WEBROOT="/var/www/${SITENAME}"

# Detect package manager (supports Debian/Ubuntu, Amazon Linux, RHEL/CentOS, Fedora)
PM=""
if command -v apt-get >/dev/null 2>&1; then
  PM="apt"
elif command -v dnf >/dev/null 2>&1; then
  PM="dnf"
elif command -v yum >/dev/null 2>&1; then
  PM="yum"
else
  echo "Supported package manager not found (apt, dnf, or yum)." >&2
  exit 1
fi

echo "Using package manager: ${PM}"

update_packages() {
  case "$PM" in
    apt)
      apt-get update -y
      ;;
    dnf)
      dnf makecache -y
      ;;
    yum)
      yum makecache -y
      ;;
  esac
}

install_pkg() {
  local pkg="$1"
  if ! command -v "$pkg" >/dev/null 2>&1; then
    echo "Installing ${pkg}..."
    case "$PM" in
      apt)
        apt-get install -y "$pkg"
        ;;
      dnf)
        dnf install -y "$pkg"
        ;;
      yum)
        yum install -y "$pkg"
        ;;
    esac
  else
    echo "${pkg} already installed."
  fi
}

echo "Updating package index..."
update_packages

# Core tools
install_pkg git
install_pkg nginx

# Firewall setup (best effort)
if command -v ufw >/dev/null 2>&1; then
  echo "Configuring ufw firewall..."
  ufw allow 'Nginx Full' || true
elif command -v firewall-cmd >/dev/null 2>&1; then
  echo "Configuring firewalld..."
  firewall-cmd --permanent --add-service=http || true
  firewall-cmd --permanent --add-service=https || true
  firewall-cmd --reload || true
else
  echo "No supported firewall tool detected (ufw/firewalld). Skipping firewall config."
fi

# Prepare webroot
echo "Setting up webroot at ${WEBROOT}..."
mkdir -p "${WEBROOT}"

# If directory is not empty and already a git repo, update; otherwise clone fresh
if [[ -d "${WEBROOT}/.git" ]]; then
  echo "Existing git repo found in ${WEBROOT}, pulling latest changes..."
  git -C "${WEBROOT}" pull
else
  echo "Cloning repository ${REPO_URL} into ${WEBROOT}..."
  rm -rf "${WEBROOT:?}/"* 2>/dev/null || true
  git clone "${REPO_URL}" "${WEBROOT}"
fi

# Set ownership to www-data (Debian/Ubuntu) or nginx (RHEL/CentOS)
WEB_USER="www-data"
if id nginx >/dev/null 2>&1; then
  WEB_USER="nginx"
elif id www-data >/dev/null 2>&1; then
  WEB_USER="www-data"
fi

chown -R "${WEB_USER}:${WEB_USER}" "${WEBROOT}"

# Create Nginx server block
NGINX_AVAILABLE=""
NGINX_ENABLED=""

if [[ -d /etc/nginx/sites-available && -d /etc/nginx/sites-enabled ]]; then
  # Debian/Ubuntu style
  NGINX_AVAILABLE="/etc/nginx/sites-available/${SITENAME}"
  NGINX_ENABLED="/etc/nginx/sites-enabled/${SITENAME}"
else
  # RHEL/CentOS style single conf dir
  NGINX_AVAILABLE="/etc/nginx/conf.d/${SITENAME}.conf"
fi

echo "Creating Nginx config for ${DOMAIN}..."

# Ensure Nginx config and log directories exist (handles Amazon Linux and others)
mkdir -p "$(dirname "${NGINX_AVAILABLE}")"
mkdir -p /var/log/nginx

cat > "${NGINX_AVAILABLE}" <<EOF
server {
    listen 80;
    listen [::]:80;

    server_name ${DOMAIN};

    root ${WEBROOT};
    index index.html index.htm index.nginx-debian.html;

    access_log /var/log/nginx/${SITENAME}_access.log;
    error_log /var/log/nginx/${SITENAME}_error.log;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
EOF

# Enable site on Debian/Ubuntu
if [[ -n "${NGINX_ENABLED}" ]]; then
  ln -sf "${NGINX_AVAILABLE}" "${NGINX_ENABLED}"
fi

# Test and reload Nginx
echo "Testing Nginx configuration..."
nginx -t

echo "Reloading Nginx..."
if command -v systemctl >/dev/null 2>&1; then
  systemctl enable nginx
  systemctl restart nginx
else
  service nginx restart
fi

echo "======================================================="
echo "Setup complete."
echo "Site root: ${WEBROOT}"
echo "Domain:    http://${DOMAIN}"
echo "You may want to configure DNS so ${DOMAIN} points to this server."
echo "======================================================="