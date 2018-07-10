import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import moment from 'moment';
import axios from 'axios';
import { PromoDesktopContainer } from 'react/containers';
import { AuthActions } from 'redux/actions';

class Promo extends React.PureComponent {
  static getInitialProps({
    ctx: {
      store,
      isServer,
      query: { visitorId, variationId, requestAgent, campaignMaps },
      req: {
        session: { ip },
      },
    },
  }) {
    if (isServer) {
      store.dispatch(
        AuthActions.setAbtastyParams({
          visitorId,
          variationId,
          requestAgent,
          ip,
          campaignMaps,
        }),
      );
    }
  }

  componentDidMount() {
    this.postCampaignActivatedEvent();
    this.postVisitEvent();
  }

  postCampaignActivatedEvent = () => {
    const { localStorage } = window;
    localStorage.setItem(
      'abtastyParams',
      JSON.stringify(this.props.abtastyParams),
    );
    localStorage.setItem(
      'campaignMaps',
      JSON.stringify(this.props.abtastyParams.campaignMaps),
    );

    const event1 = {
      campaign_id: '312492',
      variation_id: this.props.abtastyParams.variationId,
      tracking_data: {
        device_type: 'DESKTOP',
        ip: this.props.abtastyParams.ip,
        origin: 'Promo Desktop',
        timestamp: moment().format(),
        visitor_id: this.props.abtastyParams.visitorId,
      },
    };

    const event2 = {
      campaign_id: '313763',
      variation_id: this.props.abtastyParams.campaignMaps['313763'],
      tracking_data: {
        device_type: 'DESKTOP',
        ip: this.props.abtastyParams.ip,
        origin: 'Promo Desktop',
        timestamp: moment().format(),
        visitor_id: this.props.abtastyParams.visitorId,
      },
    };

    axios.post('/multicampaign-abtasty', {
      312492: {
        ...event1,
        action: 'campaign_activated_event',
      },
      313763: {
        ...event2,
        action: 'campaign_activated_event',
      },
    });
  };

  postVisitEvent = () => {
    const { localStorage } = window;
    const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));
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
    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Oil</title>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-hind.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/formvalidation/formValidation.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/promo/desktop/index.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/promo-style.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/common.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/sprites-style.css"
          />
          <script src="https://fast.wistia.net/assets/external/E-v1.js" async />
        </Head>
        <PromoDesktopContainer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  abtastyParams: state.auth.abtastyParams,
});

export default connect(mapStateToProps, { ...AuthActions })(Promo);
