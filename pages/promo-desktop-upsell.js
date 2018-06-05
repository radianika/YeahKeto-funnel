import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { UpsellDesktopContainer } from 'react/containers';
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
          <link
            href="/static/assets/css/promo/desktop/upsell2.css"
            rel="stylesheet"
          />
          <link href="/static/desktop/css/checkout.css" rel="stylesheet" />
        </Head>
        <UpsellDesktopContainer {...props} />
      </React.Fragment>
    );
  }
}

export default connect()(SelectPackage);
