import React from 'react';
import Head from 'next/head';
import 'styles/main.scss';

export default props => (
  <React.Fragment>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <title>American Science CBD</title>
    </Head>
    {props.children}
  </React.Fragment>
);
