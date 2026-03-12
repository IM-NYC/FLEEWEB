import React from 'react';

// Accurate Celtic triskelion — three Archimedean spirals rotated 120° each
// Matches the reference: thick filled spirals meeting at center
export default function Triskele({ size = 32, color = '#C0C0C0', opacity = 1 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <g transform="translate(100,105)">
        {/* Arm 1 — top */}
        <g transform="rotate(0)">
          <path
            d="M0,0
               C-2,-5 -6,-8 -10,-8
               C-20,-8 -28,2 -26,14
               C-24,26 -12,34 0,34
               C14,34 26,22 28,8
               C30,-8 18,-22 4,-28
               C-14,-36 -36,-28 -46,-12
               C-58,6 -52,32 -36,44
               C-20,58 4,58 20,48
               C38,36 44,12 38,-8
               C30,-32 8,-50 -16,-54
               C-44,-60 -70,-44 -80,-18
               C-90,10 -78,42 -54,56"
            fill="none"
            stroke={color}
            strokeWidth="16"
            strokeLinecap="round"
          />
        </g>
        {/* Arm 2 — bottom-right */}
        <g transform="rotate(120)">
          <path
            d="M0,0
               C-2,-5 -6,-8 -10,-8
               C-20,-8 -28,2 -26,14
               C-24,26 -12,34 0,34
               C14,34 26,22 28,8
               C30,-8 18,-22 4,-28
               C-14,-36 -36,-28 -46,-12
               C-58,6 -52,32 -36,44
               C-20,58 4,58 20,48
               C38,36 44,12 38,-8
               C30,-32 8,-50 -16,-54
               C-44,-60 -70,-44 -80,-18
               C-90,10 -78,42 -54,56"
            fill="none"
            stroke={color}
            strokeWidth="16"
            strokeLinecap="round"
          />
        </g>
        {/* Arm 3 — bottom-left */}
        <g transform="rotate(240)">
          <path
            d="M0,0
               C-2,-5 -6,-8 -10,-8
               C-20,-8 -28,2 -26,14
               C-24,26 -12,34 0,34
               C14,34 26,22 28,8
               C30,-8 18,-22 4,-28
               C-14,-36 -36,-28 -46,-12
               C-58,6 -52,32 -36,44
               C-20,58 4,58 20,48
               C38,36 44,12 38,-8
               C30,-32 8,-50 -16,-54
               C-44,-60 -70,-44 -80,-18
               C-90,10 -78,42 -54,56"
            fill="none"
            stroke={color}
            strokeWidth="16"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
}