import React from 'react';
import Head from 'next/head';
import 'styles/home-desktop.scss';
import { Home } from 'react/components/home';
import { withReduxSaga } from 'redux/store';

class Index extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science</title>
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
        </Head>
        <Home />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Index);
