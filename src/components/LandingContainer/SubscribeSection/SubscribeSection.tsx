"use client";
import React from "react";
// import { NextPage } from "next";
import { Form, Formik } from "formik";
import TextInput from "@/components/TextInput/TextInput";
import { showToast } from "@/core/utils/show-toast";
import { ToastTypes } from "@/core/enums/toast-types.enum";
import { SubscribeValidation } from "@/core/validations/subscribe.validations";
import styles from "./styles/SubscribeSection.module.scss";

type TSubscribeSectionProps = {
  children: React.ReactNode;
};

const SubscribeSection: React.FC<TSubscribeSectionProps> = (
  props: TSubscribeSectionProps
): JSX.Element => {
  const onSubmit = () => {
    showToast(["Send Subscribe SuccessFully"], ToastTypes.success);
  };

  return (
    <section className={`position-relative ${styles.subscribeSectionStyle}`}>
      <h3 className="playfair-font textColor-quote text-center">
        Join the Club
      </h3>

      <p
        className="poppins-font text-sm textColor-custom-gray
                mx-auto whitespace-pre-wrap text-center mt-7"
      >
        By better understanding the various aspects of surfing, you will improve
        faster and have more fun in the water.
      </p>

      <Formik
        initialValues={{ email: "" }}
        onSubmit={onSubmit}
        validationSchema={SubscribeValidation}
      >
        <Form className="d-flex justify-content-center mt-8">
          <TextInput name="email" placeholder="your e-mail" />
          <button
            type="submit"
            className={`${styles.subscribeSectionBtnStyle}`}
          ></button>
        </Form>
      </Formik>

      {props.children}
    </section>
  );
};

export default SubscribeSection;
