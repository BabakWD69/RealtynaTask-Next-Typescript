import React from "react";
// import { NextPage } from 'next';
import ExplanationBox from "@/components/ExplanationBox/ExplanationBox";
import ShopSlider from "./components/ShopSliderSection/components/ShopSlider";
import "./styles/ShopSection.scss";

const ShopSection: React.FC = (): JSX.Element => {
  return (
    <section className="shop-section position-relative mx-auto w-100">
      <ExplanationBox
        caption="shop"
        className="position-relative mx-auto mt-12"
        isAbsolute={false}
        center
        title="Surfboards"
      />
        <ShopSlider />
    </section>
  );
};

export default ShopSection;
