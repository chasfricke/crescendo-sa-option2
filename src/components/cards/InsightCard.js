import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 288px;
  background: white;
  padding: 24px 16px 16px 16px;
  box-sizing: border-box;
  -webkit-box-shadow: 1px 0px 7px 2px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 1px 0px 7px 2px rgba(0, 0, 0, 0.27);
  box-shadow: 1px 0px 7px 2px rgba(0, 0, 0, 0.27);
`;

const Image = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 190px;
  width: 100%;
  clip-path: polygon(23% 0, 100% 0, 100% 75%, 77% 100%, 0 100%, 0 24%);
`;

class InsightCard extends Component {
  render() {
    return (
      <Card
        style={{
          borderBottom: `solid 10px ${this.props.borderColor}`,
        }}
      >
        <Image style={{ backgroundImage: `url(${this.props.bgImage})` }} />
        <span>
          <h3 style={{ color: `${this.props.borderColor}` }}>
            {this.props.line1}
          </h3>
          <h3 style={{ color: `${this.props.borderColor}` }}>
            {this.props.line2}
          </h3>
        </span>
      </Card>
    );
  }
}

export default InsightCard;
