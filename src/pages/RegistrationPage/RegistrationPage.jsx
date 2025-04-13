import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as yup from "yup";
import {
  LONG_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  SHORT_ERROR_MESSAGE,
} from "../../js/errorMessages";
import { useDispatch } from "react-redux";
import css from "./RegistrationPage.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, SHORT_ERROR_MESSAGE)
    .max(50, LONG_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE),
  email: yup
    .string()
    .min(3, SHORT_ERROR_MESSAGE)
    .max(50, LONG_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE),
  password: yup
    .string()
    .min(8, SHORT_ERROR_MESSAGE)
    .max(20, LONG_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE),
});

function RegistrationForm() {
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    const newUserCredentials = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(register(newUserCredentials));
    actions.resetForm();
  }

  const formId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css["field-container"]}>
          <label htmlFor={formId + "-name"}>Name</label>
          <Field name="name" id={formId + "-name"} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css["field-container"]}>
          <label htmlFor={formId + "-email"}>Email</label>
          <Field type="email" name="email" id={formId + "-email"} />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>
        <div className={css["field-container"]}>
          <label htmlFor={formId + "-password"}>Password</label>
          <Field type="password" name="password" id={formId + "-password"} />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
