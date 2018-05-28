import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { PromoMobileContainer } from 'react/containers';
import { AuthActions } from 'redux/actions';
import { PromoSession, Spinner } from 'react/components/common';
import Router from 'next/router';

class Promo extends React.PureComponent {
  static async getInitialProps(props) {
    const { store, isServer, query } = props.ctx;
    if (isServer) {
      store.dispatch(
        AuthActions.setUniqueSessionId({ sessionId: query.sessionId }),
      );
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      showSpinner: false,
    };
  }

  componentDidMount() {
    Router.onRouteChangeStart = () => {
      this.setState({ showSpinner: true });
    };
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
        <PromoSession pageType="leadPage" />
        <PromoMobileContainer />
        {this.state.showSpinner && <Spinner />}
      </React.Fragment>
    );
  }
}

export default connect()(Promo);
