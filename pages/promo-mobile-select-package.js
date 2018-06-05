import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { MobileSelectPackageContainer } from 'react/containers';
import { AuthActions, OrderActions } from 'redux/actions';

class SelectPackage extends React.PureComponent {
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
            href="/static/assets/css/promo/mobile/index.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/mb-style.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/mb-sprites-style.css"
          />
        </Head>
        <MobileSelectPackageContainer {...this.props} />
      </React.Fragment>
    );
  }
}

export default connect()(SelectPackage);
