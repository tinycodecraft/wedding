import React from 'react'
import styled from '@emotion/styled'
import lovebackground from '../../images/lovebackground.png'
import { SectionElProps } from '../Gob'
import { graphql, useStaticQuery } from 'gatsby'
import { useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Countdown from 'react-countdown'
import DigitFrame from './DigitFrame'

const CountDownSection = styled.section`
  display: flex;
  align-items: center;
  padding: 8rem 0;
  justify-content: center;
  background: url(${lovebackground}) rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-size: cover;
  flex-direction: column;
  background-position: center;
  color: #fff;
`

const TitleContainer = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`

const TitleEl = styled.h2`
  font-size: 4rem;
  margin-bottom: 0;
`

const SubtitleEl = styled.sub`
  font-weight: 600;
  font-size: 1rem;
`

const QUERY = graphql`
  query {
    event {
      events {
        title
      }
    }
  }
`

const CountWrap = styled.div<SectionElProps>`
  display: flex;
  ${(props) =>
    props.mode == 'phone' &&
    `
    flex-direction: column;`}
`

export default function CountDownFrame() {
  
  const {
    event: { events },
  } = useStaticQuery(QUERY)
  const desktop = useMediaQuery(`(min-width: ${768 / 16}em`)
  const mode = desktop ? 'desktop' : 'phone'

  return (
    <CountDownSection>
      <TitleContainer>
        <TitleEl>Save the Date</TitleEl>
        <SubtitleEl>Join use in Celebration</SubtitleEl>
      </TitleContainer>
      <Countdown
        date={new Date(events[0].title)}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <p>Done.</p>
          }
          return (
            <CountWrap mode={mode}>
              <DigitFrame title='Days' count={days} />
              <DigitFrame title='Hours' count={hours} />
              <DigitFrame title='Minutes' count={minutes} />
              <DigitFrame title='Seconds' count={seconds} />
            </CountWrap>
          )
        }}
      />
    </CountDownSection>
  )
}