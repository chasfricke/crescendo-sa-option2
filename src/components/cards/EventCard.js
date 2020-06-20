import React, { Component } from "react";
import styled from "styled-components";
import OutlineButton from "../OutlineButton.js";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  height: 240px;
  width: 288px;
  background: blue;
  padding: 16px 16px 0 16px;
  box-sizing: border-box;
  color: white;
  position: relative;
  margin: 22px 0;
`;

const Title = styled.h4`
  font-size: 22px;
  margin-bottom: -2px;
  margin-top: -22px;
`;

const SubTitle = styled.p`
  margin-bottom: 6px;
  font-size: 10px;
`;

const Location = styled.div`
  position: absolute;
  bottom: -1px;
  right: -1px;
  box-sizing: border-box;
  background: white;
  padding: 12px;
  width: 272px;
  clip-path: polygon(12% 0, 100% 0, 100% 100%, 0 100%);
  text-align: right;
  font-weight: 600;
  color: black;
`;

const DateSquare = styled.div`
  position: absolute;
  top: -11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 62px;
  height: 55px;
  background: #001254;
  text-align: center;
`;

const Month = styled.h5`
  position: relative;
  bottom: 4px;
  margin-bottom: 2px;
`;

const Day = styled.h5`
  position: relative;
  bottom: 5px;
  font-size: 26px;
`;

const Triangle = styled.div`
  background: #1450d2;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  height: 17px;
  width: 12px;
  position: relative;
  right: 11px;
  opacity: 0.9;
  z-index: -100;
`;

class EventCard extends Component {
  render() {
    return (
      <Card>
        <DateSquare>
          <Triangle />
          <div>
            <Month>{this.props.month}</Month>
            <Day>{this.props.day}</Day>
          </div>
        </DateSquare>
        <Title>{this.props.title}</Title>
        <SubTitle>{this.props.subTitle}</SubTitle>
        <OutlineButton label="Get More Insight" />
        <Location>{this.props.location}</Location>
      </Card>
    );
  }
}

export default EventCard;
