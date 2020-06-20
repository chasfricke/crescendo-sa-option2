import React, { Component } from "react";
import styled from "styled-components";
import NavButton from "../buttons/NavButton.js";
import Hamburger from "../buttons/Hamburger.js";
import { MOBILEBREAKPOINT } from "../../constants";

const Container = styled.div`
  width: 100%;
  height: 64px;
  position: relative;
  display: none;
  @media screen and (max-width: ${MOBILEBREAKPOINT}) {
    display: inline-block;
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 64px;
`;

const Links = styled.div`
  width: 100%;
  padding: 36px;
  background-color: white;
  position: relative;
  z-index: 100;
  box-sizing: border-box;
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
        <LogoWrapper></LogoWrapper>
        {this.state.isOpen && (
          <Links>
            Site Links
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
