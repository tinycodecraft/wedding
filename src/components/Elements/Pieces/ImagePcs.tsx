import styled from '@emotion/styled';
import { ImageProps } from '@mantine/core';
import React from 'react'

const ImageEl = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  margin: 0 auto;
  display: block;
  box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.1);
`;

export default function ImagePcs({src,alt}:ImageProps) {
  return (
    <ImageEl src={src} alt={alt}></ImageEl>
  )
}
