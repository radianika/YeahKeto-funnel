import React from 'react';
import Head from 'next/head';
import { RootShell } from 'react/containers';
import { withReduxSaga } from 'redux/store';

class Index extends React.PureComponent {
  render() {
    return (
      <RootShell>
        <Head>
          <title>American Science CBD</title>
        </Head>
        <h1>StarLight Group</h1>
      </RootShell>
    );
  }
}

export default withReduxSaga(Index);
