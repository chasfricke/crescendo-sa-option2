import React, { Component } from "react";
import styled from "styled-components";
import NavButton from "../buttons/NavButton";
import { MAXWIDTH, MOBILEBREAKPOINT } from "../../constants";

const Content = styled.div`
  display: none;
  @media screen and (max-width: ${MOBILEBREAKPOINT}) {
    display: inline-block;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: ${MAXWIDTH};
    padding: 0 12px 12px 12px;
  }
  p {
    color: #606060;
    text-align: center;
    font-size: 14px;
    margin-top: 12px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 10px 0;
  background: gray;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Spacer = styled.div`
  width: 16px;
`;

class MobileFooter extends Component {
  render() {
    return (
      <Content>
        <ButtonRow>
          <NavButton label="Privacy Policy" />
          <Spacer />
          <NavButton label="Terms of Use" />
        </ButtonRow>
        <p>Site Links</p>
        <Line />
        <NavButton label="Home" />
        <NavButton label="About Us" />

        <NavButton label="Insights" />
        <NavButton label="Events" />
        <NavButton label="Due Dilligence" />
        <NavButton label="Contact Us" />
      </Content>
    );
  }
}

export default MobileFooter;
