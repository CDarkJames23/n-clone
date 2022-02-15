import React from "react";
import { Field } from "formik";

const FormikField = ({ title, path, myErrors, myTouched }) => {
  return (
    <div>
      <div className="form__label">{title}</div>
      <Field
        placeholder={title}
        name={path}
        type="text"
        id={path}
        className="form__input"
      />

      {myErrors[path] && myTouched[path] ? (
        <div className="form__error-message">{myErrors[path]}</div>
      ) : null}
    </div>
  );
};

export default FormikField;
