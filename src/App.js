import React from "react";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Footer from "./components/Footer.js";
import Insights from "./components/Insights.js";
import CTASection from "./components/CTASection";
import Events from "./components/Events";

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
