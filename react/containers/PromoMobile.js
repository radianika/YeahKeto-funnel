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

class PromoMobileContainer extends React.PureComponent {
  render() {
    return (
      <div id="container">
        <PromoSectionOneMobile />
        <PromoSectionTwoMobile />
        <PromoSectionThreeMobile />
        <PromoSectionFourMobile />
        <PromoSectionFiveMobile />
        <PromoSectionSixMobile />
        <PromoSectionSevenMobile />
        <div style={{ clear: 'both' }} />
        <FooterPromo isMobile />
      </div>
    );
  }
}

export { PromoMobileContainer };
