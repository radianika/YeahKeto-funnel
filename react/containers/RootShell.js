import React from 'react';
import Head from 'next/head';

const RootShell = props => (
  <React.Fragment>
    <Head>
      <meta charSet="UTF-8" />
    </Head>
    {props.children}
  </React.Fragment>
);

export { RootShell };
