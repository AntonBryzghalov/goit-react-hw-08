import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import * as yup from "yup";
import {
  LONG_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  SHORT_ERROR_MESSAGE,
} from "../../js/errorMessages";
import { useId } from "react";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .min(3, SHORT_ERROR_MESSAGE)
    .max(50, LONG_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE),
  password: yup
    .string()
    .min(8, SHORT_ERROR_MESSAGE)
    .max(20, LONG_ERROR_MESSAGE)
    .required(REQUIRED_ERROR_MESSAGE),
});

function LoginForm() {
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    const userCredentials = {
      email: values.email,
      password: values.password,
    };
    dispatch(login(userCredentials));
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
          <label htmlFor={formId + "-email"}>Email</label>
          <Field
            type="email"
            name="email"
            id={formId + "-email"}
            autoComplete="email"
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>
        <div className={css["field-container"]}>
          <label htmlFor={formId + "-password"}>Password</label>
          <Field
            type="password"
            name="password"
            id={formId + "-password"}
            autoComplete="current-password"
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </div>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
