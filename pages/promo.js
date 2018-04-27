import React from 'react';
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
        {requestAgent === 'mobile' && <PromoMobileContainer />}
        {requestAgent === 'desktop' && <PromoDesktopContainer />}
      </RootShell>
    );
  }
}

export default withReduxSaga(Promo);
