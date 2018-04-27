import React from 'react';
import Head from 'next/head';
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
import 'styles/promo-mobile.scss';

class PromoMobileContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <title>{this.props.title || 'American Science CBD Hemp Oil'}</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico?v=2"
          />
          <meta name="viewport" content="width=640, user-scalable=0" />
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
        </Head>
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
