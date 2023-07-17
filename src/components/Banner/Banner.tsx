import React from "react";

export const Banner = () => {
  return (
    <div className="banner-area style-two pt-100px pb-100px">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="single-banner nth-child-2 mb-lm-30px">
              <img src="assets/images/banner/6.webp" alt="" />
              <div className="banner-content nth-child-3">
                <h3 className="title">Speaker</h3>
                <span className="category">From $69.00</span>
                <a href="shop-left-sidebar.html" className="shop-link">
                  Shop Now{" "}
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-banner nth-child-2">
              <img src="assets/images/banner/7.webp" alt="" />
              <div className="banner-content nth-child-2">
                <h3 className="title">Smartphone</h3>
                <span className="category">From $95.00</span>
                <a href="shop-left-sidebar.html" className="shop-link">
                  Shop Now{" "}
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
