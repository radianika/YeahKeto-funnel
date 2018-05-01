import React from 'react';
import { connect } from 'react-redux';
import { packages } from 'helpers';
import { Upsell1, Upsell2, Upsell3 } from '../components/upsell';

class UpsellMobileContainer extends React.PureComponent {
  render() {
    const { upsell } = this.props.pack;
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

function mapStateToProps(state, ownProps) {
  const { productid } = ownProps.url.query;
  const pack = packages.find(p => String(p.id) === String(productid));
  return {
    pack,
  };
}

UpsellMobileContainer = connect(mapStateToProps)(UpsellMobileContainer);

export { UpsellMobileContainer };
