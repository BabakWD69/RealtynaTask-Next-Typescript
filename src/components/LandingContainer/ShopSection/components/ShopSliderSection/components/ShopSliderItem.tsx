import React from "react";
import Image from "next/image";
import ShopSliderItemPic from "../../../../../../../public/images/shopSliderItem.png";
import "./styles/ShopSliderItem.scss";

interface ISliderItemProp {
  caption: string;
  title: string;
  money: string;
  typeNO: string;
}

const ShopSliderItem: React.FC<ISliderItemProp> = ({
  caption,
  title,
  money,
  typeNO,
}): JSX.Element => {
  return (
    <div className="position-relative">
      <Image src={ShopSliderItemPic} alt="ShopSliderItem" />
      <article className="shop-slider-item_article w-100">
        <span className="text-uppercase poppins-font textColor-poppins text-xs tracking-widest2">
          {caption}
        </span>

        <p className="playfair-font fs-2xl">{title}</p>

        <span className="position-relative poppins-font fs-xl-20 textColor-pink ml-16 top-8">
          ${money}
          <button style={{
            border: "none",
            outline: "none",
            background: "none",

          }} className="text-uppercase lSpartan-font text-tiny fw-bold d-block textColor-quote tracking-widest ml-16">
            Buy
          </button>
        </span>
      </article>
    </div>
  );
};

export { ShopSliderItem };
