import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import Router from 'next/router';

import { configureStore } from 'redux/store';

const setupRouter = () => {
  Router.beforePopState(({ url, as: asUrl, options }) => {
    alert(url);
    return false;
    if (asUrl === '/views/users/user') {
      window.location.href = asUrl;
      return false;
    }
    return true;
  });
};

class AscbdApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps: { ...pageProps, query: ctx.query } };
  }

  componentDidMount() {
    setupRouter();
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(
  withReduxSaga({ async: true })(AscbdApp),
);
