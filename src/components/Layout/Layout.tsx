import React, { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { CustomFonts } from '../CustomFonts';
import StnSEO from '../StnSEO';



interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      {/* Add your theme here */}
      <MantineProvider theme={{ 

      colorScheme,
      fontFamily: "'Montserrat', sans-serif",      
      fontSizes: {
        
        xl: 24,
        lg: 20
      },
      other: {
        fonts:{
          main: "'Montserrat', sans-serif",
          heading: "'Great Vibes', cursive"
        },
        colors: {
          primary :"#E86C6C",
          secondary:"#009efd",
          bannerdark: "#000000",          
          third: "#22cfc3",
          gradient: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
          light: "#F5F5F5",
        },
        footer:{
          height: '7rem'
        },
        section:{
          height: '100vh'
        },
        backsection:{
          height: '100%'
        }
      }
       
      }} withGlobalStyles withNormalizeCSS>
        <StnSEO />
        <CustomFonts />
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}