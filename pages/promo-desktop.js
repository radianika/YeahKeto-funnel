import React from 'react';
import Head from 'next/head';
import { PromoMobileContainer, PromoDesktopContainer } from 'react/containers';
import { withReduxSaga } from 'redux/store';

class Promo extends React.PureComponent {
  render() {
    const { requestAgent } = this.props.url.query;
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
            href="/static/assets/css/formvalidation/formvalidation.min.css"
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
        </Head>
        <PromoDesktopContainer />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Promo);
