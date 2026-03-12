import React from 'react';

/**
 * Celtic Triskelion — accurate filled shape.
 * Path derived from the standard triskelion geometry:
 * three congruent Archimedean spiral arms, each swept 300°,
 * rendered as thick strokes that together form the classic symbol.
 *
 * Strategy: use a SINGLE group with evenodd fill so the three
 * overlapping filled spirals produce the correct cut-out look.
 */

// One spiral arm as a filled outline shape (outer edge → inner edge back)
// Goes from center outward, sweeps ~1.5 turns, returns along inner wall
const SPIRAL =
  'M0,0 ' +
  'C2,-3 5,-6 9,-8 ' +
  'C15,-11 23,-9 27,-3 ' +
  'C31,3 29,12 23,17 ' +
  'C16,23 6,23 0,17 ' +
  'C-8,10 -8,-2 -1,-9 ' +
  'C7,-17 19,-18 28,-11 ' +
  'C38,-3 40,10 35,21 ' +
  'C30,33 18,40 5,40 ' +
  'C-11,40 -25,30 -29,16 ' +
  'C-34,1 -27,-15 -14,-22 ' +
  'C-1,-30 16,-28 25,-17 ' +
  // inner return path (narrower, tracing back)
  'C18,-24 7,-25 0,-18 ' +
  'C-9,-10 -10,3 -4,12 ' +
  'C2,21 14,25 24,20 ' +
  'C35,14 38,2 33,-8 ' +
  'C27,-19 14,-24 3,-18 ' +
  'C-5,-13 -7,-3 -3,5 ' +
  'C1,13 11,16 19,11 ' +
  'C26,7 27,-1 22,-7 ' +
  'C18,-11 12,-12 8,-8 ' +
  'C5,-5 4,-2 5,1 ' +
  'Z';

export default function Triskele({ size = 32, color = '#C0C0C0', opacity = 1 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-50 -55 100 105"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <g fillRule="evenodd">
        <path fill={color} d={SPIRAL} transform="rotate(0)" />
        <path fill={color} d={SPIRAL} transform="rotate(120)" />
        <path fill={color} d={SPIRAL} transform="rotate(240)" />
      </g>
    </svg>
  );
}