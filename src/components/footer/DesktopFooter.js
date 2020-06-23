import React, { Component } from "react";
import styled from "styled-components";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import linkedIn from "../../images/linked-in.png";
import email from "../../images/email.png";
import { MAXWIDTH, MOBILEBREAKPOINT } from "../../constants";

const Content = styled.div`
  display: none;
  @media screen and (min-width: ${MOBILEBREAKPOINT}px) {
    display: inline-block;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: ${MAXWIDTH};
  }
  p {
    color: white;
  }
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const SocialIcon = styled.img`
  height: 24px;
  width: auto;
  margin: 0 6px;
`;

const SocialShareTitle = styled.p`
  margin: 4px 6px 0 0;
`;

class DesktopFooter extends Component {
  render() {
    return (
      <Content>
        <div>
          <p>Call us at 111-222-3333</p>
          <p>for more information</p>
        </div>
        <IconRow>
          <SocialShareTitle>Social Share</SocialShareTitle>
          <SocialIcon src={twitter} alt="Twitter" />
          <SocialIcon src={facebook} alt="Facebook" />
          <SocialIcon src={linkedIn} alt="LinkedIn" />
          <SocialIcon src={email} alt="Email" />
        </IconRow>
      </Content>
    );
  }
}

export default DesktopFooter;
