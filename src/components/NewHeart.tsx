import React from 'react'
import LoverSvg from '../images/lover.svg'
import { Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';

export default function NewHeart() {
    const desktop = useMediaQuery(`(min-width: ${
        768 / 16
    }em`);    
  return (
    <Image src={LoverSvg} width={desktop ? "8rem" : "3rem"} sx={(theme)=>
        ({
            
            display: 'block',
            margin: '3rem auto',

        })
    }></Image>
  )
}
