import React, { Component } from "react";
import styled from "styled-components";
import { MAXWIDTH } from "../constants";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 32px 0;
  background: #dadada;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${MAXWIDTH};
  h3 {
    font-size: 24px;
  }
  p {
    font-size: 14px;
    margin: 6px 0 16px 0;
  }
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

class CardSection extends Component {
  render() {
    return (
      <Container>
        <Content>
          <h3>{this.props.title}</h3>
          <p>{this.props.subTitle}</p>
          <CardRow>{this.props.children}</CardRow>
        </Content>
      </Container>
    );
  }
}

export default CardSection;
