import React from 'react';
import Head from 'next/head';
import {
  RootShell,
  PromoMobileContainer,
  PromoDesktopContainer,
} from 'react/containers';
import { withReduxSaga } from 'redux/store';

class Promo extends React.PureComponent {
  render() {
    const { requestAgent } = this.props.url.query;
    return (
      <RootShell>
        <Head>
          <title>American Science CBD Hemp Oil</title>
        </Head>
        {requestAgent === 'mobile' && <PromoMobileContainer />}
        {requestAgent === 'desktop' && <PromoDesktopContainer />}
      </RootShell>
    );
  }
}

export default withReduxSaga(Promo);
