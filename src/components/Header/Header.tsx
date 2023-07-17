import React from "react";
import { Link } from "react-router-dom";
import { HeaderActions } from "./HeaderActions";
import navItems from "./nav-items.json";
export const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <div className="welcome-text">
                <p>World Wide Completely Free Returns and Shipping</p>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <div className="top-nav">
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
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom  d-none d-lg-block">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3 col">
              <div className="header-logo">
                <a href="index.html">
                  <img src="assets/images/logo/logo.png" alt="Site Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col">
              <HeaderActions />
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom d-lg-none sticky-nav style-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3 col">
              <div className="header-logo">
                <a href="index.html">
                  <img src="/assets/images/logo/logo.png" alt="Site Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col">
              <HeaderActions />
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav-area d-none d-lg-block sticky-nav">
        <div className="container">
          <div className="header-nav">
            <div className="main-menu position-relative">
              <ul>
                {navItems.map((item) => (
                  <li key={item.id} className="position-static">
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
