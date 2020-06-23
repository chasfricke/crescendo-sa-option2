import React, { Component } from "react";
import styled from "styled-components";
import InsightsCarousel from "./InsightsCarousel.js";
import InsightsDesktop from "./InsightsDesktop.js";
import { MOBILEBREAKPOINT } from "../../constants";

const Container = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Mobile = styled.div`
  display: none;
  @media screen and (max-width: ${MOBILEBREAKPOINT}px) {
    display: inline-block;
    min-width: 100%;
  }
`;

const Desktop = styled.div`
  display: none;
  @media screen and (min-width: ${MOBILEBREAKPOINT + 1}px) {
    display: inline-block;
    width: 100%;
  }
`;

class Events extends Component {
  render() {
    return (
      <Container>
        <Mobile>
          <InsightsCarousel />
        </Mobile>
        <Desktop>
          <InsightsDesktop />
        </Desktop>
      </Container>
    );
  }
}

export default Events;
