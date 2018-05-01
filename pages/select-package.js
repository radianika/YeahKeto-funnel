import React from 'react';
import Head from 'next/head';
import { MobileSelectPackageContainer } from 'react/containers';
import { withReduxSaga } from 'redux/store';

class SelectPackage extends React.PureComponent {
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
        </Head>
        <MobileSelectPackageContainer />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(SelectPackage);
