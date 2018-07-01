import React from 'react';
import { PromoSession, Footer } from 'react/components/common';
import { getQueryString } from 'helpers';
import { getVariationValue } from 'helpers/abtasty';
import { AuthActions } from 'redux/actions';
import { connect } from 'react-redux';

/**
 * @class Upsell2
 * @extends {React.PureComponent}
 * @description Mobile component rendered after Upsell1 pages
 */
class Upsell2Mobile extends React.PureComponent {
  upgrade = () => {
    this.props.upgrade(217, '/promo/mobile/thankyou');
  };

  skipUpsell = () => {
    window.location.assign(`/promo/mobile/upsell-2-1?${getQueryString()}`);
  };

  render() {
    const { variationId } = this.props;
    // To be stored in redux now
    const campaignId = 308075;
    const currentConfig = getVariationValue(campaignId, variationId, 'upsell2');
    console.log({ currentConfig });
    console.log(currentConfig.showBanners);
    return (
      <React.Fragment>
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
            alt="up-prod"
          />
          <div className="clearall" />
          <div className="price-box">
            <p className="price-box-txt1">
              Buy 2 Jars + <span>Get 1 Free</span>
            </p>
            <p className="price-box-txt2">Save 60% Today</p>
            <p className="price-box-txt3">
              <img
                src="/static/assets/images/upsell2-mobile/arrow-left.png"
                width="77"
                height="33"
                alt="arrow-left"
                className="arrow-left"
              />
              <span className="old-price">
                <img
                  src="/static/assets/images/upsell2-mobile/price-cut.png"
                  alt="price-cut"
                />130/<sup>ea</sup>
              </span>{' '}
              87/<sup>ea</sup>{' '}
              <img
                src="/static/assets/images/upsell2-mobile/arrow-right.png"
                width="77"
                height="33"
                alt="arrow-right"
                className="arrow-right"
              />
            </p>
          </div>

          <div className="bnt-sec">
            <p className="offer-valid">
              Offer Valid Till <span id="showdate"> 1st July 2018</span>
            </p>
            <a
              id="order-pulse-upsell2-mobile-1"
              href="javascript:void(0)"
              onClick={this.upgrade}
            >
              <img
                src="/static/assets/images/ord-btn.png"
                alt="order-btn"
                width="370"
                height="71"
                className="ord-btn pulse"
              />
            </a>
            <p className="thanks-txt">
              <a
                id="skip-pulse-upsell2-mobile-1"
                href="javascript:void(0)"
                onClick={this.skipUpsell}
              >
                <img
                  src="/static/assets/images/cut-icon.png"
                  width="15"
                  height="15"
                  alt="cut-icon"
                  className="cut-icon"
                />
                {"No, I don't want better results."}
              </a>
            </p>
            <p className="thanks-txt">
              <a href="upsell-1-1.php">
                <img
                  src="/static/assets/images/cut-icon.png"
                  alt=""
                  className="cut-icon"
                  width="15"
                  height="15"
                />{' '}
                No, I don't want better results.
              </a>
            </p>
          </div>

          <div className="up-strip" style={{ 'margin-top': '50px' }}>
            <h4>BENEFITS OF CBD WARMING BALM INCLUDE ...</h4>
          </div>

          <div className="clearall" />

          <div className="up-bottom-box">
            <img
              src="/static/assets/images/upsell2-mobile/up1-img1.png"
              alt="upsell-img"
            />
            <p className="box-txt1">FULL SPECTRUM FORMULA</p>
            <p className="box-txt2">
              CBD Warming Balm is INFUSED with highly a concentrated CBD which
              is known for its medicinal properties and yields a more effective
              solution than any balm in the world.
            </p>
          </div>

          <div className="up-bottom-box">
            <img
              src="/static/assets/images/upsell2-mobile/up2-img2.png"
              alt="upsell-2-img-2"
            />
            <p className="box-txt1">OFFERS ANTIOXIDANT SUPPORT</p>
            <p className="box-txt2">
              CBD Warming Balm works at a cellular level to combat free radical
              damage, boost overall immunity, and provides healing as well as
              aromatherapy benefits.
            </p>
          </div>

          <div className="up-bottom-box">
            <img
              src="/static/assets/images/upsell2-mobile/up2-img3.png"
              alt="upsell-2-img-3"
            />
            <p className="box-txt1">INSTANTLY RELIEVES CHRONIC PAIN</p>
            <p className="box-txt2">
              Melt away muscle fatigue, pain, swelling, and discomfort with
              American Science CBD WARMING BALM&apos;S deep, penetrating warmth
              providing FAST relief that will amaze you.
            </p>
          </div>

          <div className="bnt-sec">
            <a
              id="order-pulse-upsell2-mobile-2"
              href="javascript:void(0)"
              onClick={this.upgrade}
            >
              <img
                src="/static/assets/images/ord-btn.png"
                alt="order-btn"
                width="370"
                height="71"
                className="ord-btn pulse"
              />
            </a>
            <p className="thanks-txt">
              <a
                id="skip-pulse-upsell2-mobile-2"
                href="javascript:void(0)"
                onClick={this.skipUpsell}
              >
                <img
                  src="/static/assets/images/cut-icon.png"
                  width="15"
                  height="15"
                  alt="cut-icon"
                  className="cut-icon"
                />{' '}
                No, I don&apos;t want better results.
              </a>
            </p>
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

function mapStateToProps(state) {
  return {
    variationId: state.auth.abtastyParams.variationId,
  };
}

const Upsell2 = connect(mapStateToProps, { ...AuthActions })(Upsell2Mobile);

export { Upsell2 };
