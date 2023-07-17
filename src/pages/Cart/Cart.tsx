import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { BaseLayout } from "../../components/Layout/BaseLayout";
import { useGetCartItemsQuery } from "../../services/cart";
import { CartItem, Item } from "./CartItem";

export const Cart = () => {
  const userId = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const [, setCartItems] = useState([]);
  useEffect(() => {
    if (!userId) {
      navigate("/auth");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCartItemsResponse = useGetCartItemsQuery({});

  useEffect(() => {
    if (getCartItemsResponse.isSuccess) {
      console.log({ data: getCartItemsResponse.data.data });
      setCartItems(
        (prevValue) => getCartItemsResponse.data.data ?? prevValue
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCartItemsResponse.isSuccess]);

  useEffect(() => {
    if (getCartItemsResponse.isError) {
      console.log(getCartItemsResponse.error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCartItemsResponse.isError]);

  return (
    <BaseLayout>
      <BreadCrumb title="cart" />
      
      <div className="cart-main-area pt-100px pb-100px">
        <div className="container">
          <h3 className="cart-page-title">Your cart items</h3>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form action="#">
                <div className="table-content table-responsive cart-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Until Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getCartItemsResponse.isSuccess &&
                        getCartItemsResponse.data?.data?.length > 0 &&
                        getCartItemsResponse.data?.data?.map(
                          (item: Item) => <CartItem key={item.id} item={item} />
                        )}
                    </tbody>
                  </table>
                </div>
              </form>
              <div className="row mt-4">
                <div className="col-lg-4 col-md-12 ">
                  <div className="cart-shiping-update-wrapper">
                    <div className="cart-shiping-update">
                      <Link to={"/product"}>Continue Shopping</Link>
                    </div>
                  </div>
                </div>
                <div className="ms-auto col-lg-4 col-md-12 mt-md-30px">
                  <div className="grand-totall">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gary-cart">
                        Cart Total
                      </h4>
                    </div>
                    <h5>
                      Total Prices
                      <span>
                        Rs. {getCartItemsResponse.data?.data.reduce((current: number, item: Item) => current + item.subTotal, 0)}
                      </span>
                    </h5>
                    <Link
                      style={{
                        pointerEvents: getCartItemsResponse.data?.data.length === 0
                          ? "none"
                          : "initial",
                      }}
                      to={"/checkout"}
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
