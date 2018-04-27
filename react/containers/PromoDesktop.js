import React from 'react';
import moment from 'moment';
import Head from 'next/head';
import {
  PromoStrip,
  PromoSectionOneDesktop,
  PromoSectionTwoDesktop,
  PromoSectionThreeDesktop,
  PromoSectionFourDesktop,
  PromoSectionFiveDesktop,
  PromoSectionSixDesktop,
  PromoSectionSevenDesktop,
} from 'react/components/promo/desktop';
import 'styles/promo-desktop.scss';

class PromoDesktopContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <title>{this.props.title || 'American Science CBD Hemp Oil'}</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            key="viewport"
          />
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/simpleMobileMenu.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/fonts.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-open-sans.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-raleway.css"
          />
        </Head>
        <h1 style={{ display: 'none' }}>American cience CBD</h1>
        <div className="topbar">
          <div className="container">
            <p className="topbartxt">
              <span>WARNING:</span> Due to extremely high media demand, there is
              limited supply of <span>Hemp Oil</span> in stock as of{' '}
              <span>{moment().format('DD/MMM/YYYY')}</span>
            </p>
          </div>
        </div>
        <PromoSectionOneDesktop />
        <PromoSectionTwoDesktop />
        <PromoStrip />
        <PromoSectionThreeDesktop />
        <PromoStrip />
        <PromoSectionFourDesktop />
        <PromoStrip />
        <PromoSectionFiveDesktop />
        <PromoStrip />
        <PromoSectionSixDesktop />
        <PromoStrip />
        <PromoSectionSevenDesktop />
        <div style={{ clear: 'both' }} />
      </React.Fragment>
    );
  }
}

export { PromoDesktopContainer };
