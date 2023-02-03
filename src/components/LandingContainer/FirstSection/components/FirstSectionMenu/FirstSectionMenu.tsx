import React from "react";
import Image from "next/image";
import menuImg from "../../../../../../public/images/logo.png";
import { menuItems } from "./utils/menuItems";
import "./styles/FirstSectionMenu.scss";

const FirstSectionMenu: React.FC = () => {
  return (
    <div className="d-flex ">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="p-0 m-2 d-flex justify-content-center align-items-center image-holder">
          <Image src={menuImg} width="16" height="44" alt="NO_PIC" />
        </div>
        <ul className="m-0 p-0 d-flex justify-content-start align-items-center first-section__menu-items-holder">
          {menuItems?.map((item) => (
            <li
              key={item?.id}
              className="m-0 p-0 me-5 first-section__menu-items"
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FirstSectionMenu;
