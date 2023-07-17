import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetCartItemsQuery } from "../../services/cart";
import { showOverLay } from "./slice";
export const HeaderActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = localStorage.getItem("user_id");
  const cartResponse = useGetCartItemsQuery({ user_id: `${userId}` });

  return (
    <div className="header-actions">
      <div
        onClick={() => navigate("/auth", { replace: true })}
        className="header-action-btn header-action-btn-cart pr-0"
      >
        <i className="pe-7s-user"></i>
      </div>
      {userId !== null && (
        <div className="header-action-btn header-action-btn-cart pr-0">
          <i
            onClick={() => {
              navigate("/cart");
            }}
            className="pe-7s-shopbag"
          ></i>
          {cartResponse.isSuccess && (
            <span className="header-action-num">
              {cartResponse.data.data.items_count}
            </span>
          )}
        </div>
      )}

      <div
        onClick={() => {
          dispatch(showOverLay({ item: "overLayMobileMenu" }));
        }}
        className="header-action-btn header-action-btn-menu d-lg-none"
      >
        <i className="pe-7s-menu"></i>
      </div>
    </div>
  );
};
