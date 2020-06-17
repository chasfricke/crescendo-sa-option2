import React, { Component } from "react";
import styled from "styled-components";
import { MAXWIDTH } from "../constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  width: 100%;
  max-width: ${MAXWIDTH};
`;

class Content extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default Content;
