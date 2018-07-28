import React from 'react';
import moment from 'moment';
import axios from 'axios';
import Head from 'next/head';
import { PromoSession, Footer } from 'react/components/common';
import { withRouter } from 'next/router';
import { getQueryString, getDiscountBanner } from 'helpers';
import { SatisfactionBox } from './SatisfactionBox';

/**
 * @class Upsell1Treatment1Component
 * @extends {React.PureComponent}
 * @description Mobile component rendered after checkout page <br />
 */
class Upsell1Treatment1Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      shouldAddPixel: false,
      revenue: ''
    };
  }
  
  componentDidMount() {
    this.postVisitEvent();
    let upsell1 = JSON.parse(localStorage.getItem('upsell1'));
    upsell1 = upsell1[0];
  
    this.setState({
      shouldAddPixel: true
    },() => {
      this.setState({ revenue: upsell1.OrderInfo.TotalAmount})
    });
  }

  upgrade = () => {
    this.props.sendTransactionDetails(
      'order-confirmation-upsell-1',
      'Upsell1Treatment1',
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
            href="/static/mobile/css/upsell-treatment1.css"
            rel="stylesheet"
          />
        </Head>
        {this.state.shouldAddPixel ?
          <React.Fragment>
            <script>{`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '321559294932280');
              fbq('track', 'Purchase', {currency: 'USD', value: ${this.state.revenue}});
              `}
            </script>

            <noscript>
              <iframe
                src={`https://thefiresoflife.com/pixel_page?id=321559294932280&amp;ev=Purchase&amp;cd[currency]=USD&amp;cd[value]=${this.state.revenue}`}
                width="1"
                height="1"
                alt=""
                style={{display: 'none'}}
              />
            </noscript>
          </React.Fragment> : null
        }

        <PromoSession pageType="upsellPage1" />
        {getDiscountBanner({ cid }) && (
          <div className="topbar">
            <p className="topbartxt">
              PROMO CODE <span>CBD33</span> APPLIED!
              <span> HURRY, GET 20% OFF TODAY!</span>
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
            <p className="offer-valid">
              Offer Valid Till{' '}
              <span id="showdate"> {moment().format('Do MMMM YYYY')}</span>
            </p>
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
          <p className="offer-valid">
            Offer Valid Till{' '}
            <span id="showdate"> {moment().format('Do MMMM YYYY')}</span>
          </p>
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

const Upsell1Treatment1 = withRouter(Upsell1Treatment1Component);

export { Upsell1Treatment1 };
