import React, { Component } from "react";
import styled from "styled-components";
import NavButton from "../buttons/NavButton.js";
import Hamburger from "../buttons/Hamburger.js";
import { MOBILEBREAKPOINT } from "../../constants";
import logo from "../../images/mobile-logo.png";

const Container = styled.div`
  width: 100%;
  height: 64px;
  position: relative;
  display: none;
  background: #f0f0f0;
  @media screen and (max-width: ${MOBILEBREAKPOINT}px) {
    display: inline-block;
  }
`;

const LogoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 48px;
  width: auto;
`;

const Links = styled.div`
  text-align: center;
  width: 100%;
  padding: 36px;
  background-color: white;
  position: relative;
  z-index: 100;
  box-sizing: border-box;
  p {
    color: gray;
  }
  hr {
    margin: 10px 0;
    background: #e8e8e8;
  }
`;

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    return (
      <Container>
        <Hamburger
          onClick={(e) => this.setState({ isOpen: !this.state.isOpen })}
          isOpen={this.state.isOpen}
        />
        <LogoWrapper>
          <Logo src={logo} alt="Acme Corporation Logo" />
        </LogoWrapper>
        {this.state.isOpen && (
          <Links>
            <p>Site Links</p>
            <hr />
            <NavButton label="Home" />
            <NavButton label="About Us" />
            <NavButton label="Insights" />
            <NavButton label="Events" />
            <NavButton label="Contact Us" />
          </Links>
        )}
      </Container>
    );
  }
}

export default MobileNav;
