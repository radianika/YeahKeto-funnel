import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { OrderActions } from 'redux/actions';
import { Footer, Spinner, SuccessModal } from 'react/components/common';
import {
  Upsell1,
  Upsell11,
  Upsell2,
  Upsell21,
} from '../components/upsell/desktop';

/**
 * @class UpsellDesktopContainerComponent
 * @extends {React.PureComponent}
 * @description Desktop container components for Upsells : Renders the Upsell pages according to the stage <br />
 * Also renders iframe for tracking variables
 */
class UpsellDesktopContainerComponent extends React.PureComponent {
  upgrade = (productId, nextPage) => {
    this.props.addUpsellToOrder({
      productId,
      sendTo: nextPage,
      router: this.props.router,
      order: this.props.order,
    });
  };

  render() {
    const { upsell, offerId, adv_sub } = this.props.query;
    return (
      <React.Fragment>
        <Head>
        </Head>

        <script>{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '321559294932280');
          fbq('track', 'Purchase', {currency: 'USD', value: 69.00});
          `}
        </script>

        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
               src="https://www.facebook.com/tr?id=321559294932280&amp;ev=Purchase&amp;cd[currency]=USD&amp;cd[value]=69.00"
          />
        </noscript>

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

        <div className="container">
          <div className="upsell-box">
            <div className="up-header">
              <a href="/">
                <img
                  src="/static/desktop/images/logo.png"
                  alt=""
                  className="upsell-logo"
                />
              </a>
              <img
                src="/static/desktop/images/step.png"
                alt=""
                className="upsell-step"
              />
              <img
                src="/static/desktop/images/seals.png"
                alt=""
                className="upsell-seal"
              />
            </div>
            {upsell === 1 && <Upsell1 upgrade={this.upgrade} {...this.props} />}
            {upsell === '1-1' && (
              <Upsell11 upgrade={this.upgrade} {...this.props} />
            )}
            {upsell === 2 && <Upsell2 upgrade={this.upgrade} {...this.props} />}
            {upsell === '2-1' && (
              <Upsell21 upgrade={this.upgrade} {...this.props} />
            )}
            {/* <div className="footer">
            <div className="clearall" />

            <div
              style={{
                display: 'table',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              >
              <img
                src="/static/assets/images/badges/mcafee.png"
                alt=""
                style={{ height: 50, width: 150, display: 'inline-block' }}
              />
              <img
                src="/static/assets/images/badges/imgnortonsiteseal.png"
                alt=""
                style={{
                  height: 54,
                  width: 100,
                  display: 'inline-block',
                  marginLeft: 15,
                }}
              />
              <img
                src="/static/assets/images/badges/ext.jpeg"
                alt=""
                style={{
                  height: 60,
                  width: 105,
                  display: 'inline-block',
                  marginLeft: 15,
                }}
              />
            </div>
          </div> */}
          </div>
          <div className="clearall" />
          {this.props.submitStatus === 'submitting' && <Spinner />}
          <SuccessModal
            visible={this.props.submitStatus === 'success'}
            message="Order updated successfully."
          />
        </div>
        <div id="footer">
          <div className="container">
            <div className="ftr-txt">
              <Footer noLogo>
                <span />
              </Footer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    order: state.order,
    submitStatus: state.order.addUpsellToOrderStatus,
  };
}

const UpsellDesktopContainer = connect(mapStateToProps, { ...OrderActions })(
  withRouter(UpsellDesktopContainerComponent),
);

export default UpsellDesktopContainer;
