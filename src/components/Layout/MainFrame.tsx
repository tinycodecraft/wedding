import React from 'react'
import styled from '@emotion/styled'
import { MainProps } from '../Gob'
import { useMantineTheme } from '@mantine/core'

const MainElement = styled.main<MainProps>`
position: relative;
height: 100%;
z-index: 100;
background-color: ${props=> props.color};
margin-bottom: ${props => props.height};
overflow-x: hidden;

`

export default function MainFrame({children}) {
    const theme  = useMantineTheme()
  return (
    <MainElement height={theme.other.footer.height} color={theme.other.colors.bannerdark}>{children}</MainElement>
  )
}
