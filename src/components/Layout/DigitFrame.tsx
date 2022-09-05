import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { SectionElProps } from '../Gob'
import { useMediaQuery } from '@mantine/hooks'

const Container = styled.div`
  margin: 0 2rem;
  text-align: center;
`

const Count = styled.p<SectionElProps>`
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) => props.color};
  ${(props) => props.mode == 'phone' && `margin: 0.5rem 0;`}
`

function DigitFrame({ title, count }) {
  const desktop = useMediaQuery(`(min-width: ${768 / 16}em`)
  const mode = desktop ? 'desktop' : 'phone'
  return (
    <Container>
      <Count mode={mode}>{String(count).padStart(2, '0')}</Count>
      <p>{title.toUpperCase()}</p>
    </Container>
  )
}

DigitFrame.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}

export default DigitFrame
