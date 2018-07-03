import React from 'react';
import moment from 'moment';
import axios from 'axios';
import { PromoSession, Footer } from 'react/components/common';
import { getQueryString } from 'helpers';
import Head from 'next/head';

/**
 * @class Upsell2
 * @extends {React.PureComponent}
 * @description Mobile component rendered after Upsell1 pages
 */
class Upsell2Treatment2 extends React.PureComponent {
  componentDidMount() {
    this.postVisitEvent();
  }

  upgrade = () => {
    this.props.sendTransactionDetails(
      'order-confirmation-upsell-2',
      'Upsell2Treatment2',
    );
    this.postActionTracker('upsell-2-yes', 'upsell-2-yes');
    this.props.upgrade(217, '/promo/mobile/thankyou');
  };

  skipUpsell = () => {
    this.postActionTracker('upsell-2-no', 'upsell-2-no');
    window.location.assign(`/promo/mobile/upsell-2-1?${getQueryString()}`);
  };

  postActionTracker = (name, value_string) => {
    const { abtastyParams } = this.props;
    const body = {
      name,
      value_string,
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'MOBILE_PHONE',
        origin: 'Upsell2Treatment2',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };
    axios.post('/abtasty', { ...body, action: 'action_tracking_event' });
  };

  postVisitEvent = () => {
    const { abtastyParams } = this.props;
    const body = {
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'DESKTOP',
        origin: window.location.href,
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };
    axios.post('/abtasty', { ...body, action: 'visit_event' });
  };

  render() {
    console.log('inside upsell 2 Treatment 2');
    return (
      <React.Fragment>
        <Head>
          <link
            href="/static/mobile/css/upsell2-treatment2.css"
            rel="stylesheet"
          />
        </Head>
        <PromoSession pageType="upsellPage2" />

        <div className="upsell-top">
          <div className="contentWrap">
            <img
              alt="logo"
              src="/static/assets/images/logo.png"
              className="up-logo"
            />
            <img
              src="/static/assets/images/ups-step.png"
              alt=""
              className="up-step"
            />
          </div>
        </div>

        <div className="up-mid1">
          <div className="contentWrap">
            <p className="up-txt1">WAIT! Your Order Is Not Complete</p>
            <p className="up-txt2">
              Get better results by adding on the <strong>CBD Capsules</strong>{' '}
              to your order. Take advantage of our special offer-{' '}
              <strong>Buy 2 Bottles &amp; Get 1 Bottle Free</strong>{' '}
            </p>

            <div className="pop-coupon">
              <img
                src="/static/assets/images/up2-combo.png"
                style={{
                  position: 'absolute',
                  top: '135px',
                  left: '20px',
                  width: '270px',
                }}
              />
              <div className="up1-content">
                <img
                  src="/static/assets/images/timer-icon.png"
                  className="up-timer"
                />
                <p className="prod-txt">
                  Buy 2 Jar Of<br />
                  <span>CBD Warming Balm</span>
                </p>
                <p className="prod-txt">+</p>
                <p className="prod-txt">
                  Get 1 Jar<br />
                  <span>Absolutely Free</span>
                </p>
                <p className="price-txt">
                  Today Only<br />
                  <span>$130.00</span> $87.00/ea
                </p>
                <p className="shipping-txt">
                  Plus we'll pay for the added shipping cost
                </p>
              </div>
            </div>

            <p className="up-txt3">
              This amazing offer won't ever be made again, and as always, you're
              backed by a rock-solid, <span>100% money-back-guarantee</span>.
              Just click the coupon above or the <span>"Yes"</span> button below
              now to stock up while you can!
            </p>
            <input
              type="image"
              src="/static/assets/images/up1-btn.png"
              alt=""
              className="up-btn"
              onClick={this.upgrade}
            />
            <img
              src="/static/assets/images/secure256.png"
              alt=""
              className="up-secur"
            />
            <a
              href="javascript:void(0);"
              className="up-no-thanks"
              onClick={this.skipUpsell}
            >
              <img src="/static/assets/images/close-icon.png" />&nbsp;No, I
              don't want better results.
            </a>
            <img
              src="/static/assets/images/card-secure.png"
              alt=""
              className="card-secure"
            />
          </div>
        </div>

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

export { Upsell2Treatment2 };
