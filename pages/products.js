import React from 'react';
import Head from 'next/head';
import { ProductsContainer } from 'react/containers';
import { connect } from 'react-redux';

class Products extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Hemp Oil - FAQs</title>
          <meta name="viewport" content="width=640, user-scalable=0" />
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/simpleMobileMenu.css"
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
        <ProductsContainer {...this.props} />
      </React.Fragment>
    );
  }
}

export default connect()(Products);
