import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import clsx from "clsx";
import { closeOverLay } from "./slice";
import navItems from "./nav-items.json";
import { Link } from "react-router-dom";
export const MobileMenu = () => {
  const open = useSelector<RootState, boolean>(
    (state) => state.header.overLayMobileMenu
  );
  const dispatch = useDispatch();

  return (
    <div
      className={clsx(
        "offcanvas offcanvas-mobile-menu",
        open ? "offcanvas-open" : ""
      )}
    >
      <button
        onClick={() => dispatch(closeOverLay({ item: "overLayMobileMenu" }))}
        className="offcanvas-close"
      ></button>
      <div className="user-panel">
        <ul>
          <li>
            <a href="tel:0123456789">
              <i className="fa fa-phone"></i> +012 3456 789
            </a>
          </li>
          <li>
            <a href="mailto:demo@example.com">
              <i className="fa fa-envelope-o"></i> demo@example.com
            </a>
          </li>
          <li>
            <a href="my-account.html">
              <i className="fa fa-user"></i> Account
            </a>
          </li>
        </ul>
      </div>
      <div className="inner customScroll">
        <div className="offcanvas-menu mb-4">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={item.url}>
                  <span className="menu-text">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="offcanvas-social mt-auto">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
