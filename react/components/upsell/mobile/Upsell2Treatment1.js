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
class Upsell2Treatment1 extends React.PureComponent {
  componentDidMount() {
    this.postVisitEvent();
  }

  upgrade = button => {
    this.props.sendTransactionDetails(
      'order-confirmation-upsell-2',
      'Upsell2Treatment1',
    );
    this.postActionTracker('upsell-2-yes', `upsell-2-yes-${button}`);
    this.props.upgrade(217, '/promo/mobile/thankyou');
  };

  skipUpsell = button => {
    this.postActionTracker('upsell-2-no', `upsell-2-no-${button}`);
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
        origin: 'Upsell2Treatment1',
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
    return (
      <React.Fragment>
        <Head>
          <link
            href="/static/mobile/css/upsell2-treatment1.css"
            rel="stylesheet"
          />
        </Head>
        <PromoSession pageType="upsellPage2" />
        <div className="up-strip">
          <h3>WAIT! YOUR ORDER IS NOT COMPLETE!</h3>
          <p>
            87% Customers Added The<br />
            <strong>CBD Pain Relief Warming Balm</strong> To Their Order!
          </p>
        </div>

        <div className="upsell-box">
          <p className="up-txt1">GET INSTANT PAIN RELIEF</p>
          <p className="with-txt">with</p>
          <p className="up-txt2">CBD Warming Balm</p>
          <img
            src="/static/assets/images/upsell2-mobile/up-prod3.jpg"
            className="up-prod"
          />
          <div className="clearall" />
          <div className="price-box">
            <p className="price-box-txt1">
              Buy 2 Jars + <span>Get 1 Free</span>
            </p>
            <p className="price-box-txt2">Save 60% Today</p>
            <p className="price-box-txt3">
              <img
                src="/static/assets/images/arrow-left.png"
                width="77"
                height="33"
                alt=""
                className="arrow-left"
              />
              <span className="old-price">
                <img src="/static/assets/images/price-cut.png" />130/<sup>
                  ea
                </sup>
              </span>{' '}
              87/<sup>ea</sup>{' '}
              <img
                src="images/arrow-right.png"
                width="77"
                height="33"
                alt=""
                className="arrow-right"
              />
            </p>
          </div>

          <div className="bnt-sec">
            <p className="offer-valid">
              Offer Valid Till{' '}
              <span id="showdate"> {moment().format('Do MMMM YYYY')}</span>
            </p>
            <a
              id="order-balm-upsell2-mobile-treatment1-1"
              href="javascript:void(0)"
              onClick={() => this.upgrade('top')}
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
                id="skip-balm-upsell2-mobile-treatment1-1"
                href="javascript:void(0)"
                onClick={() => this.skipUpsell('top')}
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
        </div>

        <div className="up-strip" style={{ 'margin-top': '50px' }}>
          <h4>BENEFITS OF CBD WARMING BALM INCLUDE ...</h4>
        </div>

        <div className="clearall" />
        <div className="up-bottom-box">
          <img src="/static/assets/images/up1-img1.png" />
          <p className="box-txt1">FULL SPECTRUM FORMULA</p>
          <p className="box-txt2">
            CBD Warming Balm is INFUSED with highly a concentrated CBD which is
            known for its medicinal properties and yields a more effective
            solution than any balm in the world.
          </p>
        </div>

        <div className="up-bottom-box">
          <img src="/static/assets/images/upsell2-mobile/up2-img2.png" />
          <p className="box-txt1">OFFERS ANTIOXIDANT SUPPORT</p>
          <p className="box-txt2">
            CBD Warming Balm works at a cellular level to combat free radical
            damage, boost overall immunity, and provides healing as well as
            aromatherapy benefits.
          </p>
        </div>

        <div className="up-bottom-box">
          <img src="/static/assets/images/upsell2-mobile/up2-img3.png" />
          <p className="box-txt1">INSTANTLY RELIEVES CHRONIC PAIN</p>
          <p className="box-txt2">
            Melt away muscle fatigue, pain, swelling, and discomfort with
            American Science CBD WARMING BALM'S deep, penetrating warmth
            providing FAST relief that will amaze you.
          </p>
        </div>

        <div className="bnt-sec">
          <p className="offer-valid">
            Offer Valid Till{' '}
            <span id="showdate"> {moment().format('Do MMMM YYYY')}</span>
          </p>
          <a
            id="order-balm-upsell2-mobile-treatment1-2"
            href="javascript:void(0)"
            onClick={() => this.upgrade('bottom')}
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
              id="skip-balm-upsell2-mobile-treatment1-2"
              href="javascript:void(0)"
              onClick={() => this.skipUpsell('bottom')}
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

export { Upsell2Treatment1 };
