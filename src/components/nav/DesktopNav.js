import React, { Component } from "react";
import styled from "styled-components";
import logo from "../../images/acme-corp-logo.png";
import { MAXWIDTH, MOBILEBREAKPOINT } from "../../constants";

const Container = styled.div`
  padding: 0px 16px 8px 16px;
  width: 100%;
  border-bottom: solid 12px rgb(0, 7, 33);
  display: none;
  @media screen and (min-width: ${MOBILEBREAKPOINT}px) {
    display: inline-block;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-end;
  align-items: flex-end;
  width: 100%;
  max-width: ${MAXWIDTH};
`;

const Logo = styled.img`
  height: 78px;
  width: auto;
`;

const LogoBackground = styled.div`
  background: white;
  padding: 2px 9px;
  position: relative;
  top: 14px;
`;

const SiteTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-bottom;
  align-content: center;
  margin: 0 16px 0 24px;
  p {
    color: blue;
    font-size: 13px;
  }
  h2 {
    font-size: 32px;
    color: darkblue;
  }
`;

const Divider = styled.div`
  height: 36px;
  width: 2px;
  background: #dadada;
  margin: 0 6px 6px 12px;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;
  padding-bottom: 2px;
`;

// TODO: Replace with react router link tag
const Link = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 16px;
  margin: 0 24px;
`;

export default class DesktopNav extends Component {
  render() {
    return (
      <Container>
        <Content>
          <LogoBackground>
            <Logo src={logo} alt="Acme Corporation Logo" />
          </LogoBackground>
          <SiteTitle>
            <p>Research Professional</p>
            <h2>Platform</h2>
          </SiteTitle>
          <Divider />
          <LinksWrapper>
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact-us">Contact Us</Link>
          </LinksWrapper>
        </Content>
      </Container>
    );
  }
}
