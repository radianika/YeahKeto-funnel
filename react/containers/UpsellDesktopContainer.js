import React from 'react';
import { connect } from 'react-redux';
import { packages } from 'helpers';
import { Upsell1 } from '../components/upsell/desktop/UpSell1';

class UpsellDesktopContainer extends React.PureComponent {
  render() {
    const { upsell } = this.props.pack;
    return (
      <div className="contentWrap">
        <div className="header position">
          <img
            src="/static/desktop/v1/images/logo.png"
            alt=""
            className="logo"
          />
          <img
            src="/static/desktop/v1/images/step.png"
            alt=""
            className="step"
          />
          <img
            src="/static/desktop/v1/images/seals.png"
            alt=""
            className="seals"
          />
        </div>
        <Upsell1 />
        {/* {upsell === 1 && <Upsell1 />}
        {upsell === 2 && <Upsell2 />}
        {upsell === 3 && <Upsell3 />} */}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { productid } = ownProps.url.query;
  const pack = packages.find(p => String(p.id) === String(productid)) || {};
  return {
    pack,
  };
}

UpsellDesktopContainer = connect(mapStateToProps)(UpsellDesktopContainer);

export { UpsellDesktopContainer };
