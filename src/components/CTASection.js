import React, { Component } from "react";
import styled from "styled-components";
import { MAXWIDTH } from "../constants";
import OutlineButton from "./buttons/OutlineButton.js";
import background from "../images/blue-poly-background.png";
import { MOBILEBREAKPOINT } from "../constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 72px 36px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  max-width: ${MAXWIDTH};
  color: white;
  text-align: center;
  h4 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  @media screen and (max-width: ${MOBILEBREAKPOINT}px) {
    h4 {
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      max-width: 200px;
    }
  }
`;

const Copy = styled.p`
  font-size: 18px;
  line-height: 24px;
  @media screen and (max-width: ${MOBILEBREAKPOINT}px) {
    font-weight: 300;
    font-size: 16px;
  }
`;

const ButtonMargin = styled.div`
  margin-top: 36px;
`;

class CTASection extends Component {
  render() {
    return (
      <Container>
        <Content>
          <h4>Our Commitment to Professionals</h4>
          <Copy>
            We help our partners deliver industry leading results with a
            commitment to excellence, thought-provoking insights and experienced
            distribution. We are laser focused on our shared goal - helping
            clients achieve their&nbsp;objectives.
          </Copy>
          <ButtonMargin>
            <OutlineButton label="Contact Us" />
          </ButtonMargin>
        </Content>
      </Container>
    );
  }
}

export default CTASection;
