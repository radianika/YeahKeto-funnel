import React from 'react';
import { connect } from 'react-redux';
import { stateslist, shippingFormValidator, normalizePhone } from 'helpers';
import { Footer, TextField, SelectField } from 'react/components/common';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'next/router';
import { OrderActions } from 'redux/actions';

class MobileShippingContainer extends React.PureComponent {
  onSubmit = values => {
    this.props.submitLeadsForm({
      values,
      router: this.props.router,
      nextUrl: '/promo/mobile/select-package',
    });
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
                      name="firstName"
                      label="First Name"
                      placeholder="First Name"
                    />
                    <Field
                      containerClass="frmelmnts3"
                      component={TextField}
                      name="lastName"
                      label="Last Name"
                      placeholder="Last Name"
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts2"
                      component={AddressField}
                      name="address"
                      label="Adress Line 1"
                      placeholder="Street and number, P.O. box, c/o."
                      changeField={this.props.change}
                    />
                    <Field
                      containerClass="frmelmnts2"
                      component={TextField}
                      name="address2"
                      label="Adress Line 2"
                      placeholder="Apartment, suite, unit, building, floor, etc."
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts2"
                      component={TextField}
                      name="city"
                      label="City"
                      placeholder="Your City"
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts1"
                      component={TextField}
                      name="postalCode"
                      label="Zip Code"
                      placeholder="Zip Code"
                      required
                      type="number"
                      maxLength={5}
                    />
                    <Field
                      containerClass="frmelmnts3"
                      component={SelectField}
                      name="state"
                      label="State"
                      placeholder="Select State"
                      required
                      options={stateslist}
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts1"
                      component={TextField}
                      name="phoneNumber"
                      label="Phone Numbe"
                      placeholder="Example: (123) 555-6789"
                      required
                      normalize={normalizePhone}
                      type="tel"
                    />
                    <Field
                      containerClass="frmelmnts3"
                      component={TextField}
                      name="email"
                      label="Email"
                      placeholder="Example: email@somewhere.com"
                      required
                      type="email"
                    />
                  </div>
                  <div className="clearfix" />
                  <div className="shpbtm">
                    <a
                      href="javascript:void(0)"
                      className="button"
                      onClick={this.props.handleSubmit(this.onSubmit)}
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
          <Footer />
        </div>

        <div className="js-div-loading-bar">
          <div className="sk-circle">
            <div className="sk-circle1 sk-child" />
            <div className="sk-circle2 sk-child" />
            <div className="sk-circle3 sk-child" />
            <div className="sk-circle4 sk-child" />
            <div className="sk-circle5 sk-child" />
            <div className="sk-circle6 sk-child" />
            <div className="sk-circle7 sk-child" />
            <div className="sk-circle8 sk-child" />
            <div className="sk-circle9 sk-child" />
            <div className="sk-circle10 sk-child" />
            <div className="sk-circle11 sk-child" />
            <div className="sk-circle12 sk-child" />
          </div>
        </div>
      </div>
    );
  }
}

MobileShippingContainer = withRouter(MobileShippingContainer);

MobileShippingContainer = reduxForm({
  form: 'MobileShippingForm',
  validate: shippingFormValidator,
})(MobileShippingContainer);

MobileShippingContainer = connect(null, { ...OrderActions })(
  MobileShippingContainer,
);

export { MobileShippingContainer };
