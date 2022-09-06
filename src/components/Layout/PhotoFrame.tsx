import {Container, Grid, useMantineTheme} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import React from 'react'
import { SectionElProps, TwoColumnProps } from '../Gob';
import styled from '@emotion/styled'
import { SectionFrame } from './SectionFrame';

const FrontSection = styled(Container)<SectionElProps>`
  align-self: center;
  text-align: center;
  padding: 0;
  margin:0;
  ${(props)=> props.mode == 'phone' && `
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    z-index: 5;
    color: #ffffff;
    padding-bottom: 2rem;

  `}
`;



const BackSection = styled(Container)<SectionElProps>`
  position: relative;
  height: 100vh;
  padding: 0;
  margin:0;

  ${(props) => props.mode == 'phone' && `
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    height: ${props.height};
    width:100%;
    
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: ${props.height};
      display: block;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.3);
    }    
  `}
`;



export default function PhotoFrame({ child1,child2 }: TwoColumnProps<string>) {
    const desktop = useMediaQuery(`(min-width: ${
        768 / 16
    }em`);
    const theme = useMantineTheme();
    return (
      
        <SectionFrame>
            <FrontSection mode={desktop ? 'desktop' : 'phone' }>
                {child1}
            </FrontSection>
            <BackSection mode={desktop ? 'desktop' : 'phone' } height={theme.other.backsection.height}>
                {child2}
            </BackSection>
        </SectionFrame>
    )
}
