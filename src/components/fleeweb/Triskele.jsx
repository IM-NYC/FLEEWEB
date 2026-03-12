import React from 'react';

// Authentic triskelion with three interlocking spirals
export default function Triskele({ size = 32, color = '#C0C0C0', opacity = 1 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/* Three-spiral triskelion using paths */}
      <g transform="translate(100,100)">
        {/* Spiral arm 1 — top */}
        <g transform="rotate(0)">
          <path
            d="M0,0
               C0,-8 4,-14 10,-18
               C18,-24 28,-24 34,-16
               C40,-8 36,4 28,10
               C18,18 4,16 -4,8
               C-14,-4 -10,-20 2,-28
               C16,-38 34,-34 42,-20
               C52,-4 44,16 30,22"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
        </g>
        {/* Spiral arm 2 — bottom-right */}
        <g transform="rotate(120)">
          <path
            d="M0,0
               C0,-8 4,-14 10,-18
               C18,-24 28,-24 34,-16
               C40,-8 36,4 28,10
               C18,18 4,16 -4,8
               C-14,-4 -10,-20 2,-28
               C16,-38 34,-34 42,-20
               C52,-4 44,16 30,22"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
        </g>
        {/* Spiral arm 3 — bottom-left */}
        <g transform="rotate(240)">
          <path
            d="M0,0
               C0,-8 4,-14 10,-18
               C18,-24 28,-24 34,-16
               C40,-8 36,4 28,10
               C18,18 4,16 -4,8
               C-14,-4 -10,-20 2,-28
               C16,-38 34,-34 42,-20
               C52,-4 44,16 30,22"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
        </g>
        {/* Center dot */}
        <circle cx="0" cy="0" r="5" fill={color} />
      </g>
    </svg>
  );
}