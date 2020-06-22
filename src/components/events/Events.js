import React, { Component } from "react";
import styled from "styled-components";
import EventsCarousel from "./EventsCarousel.js";
import EventsDesktop from "./EventsDesktop.js";
import { MOBILEBREAKPOINT } from "../../constants";

const Mobile = styled.div`
  display: none;
  @media screen and (max-width: ${MOBILEBREAKPOINT}) {
    display: inline-block;
  }
`;

const Desktop = styled.div`
  display: none;
  @media screen and (min-width: ${MOBILEBREAKPOINT}) {
    display: inline-block;
  }
`;

class Events extends Component {
  render() {
    return (
      <>
        <Mobile>
          <EventsCarousel />
        </Mobile>
        <Desktop>
          <EventsDesktop />
        </Desktop>
      </>
    );
  }
}

export default Events;
