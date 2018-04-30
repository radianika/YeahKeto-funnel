import React from 'react';
import {
  PromoSectionOneMobile,
  PromoSectionTwoMobile,
  PromoSectionThreeMobile,
  PromoSectionFourMobile,
  PromoSectionFiveMobile,
  PromoSectionSixMobile,
  PromoSectionSevenMobile,
  FooterPromo,
} from 'react/components/promo/mobile';

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
        <FooterPromo />
      </div>
    );
  }
}

export { PromoMobileContainer };
