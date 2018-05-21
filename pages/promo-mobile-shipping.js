import React from 'react';
import Head from 'next/head';
import { MobileShippingContainer } from 'react/containers';
import { AuthActions } from 'redux/actions';
import { withReduxSaga } from 'redux/store';

class Promo extends React.PureComponent {
  static async getInitialProps({ store, isServer, query }) {
    if (isServer) {
      store.dispatch(AuthActions.setUniqueSessionId({ sessionId: query.sessionId }));
    }
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Hemp Oil</title>
          <meta name="viewport" content="width=640, user-scalable=0" />
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
          <link rel="stylesheet" type="text/css" href="/static/assets/fonts/font-hind.css" />
          <link rel="stylesheet" type="text/css" href="/static/assets/fonts/font-awesome.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/assets/css/promo/mobile/index.css" />
          <link rel="stylesheet" type="text/css" href="/static/assets/css/mb-style.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/formvalidation/formValidation.min.css"
          />
        </Head>
        <MobileShippingContainer />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Promo);
