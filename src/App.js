import React from "react";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Footer from "./components/footer/Footer.js";
import Insights from "./components/insights/Insights.js";
import CTASection from "./components/CTASection";
import Events from "./components/events/Events";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Insights />
      <CTASection />
      <Events />
      <Footer />
    </>
  );
}

export default App;
