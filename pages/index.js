import React from 'react';
import Head from 'next/head';
import { HomeContainer } from 'react/containers';
import { withReduxSaga } from 'redux/store';

class Index extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science</title>
          <meta name="viewport" content="width=640, user-scalable=0" />
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/fonts.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-open-sans.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-raleway.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/style.css"
          />
        </Head>
        <HomeContainer />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Index);
