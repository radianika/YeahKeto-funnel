import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import { PromoCheckoutContainer } from 'react/containers';
import { AuthActions, OrderActions } from 'redux/actions';
import { PromoSession } from 'react/components/common';
import idx from 'idx';

class Promo extends React.PureComponent {
  static async getInitialProps({
    ctx: {
      store,
      isServer,
      query: {
        visitorId, variationId, requestAgent, sessionId,
      },
      req: {
        session: { ip },
      },
    },
  }) {
    if (isServer) {
      store.dispatch(AuthActions.setUniqueSessionId({ sessionId }));
      store.dispatch(
        AuthActions.setAbtastyParams({
          visitorId,
          variationId,
          requestAgent,
          ip,
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
      'abtastyParams_313018',
      JSON.stringify(this.props.abtastyParams),
    );
    const body = {
      campaign_id: '313018',
      variation_id: this.props.abtastyParams.variationId,
      tracking_data: {
        device_type: 'DESKTOP',
        ip: this.props.abtastyParams.ip,
        origin: 'Promo Desktop checkout',
        timestamp: moment().format(),
        visitor_id: this.props.abtastyParams.visitorId,
      },
    };
    axios.post('/abtasty', {
      ...body,
      action: 'campaign_activated_event',
    });
  };

  postVisitEvent = () => {
    const { localStorage } = window;
    const abtastyParams = JSON.parse(
      localStorage.getItem('abtastyParams_313018'),
    );
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
            href="/static/assets/css/promo/desktop/checkout.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/promo-style.css"
          />
        </Head>
        <PromoSession pageType="checkoutPage" />
        <PromoCheckoutContainer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = reduxState => ({
  order: idx(reduxState, _ => _.order.order),
  getOrderDetailsStatus: idx(reduxState, _ => _.order.getOrderDetailsStatus),
  abtastyParams: reduxState.auth.abtastyParams,
});

export default connect(mapStateToProps, { ...OrderActions })(Promo);
