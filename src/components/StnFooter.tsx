import React from "react";
import styled from "@emotion/styled";


import { Footer, useMantineTheme} from "@mantine/core";
import {StaticImage} from "gatsby-plugin-image";

const StyledFooter = styled(Footer)`  
  background-color: #f7d0d5;
  margin-top: 0.5rem;  
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Content = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;    
`;

function StnFooter({children}) {
    const theme = useMantineTheme()

    return (
        <StyledFooter height={theme?.other?.footer.height
        } zIndex={2}>
            {children}
            <Content>
                <StaticImage src="../images/footerIce70.png" alt="footer image"/>
            </Content>
        </StyledFooter>
    );
}

export default StnFooter;
