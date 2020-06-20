import React, { Component } from "react";
import styled from "styled-components";
import DesktopNav from "./nav/DesktopNav.js";
import MobileNav from "./nav/MobileNav.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
        <DesktopNav />
        <MobileNav />
      </Container>
    );
  }
}
