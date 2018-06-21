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
} from 'react/components/common';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'next/router';
import { OrderActions } from 'redux/actions';

class MobileShippingContainerComponent extends React.PureComponent {
  onSubmit = e => {
    this.props.handleSubmit(values => {
      this.props.submitLeadsForm({
        values,
        router: this.props.router,
        nextUrl: '/promo/mobile/select-package',
      });
    })(e);
  };
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
  };
}

const MobileShippingContainer = connect(mapStateToProps, { ...OrderActions })(
  reduxForm({
    form: 'MobileShippingForm',
    validate: shippingFormValidator,
  })(withRouter(MobileShippingContainerComponent)),
);

export default MobileShippingContainer;
