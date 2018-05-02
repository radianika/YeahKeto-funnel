import React from 'react';
import { connect } from 'react-redux';
import { Upsell1, Upsell2, Upsell3 } from '../components/upsell/desktop';

class UpsellDesktopContainer extends React.PureComponent {
  render() {
    const { upsell } = this.props.url.query;
    return (
      <div className="contentWrap">
        <div className="header position">
          <img
            src="/static/desktop-new/images/logo.png"
            alt=""
            className="logo"
          />
          <img
            src="/static/desktop-new/images/step.png"
            alt=""
            className="step"
          />
          <img
            src="/static/desktop-new/images/seals.png"
            alt=""
            className="seals"
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

UpsellDesktopContainer = connect(mapStateToProps)(UpsellDesktopContainer);

export { UpsellDesktopContainer };
