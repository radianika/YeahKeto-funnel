import React from 'react';
import Head from 'next/head';
import { PromoThankyouDesktop } from 'react/containers';
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
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
        </Head>
        <PromoThankyouDesktop />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(SelectPackage);
