import React from 'react';
import { PromoSession } from 'react/components/common';
import { withRouter } from 'next/router';
import { getQueryString } from 'helpers';
import { SatisfactionBox } from './SatisfactionBox';

/**
 * @class Upsell11Component
 * @extends {React.PureComponent}
 * @description Desktop Component rendered after Upsell1 page
 */
class Upsell11Component extends React.PureComponent {
  upgrade = () => {
    this.props.upgrade(212, '/promo/desktop/upsell-2');
  };

  skipUpsell = () => {
    window.location.assign(`/promo/desktop/upsell-2?${getQueryString()}`);
  };
  scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  render() {
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage1" />
        <div className="upsell-strip">
          <h3>WAIT! YOU QUALIFY FOR A LIMITED TIME DISCOUNT</h3>
          <p>
            Add 1 Bottle Of <strong>Maximum Strength CBD Capsules</strong> To
            Your Order Today!{' '}
          </p>
        </div>
        <div className="up-mid-box-right">
          <img
            src="/static/assets/images/capsule-single-botle.png"
            alt="capsule-single-bottle"
            className="up-product-2"
          />
          <img
            alt="up-arrow-1"
            src="/static/assets/images/up-arw1.png"
            style={{ position: 'absolute', left: '260px', top: '400px' }}
          />
          <div className="up-rgt-content">
            <p className="up-txt1">Amplify Your Results</p>
            <p className="with-txt">with</p>
            <p className="up-txt2">Maximum Strength CBD Capsules</p>
            <div className="price-box">
              <p className="price-box-txt1">Buy 1 Bottle Of CBD Capsules </p>
              <p className="price-box-txt2">Save 30% Today</p>
              <p className="price-box-txt3">
                <img
                  src="/static/assets/images/arrow-left-upsell.png"
                  alt="arrow-left-upsell"
                  className="arrow-left"
                  width="77"
                  height="33"
                />
                87.00{' '}
                <img
                  src="/static/assets/images/arrow-right.png"
                  alt="arrow-right"
                  className="arrow-right"
                  width="77"
                  height="33"
                />
              </p>
            </div>
            <div className="bnt-sec">
              <a
                id="order-pulse-upsell11-desktop"
                href="javascript:void(0)"
                onClick={this.upgrade}
              >
                <img
                  src="/static/assets/images/ord-btn.png"
                  alt="order-btn"
                  className="ord-btn pulse"
                  width="370"
                  height="71"
                />
              </a>
              <p className="thanks-txt">
                <a
                  id="skip-pulse-upsell11-desktop"
                  href="javascript:void(0)"
                  onClick={this.skipUpsell}
                >
                  <img
                    src="/static/assets/images/cut-icon.png"
                    alt="cut-icon"
                    className="cut-icon"
                    width="15"
                    height="15"
                  />
                  {"No, I don't want better results."}
                </a>
              </p>
            </div>
          </div>
        </div>
        <SatisfactionBox onSkip={this.skipUpsell} onUpgrade={this.upgrade} />
      </React.Fragment>
    );
  }
}

const Upsell11 = withRouter(Upsell11Component);

export { Upsell11 };
