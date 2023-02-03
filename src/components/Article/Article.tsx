import React from "react";
import Swiming from "../../../public/images/swiming.png";
import Swiming2 from "../../../public/images/swiming2.png";
import Image from "next/image";
import ExplanationBox from "../ExplanationBox/ExplanationBox";
import styles from "./styles/Article.module.scss";

interface IArticleProp {
  className: string;
  isFirst: boolean;
  title: string;
  description: string;
}

const Article: React.FC<IArticleProp> = ({
  className,
  isFirst,
  title,
  description,
}): JSX.Element => {
  return (
    <section
      className={`d-flex position-relative w-100 mx-auto ${className} ${styles.articleSectionHolder}`}
    >
      <ExplanationBox
        title={title}
        className={`mt-16 ${isFirst ? "left-10" : "right-48"} `}
        underscope
        descClass="mt-8 mb-12"
        isReadMore
        number={isFirst ? "01" : "02"}
        description={description}
      />

      <figure className={`position-relative ${!isFirst && "ml-24"}`}>
        <Image
          src={isFirst ? Swiming : Swiming2}
          className="position-relative z-40"
          alt="swiming"
        />
        <figcaption
          className={`text-uppercase textColor-white2 lSpartan-font fw-bold text-xs
               tracking-widest position-absolute top-12 mt-2 top-8_5 ${
                 styles.figCaptionStyle
               } ${isFirst ? "-right-24" : "left-4"} `}
        >
          Surf Camps
        </figcaption>
      </figure>
    </section>
  );
};

export default Article;
