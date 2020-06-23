import React, { Component } from "react";
import Carousel from "nuka-carousel";
import styled from "styled-components";
import CardSection from "../CardSection.js";
import InsightCard from "../cards/InsightCard";
import Insight1 from "../../images/insights/insight-1.png";
import Insight2 from "../../images/insights/insight-2.png";
import Insight3 from "../../images/insights/insight-3.png";

const CarouselRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

class InsightsCarousel extends Component {
  render() {
    return (
      <CardSection
        title="ACME Insights"
        subTitle="How are factors being used around the world?"
        bgColor="blue"
        color="white"
      >
        <CarouselRow>
          <Carousel
            cellAlign="center"
            slidesStoShow={1}
            transitionMode="scroll3d"
            cellSpacing={0}
            height="350px"
            width="360px"
            renderCenterLeftControls={({ previousSlide }) => null}
            renderCenterRightControls={({ nextSlide }) => null}
            defaultControlsConfig={{
              pagingDotsStyle: {
                position: "relative",
                right: "16px",
              },
            }}
          >
            <InsightCard
              line1="Global Factor"
              line2="Investing Study"
              borderColor="#1450d2"
              bgImage={Insight1}
            />
            <InsightCard
              line1="2019"
              line2="Outlook"
              borderColor="#01a49c"
              bgImage={Insight2}
            />
            <InsightCard
              line1="Capital Market"
              line2="Assumptions"
              borderColor="#546e9a"
              bgImage={Insight3}
            />
          </Carousel>
        </CarouselRow>
      </CardSection>
    );
  }
}

export default InsightsCarousel;
