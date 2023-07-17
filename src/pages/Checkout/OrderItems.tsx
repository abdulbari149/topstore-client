import React from "react";

export const OrderItems: React.FC<{
	productName: string;
	productPrice: number;
}> = ({ productName, productPrice }) => {
	return (
		<li>
			<span className="order-middle-left">{productName}</span>{" "}
			<span className="order-price">{productPrice} Rs </span>
		</li>
	);
};
