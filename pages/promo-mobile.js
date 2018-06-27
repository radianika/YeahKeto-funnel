import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { PromoMobileContainer } from 'react/containers';
import { PromoSession, Spinner } from 'react/components/common';
import { createNewSession } from 'redux/actions/authActions';
import Router from 'next/router';

class Promo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: false,
    };
  }

  componentDidMount() {
    this.props.createNewSession();
    Router.onRouteChangeStart = () => {
      this.setState({ showSpinner: true });
    };
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Oil</title>
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
        {this.props.sessionId && <PromoSession pageType="leadPage" />}
        <PromoMobileContainer />
        {this.state.showSpinner && <Spinner />}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    sessionId: state.auth.sessionId,
  };
}

export default connect(mapStateToProps, { createNewSession })(Promo);
