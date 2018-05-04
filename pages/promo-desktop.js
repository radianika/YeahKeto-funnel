import React from 'react';
import Head from 'next/head';
import { PromoDesktopContainer } from 'react/containers';
import { withReduxSaga } from 'redux/store';
import { AuthActions } from 'redux/actions';
import { PromoSession } from 'react/components/common';

class Promo extends React.PureComponent {
  static async getInitialProps({ store, isServer, query }) {
    if (isServer) {
      store.dispatch(
        AuthActions.setUniqueSessionId({ sessionId: query.sessionId }),
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
            href="/static/assets/css/promo/desktop/index.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/promo-style.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/sprites-style.css"
          />
          <script src="https://fast.wistia.net/assets/external/E-v1.js" async />
        </Head>
        <PromoSession pageType="leadPage" />
        <PromoDesktopContainer />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Promo);
