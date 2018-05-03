import React from 'react';
import Head from 'next/head';
import { MobileConfirmContainer } from 'react/containers';
import { withReduxSaga } from 'redux/store';
import { AuthActions, OrderActions } from 'redux/actions';

class Confirm extends React.PureComponent {
  static async getInitialProps({ store, isServer, query }) {
    if (isServer) {
      store.dispatch(
        AuthActions.setUniqueSessionId({ sessionId: query.sessionId }),
      );
      store.dispatch(OrderActions.getOrderDetails({ orderId: query.orderId }));
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
        </Head>
        <MobileConfirmContainer {...props} />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Confirm);
