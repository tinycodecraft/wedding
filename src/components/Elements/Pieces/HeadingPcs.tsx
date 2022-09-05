import React from 'react'
import {Title, TitleProps} from '@mantine/core'
import { SectionElProps} from 'src/components/Gob'


import './textitem.css'

export default function HeadingPcs({children,size,mode} : TitleProps & SectionElProps) {
    

    return (
        <Title size={size} classNames={[`${mode == 'phone' ?  'elinColflex': ''}`,'elBigText' ]}>{children}</Title>
    )
}
