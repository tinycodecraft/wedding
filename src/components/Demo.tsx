import React from 'react'
import StnFooter from './StnFooter'
import Background from './Elements/Background'
import MainFrame from './Layout/MainFrame'
import PhotoFrame from './Layout/PhotoFrame'
import StnLeftText from './StnLeftText'

import StnBanner from './StnBanner'

import StnProfile from './StnProfile'
import CountDownFrame from './Layout/CountDownFrame'
import Cover from './Elements/Cover'


import { UserProps } from './Gob'

function Demo({email}: UserProps) {

  return (
    <>
      <MainFrame>
        <PhotoFrame child1={<StnLeftText />} child2={<Cover />} />
        <StnBanner titlevalue='Bride & Groom'></StnBanner>
        <CountDownFrame email={email} />
        <StnProfile />
      </MainFrame>
      <StnFooter>
        <Background />
      </StnFooter>
    </>
  )
}
export default Demo
