"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import carouselImg from "../../../../../../public/images/img.png";
import Left from "../../../../../../public/images/left.png";
import Right from "../../../../../../public/images/right.png";
import ExplanationBox from "@/components/ExplanationBox/ExplanationBox";
import "./styles/FirstSectionCarousel.scss";

const FirstSectionCarousel: React.FC = (): JSX.Element => {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [page, setPage] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  const next = () => {
    slider && slider.slickNext();
    setPage((old) => (old < 5 ? old + 1 : 1));
  };
  const previous = () => {
    slider && slider.slickPrev();
    setPage((old) => (old > 1 ? old - 1 : 5));
  };

  return (
    <div className="position-relative">
      <ExplanationBox
        caption="Your"
        title="Beautiful Escape"
        description="One of the greatest things about the sport of surfing is that you need only three things: your body, 
        a surfboard, and a wave."
        className="mt-44 pt-2 left-0"
      />
      {/* Slider */}
      <div className="position-relative ms-7">
        <div className="w-100 ms-3">
          <Slider ref={(c) => setSlider(c)} {...settings}>
            <div key={1}>
              <Image
                src={carouselImg}
                className="w-100"
                alt="HeroSliderImage"
              />
            </div>
            <div key={2}>
              <Image
                src={carouselImg}
                className="w-100"
                alt="HeroSliderImage"
              />
            </div>
            <div key={3}>
              <Image
                src={carouselImg}
                className="w-100"
                alt="HeroSliderImage"
              />
            </div>
            <div key={4}>
              <Image
                src={carouselImg}
                className="w-100"
                alt="HeroSliderImage"
              />
            </div>
            <div key={5}>
              <Image
                src={carouselImg}
                className="w-100"
                alt="HeroSliderImage"
              />
            </div>
          </Slider>
        </div>
      </div>
      {/* Slider Buttons */}
      <div className="text-center position-absolute bottom-32 left-0">
        <Image
          className="w-7 inline cursor-pointer mr-1"
          onClick={previous}
          src={Left}
          alt="Left"
        />

        <span className="text-info lSpartan-font fs-8 mr-1">{page}</span>
        <span className="text-third lSpartan-font fs-8">/</span>
        <span className="lSpartan-font fs-8">5</span>

        <Image
          className="w-7 inline cursor-pointer ml-1"
          onClick={next}
          src={Right}
          alt="Right"
        />
      </div>
    </div>
  );
};

export default FirstSectionCarousel;
