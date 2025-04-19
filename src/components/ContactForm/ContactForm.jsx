import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as yup from "yup";
import { useId } from "react";
import {
  LONG_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  SHORT_ERROR_MESSAGE,
} from "../../js/errorMessages";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, SHORT_ERROR_MESSAGE)
    .max(50, LONG_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE),
  number: yup
    .string()
    .min(3, SHORT_ERROR_MESSAGE)
    .max(50, LONG_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE),
});

function ContactForm({
  onSubmit,
  contact = initialValues,
  submitText = "Submit",
}) {
  const formId = useId();

  return (
    <Formik
      initialValues={contact}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css["field-container"]}>
          <label htmlFor={formId + "-name"}>Name</label>
          <Field name="name" id={formId + "-name"} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css["field-container"]}>
          <label htmlFor={formId + "-number"}>Number</label>
          <Field name="number" id={formId + "-number"} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button type="submit">{submitText}</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
