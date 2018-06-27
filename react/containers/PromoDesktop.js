import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
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
import { createNewSession } from 'redux/actions/authActions';
import { FooterPromo } from 'react/components/promo';
import { PromoSession } from 'react/components/common';

/**
 * @class PromoDesktop
 * @extends {React.PureComponent}
 * @description First page in promo flow for desktop
 */
class PromoDesktop extends React.PureComponent {
  componentDidMount() {
    const { localStorage } = window;
    this.props.createNewSession();
    localStorage.clear();
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={{ display: 'none' }}>American Science CBD</h1>
        <div className="topbar">
          <div className="container">
            <p className="topbartxt">
              <span>WARNING:</span> Due to extremely high media demand, there is
              limited supply of <span>CBD Oil</span> in stock as of{' '}
              <span>{moment().format('dddd, ll')}</span>
            </p>
          </div>
        </div>
        <PromoSectionOneDesktop />
        <PromoSectionTwoDesktop />
        <PromoStrip tagID="promo-strip-scroll-desktop-1" />
        <PromoSectionThreeDesktop />
        <PromoStrip tagID="promo-strip-scroll-desktop-2" />
        <PromoSectionFourDesktop />
        <PromoStrip tagID="promo-strip-scroll-desktop-3" />
        <PromoSectionFiveDesktop />
        <PromoStrip tagID="promo-strip-scroll-desktop-4" />
        <PromoSectionSixDesktop />
        <PromoStrip tagID="promo-strip-scroll-desktop-5" />
        <PromoSectionSevenDesktop />
        <div style={{ clear: 'both' }} />
        <FooterPromo />
        {this.props.sessionId && <PromoSession pageType="leadPage" />}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    sessionId: state.auth.sessionId,
  };
}

const PromoDesktopContainer = connect(mapStateToProps, { createNewSession })(
  PromoDesktop,
);

export default PromoDesktopContainer;
