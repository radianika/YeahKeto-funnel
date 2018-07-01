import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { OrderActions } from 'redux/actions';
import {
  Upsell1,
  Upsell1Treatment1,
  Upsell1Treatment2,
  Upsell11,
  Upsell11Treatment1,
  Upsell11Treatment2,
  Upsell2,
  Upsell2Treatment1,
  Upsell2Treatment2,
  Upsell21,
} from 'react/components/upsell/mobile';
import { Spinner, SuccessModal } from 'react/components/common';

/**
 * @class UpsellMobileContainerComponent
 * @extends {React.PureComponent}
 * @description Mobile container components for Upsells : Renders the Upsell pages according to the stage <br />
 * Also renders iframe for tracking variables
 */
class UpsellMobileContainerComponent extends React.PureComponent {
  upgrade = (productId, nextPage) => {
    this.props.addUpsellToOrder({
      productId,
      sendTo: nextPage,
      router: this.props.router,
    });
  };
  render() {
    const { upsell, offerId, adv_sub } = this.props.query;
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
        {upsell === 1 && (
          <React.Fragment>
            {this.props.abtastyParams.variationId === '406285' && (
              <React.Fragment>
                <a href="/">
                  <img
                    src="/static/mobile/images/logo.png"
                    alt=""
                    className="logo"
                  />
                </a>
                <Upsell1 upgrade={this.upgrade} {...this.props} />
              </React.Fragment>
            )}
            {this.props.abtastyParams.variationId === '406286' && (
              <React.Fragment>
                <a href="/">
                  <img
                    src="/static/mobile/images/logo.png"
                    alt=""
                    className="logo"
                  />
                </a>
                <Upsell1Treatment1 upgrade={this.upgrade} {...this.props} />
              </React.Fragment>
            )}
            {this.props.abtastyParams.variationId === '406287' && (
              <Upsell1Treatment2 upgrade={this.upgrade} {...this.props} />
            )}
          </React.Fragment>
        )}
        {upsell === '1-1' && (
          <React.Fragment>
            {this.props.abtastyParams.variationId === '406288' && (
              <React.Fragment>
                <a href="/">
                  <img
                    src="/static/mobile/images/logo.png"
                    alt=""
                    className="logo"
                  />
                </a>
                <Upsell11 upgrade={this.upgrade} {...this.props} />
              </React.Fragment>
            )}
            {this.props.abtastyParams.variationId === '406289' && (
              <React.Fragment>
                <a href="/">
                  <img
                    src="/static/mobile/images/logo.png"
                    alt=""
                    className="logo"
                  />
                </a>
                <Upsell11Treatment1 upgrade={this.upgrade} {...this.props} />
              </React.Fragment>
            )}
            {this.props.abtastyParams.variationId === '406290' && (
              <Upsell11Treatment2 upgrade={this.upgrade} {...this.props} />
            )}
          </React.Fragment>
        )}
        {upsell === 2 && (
          <React.Fragment>
            {this.props.abtastyParams.variationId === '406291' && (
              <React.Fragment>
                <a href="/">
                  <img
                    src="/static/mobile/images/logo.png"
                    alt=""
                    className="logo"
                  />
                </a>
                <Upsell2 upgrade={this.upgrade} {...this.props} />
              </React.Fragment>
            )}
            {this.props.abtastyParams.variationId === '406292' && (
              <React.Fragment>
                <a href="/">
                  <img
                    src="/static/mobile/images/logo.png"
                    alt=""
                    className="logo"
                  />
                </a>
                <Upsell2Treatment1 upgrade={this.upgrade} {...this.props} />
              </React.Fragment>
            )}
            {this.props.abtastyParams.variationId === '406293' && (
              <Upsell2Treatment2 upgrade={this.upgrade} {...this.props} />
            )}
          </React.Fragment>
        )}
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
    abtastyParams: state.auth.abtastyParams,
  };
}

const UpsellMobileContainer = connect(mapStateToProps, { ...OrderActions })(
  withRouter(UpsellMobileContainerComponent),
);

export default UpsellMobileContainer;
