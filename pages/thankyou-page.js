import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { PromoSession } from 'react/components/common';
import { ThankyouDesktop, ThankyouMobile } from 'react/containers';
import { AuthActions, OrderActions } from 'redux/actions';

class Thankyou extends React.PureComponent {
  static async getInitialProps(props) {
    const {
      store, isServer, query, req,
    } = props.ctx;
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
    const { device, isPromo } = props.query;
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

export default connect()(Thankyou);
