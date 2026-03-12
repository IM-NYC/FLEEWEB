import React from 'react';

// Proper Celtic triskelion using a single accurate filled SVG path
// Three spirals radiating from center, each curling outward — matches reference image
export default function Triskele({ size = 32, color = '#C0C0C0', opacity = 1 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <g transform="translate(50,50) scale(0.46)">
        {/* Single filled triskelion path — accurate three-spiral Celtic symbol */}
        <path
          fill={color}
          d="
            M 0 0
            C 2 -4, 6 -7, 10 -8
            C 17 -10, 25 -6, 28 2
            C 31 10, 27 19, 20 23
            C 11 28, 0 26, -7 19
            C -16 11, -17 -1, -10 -10
            C -3 -19, 9 -22, 20 -18
            C 33 -13, 40 0, 38 14
            C 36 29, 25 41, 12 45
            C -4 50, -21 45, -30 32
            L -26 29
            C -18 40, -4 44, 10 40
            C 22 36, 31 25, 33 13
            C 35 1, 28 -11, 17 -16
            C 7 -20, -4 -17, -9 -9
            C -15 -1, -13 9, -6 15
            C 1 21, 10 22, 17 17
            C 23 13, 26 5, 23 -2
            C 21 -8, 14 -12, 8 -10
            C 4 -9, 1 -5, 2 -1
            Z
          "
          transform="rotate(0)"
        />
        <path
          fill={color}
          d="
            M 0 0
            C 2 -4, 6 -7, 10 -8
            C 17 -10, 25 -6, 28 2
            C 31 10, 27 19, 20 23
            C 11 28, 0 26, -7 19
            C -16 11, -17 -1, -10 -10
            C -3 -19, 9 -22, 20 -18
            C 33 -13, 40 0, 38 14
            C 36 29, 25 41, 12 45
            C -4 50, -21 45, -30 32
            L -26 29
            C -18 40, -4 44, 10 40
            C 22 36, 31 25, 33 13
            C 35 1, 28 -11, 17 -16
            C 7 -20, -4 -17, -9 -9
            C -15 -1, -13 9, -6 15
            C 1 21, 10 22, 17 17
            C 23 13, 26 5, 23 -2
            C 21 -8, 14 -12, 8 -10
            C 4 -9, 1 -5, 2 -1
            Z
          "
          transform="rotate(120)"
        />
        <path
          fill={color}
          d="
            M 0 0
            C 2 -4, 6 -7, 10 -8
            C 17 -10, 25 -6, 28 2
            C 31 10, 27 19, 20 23
            C 11 28, 0 26, -7 19
            C -16 11, -17 -1, -10 -10
            C -3 -19, 9 -22, 20 -18
            C 33 -13, 40 0, 38 14
            C 36 29, 25 41, 12 45
            C -4 50, -21 45, -30 32
            L -26 29
            C -18 40, -4 44, 10 40
            C 22 36, 31 25, 33 13
            C 35 1, 28 -11, 17 -16
            C 7 -20, -4 -17, -9 -9
            C -15 -1, -13 9, -6 15
            C 1 21, 10 22, 17 17
            C 23 13, 26 5, 23 -2
            C 21 -8, 14 -12, 8 -10
            C 4 -9, 1 -5, 2 -1
            Z
          "
          transform="rotate(240)"
        />
      </g>
    </svg>
  );
}