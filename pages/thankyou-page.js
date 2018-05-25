import React from 'react';
import Head from 'next/head';
import { PromoSession } from 'react/components/common';
import { ThankyouDesktop, ThankyouMobile } from 'react/containers';
import { withReduxSaga } from 'redux/store';
import { AuthActions, OrderActions } from 'redux/actions';

class Thankyou extends React.PureComponent {
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
    const { props } = this;
    const { device, isPromo } = props.url.query;
    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Hemp Oil</title>
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
          {device === 'mobile' && (
            <meta name="viewport" content="width=640, user-scalable=0" />
          )}
          {device === 'desktop' && (
            <link
              rel="stylesheet"
              type="text/css"
              href="/static/desktop/css/style.css"
            />
          )}
          {device === 'mobile' && (
            <link
              rel="stylesheet"
              type="text/css"
              href="/static/mobile/css/style.css"
            />
          )}
        </Head>
        <PromoSession pageType="thankyouPage" />
        {device === 'desktop' && <ThankyouDesktop isPromo={isPromo} />}
        {device === 'mobile' && <ThankyouMobile isPromo={isPromo} />}
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Thankyou);
