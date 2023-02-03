import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./styles/TextInput.module.scss";

interface ITextInput {
  name: string;
  placeholder: string;
}

const TextInput: React.FC<ITextInput> = ({
  name,
  placeholder,
}): JSX.Element => {
  return (
    <Field name={name}>
      {({ field, meta }: any) => (
        <div>
          <input
            {...field}
            placeholder={placeholder}
            value={meta.value}
            className={`h-1 lSpartan-font tracking-widest text-tiny fw-bold text-uppercase ${styles.inputStyles}`}
          />

          <ErrorMessage name={name}>
            {(msg: string) => (
              <p className="textColor-danger m-0 pt-1 text-sm myriad-font">{msg}</p>
            )}
          </ErrorMessage>
        </div>
      )}
    </Field>
  );
};

export default TextInput;
