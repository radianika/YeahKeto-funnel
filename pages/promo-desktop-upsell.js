import React from 'react';
import Head from 'next/head';
import { UpsellDesktopContainer } from 'react/containers';
import { withReduxSaga } from 'redux/store';
import { AuthActions, OrderActions } from 'redux/actions';

class SelectPackage extends React.PureComponent {
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
            href="https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700"
            rel="stylesheet"
          />
          <link href="/static/desktop/css/checkout.css" rel="stylesheet" />
        </Head>
        <UpsellDesktopContainer {...props} />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(SelectPackage);
