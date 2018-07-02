import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
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

const campaignIds = { 1: '308072', '1-1': '308073', 2: '308075' };
/**
 * @class UpsellMobileContainerComponent
 * @extends {React.PureComponent}
 * @description Mobile container components for Upsells :
 * Renders the Upsell pages according to the stage <br />
 * Also renders iframe for tracking variables
 */
class UpsellMobileContainerComponent extends React.PureComponent {
  componentDidMount() {
    this.postCampaignActivatedEvent();
  }

  postCampaignActivatedEvent = () => {
    const { upsell } = this.props.query;
    const campaignId = campaignIds[upsell.toString()];
    if (campaignId) {
      const body = {
        campaign_id: campaignId.toString(),
        variation_id: this.props.abtastyParams.variationId,
        tracking_data: {
          device_type:
            this.props.query.device === 'desktop' ? 'DESKTOP' : 'MOBILE_PHONE',
          ip: this.props.abtastyParams.ip,
          origin: 'Promo Desktop',
          timestamp: moment().format(),
          visitor_id: this.props.abtastyParams.visitorId,
        },
      };
      axios.post('/abtasty', {
        ...body,
        action: 'campaign_activated_event',
      });
    }
  };

  upgrade = (productId, nextPage) => {
    this.props.addUpsellToOrder({
      productId,
      sendTo: nextPage,
      router: this.props.router,
    });
  };

  render() {
    const { upsell, offerId, adv_sub } = this.props.query;
    const { abtastyParams } = this.props;
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
                <Upsell1
                  upgrade={this.upgrade}
                  {...this.props}
                  abtastyParams={abtastyParams}
                />
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
                <Upsell1Treatment1
                  upgrade={this.upgrade}
                  {...this.props}
                  abtastyParams={abtastyParams}
                />
              </React.Fragment>
            )}
            {this.props.abtastyParams.variationId === '406287' && (
              <Upsell1Treatment2
                upgrade={this.upgrade}
                {...this.props}
                abtastyParams={abtastyParams}
              />
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
                <Upsell11
                  upgrade={this.upgrade}
                  {...this.props}
                  abtastyParams={abtastyParams}
                />
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
                <Upsell11Treatment1
                  upgrade={this.upgrade}
                  {...this.props}
                  abtastyParams={abtastyParams}
                />
              </React.Fragment>
            )}
            {this.props.abtastyParams.variationId === '406290' && (
              <Upsell11Treatment2
                upgrade={this.upgrade}
                {...this.props}
                abtastyParams={abtastyParams}
              />
            )}
          </React.Fragment>
        )}
        {upsell === 2 && (
          <React.Fragment>
            {((this.props.abtastyParams.prev &&
              this.props.abtastyParams.prev.indexOf('upsell1-1') > -1) ||
              this.props.abtastyParams.variationId === '406291') && (
              <React.Fragment>
                <a href="/">
                  <img
                    src="/static/mobile/images/logo.png"
                    alt=""
                    className="logo"
                  />
                </a>
                <Upsell2
                  upgrade={this.upgrade}
                  {...this.props}
                  abtastyParams={abtastyParams}
                />
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
                <Upsell2Treatment1
                  upgrade={this.upgrade}
                  {...this.props}
                  abtastyParams={abtastyParams}
                />
              </React.Fragment>
            )}
            {this.props.abtastyParams.variationId === '406293' && (
              <Upsell2Treatment2
                upgrade={this.upgrade}
                {...this.props}
                abtastyParams={abtastyParams}
              />
            )}
          </React.Fragment>
        )}
        {upsell === '2-1' && (
          <React.Fragment>
            <a href="/">
              <img
                src="/static/mobile/images/logo.png"
                alt=""
                className="logo"
              />
            </a>
            <Upsell21
              upgrade={this.upgrade}
              {...this.props}
              abtastyParams={abtastyParams}
            />
          </React.Fragment>
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
