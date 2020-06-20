import React, { Component } from "react";
import styled from "styled-components";

const Border = styled.div`
  border: solid 1px white;
  margin: 1px;
  min-width: 100px;
  padding: 10px 14px;
  cursor: pointer;
  :hover {
    border: solid 2px white;
    margin: 0px;
  }
`;

const Label = styled.p`
  font-size: 14px;
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
