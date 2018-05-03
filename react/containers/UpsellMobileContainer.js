import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { OrderActions } from 'redux/actions';
import { Upsell1, Upsell2, Upsell3 } from 'react/components/upsell/mobile';

class UpsellMobileContainer extends React.PureComponent {
  upgrade = (productId, nextPage) => {
    this.props.addUpsellToOrder({
      productId,
      sendTo: nextPage,
      router: this.props.router,
    });
  };
  render() {
    const { upsell } = this.props.url.query;
    return (
      <div className="contentWrap">
        <div className="header position">
          <img src="/static/mobile/images/logo.png" alt="" className="logo" />
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
