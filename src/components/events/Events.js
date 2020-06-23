import React, { Component } from "react";
import styled from "styled-components";
import EventsCarousel from "./EventsCarousel.js";
import EventsDesktop from "./EventsDesktop.js";
import { MOBILEBREAKPOINT, MAXWIDTH } from "../../constants";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Mobile = styled.div`
  display: none;
  @media screen and (max-width: ${MOBILEBREAKPOINT}) {
    display: inline-block;
    width: 100%;
    max-width: ${MAXWIDTH};
  }
`;

const Desktop = styled.div`
  display: none;
  @media screen and (min-width: ${MOBILEBREAKPOINT}) {
    display: inline-block;
    width: 100%;
    max-width: ${MAXWIDTH};
  }
`;

class Events extends Component {
  render() {
    return (
      <Container>
        <Mobile>
          <EventsCarousel />
        </Mobile>
        <Desktop>
          <EventsDesktop />
        </Desktop>
      </Container>
    );
  }
}

export default Events;
