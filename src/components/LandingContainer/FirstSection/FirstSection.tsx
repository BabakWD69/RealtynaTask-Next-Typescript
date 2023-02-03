import React from "react";
// import { NextPage } from "next";
import FirstSectionCarousel from "./components/FirstSectionCarousel/FirstSectionCarousel";
import FirstSectionMenu from "./components/FirstSectionMenu/FirstSectionMenu";
import FirstSectionSocialMediaBox from "./components/FirstSectionSocialMediaBox/FirstSectionSocialMediaBox";
import "./styles/FirstSection.scss";

const FirstSection: React.FC = () => {
  return (
    <section className="d-flex justify-content-between align-items-start w-100 first-section__section">
      <div className="d-flex flex-column first-section__left-container position-relative">
        {/* Menu */}
        <FirstSectionMenu />
        {/* Carousel */}
        <FirstSectionCarousel />
      </div>
      <div className="d-flex flex-column first-section__right-container">
        <FirstSectionSocialMediaBox />
      </div>
    </section>
  );
};

export default FirstSection;
