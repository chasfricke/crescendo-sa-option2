import React, { Component } from "react";
import styled from "styled-components";
import { MAXWIDTH } from "../constants";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedIn from "../images/linked-in.png";
import email from "../images/email.png";

const Container = styled.div`
  height: 84px;
  width: 100%;
  background-color: darkgray;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: ${MAXWIDTH};
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

class Footer extends Component {
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default Footer;
