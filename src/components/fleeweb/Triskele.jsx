import React from 'react';

const TRISKELION_URL = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ae38c191a1a1d5925fd401/41f84d60e_99389_triskelion.png';

export default function Triskele({ size = 32, color = '#C0C0C0', opacity = 1 }) {
  // Use CSS filter to tint the black image to the desired color
  // color is expected to be a hex like #C0C0C0 or 'white'
  const filter = color === '#C0C0C0' || color === 'silver'
    ? 'brightness(0) invert(0.75)'  // silver/grey
    : color === 'white' || color === '#fff' || color === '#ffffff'
    ? 'brightness(0) invert(1)'     // pure white
    : 'brightness(0) invert(0.75)'; // default grey

  return (
    <img
      src={TRISKELION_URL}
      alt="Triskelion"
      width={size}
      height={size}
      style={{ opacity, filter, display: 'block' }}
    />
  );
}