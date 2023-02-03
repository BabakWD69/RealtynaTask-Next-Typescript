"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import PrevIcon from "../../../../../../../public/images/prevIcon.png";
import NextIcon from "../../../../../../../public/images/nextIcon.png";
import { ShopSliderItem } from "./ShopSliderItem";
import styles from "./styles/ShopSlider.module.scss";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Image
      className={`${className}`}
      style={{ ...style, width: "20px", height: "auto", right: "-55px" }}
      src={NextIcon}
      onClick={onClick}
      alt="NextIcon"
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Image
      className={className}
      style={{ ...style, width: "20px", height: "auto", left: "-55px" }}
      src={PrevIcon}
      onClick={onClick}
      alt="PrevIcon"
    />
  );
}

const ShopSlider: React.FC = (): JSX.Element => {
  const [slider, setSlider] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="mx-auto w-100">
      <Slider ref={(c) => setSlider(c)} {...settings}>
        <div key={1}>
          <ShopSliderItem
            caption="Funboards"
            title="Chilli Rare Bird"
            money="890"
            typeNO="1"
          />
        </div>
        <div key={2}>
          <ShopSliderItem
            caption="Surfboards"
            title="Emery NEM XF"
            money="950"
            typeNO="2"
          />
        </div>
        <div key={3}>
          <ShopSliderItem
            caption="Funboards"
            title="Agency GROM"
            money="670"
            typeNO="3"
          />
        </div>
        <div key={4}>
          <ShopSliderItem
            caption="Funboards"
            title="Chilli Rare Bird"
            money="890"
            typeNO="1"
          />
        </div>
        <div key={5}>
          <ShopSliderItem
            caption="Surfboards"
            title="Emery NEM XF"
            money="950"
            typeNO="2"
          />
        </div>
        <div key={6}>
          <ShopSliderItem
            caption="Funboards"
            title="Agency GROM"
            money="670"
            typeNO="3"
          />
        </div>
      </Slider>
      <button className={`text-uppercase lSpartan-font text-tiny textColor-quote tracking-widest py-1 mx-auto d-block ${styles.shopSliderBtn}`}>
        Show All
      </button>
    </div>
  );
};

export default ShopSlider;
