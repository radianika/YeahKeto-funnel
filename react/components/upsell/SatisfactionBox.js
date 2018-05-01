import React from 'react';

const SatisfactionBox = () => (
  <div className="satisfaction-box">
    <img
      src="/static/mobile/v1/images/satisfaction-seal.jpg"
      alt=""
      className="satisfaction-seal"
    />
    <p className="satisfaction-hding">OUR 100% SATISFACTION GUARANTEE</p>
    <p className="satisfaction-txt">
      Try this product for a <span>full 180 days</span>. If you are dissatisfied
      for any reason within those 6 months, <br />just send us an email. Your
      purchase price will be cheerfully refunded without any questions asked.{' '}
      <br />And there is no need to return any unused product. We can’t make it
      any fairer. You risk absolutely <br />nothing by upgrading your order.
    </p>
    <div className="upgrade-btn">
      <a href="#">
        <img src="/static/mobile/v1/images/upgrade-btn.png" alt="" />
      </a>
    </div>
  </div>
);

export { SatisfactionBox };
