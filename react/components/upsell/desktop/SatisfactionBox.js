import React from 'react';

const SatisfactionBox = props => (
  <div className="satisfaction-box">
    <img
      src="/static/desktop/images/satisfaction-seal.jpg"
      alt=""
      className="satisfaction-seal"
    />
    <p className="satisfaction-hding">OUR 100% SATISFACTION GUARANTEE</p>
    <p className="satisfaction-txt">
      Try this product for a <span>full 180 days.</span> If you are dissatisfied
      for any reason within those 6 months, just send us an email. Your purchase
      price will be cheerfully refunded without any questions asked. And there
      is no need to return any unused product. We can’t make it any fairer. You
      risk absolutely nothing by upgrading your order.
    </p>
    <a href="javascript:void(0)" onClick={props.onUpgrade}>
      <img src="/static/desktop/images/button.png" className="button" />
    </a>
  </div>
);

export { SatisfactionBox };
