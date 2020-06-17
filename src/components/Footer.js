import React, { Component } from "react";
import styled from "styled-components";
import { MAXWIDTH } from "../constants";

const Container = styled.div`
  height: 64px;
  width: 100%;
  background-color: gray;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: ${MAXWIDTH};
  p {
    color: white;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Container>
        <Content>
          <div>
            <p>Call us at 111-222-3333</p>
            <p>for more information</p>
          </div>
          <div>
            <p>Social Share</p>
          </div>
        </Content>
      </Container>
    );
  }
}

export default Footer;
