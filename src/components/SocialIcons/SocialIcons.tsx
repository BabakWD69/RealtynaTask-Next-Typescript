import React from "react";
import Image from "next/image";
import Twitter from "../../../public/images/twitter.png";
import Tumblr from "../../../public/images/tumblr.png";
import Vimeo from "../../../public/images/vimeo.png";

interface ISocialIcons {
  isFooter?: boolean;
}

const SocialIcons: React.FC<ISocialIcons> = ({ isFooter }): JSX.Element => {
  return (
    <div
      className={`d-flex ${
        isFooter ? "flex-row" : "flex-column"
      } justify-content-between ${
        isFooter ? "mt-6 w-32" : " h-32 position-absolute right-24 top-96 mt-48"
      } `}
    >
      <Image src={Tumblr} className="w-7 cursor-pointer" alt="Tumblr" />
      <Image src={Twitter} className="w-7 cursor-pointer" alt="Twitter" />
      <Image src={Vimeo} className="w-7 cursor-pointer" alt="Vimeo" />
    </div>
  );
};

export default SocialIcons;
