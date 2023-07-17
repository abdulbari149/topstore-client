import { Formik, useFormikContext } from "formik";
import React from "react";
import { TextField } from "../../components/TextField";
import { countries } from "../../constants/countries";
import * as yup from "yup"
import { paymentTypes } from "../../constants/paymentTypes";


export interface ShippingDetails {
	first_name: string;
	last_name: string;
	country: string;
	city: string;
	zipCode: string;
	state: string;
	contact_no: string;
	address_1: string;
	address_2: string;
	payment_type: string;
	credit_card_no: string;
	order_notes: string;
}


export const BillingInformation: React.FC<{}> = ({ }) => {
	const formik = useFormikContext<ShippingDetails>()
	return (
		<div className="col-lg-7">
			<div className="billing-info-wrap">
				<h3>Billing Details</h3>
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<TextField
							className="billing-info mb-4"
							value={formik.values.first_name}
							onChange={formik.handleChange}
							name="first_name"
							label="First Name"
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<TextField
							className="billing-info mb-4"
							value={formik.values.last_name}
							onChange={formik.handleChange}
							name="last_name"
							label="Last Name"
						/>
					</div>
					<div className="col-lg-12">
						<div className="billing-select mb-4">
							<label>Country</label>
							<select
								value={formik.values.country}
								onChange={(e) => {
									formik.handleChange("country")(e.target.value)
								}}
							>
								<option value={""}>Select a country</option>
								{countries.map((c) => (
									<option key={c.code} value={c.code}>
										{c.name}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="billing-info mb-4">
							<label>Street Address</label>
							<TextField
								className="billing-address mb-3"
								name="address_1"
								placeholder="Address Line 1"
								value={formik.values.address_1}
								onChange={formik.handleChange}
							/>
							<TextField
								name="address_2"
								placeholder="Address Line 2"
								value={formik.values.address_2}
								onChange={formik.handleChange}
							/>
						</div>
					</div>
					<div className="col-lg-12">
						<TextField
							className="billing-info mb-4"
							name="city"
							value={formik.values.city}
							onChange={formik.handleChange}
							label={"Town / City"}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<TextField
							className="billing-info mb-4"
							name="state"
							value={formik.values.state}
							onChange={formik.handleChange}
							label={"State / County"}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<TextField
							className="billing-info mb-4"
							name="zipCode"
							value={formik.values.zipCode}
							onChange={formik.handleChange}
							label={"Postcode / ZIP"}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<TextField
							className="billing-info mb-4"
							name="contact_no"
							value={formik.values.contact_no}
							onChange={formik.handleChange}
							label={"Phone"}
						/>
					</div>
					<div className="col-lg-12">
						<div className="billing-select mb-4">
							<label>Payment Type</label>
							<select
								value={formik.values.payment_type}
								onChange={(e) => {
									formik.handleChange("payment_type")(e.target.value)
								}}
							>
								<option value={""}>Select a Payment Type</option>
								{paymentTypes.map((type) => (
									<option key={type.id} value={type.value}>
										{type.label}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="col-lg-12">
						<TextField
							className="billing-info mb-4"
							name="credit_card_no"
							value={formik.values.credit_card_no}
							onChange={formik.handleChange}
							label={"Credit Cart Number"}
						/>
					</div>
					<div className="additional-info-wrap">
						<h4>Additional information</h4>
						<div className="additional-info">
							<label>Order notes</label>
							<textarea
								value={formik.values.order_notes}
								onChange={(e) =>
									formik.handleChange("order_notes")(e.target.value)
								}
								placeholder="Notes about your order, e.g. special notes for delivery. "
								name="message"
							></textarea>
						</div>
					</div>
					{/* <pre>{JSON.stringify(formik.values, null, 4)}</pre> */}
				</div>

			</div>
		</div>
	);
};
