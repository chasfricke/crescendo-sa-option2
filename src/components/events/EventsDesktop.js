import React, { Component } from "react";
import CardSection from "../CardSection.js";
import EventCard from "../cards/EventCard";

class EventsDesktop extends Component {
  render() {
    return (
      <CardSection
        title="Upcoming Events"
        subTitle="This needs a great tagline, but I'll fill it in later"
      >
        <EventCard
          title="Insight Exchange Network"
          subTitle="Join us for this conference showcasing innovation."
          location="Chicago, IL"
          month="Jan"
          day="28"
        />
        <EventCard
          title="Citywide Buyer's Retreat"
          subTitle="Find out how banks are responding to the changing future of interest..."
          location="The Wagner, New York"
          month="Feb"
          day="12"
        />
        <EventCard
          title="Research Exchange"
          subTitle="Find the best online resources to help with your investments..."
          location="London, England"
          month="May"
          day="6"
        />
      </CardSection>
    );
  }
}

export default EventsDesktop;
