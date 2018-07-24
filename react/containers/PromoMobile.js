import React from 'react';
import {
  PromoSectionOneMobile,
  PromoSectionTwoMobile,
  PromoSectionThreeMobile,
  PromoSectionFourMobile,
  PromoSectionFiveMobile,
  PromoSectionSixMobile,
  PromoSectionSevenMobile,
} from 'react/components/promo/mobile';
import { FooterPromo } from 'react/components/promo';
import { getDiscountBanner } from 'helpers';

/**
 * @class PromoMobileContainer
 * @extends {React.PureComponent}
 * @description First page on promo flow on mobile
 */
class PromoMobileContainer extends React.PureComponent {
  componentDidMount() {
    const { localStorage } = window;
    localStorage.clear();
  }

  render() {
    const { cid } = this.props.query;
    return (
      <div id="container">
        {getDiscountBanner({ cid }) && (
          <div className="topbar">
            <p className="topbartxt">
              PROMO CODE <span>CBD33</span> APPLIED!
              <span> HURRY, GET 20% OFF TODAY!</span>
            </p>
          </div>
        )}
        <PromoSectionOneMobile />
        <PromoSectionTwoMobile />
        <PromoSectionThreeMobile />
        <PromoSectionFourMobile />
        <PromoSectionFiveMobile />
        <PromoSectionSixMobile />
        <PromoSectionSevenMobile />
        <div style={{ clear: 'both' }} />
        <FooterPromo
          isMobile
          tagID="promo-shipping-form-submit-mobile-footer"
        />
      </div>
    );
  }
}

export default PromoMobileContainer;
