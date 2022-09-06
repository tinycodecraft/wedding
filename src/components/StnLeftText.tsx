import { Text, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { graphql, useStaticQuery } from 'gatsby'
import React, { Fragment } from 'react'
import HeadingPcs from './Elements/Pieces/HeadingPcs'
import TextPcs from './Elements/Pieces/TextPcs'
import NewHeart from './NewHeart'
import { motion } from 'framer-motion'

// Query Part
const qyEvent = graphql`
  query {
    event {
      profiles {
        name
      }
      events {
        title
        occasion {
          place {
            name
          }
        }
      }
    }
  }
`
// Fragment

// Function Part
export default function StnLeftText() {
  const desktop = useMediaQuery(`(min-width: ${768 / 16}em`)
  const { event } = useStaticQuery(qyEvent)
  const theme = useMantineTheme()
  const mode = desktop ? 'desktop' : 'phone'
  return (
    <Fragment>
      <HeadingPcs mode={mode} size='h1'>
        <NewHeart></NewHeart>
        <TextPcs cp='span' toBig={true} mode={mode}>
          {event.profiles[0].name}
        </TextPcs>
        <TextPcs cp='span' toBig={true}>
          &
        </TextPcs>
        <TextPcs cp='span' toBig={true} mode={mode}>
          {event.profiles[1].name}
        </TextPcs>
      </HeadingPcs>
      <TextPcs cp='p'>Join us on</TextPcs>

      <motion.div initial={{ opacity: 0, scale: 2,rotateX: -180 }} 
      animate={{
        opacity: 1,
        scale: 1,
        rotateX: 0
      
      }}
      transition={{
        duration: 1,
        delay: 0.2
        
      }}
      >
        <Text
          color={theme.colors.violet[2]}
          weight={desktop ? 600 : 400}
          size={desktop ? 'xl' : 'lg'}
        >
          {event.events[0].title}
        </Text>
      </motion.div>

      <TextPcs cp='span' toBig={true}>
        at
      </TextPcs>
      <motion.div initial={{
        opacity: 0, scale:2,
        rotateX: -180
        
        
      }}
      animate={{
        opacity: 1, scale:1,
        
        rotateX: 0
      
      }}
      transition={{
        duration: 1,
        delay:0.7,
        
      }}
      >
      <Text
        color={theme.colors.violet[2]}
        weight={desktop ? 600 : 400}
        size={desktop ? 'xl' : 'lg'}
      >
        {event.events[0].occasion.place.name}
      </Text>
      </motion.div>

    </Fragment>
  )
}
