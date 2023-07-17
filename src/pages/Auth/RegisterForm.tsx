import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useRegisterMutation } from "../../services/auth";
import { RegisterMutation } from "../../services/types";
import { TextField } from "../../components/TextField";
import { toast } from "react-toastify";
const registerSchema = yup.object({
	firstName: yup.string().required("First Name is required"),
	lastName: yup.string().required("Last Name is required"),
	phoneNumber: yup.string().required("Phone is required"),
	gender: yup.string().required("gender is required"),
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

export const RegisterForm = () => {
	const [register, registerResponse] = useRegisterMutation();
	const handleSubmit = async (values: Omit<RegisterMutation, "role">, { resetForm }: any) => {
		await register({
			...values,
			role: "customer",	
		});
		resetForm()
	};
	useEffect(() => {
		if (registerResponse.isSuccess) {
			console.log(registerResponse.data)
			toast.success(registerResponse.data.message)
		}
	}, [registerResponse.isSuccess])

	useEffect(() => {
		if (registerResponse.isError) {
			console.log(registerResponse.error)
			toast.error((registerResponse.error as any).data.message)
		}
	}, [registerResponse.isError])

	return (
		<div className="login-form-container">
			<div className="login-register-form">
				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
						email: "",
						password: "",
						phoneNumber: "",
						gender: "",
					}}
					onSubmit={handleSubmit}
					validationSchema={registerSchema}
				>
					{(formik) => (
						<form onSubmit={formik.handleSubmit} method="post">
							<TextField
								className="my-3"
								name="firstName"
								value={formik.values.firstName}
								onChange={formik.handleChange}
								placeholder="First Name"
							/>
							<TextField
								className="my-3"
								name="lastName"
								value={formik.values.lastName}
								onChange={formik.handleChange}
								placeholder="Last Name"
							/>
							<TextField
								className="my-3"
								name="email"
								value={formik.values.email}
								onChange={formik.handleChange}
								placeholder="Email"
							/>
							<TextField
								className="my-3"
								name="password"
								value={formik.values.password}
								onChange={formik.handleChange}
								placeholder="Password"
								type="password"
							/>
							<TextField
								className="my-3"
								name="phoneNumber"
								value={formik.values.phoneNumber}
								onChange={formik.handleChange}
								placeholder="phoneNumber"
							/>
							<TextField
								className="my-3"
								name="gender"
								value={formik.values.gender}
								onChange={formik.handleChange}
								placeholder="gender"
							/>
							<div className="button-box">
								<button type="submit">
									<span>Register</span>
								</button>
							</div>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};
