import React from "react";
import "./styles/ExplanationBox.scss";

interface IExplanationProp {
  caption?: string;
  title?: string;
  description?: string;
  className?: string;
  isReadMore?: boolean;
  readMoreLink?: string;
  isAbsolute?: boolean;
  center?: boolean;
  underscope?: boolean;
  descClass?: string;
  number?: string;
}

const ExplanationBox: React.FC<IExplanationProp> = ({
  caption,
  title,
  description,
  className,
  isReadMore,
  readMoreLink,
  isAbsolute = true,
  center,
  underscope,
  descClass,
  number,
}): JSX.Element => {
  return (
    <article
      style={{ zIndex: "20" }}
      className={`bg-transparent ${
        isAbsolute ? "position-absolute" : "position-relative"
      }  justify-content-between ${className}`}
    >
      <label
        className={`fs-6 lSpartan-font fw-bold textColor-info tracking-widest text-uppercase ${
          center && "text-center mx-auto d-block fw-bold"
        }`}
      >
        {caption}
      </label>

      <h3
        className={`playfair-font fs-xl position-relative text-quote fw-bold ${
          center && " text-center mx-auto d-block"
        }`}
      >
        {title}
        {underscope && (
          <>
            <span
              style={{ zIndex: "-10", top: "-105px", left: "0" }}
              className="position-absolute textColor-section lSpartan-font text-130 fw-bold"
            >
              {number}
            </span>
            <div className="bg-blue-300 h-tiny"></div>
          </>
        )}
      </h3>

      <p
        style={{ width: "340px" }}
        className={`textColor-custom-gray text-Xtiny font-myriad whitespace-pre-line mb-8 ${descClass}`}
      >
        {description}
      </p>

      {isReadMore && (
        <a
          href={readMoreLink ? readMoreLink : "#"}
          className="text-uppercase lSpartan-font fs-6-tiny textColor-quote
                 tracking-widest py-1 explanation-read-more"
        >
          Read More
        </a>
      )}
    </article>
  );
};

export default ExplanationBox;
