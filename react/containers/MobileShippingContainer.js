import React from 'react';
import { connect } from 'react-redux';
import {
  stateslist,
  shippingFormValidator,
  normalizePhone,
  normalizePostalCode,
} from 'helpers';
import {
  Footer,
  TextField,
  SelectField,
  AddressField,
  Spinner,
  SuccessModal,
  ImageModal,
} from 'react/components/common';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'next/router';
import { OrderActions } from 'redux/actions';
import { getQueryString } from 'helpers';

/**
 * @class MobileShippingContainerComponent
 * @extends {React.PureComponent}
 * @description Container Component for Shipping Form on Mobile
 */
class MobileShippingContainerComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showCheckingModal: false,
    };
  }

  onSubmit = e => {
    this.setState({ showCheckingModal: true });
    this.props.handleSubmit(values => {
      this.props.submitLeadsForm({
        values,
        router: this.props.router,
        nextUrl: '/promo/mobile/select-package',
      });
    })(e);
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.submitStatus !== 'success' &&
      this.props.submitStatus === 'success'
    ) {
      this.setState({ showCheckingModal: false });
      const queryString = getQueryString();
      setTimeout(
        () =>
          window.location.assign(`/promo/mobile/select-package?${queryString}`),
        1000,
      );
    }
  }

  hideErrorModal = () => this.setState({ showErrorModal: false });

  render() {
    return (
      <div className="mobile-body">
        <div id="container">
          <div className="getheight">
            <div className="spng-hd">
              <div className="spng-hd2">
                <img
                  src="/static/promo/mobile/images/ck-top.jpg"
                  alt="American Science CBD"
                  className="sping-logo"
                />
                <p className="clearall" />
                <p className="trial-toptxt1">VERIFY YOUR SHIPPING INFO</p>
              </div>
            </div>
            <div id="trialsec2">
              <div className="clearfix" />
              <div className="trialform">
                <form
                  id="form-contact"
                  className="pure-form pure-form-aligned fv-form fv-form-pure"
                >
                  <div className="trialfrmmid">
                    <Field
                      containerClass="frmelmnts1"
                      component={TextField}
                      name="FirstName"
                      label="First Name*"
                      placeholder="First Name"
                      autoCorrect="off"
                      autoComplete="given-name"
                    />
                    <Field
                      containerClass="frmelmnts3"
                      component={TextField}
                      name="LastName"
                      label="Last Name*"
                      placeholder="Last Name*"
                      autoCorrect="off"
                      autoComplete="family-name"
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts2"
                      component={AddressField}
                      name="Address1"
                      label="Address Line 1*"
                      placeholder="Street and number, P.O. box, c/o."
                      changeField={this.props.change}
                      autoCorrect="off"
                      autoComplete="address-line1"
                    />
                    <Field
                      containerClass="frmelmnts2"
                      component={TextField}
                      name="Address2"
                      label="Address Line 2"
                      placeholder="Apartment, suite, unit, building, floor, etc."
                      autoCorrect="off"
                      autoComplete="address-line2"
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts2"
                      component={TextField}
                      name="City"
                      label="City*"
                      placeholder="Your City"
                      autoCorrect="off"
                      autoComplete="address-level2"
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts1"
                      component={TextField}
                      name="ZipCode"
                      label="Zip Code*"
                      placeholder="Zip Code"
                      normalize={normalizePostalCode}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      autoCorrect="off"
                      autoComplete="postal-code"
                    />
                    <Field
                      inputStyle={{ width: '99%' }}
                      containerClass="frmelmnts3"
                      component={SelectField}
                      name="State"
                      label="State*"
                      placeholder="Select State"
                      options={stateslist}
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts1"
                      component={TextField}
                      name="Phone"
                      label="Phone Number*"
                      placeholder="Example: (123) 555-6789"
                      normalize={normalizePhone}
                      type="tel"
                      autoCorrect="off"
                      autoComplete="tel"
                    />
                    <Field
                      containerClass="frmelmnts3"
                      component={TextField}
                      name="Email"
                      label="Email*"
                      placeholder="Example: email@somewhere.com"
                      type="email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="email"
                    />
                  </div>
                  <div className="clearfix" />
                  <div className="shpbtm">
                    <a
                      id="promo-shipping-form-submit-mobile"
                      href="javascript:void(0)"
                      className="button"
                      onClick={this.onSubmit}
                    >
                      <img
                        src="/static/promo/mobile/images/ship-btn.png"
                        alt="American Science CBD"
                        className="ship-btn pulse"
                      />
                    </a>
                    <img
                      src="/static/promo/mobile/images/loogs.png"
                      alt="American Science CBD"
                      className="loogs"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="legal">
            <div className="ftr-txt">
              <Footer promo />
            </div>
          </div>
        </div>
        {this.state.showCheckingModal && (
          <ImageModal>
            <img
              alt=""
              src="/static/assets/images/shipping-page-submitting.png"
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
  };
}

const MobileShippingContainer = connect(mapStateToProps, { ...OrderActions })(
  reduxForm({
    form: 'MobileShippingForm',
    validate: shippingFormValidator,
  })(withRouter(MobileShippingContainerComponent)),
);

export default MobileShippingContainer;
