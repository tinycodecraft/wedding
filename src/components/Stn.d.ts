import '@mantine/core'

declare module "@mantine/core" {
  export interface MantineThemeOther {
    fonts: {
        main: string,
        heading:string
      },
      colors: {
        primary:string,
        secondary:string,
        third: string,
        gradient:string,
        light:string,
        bannerdark:string
      },
      footer: {
        height:string | number
      },
      section: {
        height: string | number,
        
      },
      backsection:{
        height: string | number
      }  
    
  }
}
