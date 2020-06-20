import React, { Component } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Container = styled.div`
  position: absolute;
  top: 12px;
  right: 32px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
`;

class Hamburger extends Component {
  render() {
    return (
      <Container onClick={this.props.onClick}>
        {this.props.isOpen ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </Container>
    );
  }
}

export default Hamburger;
