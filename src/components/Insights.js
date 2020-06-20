import React, { Component } from "react";
import CardSection from "./CardSection.js";
import InsightCard from "./cards/InsightCard";
import Insight1 from "../images/insights/insight-1.png";
import Insight2 from "../images/insights/insight-2.png";
import Insight3 from "../images/insights/insight-3.png";

class Insights extends Component {
  render() {
    return (
      <CardSection
        title="ACME Insights"
        subTitle="How are factors being used around the world?"
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
      </CardSection>
    );
  }
}

export default Insights;
