import React from 'react';
import moment from 'moment';
import axios from 'axios';
import { PromoSession, Footer } from 'react/components/common';
import { withRouter } from 'next/router';
import { getQueryString, getDiscountBanner } from 'helpers';
import { SatisfactionBox } from './SatisfactionBox';

/**
 * @class Upsell1Component
 * @extends {React.PureComponent}
 * @description Mobile component rendered after checkout page <br />
 */
class Upsell1Component extends React.PureComponent {
  componentDidMount() {
    this.postVisitEvent();
  }

  upgrade = () => {
    this.props.sendTransactionDetails('order-confirmation-upsell-1', 'Upsell1');
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
        <PromoSession pageType="upsellPage1" />
        {getDiscountBanner({ cid }) && (
          <div className="topbar">
            <p className="topbartxt">
              <span>20% Off</span>, Valid through{' '}
              <span>{moment().format('Do MMMM')}</span>
            </p>
          </div>
        )}
        <div className="up-strip">
          <h3>WAIT! YOUR ORDER IS NOT COMPLETE!</h3>
          <p>
            93% of Customers Added The<br />
            <strong>Maximum Strength CBD Capsules</strong> To Their Order!
          </p>
        </div>
        <div className="upsell-box">
          <p className="up-txt1">Amplify Your Results</p>
          <p className="with-txt">with</p>
          <p className="up-txt2">Maximum Strength CBD Capsules</p>
          <img
            src="/static/assets/images/up-prod-1.jpg"
            className="up-prod"
            alt=""
          />
          <div className="clearall" />
          <div className="price-box">
            <p className="price-box-txt1">
              Buy 2 Bottles + <span>Get 1 Free</span>
            </p>
            <p className="price-box-txt2">Save 60% Today</p>
            <p className="price-box-txt3">
              <img
                src="/static/assets/images/arrow-left-upsell.png"
                width="77"
                height="33"
                alt=""
                className="arrow-left"
              />
              <span className="old-price">
                <img src="/static/assets/images/price-cut.png" alt="" />120/
                <sup>ea</sup>
              </span>
              {getDiscountBanner({ cid }) ? (
                <React.Fragment>
                  <span className="old-price" style={{ marginLeft: 5 }}>
                    {' '}
                    <img src="/static/assets/images/price-cut.png" alt="" />
                    77/<sup>ea</sup>{' '}
                  </span>
                  <span>
                    {' '}
                    62/<sup>ea</sup>{' '}
                  </span>
                </React.Fragment>
              ) : (
                <span>
                  {' '}
                  77/<sup>ea</sup>{' '}
                </span>
              )}
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
            <a
              id="capsule-yes-top"
              href="javascript:void(0)"
              onClick={this.upgrade}
            >
              <img
                src="/static/assets/images/ord-btn.png"
                alt=""
                width="370"
                height="71"
                className="ord-btn pulse"
              />
            </a>
            <p className="thanks-txt">
              <a
                id="capsule-no-top"
                href="javascript:void(0)"
                onClick={this.skipUpsell}
              >
                <img
                  src="/static/assets/images/cut-icon.png"
                  width="15"
                  height="15"
                  alt=""
                  className="cut-icon"
                />
                {"No, I don't want better results."}
              </a>
            </p>
          </div>
        </div>
        <SatisfactionBox onSkip={this.skipUpsell} onUpgrade={this.upgrade} />
        <div className="bnt-sec">
          <a
            id="capsule-yes-bottom"
            href="javascript:void(0)"
            onClick={this.upgrade}
          >
            <img
              src="/static/assets/images/ord-btn.png"
              alt=""
              width="370"
              height="71"
              className="ord-btn pulse"
            />
          </a>
          <p className="thanks-txt">
            <a
              id="capsule-no-bottom"
              href="javascript:void(0)"
              onClick={this.skipUpsell}
            >
              <img
                src="/static/assets/images/cut-icon.png"
                width="15"
                height="15"
                alt=""
                className="cut-icon"
              />{' '}
              No, I don't want better results.
            </a>
          </p>
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

const Upsell1 = withRouter(Upsell1Component);

export { Upsell1 };
