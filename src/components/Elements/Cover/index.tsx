import React from 'react'
import cover from '../cover11.png'
import styled from '@emotion/styled'

const ImageEl = styled.img`
    width: 100%;
    object-fit: cover;
    height: 100%; 
    
`;

export default function Cover() {
  return (
    <ImageEl src={cover} alt="cover image" />
  )
}
