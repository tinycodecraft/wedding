import React from "react";
import StnFooter from "./StnFooter";
import {  Slider } from "@mantine/core";
import styled from "@emotion/styled";
import Background from "./Elements/Background";
import MainFrame from "./Layout/MainFrame";
import PhotoFrame from "./Layout/PhotoFrame";
import StnLeftText from "./StnLeftText";
import StnRightPic from "./StnRightPic";
import StnBanner from "./StnBanner";

import { graphql, useStaticQuery } from "gatsby";
import StnProfile from "./StnProfile";
import CountDownFrame from "./Layout/CountDownFrame";


const StyledSlider = styled(Slider)`
  & .mantine-Slider-bar {
    background-color: pink;
  }

  & .mantine-Slider-thumb {
    border-color: pink;
    background-color: white;
    width: 24px;
    height: 24px;
  }
`;


function Demo() {

  return (
    <>
      <MainFrame>
        <PhotoFrame
          child1={<StnLeftText></StnLeftText>}
          child2={<StnRightPic></StnRightPic>}
        />
        <StnBanner titlevalue="Bride & Groom"></StnBanner>
        <CountDownFrame></CountDownFrame>
        <StnProfile></StnProfile>

      </MainFrame>
      <StnFooter>
        <Background />
      </StnFooter>
    </>
  );
}
export default Demo;
