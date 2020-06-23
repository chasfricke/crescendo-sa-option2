import React, { Component } from "react";
import styled from "styled-components";
import { throttle } from "lodash";
import EventsCarousel from "./EventsCarousel.js";
import EventsDesktop from "./EventsDesktop.js";
import { MOBILEBREAKPOINT } from "../../constants";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: false };
  }

  componentDidMount() {
    this.handleWindowResize();
    window.addEventListener("resize", throttle(this.handleWindowResize, 200));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      throttle(this.handleWindowResize, 200)
    );
  }

  handleWindowResize = () => {
    console.log("resized");
    this.setState({ isMobile: window.innerWidth < MOBILEBREAKPOINT });
  };

  render() {
    return (
      <Container>
        {this.state.isMobile ? <EventsCarousel /> : <EventsDesktop />}
      </Container>
    );
  }
}

export default Events;
