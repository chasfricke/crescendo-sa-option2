import React, { Component } from "react";
import styled from "styled-components";

import DesktopFooter from "./DesktopFooter.js";
import MobileFooter from "./MobileFooter.js";

const Container = styled.div`
  min-height: 84px;
  width: 100%;
  background-color: darkgray;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
`;

class Footer extends Component {
  render() {
    return (
      <Container>
        <DesktopFooter />
        <MobileFooter />
      </Container>
    );
  }
}

export default Footer;
