import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/acme-corp-logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: flex-end;
  background: white;
  height: 40px;
  padding: 16px;
  width: 100%;
  border-bottom: solid 9px rgb(0, 7, 33);
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
`;

const LogoBackground = styled.div`
  background: white;
  padding: 2px 9px;
  position: relative;
  top: 21px;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-bottom;
  align-content: center;
  margin: 0 16px;
  p {
    color: blue;
    font-size: 11px;
  }
  h2 {
    color: darkblue;
  }
`;

export default class DesktopNav extends Component {
  render() {
    return (
      <Container>
        <LogoBackground>
          <Logo src={logo} alt="Acme Corporation Logo" />
        </LogoBackground>
        <HeaderTitle>
          <p>Research Professional</p>
          <h2>Platform</h2>
        </HeaderTitle>
      </Container>
    );
  }
}
