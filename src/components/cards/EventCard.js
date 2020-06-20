import React, { Component } from "react";
import styled from "styled-components";
import OutlineButton from "../OutlineButton.js";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  height: 200px;
  width: 288px;
  background: blue;
  padding: 16px;
  box-sizing: border-box;
  color: white;
`;

const Title = styled.h4`
  font-size: 22px;
  margin-bottom: -2px;
`;

const SubTitle = styled.p`
  margin-bottom: 6px;
  font-size: 10px;
`;

class EventCard extends Component {
  render() {
    return (
      <Card>
        <Title>{this.props.title}</Title>
        <SubTitle>{this.props.subTitle}</SubTitle>
        <OutlineButton label="Get More Insight" />
      </Card>
    );
  }
}

export default EventCard;
