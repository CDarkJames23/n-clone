import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikField from "./FormikField";
import { fieldArray } from "./fieldArray";

const MovieSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, "The entry seems to be too long")
    .required("This field is required"),

  poster_path: Yup.string().required("This field is required"),

  overview: Yup.string()
    .min(20, "The overview needs to have at least 20 characters")
    .required("This field is required"),
});

const EditMovie = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="form">
      <h1>Edit Movie</h1>
      <Formik
        initialValues={{
          title: "",
          release_date: "",
          poster_path: "",
          genres: "",
          overview: "",
          runtime: "",
        }}
        validationSchema={MovieSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form__content">
            {fieldArray.map((array) => {
              return (
                <FormikField
                  key={array.title}
                  title={array.title}
                  path={array.path}
                  id={array.path}
                  myErrors={errors}
                  myTouched={touched}
                />
              );
            })}
            <div className="button-area">
              <button className="button-secondary">reset</button>
              <button className="button-main" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p>
        {submitted ? (
          <div className="form__submit-message">Moview will be added</div>
        ) : null}
      </p>
    </div>
  );
};

export default EditMovie;
