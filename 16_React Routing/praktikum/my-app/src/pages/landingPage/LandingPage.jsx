import React from "react";
import ContactComponent from "./contact/ContactComponent";
import HeroComponent from "./hero/HeroComponent";
import MainComponent from "./main/MainComponent";

const LandingPage = () => {
  return (
    <>
      <HeroComponent />
      <MainComponent />
      <ContactComponent />
    </>
  );
};

export default LandingPage;
