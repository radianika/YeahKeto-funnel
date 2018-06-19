import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { PromoSession } from 'react/components/common';
import { getQueryString } from 'helpers';

class Upsell2 extends React.PureComponent {
  postActionTracker = yes => {
    const { localStorage } = window;
    const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));
    const body = {
      name: yes ? 'upsell2_yes' : 'upsell2_no',
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type:
          abtastyParams.requestAgent === 'desktop' ? 'DESKTOP' : 'MOBILE_PHONE',
        origin: 'Upsell2',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };
    axios.post('/abtasty', { ...body, action: 'action_tracking_event' });
  };

  upgrade = () => {
    this.postActionTracker('yes');
    this.props.upgrade(217, '/promo/desktop/thankyou');
  };

  skipUpsell = () => {
    this.postActionTracker();
    window.location.assign(`/promo/desktop/upsell-2-1?${getQueryString()}`);
  };
  render() {
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage2" />
        <div className="upsell-strip">
          <h3>WAIT! YOUR ORDER IS NOT COMPLETE!</h3>
          <p>
            87% Customers Added The{' '}
            <strong>CBD Pain Relief Warming Balm</strong> To Their Order!{' '}
          </p>
        </div>
        <div className="up-mid-box-right">
          <img
            src="/static/assets/images/upsell2/balm3-bottle.png"
            alt="balm-3-bottle"
            className="up-product-3"
          />
          <img
            alt="upsell-arrow-1"
            src="/static/assets/images/upsell2/up-arw1.png"
            style={{ position: 'absolute', left: '220px', top: '400px' }}
          />
          <div className="up-rgt-content-opt3">
            <p className="up-txt1">Get Instant Pain Relief</p>
            <p className="with-txt">with</p>
            <p className="up-txt2">CBD Warming Balm</p>
            <div className="price-box pricebox3">
              <p className="price-box-txt1">
                Buy 2 Jars + <span>Get 1 Free</span>
              </p>
              <p className="price-box-txt2">Save 60% Today</p>
              <p className="price-box-txt3">
                <img
                  src="/static/assets/images/upsell2/arrow-left.png"
                  alt="arrow-left"
                  className="arrow-left"
                  width="77"
                  height="33"
                />
                <span className="old-price">
                  <img
                    alt="price-cut"
                    src="/static/assets/images/upsell2/price-cut.png"
                  />130/<sup>ea</sup>
                </span>{' '}
                87/<sup>ea</sup>{' '}
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
                  src="/static/assets/images/upsell2/ord-btn.png"
                  alt="order-btn"
                  className="ord-btn pulse"
                  width="370"
                  height="71"
                />
              </a>
              <p className="thanks-txt">
                <a href="javascript:void(0)" onClick={this.skipUpsell}>
                  <img
                    src="/static/assets/images/upsell2/cut-icon.png"
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
        <div className="upsell-strip">
          <h4 className="strip-txt3">
            BENEFITS OF CBD WARMING BALM INCLUDE ...
          </h4>
        </div>
        <div className="clearall" />
        <div className="up-bottom-box box1" style={{ height: '410px' }}>
          <img alt="" src="/static/assets/images/upsell2/full-spect.jpg" />
          <p className="box-txt1">FULL SPECTRUM FORMULA</p>
          <p className="box-txt2">
            CBD Warming Balm is INFUSED with highly a concentrated CBD which is
            known for its medicinal properties and yields a more effective
            solution than any balm in the world.
          </p>
        </div>

        <div className="up-bottom-box" style={{ height: '410px' }}>
          <img
            alt="upsell-bx-2-bg"
            src="/static/assets/images/upsell2/up-bx2-bg.jpg"
          />
          <p className="box-txt1">OFFERS ANTIOXIDANT SUPPORT</p>
          <p className="box-txt2">
            CBD Warming Balm works at a cellular level to combat free radical
            damage, boost overall immunity, and provides healing as well as
            aromatherapy benefits.
          </p>
        </div>

        <div className="up-bottom-box" style={{ height: '410px' }}>
          <img
            alt="pain-releaf"
            src="/static/assets/images/upsell2/pain-releaf.jpg"
          />
          <p className="box-txt1">INSTANTLY RELIEVES Chronic Pain</p>
          <p className="box-txt2">
            Melt away muscle fatigue, pain, swelling, and discomfort with
            American Science CBD WARMING BALM&apos;S deep, penetrating warmth
            providing FAST relief that will amaze you.
          </p>
        </div>

        <div className="bnt-sec">
          <a href="javascript:void(0)" onClick={this.upgrade}>
            <img
              src="/static/assets/images/upsell2/ord-btn.png"
              alt="order-btn"
              className="ord-btn pulse"
              width="370"
              height="71"
            />
          </a>
          <p className="thanks-txt">
            <a href="javascript:void(0)" onClick={this.skipUpsell}>
              <img
                src="/static/assets/images/upsell2/cut-icon.png"
                alt="cut-icon"
                className="cut-icon"
                width="15"
                height="15"
              />{' '}
              No, I don&apos;t want better results.
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export { Upsell2 };
