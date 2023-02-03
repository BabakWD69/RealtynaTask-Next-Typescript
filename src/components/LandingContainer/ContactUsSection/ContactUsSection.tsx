"use client";
import React from "react";
// import { NextPage } from "next";
import Image from "next/image";
import ContactPic from "../../../../public/images/contact.png";
import styles from "./styles/ContactUsSection.module.scss";

const ContactUsSection: React.FC = (): JSX.Element => {
  return (
    <section
      className={`d-flex justify-content-start mx-auto ${styles.contactUsSectionStyle}`}
    >
      <Image src={ContactPic} alt="contact" />

      <div className={styles.contactUsSectionStyle}>
        <span
          className={`text-uppercase tracking-widest text-tiny lSpartan-font fw-bold ${styles.contactUsSpanStyle}`}
        >
          our camp
        </span>

        <h3
          className={`playfair-font textColor-secondary ${styles.contactUsTitleStyle}`}
        >
          CA 91932, USA Imperial Beach 560 Silver Strand Blvd
        </h3>

        <button
          className={`text-uppercase lSpartan-font textColor-info tracking-widest fw-bolder text-tiny pb-1 ${styles.contactUsButtonStyle}`}
        >
          get in touch
        </button>
      </div>
    </section>
  );
};

export default ContactUsSection;
