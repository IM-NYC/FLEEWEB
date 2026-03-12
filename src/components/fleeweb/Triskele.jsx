import React from 'react';

// Celtic triskelion — three thick spiral arms radiating from center
// Each arm: starts at center (0,0), curves outward into a circle
// Uses clipPath per arm so spirals don't visually overlap each other
export default function Triskele({ size = 32, color = '#C0C0C0', opacity = 1 }) {
  // A single spiral arm: starts near center, expands into a full clockwise loop
  // Drawn as a thick stroke so it looks like the filled reference
  const arm = (
    <path
      d="M 0,0
         C 3,-6  10,-12  18,-14
         C 28,-17  40,-10  44, 2
         C 48, 14  42, 28  32, 34
         C 20, 42   4, 40  -6, 30
         C -18, 18  -18,  2  -8, -8
         C  2,-18  18,-20  28,-12
         C 40, -2  42, 16  34, 26
         C 26, 38  10, 42   0, 36"
      fill="none"
      stroke={color}
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      viewBox="-60 -70 120 130"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        {/* Each arm gets a clip so only its 120° sector is visible — prevents overlap */}
        <clipPath id="clip0">
          <polygon points="0,0  0,-200  173,-100" />
        </clipPath>
        <clipPath id="clip1">
          <polygon points="0,0  173,-100  173,100  0,200" />
        </clipPath>
        <clipPath id="clip2">
          <polygon points="0,0  -173,-100  0,-200" />
        </clipPath>
      </defs>
      <g>
        <g transform="rotate(-90)" clipPath="url(#clip0)">{arm}</g>
        <g transform="rotate(30)"  clipPath="url(#clip1)">{arm}</g>
        <g transform="rotate(150)" clipPath="url(#clip2)">{arm}</g>
      </g>
      {/* Center fill circle */}
      <circle cx="0" cy="0" r="7" fill={color} />
    </svg>
  );
}