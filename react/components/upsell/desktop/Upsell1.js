import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { PromoSession } from 'react/components/common';
import { withRouter } from 'next/router';
import { getQueryString } from 'helpers';
import { SatisfactionBox } from './SatisfactionBox';

class Upsell1Component extends React.PureComponent {
  postActionTracker = () => {
    const { localStorage } = window;
    const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));
    const body = {
      name: 'upsell1-capsules',
      value_string: 'upsell1',
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type:
          abtastyParams.requestAgent === 'desktop' ? 'DESKTOP' : 'MOBILE_PHONE',
        origin: 'Upsell1',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };
    axios.post('/abtasty', { ...body, action: 'action_tracking_event' });
  };

  upgrade = () => {
    this.postActionTracker('yes');
    this.props.upgrade(213, '/promo/desktop/upsell-2');
  };

  skipUpsell = () => {
    window.location.assign(`/promo/desktop/upsell-1-1?${getQueryString()}`);
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
          <h3>WAIT! YOUR ORDER IS NOT COMPLETE!</h3>
          <p>
            93% of Customers Added The{' '}
            <strong>Maximum Strength CBD Capsules</strong> To Their Order!{' '}
          </p>
        </div>
        <div className="up-mid-box-right">
          <img
            src="/static/assets/images/up1-bottle.png"
            alt="upsell-1-bottle"
            className="up-product"
          />
          <img
            alt="upsell-arrow-1"
            src="/static/assets/images/up-arw1.png"
            style={{ position: 'absolute', left: '260px', top: '400px' }}
          />
          <div className="up-rgt-content">
            <p className="up-txt1">Amplify Your Results</p>
            <p className="with-txt">with</p>
            <p className="up-txt2">Maximum Strength CBD Capsules</p>
            <div className="price-box">
              <p className="price-box-txt1">
                Buy 2 Bottles + <span>Get 1 Free</span>
              </p>
              <p className="price-box-txt2">Save 60% Today</p>
              <p className="price-box-txt3">
                <img
                  src="/static/assets/images/arrow-left-upsell.png"
                  alt="arrow-left-upsell"
                  className="arrow-left"
                  width="77"
                  height="33"
                />
                <span className="old-price">
                  <img
                    src="/static/assets/images/price-cut.png"
                    alt="price-cut"
                  />
                  120/
                  <sup>ea</sup>
                </span>{' '}
                77/<sup>ea</sup>{' '}
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
              <a href="javascript:void(0)" onClick={this.upgrade}>
                <img
                  src="/static/assets/images/ord-btn.png"
                  alt="order-btn"
                  className="ord-btn pulse"
                  width="370"
                  height="71"
                />
              </a>
              <p className="thanks-txt">
                <a href="javascript:void(0)" onClick={this.skipUpsell}>
                  <img
                    src="/static/assets/images/cut-icon.png"
                    alt="cut-icon"
                    className="cut-icon"
                    width="15"
                    height="15"
                  />{' '}
                  No, I don&apos;t want better results.
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

const Upsell1 = withRouter(Upsell1Component);

export { Upsell1 };
