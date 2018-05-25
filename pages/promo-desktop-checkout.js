import React from 'react';
import Head from 'next/head';
import { PromoCheckoutContainer } from 'react/containers';
import { withReduxSaga } from 'redux/store';
import { AuthActions, OrderActions } from 'redux/actions';
import { PromoSession } from 'react/components/common';

class Promo extends React.PureComponent {
  static async getInitialProps({
    req, store, isServer, query,
  }) {
    if (isServer) {
      store.dispatch(
        AuthActions.setUniqueSessionId({ sessionId: query.sessionId }),
      );
      store.dispatch(
        OrderActions.getOrderDetails({
          orderId: query.orderId,
          headers: {
            'x-ascbd-req-origin': req.headers.origin,
          },
        }),
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Hemp Oil</title>
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

export default withReduxSaga(Promo);
