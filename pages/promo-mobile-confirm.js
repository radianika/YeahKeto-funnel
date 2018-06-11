import React from 'react';
import Head from 'next/head';
import { MobileConfirmContainer } from 'react/containers';
import { connect } from 'react-redux';
import { AuthActions, OrderActions } from 'redux/actions';
import { PromoSession } from 'react/components/common';
import idx from 'idx';

class Confirm extends React.PureComponent {
  static async getInitialProps(props) {
    const { store, isServer, query } = props.ctx;
    if (isServer) {
      store.dispatch(
        AuthActions.setUniqueSessionId({ sessionId: query.sessionId }),
      );
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

const mapStateToProps = reduxState => ({
  order: reduxState.order.order,
  getOrderDetailsStatus: idx(reduxState, _ => _.order.getOrderDetailsStatus),
});

export default connect(mapStateToProps, { ...OrderActions })(Confirm);
