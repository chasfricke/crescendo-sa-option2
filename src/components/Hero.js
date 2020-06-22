import React, { Component } from "react";
import styled from "styled-components";
import background from "../images/hero.png";
import { MAXWIDTH, MOBILEBREAKPOINT } from "../constants";

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
  background-position: right;
  @media screen and (max-width: ${MOBILEBREAKPOINT}) {
    background: skyblue;
    padding: 36px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: ${MAXWIDTH};
  position: relative;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 36px;
    color: white;
    margin-bottom: 16px;
  }
  p {
    font-size: 24px;
    color: white;
  }

  #acme-wealth {
    margin-bottom: 0;
  }

  #dotted-line {
    display: none;
    margin: 0 0 12px 0;
    color: white;
  }

  @media screen and (max-width: ${MOBILEBREAKPOINT}) {
    p {
      font-size: 16px;
      margin-bottom: 6px;
    }
    #acme-wealth {
      font-size: 16px;
    }
    #management-platforms {
      max-width: 100px;
      line-height: 38px;
      margin: 8px 0 0 0;
    }
    #dotted-line {
      display: inline-block;
    }
  }
`;

const MobileTitle = styled.p`
  display: none;
  @media screen and (max-width: ${MOBILEBREAKPOINT}) {
    display: inline-block;
    position: absolute;
    top: 0;
  }
`;

class Hero extends Component {
  render() {
    return (
      <Container>
        <Content>
          <TextBlock>
            <MobileTitle>Research Professional Platform</MobileTitle>
            <h2 id="acme-wealth">ACME Wealth</h2>
            <h2 id="management-platforms">Management Platforms</h2>
            <span id="dotted-line">
              . . . . . . . . . . . . . . . . . . . . . .
            </span>
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
