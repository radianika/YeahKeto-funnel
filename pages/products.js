import React from 'react';
import Head from 'next/head';
import { ProductsContainer } from 'react/containers';
import { withReduxSaga } from 'redux/store';

class Products extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science - Products</title>
          <meta name="viewport" content="width=640, user-scalable=0" />
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/style.css"
          />
        </Head>
        <ProductsContainer />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Products);
