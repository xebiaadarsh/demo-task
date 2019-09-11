import React from "react";

import "../css/Description.css";

const Description2 = props => {
  return (
    <div className="description-content">
      <div className="row">
        <div className="col-sm-8 text-wrapper">
          <span className="college-title-text">
            Ramjas College Delhi University
          </span>
          <span className="star-container">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
        </div>
        <div className="col-sm-4 price-wrapper">
          <span className="price-text">
            <strike>₹6,8756</strike>
          </span>
          <span className="pricetag">20</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-7">
          <div className="row address-wrapper">
            <div className="col-sm-12 address-text">
              Near Vishwavidyalya Metro Station{" "}
              <span>| 2 Kms away from bus stand</span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 address-desc">
              <span className="green-color">93% Match :</span>2.5kms
              <span className="grey-color"> from GTB Nagar,</span> 7 Kms
              <span className="grey-color"> from Rajiv Chowk</span>
            </div>
          </div>
          <div className="row p-t-15">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-2">
                    <div className="dealTag"><span className="dealTag-text">DEAL</span></div>
                    <div className="arrow-left"></div>
                </div>
                <div className="col-sm-10 green-color discount-text">
                  Get 50% Instant discount up to INR 1750 ... MORE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-5 price-section">
          <div className="row">
            <div className="col-sm-12">
              <div className="price-tag">₹ 5,768 </div>
              <div className="info-text">Per Semester (3months)</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 ">
              <div className="top-position facilities-text green-color">
                Free Cancellation . Free Cancellation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description2;
