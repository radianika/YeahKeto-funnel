import React from 'react';
import Head from 'next/head';
import 'styles/promo-desktop.scss';
import { PromoMobileContainer, PromoDesktopContainer } from 'react/containers';
import { withReduxSaga } from 'redux/store';

class Promo extends React.PureComponent {
  render() {
    const { requestAgent } = this.props.url.query;
    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Hemp Oil</title>
        </Head>
        {requestAgent === 'mobile' && <PromoMobileContainer />}
        {requestAgent === 'desktop' && <PromoDesktopContainer />}
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Promo);
