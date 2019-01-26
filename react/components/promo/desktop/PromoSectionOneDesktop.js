import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { OrderActions } from 'redux/actions';
import { Spinner, ImageModal } from 'react/components/common';
import { getQueryString } from 'helpers';
import { PromoShippingFormDesktop } from './PromoShippingFormDesktop';

class PromoSectionOneDesktopComponent extends React.PureComponent {
  state = {
    showCheckingModal: false,
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.submitStatus !== 'success' &&
      this.props.submitStatus === 'success'
    ) {
      this.setState({ showCheckingModal: false });
      const queryString = getQueryString();
      setTimeout(
        () => window.location.assign(`/promo/desktop/checkout?${queryString}`),
        1000,
      );
    }
  }

  submitShippingForm = values => {
    this.setState({ showCheckingModal: true });
    this.props.submitLeadsForm({
      values,
      router: this.props.router,
      nextUrl: '/promo/desktop/checkout',
    });
  };

  render() {
    const variation315256 = this.props.isAuthentic.isAuthenticUser
      ? '415140'
      : '415141';
    const variation317678 = this.props.isAuthentic.isAuthenticUser
      ? '418315'
      : '418316';
    return (
      <div
        className="section1 dsplay"
        style={{
          background: 'url(/static/promo/desktop/images/section1.jpg) center top no-repeat',
          'background-position': '-216px -20px',
        }}
      >
        <div className="container">
          <div className="promo-home-top-section-1 s1lft position">
            <img
              className="promo-home-logo"
              src="/static/promo/desktop/images/logo.png"
              alt=""
            />
            <img
              src="/static/promo/desktop/images/images/s1-hd.png"
              alt=""
              style={{ 'margin-top': '40px' }}
            />
            <p className="s1txt">
              <b>Yeah Keto</b> triggers and maintains the state of ketosis,
              burning fat for energy!{' '}
            </p>
            <p className="s1-p2">Yeah Keto Helps You With</p>
            <ul className="s1list ">
              <li className="sprite2 sprite-s1bullet">
                <span>Rapid</span> Ketogenic Weight Loss{' '}
              </li>
              <li className="sprite2 sprite-s1bullet">
                <span>Instant</span> Energy Boost{' '}
              </li>
              <li className="sprite2 sprite-s1bullet">
                <span>Appetite</span> Suppression{' '}
              </li>
              <li className="sprite2 sprite-s1bullet">
                <span>Optimal</span> Metabolic Rate{' '}
              </li>
            </ul>
            <img
              src="/static/promo/desktop/images/images/s1-arrow.png"
              className="s1-arrow"
              alt=""
            />

            <div className="clearall" />
            {/* <i className="s1bottle sprite3 sprite-s1bottle" /> */}
            <img
              src="/static/promo/desktop/images/images/s1-btl1.png"
              className="s1bottle"
              alt=""
            />
          </div>
          <div className="s1rgt promo-home-top-section-2">
            {!variation315256 || variation315256 === '415140' ? (
              <div className="exoffer-box dsplay">
                <i className="sprite2 sprite-flag" />
                <p className="exof-txt">
                  Internet Exclusive Offer
                  <br /> <b>Available to US Residents Only</b>
                </p>
              </div>
            ) : (
              <div className="exoffer-box dsplay">
                <img src="/static/assets/images/states.png" alt="" />
              </div>
            )}
            <div className="frm" id="topfrm">
              <PromoShippingFormDesktop
                id="promo-section1-submit-desktop"
                onSubmit={this.submitShippingForm}
              />
            </div>
          </div>
        </div>
        {this.props.submitStatus === 'submitting' && <Spinner />}
        {this.state.showCheckingModal && (
          <ImageModal>
            <img
              alt="checking"
              src="/static/assets/images/checking_popup.png"
              style={{ width: '100%', height: '100%' }}
            />
          </ImageModal>
        )}
        {this.props.submitStatus === 'success' && (
          <ImageModal>
            <img
              alt=""
              src="/static/assets/images/lead_form_success_popup.png"
              style={{ width: '100%', height: '100%' }}
            />
          </ImageModal>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    submitStatus: state.order.submitLeadsFormStatus,
    abtastyParams: state.auth.abtastyParams,
    isAuthentic: state.auth.isAuthentic,
  };
}

const PromoSectionOneDesktop = connect(mapStateToProps, { ...OrderActions })(
  withRouter(PromoSectionOneDesktopComponent),
);

export { PromoSectionOneDesktop };
