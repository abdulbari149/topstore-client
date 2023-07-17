import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { LoginMutation } from "../../services/types";
import { useLoginMutation } from "../../services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TextField } from "../../components/TextField";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid Email Format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum length of password should be 6 characters")
    .max(25, "Password cannot exceed 25 characters length")
    .required("Password is required"),
});

export const LoginForm = () => {
  const [login, loginResponse] = useLoginMutation();
  const handleSubmit = async (values: LoginMutation, { resetForm }: any) => {
    await login(values);
    resetForm();
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (loginResponse.isSuccess) {
      toast.success(loginResponse.data.message);
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginResponse.isSuccess]);

  return (
    <div className="login-form-container">
      <div className="login-register-form">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} method="post">
              <TextField
                className="my-3"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Username"
              />
              <TextField
                className="my-3"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
                type="password"
              />

              <div className="button-box">
                <div className="login-toggle-btn">
                  <p>Forgot Password?</p>
                </div>
                <button type="submit">
                  <span>Login</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
