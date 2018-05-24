import React from 'react';
import { PromoSession, Footer } from 'react/components/common';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { getQueryString } from 'helpers';
import { SatisfactionBox } from './SatisfactionBox';

class Upsell11Component extends React.PureComponent {
  upgrade = () => {
    this.props.upgrade(212, '/promo/mobile/upsell-2');
  };
  skipUpsell = () => {
    this.props.router.push(`/promo/mobile/upsell-2?${getQueryString()}`);
  };
  render() {
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage1" />
        <div className="up-strip">
          <h3>YOU QUALIFY FOR A LIMITED TIME DISCOUNT</h3>
          <p>
            Add 1 Bottle Of <br />
            <strong>Maximum Strength CBD Capsules</strong> To Your Order Today!
          </p>
        </div>
        <div className="upsell-box">
          <p className="up-txt1">Amplify Your Results</p>
          <p className="with-txt">with</p>
          <p className="up-txt2">Maximum Strength CBD Capsules</p>
          <img
            src="/static/assets/images/up-prod-2.jpg"
            className="up-prod"
            alt=""
          />
          <div className="clearall" />
          <div className="price-box">
            <p className="price-box-txt1">Buy 1 Bottle Of CBD Capsules</p>
            <p className="price-box-txt2">Save 30% Today</p>
            <p className="price-box-txt3">
              <img
                src="/static/assets/images/arrow-left-upsell.png"
                width="77"
                height="33"
                alt=""
                className="arrow-left"
              />
              $87.00{' '}
              <img
                src="/static/assets/images/arrow-right.png"
                width="77"
                height="33"
                alt=""
                className="arrow-right"
              />
            </p>
          </div>

          <div className="bnt-sec">
            <a href="javascript:void(0)" onClick={this.upgrade}>
              <img
                src="/static/assets/images/ord-btn.png"
                alt=""
                width="370"
                height="71"
                className="ord-btn pulse"
              />
            </a>
            <p className="thanks-txt">
              <Link as={`/promo/mobile/upsell-2?${getQueryString()}`}>
                <a>
                  <img
                    src="/static/assets/images/cut-icon.png"
                    width="15"
                    height="15"
                    alt=""
                    className="cut-icon"
                  />{' '}
                  No, I don't want better results.
                </a>
              </Link>
            </p>
          </div>
        </div>
        <SatisfactionBox onSkip={this.skipUpsell} onUpgrade={this.upgrade} />
        <div id="footer">
          <div className="container">
            <div className="ftr-txt">
              <Footer noLogo>
                <span />
              </Footer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const Upsell11 = withRouter(Upsell11Component);

export { Upsell11 };
