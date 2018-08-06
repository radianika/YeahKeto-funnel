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
    const variation314334 = this.props.abtastyParams.campaignMaps['314334'];
    const variation315256 = this.props.abtastyParams.campaignMaps['315256'];
    const variation317090 = this.props.abtastyParams.campaignMaps['317090'];
    const variation317678 = this.props.abtastyParams.campaignMaps['317678'];
    return (
      <div
        className="section1 dsplay"
        style={{
          background: `url("/static/promo/desktop/images/${
            this.props.isAuthentic.isAuthenticUser
              ? 'section1.jpg'
              : 'section1-not-auth.jpg'
          }") center top no-repeat`,
        }}
      >
        <h2 style={{ display: 'none' }}>American Science CBD</h2>
        <div className="container">
          <div className="s1lft position">
            <i className="logo sprite2 sprite-logo" />
            <i className={`s1seal sprite3 sprite-s1seal-${variation317678}`} />
            <i
              className={`s1hd sprite3 sprite3-${
                this.props.abtastyParams.campaignMaps['314363']
              } sprite-s1hd`}
            />
            {this.props.isAuthentic.isAuthenticUser ? (
              <p className="s1txt">
                Derived from organic, US-harvested hemp, lab-tested for quality.
                Clinically proven therapeutic effects.{' '}
              </p>
            ) : (
              <p className="s1txt">
                For a limited, receive a FREE bottle of our FDA Approved CBD Oil
                on your first order (no prescription required).
              </p>)
            }
            {!variation314334 || variation314334 === '414030' ? (
              <ul className="s1list ">
                <li className="sprite2 sprite-s1bullet">
                  <span>Relieves</span> Anxiety &amp; Stress{' '}
                </li>
                <li className="sprite2 sprite-s1bullet">
                  <span>Eliminates</span> Chronic Pain &amp; Aches{' '}
                </li>
                <li className="sprite2 sprite-s1bullet">
                  <span>Promotes</span> Mood &amp; Sleep Patterns{' '}
                </li>
                <li className="sprite2 sprite-s1bullet">
                  <span>Enhances </span> Focus &amp; Clarity{' '}
                </li>
              </ul>
            ) : null}
            {variation314334 === '414031' ? (
              <ul className="s1list ">
                <li className="sprite2 sprite-s1bullet">
                  <span>Relieves</span> Chronic Pain &amp; Arthritis{' '}
                </li>
                <li className="sprite2 sprite-s1bullet">
                  <span>Alleviates</span> Anxiety &amp; Stress{' '}
                </li>
                <li className="sprite2 sprite-s1bullet">
                  <span>Lowers</span> Blood Sugar{' '}
                </li>
                <li className="sprite2 sprite-s1bullet">
                  <span>Improves </span> Mood &amp; Concentration{' '}
                </li>
                <li className="sprite2 sprite-s1bullet">
                  <span>Promotes </span> Sleep &amp; Energy Levels{' '}
                </li>
              </ul>
            ) : null}
            <div className="clearall" />
            <i className="chkarrow sprite3 sprite-s1arrow" />
            {/* <i className="s1bottle sprite3 sprite-s1bottle" /> */}
            <img
              src="/static/promo/desktop/images/s1bottle.png"
              className="s1bottle"
              alt=""
            />
            <i
              className="s1asseen sprite2 sprite-s1asseen"
              style={{
                backgroundPosition:
                  variation317090 === '417539'
                    ? '-385px -485px'
                    : '-385px -421px',
              }}
            />
          </div>
          <div className="s1rgt">
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
