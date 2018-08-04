import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { UpsellMobileContainer } from 'react/containers';
import { AuthActions, OrderActions } from 'redux/actions';

class PromoMobileUpsell extends React.PureComponent {
  static async getInitialProps(props) {
    const {
      store,
      isServer,
      query: {
        visitorId,
        variationId,
        campaignId,
        requestAgent,
        sessionId,
        prev,
        affId,
      },
      req: {
        session: { ip },
      },
    } = props.ctx;
    if (isServer) {
      store.dispatch(AuthActions.setUniqueSessionId({ sessionId }));
      store.dispatch(
        AuthActions.setAbtastyParams({
          visitorId,
          variationId,
          campaignId,
          requestAgent,
          ip,
          prev,
        }),
      );

      return affId;
    }
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
            href="https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700"
            rel="stylesheet"
          />
          <link href="/static/mobile/css/upsell.css" rel="stylesheet" />
          {/* <link rel="stylesheet" type="text/css" href="/static/assets/css/mb-style.css" /> */}
        </Head>
        <UpsellMobileContainer {...props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = reduxState => ({
  order: reduxState.order.order,
});

export default connect(mapStateToProps, { ...OrderActions, ...AuthActions })(
  PromoMobileUpsell,
);
