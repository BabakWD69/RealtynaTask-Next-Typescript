import React from "react";
import { FaTumblr, FaTwitter, FaVimeoV } from "react-icons/fa";
import "./styles/FirstSectionSocialMediaBox.scss";

const FirstSectionSocialMediaBox: React.FC = () => {
  return (
    <div
      style={{ width: "100px", height: "calc(756px - 85px)" }}
      className="d-flex flex-column justify-content-end align-items-center position-relative"
    >
      <div
        className="d-flex"
        style={{
          transform: "rotateZ(-90deg)",
          position: "absolute",
          top: "7rem",
        }}
      >
        <span className="d-flex text-nowrap magazine-text">
          First Surfing Magazine
        </span>
      </div>
      <div className="d-flex flex-column gap-3">
        <FaTumblr color="#ebebeb" />
        <FaTwitter color="#ebebeb" />
        <FaVimeoV color="#ebebeb" />
      </div>
    </div>
  );
};

export default FirstSectionSocialMediaBox;
