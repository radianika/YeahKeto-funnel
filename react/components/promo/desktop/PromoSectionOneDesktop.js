import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { OrderActions } from 'redux/actions';
import { PromoShippingFormDesktop } from './PromoShippingFormDesktop';

class PromoSectionOneDesktop extends React.PureComponent {
  submitShippingForm = values => {
    this.props.submitLeadsForm({
      values,
      router: this.props.router,
      nextUrl: '/promo/desktop/checkout',
    });
  };

  render() {
    return (
      <div className="section1 dsplay">
        <h2 style={{ display: 'none' }}>American cience CBD</h2>
        <div className="container">
          <div className="s1lft position">
            <i className="logo sprite2 sprite-logo" />
            <i className="s1seal sprite3 sprite-s1seal" />
            <i className="s1hd sprite3 sprite-s1hd" />
            <p className="s1txt">
              Made from Hemp organically grown &amp; harvested in the USA, and
              medically proven to offer therapeutic benefits.{' '}
            </p>
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
            <div className="clearall" />
            <i className="chkarrow sprite3 sprite-s1arrow" />
            <i className="s1bottle sprite3 sprite-s1bottle" />
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
      </div>
    );
  }
}

PromoSectionOneDesktop = withRouter(PromoSectionOneDesktop);

function mapStateToProps() {
  return {};
}

PromoSectionOneDesktop = connect(mapStateToProps, { ...OrderActions })(
  PromoSectionOneDesktop,
);

export { PromoSectionOneDesktop };
