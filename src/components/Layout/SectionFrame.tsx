import React  from 'react'
import styled from '@emotion/styled'
import { SectionElProps } from '../Gob'
import { useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'



const SectionElement = styled.section<SectionElProps>`
  display: grid;
  grid-template-rows: 1fr;
  height: ${props=> props.height};
  grid-template-columns: ${props => props.mode};
`

export function SectionFrame({children}){
    const theme = useMantineTheme();
    const desktop = useMediaQuery(`(min-width: ${
        768 / 16
    }em`);    
    return (
        <SectionElement height={desktop ?  `${theme.other.section.height}`: `auto`}
        mode={desktop ? `repeat(2, 1fr)`: `1fr`}
        
        >
            {children}
        </SectionElement>
    )
}