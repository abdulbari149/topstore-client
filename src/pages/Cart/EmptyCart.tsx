import React from 'react'

export const EmptyCart = () => {
	return (
		<div className="empty-cart-area pb-100px pt-100px">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="cart-heading">
							<h2>Your cart item</h2>
						</div>
						<div className="empty-text-contant text-center">
							<i className="pe-7s-shopbag"></i>
							<h3>There are no more items in your cart</h3>
							<a className="empty-cart-btn" href="shop-4-column.html">
								<i className="fa fa-arrow-left"> </i> Continue shopping
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
