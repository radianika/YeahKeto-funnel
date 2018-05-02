import React from 'react';
import { connect } from 'react-redux';
import { Upsell1, Upsell2, Upsell3 } from 'react/components/upsell/mobile';

class UpsellMobileContainer extends React.PureComponent {
  render() {
    const { upsell } = this.props.url.query;
    return (
      <div className="contentWrap">
        <div className="header position">
          <img
            src="/static/mobile/v3/images/logo.png"
            alt=""
            className="logo"
          />
        </div>
        {upsell === 1 && <Upsell1 />}
        {upsell === 2 && <Upsell2 />}
        {upsell === 3 && <Upsell3 />}
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

UpsellMobileContainer = connect(mapStateToProps)(UpsellMobileContainer);

export { UpsellMobileContainer };
