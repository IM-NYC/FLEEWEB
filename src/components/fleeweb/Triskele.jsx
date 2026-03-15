import React from 'react';

import triskelionLight from '@/assets/triskelion-light.png';
import triskelionDark from '@/assets/triskelion-dark.png';

export default function Triskele({ size = 32, color = 'white', opacity = 1 }) {
  const isDark = color === 'dark' || color === '#C0C0C0' || color === 'silver' || color === '#080C10';
  const src = isDark ? triskelionDark : triskelionLight;

  return (
    <img
      src={src}
      alt="Triskelion"
      width={size}
      height={size}
      style={{ opacity, display: 'block' }}
    />
  );
}