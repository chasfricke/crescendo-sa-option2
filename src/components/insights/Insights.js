import React, { Component } from "react";
import styled from "styled-components";
import throttle from "lodash.throttle";
import InsightsCarousel from "./InsightsCarousel.js";
import InsightsDesktop from "./InsightsDesktop.js";
import { MOBILEBREAKPOINT } from "../../constants";

const Container = styled.div`
  min-width: 100%;
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
    this.setState({ isMobile: window.innerWidth < MOBILEBREAKPOINT });
  };

  render() {
    const { isMobile } = this.state;
    return (
      <Container>
        {isMobile ? <InsightsCarousel /> : <InsightsDesktop />}
      </Container>
    );
  }
}

export default Events;
