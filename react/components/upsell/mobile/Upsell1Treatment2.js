import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import axios from 'axios';
import { PromoSession, Footer } from 'react/components/common';
import { withRouter } from 'next/router';
import { getQueryString, getDiscountBanner } from 'helpers';

/**
 * @class Upsell1Treatment2Component
 * @extends {React.PureComponent}
 * @description Mobile component rendered after checkout page <br />
 */
class Upsell1Treatment2Component extends React.PureComponent {
  componentDidMount() {
    this.postVisitEvent();
  }

  upgrade = () => {
    this.props.sendTransactionDetails(
      'order-confirmation-upsell-1',
      'Upsell1Treatment2',
    );
    this.props.upgrade(213, '/promo/mobile/upsell-2');
  };

  skipUpsell = () => {
    window.location.assign(`/promo/mobile/upsell-1-1?${getQueryString()}`);
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
    const { cid } = this.props.query;
    return (
      <React.Fragment>
        <Head>
          <link
            href="/static/mobile/css/upsell-treatment2.css"
            rel="stylesheet"
          />
        </Head>
        <PromoSession pageType="upsellPage1" />
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
          {getDiscountBanner({ cid }) && (
            <div className="topbar">
              <p className="topbartxt">
                <span>20% Off</span>, Valid through{' '}
                <span>{moment().format('Do MMMM')}</span>
              </p>
            </div>
          )}
          <div className="contentWrap">
            <p className="up-txt1">WAIT! Your Order Is Not Complete</p>
            <p className="up-txt2">
              Get better results by adding on the <strong>CBD Capsules</strong>{' '}
              to your order. Take advantage of our special offer-{' '}
              <strong>Buy 2 Bottles &amp; Get 1 Bottle Free</strong>{' '}
            </p>
            <div className="pop-coupon">
              <img
                alt="combo"
                src="/static/assets/images/up1-combo.png"
                style={{
                  position: 'absolute',
                  top: '95px',
                  left: '10px',
                  width: '320px',
                }}
              />
              <div className="up1-content">
                <img
                  alt="timer-icon"
                  src="/static/assets/images/timer-icon.png"
                  className="up-timer"
                />
                <p className="prod-txt">
                  Buy 2 Bottles Of<br />
                  <span>CBD Capsules</span>
                </p>
                <p className="prod-txt">+</p>
                <p className="prod-txt">
                  Get 1 Bottle<br />
                  <span>Absolutely Free</span>
                </p>
                <p className="price-txt">
                  Today Only<br />
                  <span>129.95</span> {getDiscountBanner({ cid }) ? 61.0 : 77.0}/ea
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
              id="capsule-yes"
              src="/static/assets/images/up1-btn.png"
              alt=""
              className="up-btn"
              type="image"
              onClick={this.upgrade}
            />
            <img
              src="/static/assets/images/secure256.png"
              alt=""
              className="up-secur"
            />
            <a
              id="capsule-no"
              href="javascript:void(0);"
              className="up-no-thanks"
              onClick={this.skipUpsell}
            >
              <img alt="No Thanks" src="/static/assets/images/close-icon.png" />&nbsp;No,
              I don't want better results.
            </a>
            <img
              src="/static/assets/images/card-secure.png"
              alt=""
              className="card-secure"
            />
          </div>
        </div>
        <div className="clearall" />
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

const Upsell1Treatment2 = withRouter(Upsell1Treatment2Component);

export { Upsell1Treatment2 };
