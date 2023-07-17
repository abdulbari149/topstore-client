import { Formik } from "formik";
import React, { useEffect } from "react";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { BaseLayout } from "../../components/Layout/BaseLayout";
import { useOrderCheckoutMutation } from "../../services/order";
import { BillingInformation, ShippingDetails } from "./BillingInformation";
import { countries } from "../../constants/countries"
import * as yup from "yup"
import { useGetCartItemsQuery } from "../../services/cart";
import { OrderItems } from "./OrderItems";
import { Item } from "../Cart/CartItem";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const billingInformationSchema = yup.object({
	first_name: yup.string().required("First Name is required"),
	last_name: yup.string().required("Last Name is Required"),
	country: yup.string().default("").equals(countries.map(c => c.code), "Value of Country is invalid").required("Country is required"),
	city: yup.string().required("City is required"),
	zipCode: yup.string().matches(/^[0-9]*$/, "Zip Code can only contains digits").required("Zip Code is required"),
	contact_no: yup.string().length(11, "Phone number needs to be 11 digits long").required("Phone number is a required field"),
	address_1: yup.string().required("Address Line 1 is required"),
	address_2: yup.string().default("").optional(),
	payment_type: yup.string().required("Payment Type is a required field"),
	credit_card_no: yup.string().matches(/^[0-9]*$/).required("Credit Card Number is required"),
	order_notes: yup.string().optional()
})

export const Checkout = () => {
	const [orderCheckout, orderCheckoutResponse] = useOrderCheckoutMutation()
	const initialValues: ShippingDetails = {
		first_name: "",
		last_name: "",
		country: "",
		city: "",
		zipCode: "",
		state: "",
		contact_no: "",
		address_1: "",
		address_2: "",
		payment_type: "",
		credit_card_no: "",
		order_notes: ""
	};

	const userId = localStorage.getItem("access_token")

	const getCartItemsResponse = useGetCartItemsQuery({ user_id: +userId! }, {
		selectFromResult: (result) => {
			if (!result.data) return {
				data: {
					items: [] as Item[],
					total_price: 0,
				}
			};
			const data = {
				items: result.data.data as Item[],
				total_price: result.data.data.reduce((current: number, item:Item) => item.price + current,0) ?? 0
			}
			return {
				...result,
				data
			}
		}
	})
	const handleSubmit = async (values: ShippingDetails, { resetForm }: any) => {
		const cart_item_ids = getCartItemsResponse.data.items.map((item: Item) => item.id)
		console.log(cart_item_ids);
		if (userId == null || !userId) {
			return
		}
		await orderCheckout({
			cart_item_ids,
			user_id: +userId,
			shipping_details: values
		})
		resetForm()
	}
	const navigate = useNavigate()
	useEffect(() => {
		if (orderCheckoutResponse.isSuccess) {
			console.log(orderCheckoutResponse.data);
			toast.success(orderCheckoutResponse.data.message)
			navigate("/orders")
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderCheckoutResponse.isSuccess])

	useEffect(() => {
		if (orderCheckoutResponse.isError) {
			console.log(orderCheckoutResponse.error);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderCheckoutResponse.isError])


	return (
		<BaseLayout>
			<BreadCrumb title="Checkout" />
			<div className="checkout-area pt-100px pb-100px">
				<div className="container">
					<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={billingInformationSchema} >
						{(formik) => {
							return (<form className="row" onSubmit={formik.handleSubmit}>
								<BillingInformation />
								<div className="col-lg-5 mt-md-30px mt-lm-30px ">
									<div className="your-order-area">
										<h3>Your order</h3>
										<div className="your-order-wrap gray-bg-4">
											<div className="your-order-product-info">
												<div className="your-order-top">
													<ul>
														<li>Product</li>
														<li>Total</li>
													</ul>
												</div>
												<div className="your-order-middle">
													<ul>
														{getCartItemsResponse.data.items.map((item: Item) => (
															<OrderItems key={item.id} productName={item.product.name} productPrice={item.price} />
														))}
													</ul>
												</div>
												<div className="your-order-bottom">
													<ul>
														<li className="your-order-shipping">Shipping</li>
														<li>Free shipping</li>
													</ul>
												</div>
												<div className="your-order-total">
													<ul>
														<li className="order-total">Total</li>
														<li>Rs {getCartItemsResponse.data.total_price}</li>
													</ul>
												</div>
											</div>
										</div>
										<button className="Place-order mt-25" style={{ width: "100%" }} type="submit">
											<span className="btn-hover" >
												Place Order
											</span>
										</button>
									</div>
								</div>
							</form>)
						}}
					</Formik>
				</div>
			</div>
		</BaseLayout>
	);
};
