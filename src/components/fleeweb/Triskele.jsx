import React from 'react';

// Celtic triskelion — uses a single pre-computed filled path
// The shape is one continuous filled silhouette (like the reference image)
export default function Triskele({ size = 32, color = '#C0C0C0', opacity = 1 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 -1 2 2"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/*
        Triskelion built from three identical spiral arms, each a thick filled shape.
        Each arm starts at center, curls outward into a full circle, and tightens to a point.
        The three arms are rotated 120° apart.
      */}
      <g>
        {[0, 120, 240].map((deg) => (
          <path
            key={deg}
            fill={color}
            transform={`rotate(${deg})`}
            d="
              M 0.04 -0.04
              C 0.04 -0.04, 0.08 -0.18, 0.18 -0.22
              C 0.28 -0.26, 0.42 -0.20, 0.46 -0.08
              C 0.50  0.04, 0.44  0.18, 0.34  0.24
              C 0.22  0.30, 0.08  0.26,-0.02  0.16
              C -0.14  0.04,-0.14 -0.12,-0.04 -0.22
              C  0.06 -0.32, 0.22 -0.36, 0.36 -0.30
              C  0.52 -0.22, 0.60 -0.04, 0.58  0.14
              C  0.56  0.32, 0.44  0.48, 0.28  0.56
              C  0.10  0.64,-0.10  0.62,-0.26  0.52
              C -0.44  0.40,-0.52  0.20,-0.48  0.02
              C -0.46 -0.02,-0.44 -0.06,-0.42 -0.10

              C -0.44 -0.06,-0.46 -0.02,-0.44  0.02
              C -0.48  0.18,-0.40  0.36,-0.24  0.46
              C -0.10  0.54, 0.08  0.56, 0.24  0.48
              C  0.40  0.40, 0.50  0.26, 0.52  0.10
              C  0.54 -0.06, 0.46 -0.22, 0.32 -0.28
              C  0.20 -0.34, 0.06 -0.30,-0.02 -0.20
              C -0.10 -0.10,-0.10  0.04,-0.02  0.12
              C  0.06  0.22, 0.18  0.26, 0.28  0.20
              C  0.38  0.14, 0.42  0.02, 0.38 -0.08
              C  0.35 -0.16, 0.26 -0.22, 0.16 -0.20
              C  0.10 -0.18, 0.06 -0.13, 0.06 -0.08
              C  0.05 -0.05, 0.04 -0.04, 0.04 -0.04
              Z
            "
          />
        ))}
      </g>
    </svg>
  );
}