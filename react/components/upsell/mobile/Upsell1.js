import React from 'react';
import moment from 'moment';
import axios from 'axios';
import { PromoSession, Footer } from 'react/components/common';
import { withRouter } from 'next/router';
import { getQueryString } from 'helpers';
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
    this.postActionTracker();
    this.props.upgrade(213, '/promo/mobile/upsell-2');
  };

  skipUpsell = () => {
    window.location.assign(`/promo/mobile/upsell-1-1?${getQueryString()}`);
  };

  postActionTracker = () => {
    const { abtastyParams } = this.props;
    const body = {
      name: 'upsell1-control',
      value_string: 'upsell1-control',
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'MOBILE',
        origin: 'Upsell1Control',
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
    console.info('Rendering Upsell Control');
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage1" />
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
            src="/static/assets/images/up1-bottle.png"
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
              </span>{' '}
              77/<sup>ea</sup>{' '}
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
              id="order-pulse-upsell1-mobile"
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
                id="skip-pulse-upsell1-mobile"
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
            id="skip-pulse-satisfaction-box-mobile"
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
              id="skip-pulse-satisfaction-box-mobile"
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
