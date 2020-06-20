import React, { Component } from "react";
import styled from "styled-components";

const Border = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 100%;
  background: lightgray;
  margin-bottom: 8px;
`;

const Label = styled.span`
  font-size: 14px;
  color: gray;
`;

class NavButton extends Component {
  render() {
    return (
      <Border role="button" onClick={this.props.onClick}>
        <Label>{this.props.label}</Label>
      </Border>
    );
  }
}

export default NavButton;
