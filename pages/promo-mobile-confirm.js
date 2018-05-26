import React from 'react';
import Head from 'next/head';
import { MobileConfirmContainer } from 'react/containers';
import { withReduxSaga } from 'redux/store';
import { AuthActions, OrderActions } from 'redux/actions';
import { PromoSession } from 'react/components/common';

class Confirm extends React.PureComponent {
  static async getInitialProps({
    req, store, isServer, query,
  }) {
    if (isServer) {
      store.dispatch(
        AuthActions.setUniqueSessionId({ sessionId: query.sessionId }),
      );

      if (query.orderId) {
        store.dispatch(
          OrderActions.getOrderDetails({
            orderId: query.orderId,
            headers: {
              'x-ascbd-req-origin': req.get('host'),
            },
          }),
        );
      }
    }
  }
  render() {
    const { props } = this;
    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Hemp Oil</title>
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

export default withReduxSaga(Confirm);
