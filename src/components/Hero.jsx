import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-head">
        Harmony <br />
        Split
      </h1>
      <TypeAnimation sequence={sequence} className="hero-section" />
    </div>
  );
};

export default Hero;

const sequence = [
  "Reimagine content creation and music production.",
  "Isolate vocals, extract instrumental sections",
  "for sampling, or enhance audio clarity",
  " - Harmony Split aims to streamline your workflow.",
];
