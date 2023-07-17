import { FieldHookConfig, FormikProps, useField } from "formik";
import React from "react";

interface Props {
	label?: string;
	type?: "text" | "email" | "password" | "number"
	className?: string;
	placeholder?: string
}

export const TextField: React.FC<Props & FieldHookConfig<any>> = ({
	label,
	className = "",
	type = "text",
	placeholder = "",
	...fieldProps
}) => {
	const [field, meta, helper] = useField(fieldProps);

	return (
		<div className={className}>
			{label && <label>{label}</label>}
			<input
				type={type}
				placeholder={placeholder}
				className="m-0"
				{...field}
			/>
			{meta.error && meta.touched && (
				<span className="text-small px-2 text-danger" style={{ fontSize: 13 }}>
					{meta.error}
				</span>
			)}
		</div>
	);
};
