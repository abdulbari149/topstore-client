import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetOrderHistoryQuery } from "../../services/order";
import { Product } from "../Product/type";

interface Order {
  amount: number;
  created_at: string;
  updated_at: string;
  id: number;
  status: "delivered" | "pending";
  units: number;
  user_id: number;
  product: Product;
}
const accessToken = localStorage.getItem("access_token");

export const OrderList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/auth");
    }
  }, []);

  const orderHistoryResponse = useGetOrderHistoryQuery(
    {},
    {
      selectFromResult: (result) => {
        return {
          ...result,
          data: result.data?.data ?? [],
        };
      },
    }
  );

  useEffect(() => {
    if (orderHistoryResponse.isSuccess) {
      console.log(orderHistoryResponse.data);
    }
  }, [orderHistoryResponse.isSuccess]);

  useEffect(() => {
    if (orderHistoryResponse.isError) {
      console.log(orderHistoryResponse.error);
    }
  }, [orderHistoryResponse.isError]);

  return (
    <div className="account-dashboard pt-100px pb-100px">
      <div className="container">
        <div className="row">
          <h4>Orders</h4>
          <div className="table_page table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orderHistoryResponse.isSuccess &&
                  orderHistoryResponse.data.length > 0 &&
                  orderHistoryResponse.data.map((order:any) =>  {
                    console.log(order);
                    return (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.name}</td>
                      <td>{order.quantity}</td>
                      <td>
                        {order.status === "delivered" ? (
                          <span className="success">Completed</span>
                        ) : (
                          "Pending"
                        )}
                      </td>
                      <td>Rs {order.amount}</td>
                      <td>{new Date(Date.parse(order.created_at)).toDateString()}</td>
                    </tr>
                  )})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
