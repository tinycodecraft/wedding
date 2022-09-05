import React from 'react';
import {StaticImage} from "gatsby-plugin-image";

export default function StnRightPic() {
  return (
    <StaticImage objectFit='cover' src="../images/cover.jpg" alt='right pic' style={{height: '100%',width: '100%' }}></StaticImage>
  )
}
