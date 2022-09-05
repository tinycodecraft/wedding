import React from 'react'
import { Global } from '@mantine/core';
import "@fontsource/great-vibes"
import "@fontsource/montserrat"

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Montserrat',
            
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Great Vibes, cursive',            
            fontWeight: 100,
            
          },
        },
      ]}
    />
  );
}