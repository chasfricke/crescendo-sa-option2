import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 16px;
  background: #dadada;
`;

class CardSection extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default CardSection;
