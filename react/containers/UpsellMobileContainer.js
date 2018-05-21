import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { OrderActions } from 'redux/actions';
import {
  Upsell1,
  Upsell11,
  Upsell2,
  Upsell3,
} from 'react/components/upsell/mobile';
import { Spinner, SuccessModal } from 'react/components/common';

class UpsellMobileContainerComponent extends React.PureComponent {
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
      <div id="container">
        <SuccessModal
          visible={this.props.submitStatus === 'success'}
          message="Order updated successfully."
        />
        <img src="/static/mobile/images/logo.png" alt="" className="logo" />
        {upsell === 1 && <Upsell1 upgrade={this.upgrade} {...this.props} />}
        {upsell === '1-1' && (
          <Upsell11 upgrade={this.upgrade} {...this.props} />
        )}
        {upsell === 2 && <Upsell2 upgrade={this.upgrade} {...this.props} />}
        {upsell === 3 && <Upsell3 upgrade={this.upgrade} {...this.props} />}
        {this.props.submitStatus === 'submitting' && <Spinner />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    submitStatus: state.order.addUpsellToOrderStatus,
  };
}

const UpsellMobileContainer = connect(mapStateToProps, { ...OrderActions })(
  withRouter(UpsellMobileContainerComponent),
);

export { UpsellMobileContainer };
