import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #dadada;
  width: 100%;
`;

const MaxWidth = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: blue;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
`;

class ContentWidth extends Component {
  render() {
    return (
      <Container>
        <MaxWidth>{this.props.children}</MaxWidth>
      </Container>
    );
  }
}

export default ContentWidth;
