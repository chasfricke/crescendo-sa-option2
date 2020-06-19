import React, { Component } from "react";
import styled from "styled-components";
import background from "../images/hero-background.png";
import { MAXWIDTH } from "../constants";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  background-image: url(${background});
  height: 410px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: ${MAXWIDTH};
  h2 {
    font-size: 36px;
    color: white;
    margin-bottom: 16px;
  }
  p {
    font-size: 24px;
    color: white;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

class Hero extends Component {
  render() {
    return (
      <Container>
        <Content>
          <TextBlock>
            <h2>
              ACME Wealth
              <br />
              Management Platforms
            </h2>
            <p>Investment excellence.</p>
            <p>Diversity of thought.</p>
            <p>Organizational strength.</p>
          </TextBlock>
        </Content>
      </Container>
    );
  }
}

export default Hero;
