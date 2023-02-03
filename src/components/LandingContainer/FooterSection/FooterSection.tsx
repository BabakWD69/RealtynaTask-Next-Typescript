import React from "react";
import Image from "next/image";
// import { NextPage } from "next";
import Logo from "../../../../public/images/logo 2.png";
import SocialIcons from "@/components/SocialIcons/SocialIcons";

const FooterSection: React.FC = (): JSX.Element => {
  return (
    <footer className="d-flex flex-column align-items-center mx-auto">
      <Image src={Logo} alt="logo" className="h-auto w-10 d-block" />

      <ul className="d-flex mt-8">
        <li className="mb-2 list-none text-uppercase mr-8 lSpartan-font text-tiny fw-bold cursor-pointer tracking-widest textColor-secondary">
          stories
        </li>
        <li className="mb-2 list-none text-uppercase mr-8 ml-8 lSpartan-font text-tiny fw-bold cursor-pointer tracking-widest textColor-secondary">
          events
        </li>
        <li className="mb-2 list-none text-uppercase mr-8 ml-8 lSpartan-font text-tiny fw-bold cursor-pointer tracking-widest textColor-secondary">
          places
        </li>
        <li className="mb-2 list-none text-uppercase ml-8 lSpartan-font text-tiny fw-bold cursor-pointer tracking-widest textColor-secondary">
          boards
        </li>
      </ul>

      <SocialIcons isFooter />
    </footer>
  );
};

export default FooterSection;
