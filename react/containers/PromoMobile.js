import React from 'react';
import {
  PromoSprite,
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
      <React.Fragment>
        <div id="container">
          <PromoSectionOneMobile />
          <PromoSectionTwoMobile />
          <PromoSprite />
          <PromoSectionThreeMobile />
          <PromoSectionFourMobile />
          <PromoSectionFiveMobile />
          <PromoSectionSixMobile />
          <PromoSectionSevenMobile />
          <div style={{ clear: 'both' }} />
          <FooterPromo />
        </div>
      </React.Fragment>
    );
  }
}

export { PromoMobileContainer };
