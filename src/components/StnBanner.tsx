import { Container, Image, Text } from '@mantine/core'

import React from 'react'
import { BannerProps } from './Gob'
import flower from '../images/rose.webp'
import { motion } from 'framer-motion'

export default function StnBanner({ titlevalue }: BannerProps) {
  return (
    <Container
      px='xs'
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: theme.other.colors.bannerdark,
      })}
    >
      <Image src={flower} alt='flower' width={'8rem'} pt={'lg'}></Image>
      <motion.div
        initial={{
          opacity: 0,
          scale: 2,
          rotateX: -180,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,

          rotateX: 0,
          
        }}
        transition={{
          duration: 0.75,
          delay: 0.1
        }}        
      >
        <Text
          component='p'
          sx={(theme) => ({
            fontWeight: 400,
            fontSize: '3.5rem',
            fontFamily: theme.other.fonts.heading,
            marginTop: '1rem',
            color: theme.other.colors.light,
          })}
        >
          {titlevalue}
        </Text>
      </motion.div>
    </Container>
  )
}
