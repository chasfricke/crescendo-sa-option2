import React, { Component } from "react";
import CardSection from "./CardSection.js";
import EventCard from "./cards/EventCard";

class Events extends Component {
  render() {
    return (
      <CardSection
        title="Upcoming Events"
        subTitle="This needs a great tagline, but I'll fill it in later"
      >
        <EventCard
          title="Insight Exchange Network"
          subTitle="Join us for this conference showcasing innovation."
        />
        <EventCard
          title="Citywide Buyer's Retreat"
          subTitle="Find out how banks are responding to the changing future of interest..."
        />
        <EventCard
          title="Research Exchange"
          subTitle="Find the best online resources to help with your investments..."
        />
      </CardSection>
    );
  }
}

export default Events;
