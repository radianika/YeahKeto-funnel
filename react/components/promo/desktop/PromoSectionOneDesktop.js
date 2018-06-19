import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import axios from 'axios';
import moment from 'moment';
import { OrderActions } from 'redux/actions';
import { Spinner, SuccessModal } from 'react/components/common';
import { PromoShippingFormDesktop } from './PromoShippingFormDesktop';

class PromoSectionOneDesktopComponent extends React.PureComponent {
  getImageVariation = () => {
    const { variationId } = this.props;
    console.log({ variationId });
    switch (variationId) {
      case '404215':
        return '/static/promo/desktop/images/section1.jpg';
      case '404216':
        return '/static/promo/desktop/v1/section1.jpg';
      case '404217':
        return '/static/promo/desktop/v2/section1.jpg';
      default:
        return '/static/promo/desktop/images/section1.jpg';
    }
  };

  postActionTracker = () => {
    const { localStorage } = window;
    const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));
    const body = {
      name: 'rushmyorder_form',
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type:
          abtastyParams.requestAgent === 'desktop' ? 'DESKTOP' : 'MOBILE_PHONE',
        origin: 'PromoLeadPages',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };
    axios.post('/abtasty', { ...body, action: 'action_tracking_event' });
  };

  submitShippingForm = values => {
    this.postActionTracker();
    this.props.submitLeadsForm({
      values,
      router: this.props.router,
      nextUrl: '/promo/desktop/checkout',
    });
  };

  render() {
    return (
      <div
        className="section1 dsplay"
        style={{
          background: `url(${this.getImageVariation()}) center top no-repeat`,
        }}
      >
        <h2 style={{ display: 'none' }}>American Science CBD</h2>
        <div className="container">
          <div className="s1lft position">
            <i className="logo sprite2 sprite-logo" />
            <i className="s1seal sprite3 sprite-s1seal" />
            <i className="s1hd sprite3 sprite-s1hd" />
            <p className="s1txt">
              Derived from organic, US-harvested hemp, lab-tested for quality.
              Clinically proven therapeutic effects.{' '}
            </p>
            <ul className="s1list ">
              <li className="sprite2 sprite-s1bullet">
                <span>Relieves</span> Anxiety &amp; Stress{' '}
              </li>
              <li className="sprite2 sprite-s1bullet">
                <span>Eliminates</span> Chronic Pain &amp; Aches{' '}
              </li>
              <li className="sprite2 sprite-s1bullet">
                <span>Regulates</span> Mood &amp; Sleep Patterns{' '}
              </li>
              <li className="sprite2 sprite-s1bullet">
                <span>Enhances </span> Focus &amp; Clarity{' '}
              </li>
            </ul>
            <div className="clearall" />
            <i className="chkarrow sprite3 sprite-s1arrow" />
            {/* <i className="s1bottle sprite3 sprite-s1bottle" /> */}
            <img
              src="/static/promo/desktop/images/s1bottle.png"
              className="s1bottle"
              alt=""
            />
            <i className="s1asseen sprite2 sprite-s1asseen" />
          </div>
          <div className="s1rgt">
            <div className="exoffer-box dsplay">
              <i className="sprite2 sprite-flag" />
              <p className="exof-txt">
                Internet Exclusive Offer
                <br /> <b>Available to US Residents Only</b>
              </p>
            </div>
            <div className="frm" id="topfrm">
              <PromoShippingFormDesktop onSubmit={this.submitShippingForm} />
            </div>
          </div>
        </div>
        {this.props.submitStatus === 'submitting' && <Spinner />}
        <SuccessModal
          visible={this.props.submitStatus === 'success'}
          message="Information captured successfully."
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    submitStatus: state.order.submitLeadsFormStatus,
    variationId: state.auth.abtastyParams.variationId,
  };
}

const PromoSectionOneDesktop = connect(mapStateToProps, { ...OrderActions })(
  withRouter(PromoSectionOneDesktopComponent),
);

export { PromoSectionOneDesktop };
