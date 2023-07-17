import React from "react";

export const Hero = () => {
  return (
    <div className="section ">
      <div className="hero-slider swiper-container slider-nav-style-1 slider-dot-style-1">
        <div className="swiper-wrapper">
          <div
            className="hero-slide-item slider-height-2 swiper-slide bg-color1"
            data-bg-image="assets/images/hero/bg/hero-bg-2-1.webp"
          >
            <div className="container h-100">
              <div className="row h-100 flex-row-reverse">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                  <div className="hero-slide-content hero-slide-content-2 slider-animated-1">
                    <h2 className="title-1">
                      Easy Your Life <br />
                      For Smart Device{" "}
                    </h2>
                    <span className="price">
                      <span className="mini-title">Only</span>
                      <span className="amount">$24.00</span>
                    </span>
                    <a
                      href="shop-left-sidebar.html"
                      className="btn btn-primary text-capitalize"
                    >
                      Shop All Devices
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative align-items-center">
                  <div className="show-case">
                    <div className="hero-slide-image slider-2">
                      <img
                        src="assets/images/hero/inner-img/hero-2-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hero-slide-item slider-height-2 swiper-slide bg-color1"
            data-bg-image="assets/images/hero/bg/hero-bg-2-1.webp"
          >
            <div className="container h-100">
              <div className="row h-100 flex-row-reverse">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                  <div className="hero-slide-content hero-slide-content-2 slider-animated-1">
                    <h2 className="title-1">
                      Easy Your Life <br />
                      For Smart Device{" "}
                    </h2>
                    <span className="price">
                      <span className="mini-title">Only</span>
                      <span className="amount">$24.00</span>
                    </span>
                    <a
                      href="shop-left-sidebar.html"
                      className="btn btn-primary text-capitalize"
                    >
                      Shop All Devices
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative align-items-center">
                  <div className="show-case">
                    <div className="hero-slide-image slider-2">
                      <img
                        src="assets/images/hero/inner-img/hero-2-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-white"></div>
        <div className="swiper-buttons">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  );
};
