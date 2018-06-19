import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { PromoDesktopContainer } from 'react/containers';
import { AuthActions } from 'redux/actions';

class Promo extends React.PureComponent {
  static getInitialProps({
    ctx: {
      store,
      isServer,
      query: { visitorId, variationId, requestAgent },
      req: {
        session: { ip },
      },
    },
  }) {
    if (isServer) {
      store.dispatch(
        AuthActions.setAbtastyParams({
          visitorId,
          variationId,
          requestAgent,
          ip,
        }),
      );
    }
  }

  componentDidMount() {
    const { localStorage } = window;
    localStorage.setItem(
      'abtastyParams',
      JSON.stringify(this.props.abtastyParams),
    );
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
            href="/static/assets/css/common.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/sprites-style.css"
          />
          <script src="https://fast.wistia.net/assets/external/E-v1.js" async />
        </Head>
        <PromoDesktopContainer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  abtastyParams: state.auth.abtastyParams,
});

export default connect(mapStateToProps, { ...AuthActions })(Promo);
