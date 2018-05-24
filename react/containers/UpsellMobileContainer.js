import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { OrderActions } from 'redux/actions';
import {
  Upsell1,
  Upsell11,
  Upsell2,
  Upsell21,
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
    const {
      upsell, offerId, transaction_id, adv_sub,
    } = this.props.query;
    return (
      <div id="container">
        {upsell === 1 &&
          offerId && (
            <iframe
              title="cbd"
              // src={`https://trk.starlightgroup.io/aff_l?offer_id=${offerId}&transaction_id=${transaction_id}&adv_sub=${adv_sub}`}
              src={`https://trk.starlightgroup.io/aff_l?offer_id=${offerId}&adv_sub=${adv_sub}`}
              frameBorder="0"
              width="1"
              height="1"
              style={{ position: 'absolute' }}
            />
          )}
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
        {upsell === '2-1' && (
          <Upsell21 upgrade={this.upgrade} {...this.props} />
        )}
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
