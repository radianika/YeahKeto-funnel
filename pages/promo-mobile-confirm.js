import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import { MobileConfirmContainer } from 'react/containers';
import { connect } from 'react-redux';
import { AuthActions, OrderActions } from 'redux/actions';
import { PromoSession } from 'react/components/common';
import idx from 'idx';
import axios from 'axios/index';

class Confirm extends React.PureComponent {
  static async getInitialProps({
    ctx: {
      store,
      isServer,
      query: {
        visitorId, requestAgent, campaignMaps, sessionId, productId,
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
          requestAgent,
          ip,
          campaignMaps,
          productId,
        }),
      );
      store.dispatch(AuthActions.setUniqueSessionId({ sessionId }));
    }
  }

  componentDidMount() {
    this.postCampaignActivatedEvent();
    this.postVisitEvent();
  }

  postCampaignActivatedEvent() {
    const campaigns = ['317687', '318677', '319527'];
    const tracking_data = {
      device_type: 'MOBILE_PHONE',
      ip: this.props.abtastyParams.ip,
      origin: 'Promo Mobile checkout',
      timestamp: moment().format(),
      visitor_id: this.props.abtastyParams.visitorId,
    };
    const postData = {};

    campaigns.forEach(campaign => {
      postData[campaign] = {
        campaign_id: campaign,
        variation_id: this.props.abtastyParams.campaignMaps[campaign],
        tracking_data,
        action: 'campaign_activated_event',
      };
    });

    axios.post('/multicampaign-abtasty', postData);
  }

  postVisitEvent() {
    axios.post('/abtasty', {
      tracking_data: {
        visitor_id: this.props.abtastyParams.visitorId,
        device_type: 'MOBILE_PHONE',
        origin: window.location.href,
        timestamp: moment().format(),
        ip: this.props.abtastyParams.ip,
      },
      action: 'visit_event',
    });
  }

  render() {
    const { props } = this;
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
            href="/static/assets/fonts/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/mb-style.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/promo/mobile/index.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/formvalidation/formValidation.min.css"
          />
        </Head>
        <PromoSession pageType="checkoutPage" />
        <MobileConfirmContainer {...props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = reduxState => ({
  order: reduxState.order.order,
  getOrderDetailsStatus: idx(reduxState, _ => _.order.getOrderDetailsStatus),
  abtastyParams: reduxState.auth.abtastyParams,
});

export default connect(mapStateToProps, { ...OrderActions })(Confirm);
