import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { OrderActions } from 'redux/actions';
import { Upsell1, Upsell2, Upsell3 } from 'react/components/upsell/mobile';
import { Spinner } from 'react/components/common';

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
        {upsell === 1 && <Upsell1 upgrade={this.upgrade} />}
        {upsell === 2 && <Upsell2 upgrade={this.upgrade} />}
        {upsell === 3 && <Upsell3 upgrade={this.upgrade} />}
        {this.props.submitStatus === 'submitting' && <Spinner />}
      </div>
    );
  }
}

UpsellMobileContainer = withRouter(UpsellMobileContainer);

function mapStateToProps(state) {
  return {
    submitStatus: state.order.addUpsellToOrderStatus,
  };
}

UpsellMobileContainer = connect(mapStateToProps, { ...OrderActions })(
  UpsellMobileContainer,
);

export { UpsellMobileContainer };
