import React, { Component } from "react";
import styled from "styled-components";

const Border = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  border: solid 1px white;
  margin: 1px;
  width: fit-content;
  min-width: 100px;
  padding: 9px 14px;
  cursor: pointer;
  :hover {
    border: solid 2px white;
    margin: 0px;
  }
`;

const Label = styled.span`
  font-size: 14px;
  color: white;
`;

class OutlineButton extends Component {
  render() {
    return (
      <>
        <Border role="button" onClick={this.props.onClick}>
          <Label>{this.props.label}</Label>
        </Border>
      </>
    );
  }
}

export default OutlineButton;
