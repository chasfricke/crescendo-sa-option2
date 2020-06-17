import React, { Component } from "react";
import styled from "styled-components";
import DesktopNav from "./DesktopNav.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background: white;
  width: 100vw;
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
        <DesktopNav />
      </Container>
    );
  }
}
