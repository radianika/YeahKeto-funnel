import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { PromoMobileContainer } from 'react/containers';
import { PromoSession, Spinner } from 'react/components/common';
import { createNewSession } from 'redux/actions/authActions';
import Router from 'next/router';
import { AuthActions } from 'redux/actions';
import moment from 'moment';
import axios from 'axios';

class Promo extends React.PureComponent {
  static getInitialProps({
    ctx: {
      store,
      isServer,
      query: {
        visitorId, variationId, requestAgent, campaignMaps,
      },
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
          campaignMaps,
          ip,
        }),
      );
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      showSpinner: false,
    };
  }

  componentDidMount() {
    this.props.createNewSession();
    this.postCampaignActivatedEvent();
    this.postVisitEvent();
    const { localStorage } = window;
    localStorage.setItem(
      'abtastyParams',
      JSON.stringify(this.props.abtastyParams),
    );
    Router.onRouteChangeStart = () => {
      this.setState({ showSpinner: true });
    };
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
      campaign_id: '312494',
      variation_id: this.props.abtastyParams.variationId,
      tracking_data: {
        device_type: 'MOBILE_PHONE',
        ip: this.props.abtastyParams.ip,
        origin: 'Promo Mobile',
        timestamp: moment().format(),
        visitor_id: this.props.abtastyParams.visitorId,
      },
    };

    const event2 = {
      campaign_id: '313876',
      variation_id: this.props.abtastyParams.campaignMaps['313876'],
      tracking_data: {
        device_type: 'DESKTOP',
        ip: this.props.abtastyParams.ip,
        origin: 'Promo Desktop',
        timestamp: moment().format(),
        visitor_id: this.props.abtastyParams.visitorId,
      },
    };

    const event3 = {
      campaign_id: '314235',
      variation_id: this.props.abtastyParams.campaignMaps['314235'],
      tracking_data: {
        device_type: 'DESKTOP',
        ip: this.props.abtastyParams.ip,
        origin: 'Promo Desktop',
        timestamp: moment().format(),
        visitor_id: this.props.abtastyParams.visitorId,
      },
    };

    const event4 = {
      campaign_id: '314336',
      variation_id: this.props.abtastyParams.campaignMaps['314336'],
      tracking_data: {
        device_type: 'DESKTOP',
        ip: this.props.abtastyParams.ip,
        origin: 'Promo Desktop',
        timestamp: moment().format(),
        visitor_id: this.props.abtastyParams.visitorId,
      },
    };

    const event5 = {
      campaign_id: '314411',
      variation_id: this.props.abtastyParams.campaignMaps['314411'],
      tracking_data: {
        device_type: 'DESKTOP',
        ip: this.props.abtastyParams.ip,
        origin: 'Promo Desktop',
        timestamp: moment().format(),
        visitor_id: this.props.abtastyParams.visitorId,
      },
    };

    axios.post('/multicampaign-abtasty', {
      312494: {
        ...event1,
        action: 'campaign_activated_event',
      },
      313876: {
        ...event2,
        action: 'campaign_activated_event',
      },
      314235: {
        ...event3,
        action: 'campaign_activated_event',
      },
      314336: {
        ...event4,
        action: 'campaign_activated_event',
      },
      314411: {
        ..event5,
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
        device_type: 'MOBILE_PHONE',
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
          <meta name="viewport" content="width=640, user-scalable=0" />
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-hind.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/promo/mobile/index.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/mb-style.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/mb-sprites-style.css"
          />
        </Head>
        {this.props.sessionId && <PromoSession pageType="leadPage" />}
        <PromoMobileContainer />
        {this.state.showSpinner && <Spinner />}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    sessionId: state.auth && state.auth.sessionId,
    abtastyParams: state.auth.abtastyParams,
  };
}

export default connect(mapStateToProps, { createNewSession })(Promo);
