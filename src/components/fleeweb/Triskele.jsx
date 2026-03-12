import React from 'react';

export default function Triskele({ size = 32, color = '#C0C0C0' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(50,50)">
        {/* Arm 1 - top */}
        <g transform="rotate(0)">
          <path
            d="M0,0 C4,-12 10,-22 6,-34 C3,-44 -6,-48 -6,-34 C-6,-22 -2,-12 0,0Z"
            fill={color}
            opacity="0.9"
          />
          <circle cx="0" cy="-38" r="5" fill={color} />
        </g>
        {/* Arm 2 - bottom right */}
        <g transform="rotate(120)">
          <path
            d="M0,0 C4,-12 10,-22 6,-34 C3,-44 -6,-48 -6,-34 C-6,-22 -2,-12 0,0Z"
            fill={color}
            opacity="0.9"
          />
          <circle cx="0" cy="-38" r="5" fill={color} />
        </g>
        {/* Arm 3 - bottom left */}
        <g transform="rotate(240)">
          <path
            d="M0,0 C4,-12 10,-22 6,-34 C3,-44 -6,-48 -6,-34 C-6,-22 -2,-12 0,0Z"
            fill={color}
            opacity="0.9"
          />
          <circle cx="0" cy="-38" r="5" fill={color} />
        </g>
        {/* Center dot */}
        <circle cx="0" cy="0" r="5" fill={color} />
      </g>
    </svg>
  );
}