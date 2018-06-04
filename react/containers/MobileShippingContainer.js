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
  Modal,
} from 'react/components/common';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'next/router';
import { OrderActions } from 'redux/actions';

class MobileShippingContainerComponent extends React.PureComponent {
  state = {
    modal: false,
  };

  onSubmit = e => {
    if (!this.props.valid) {
      this.toggleModal();
    }
    this.props.handleSubmit(values => {
      this.props.submitLeadsForm({
        values,
        router: this.props.router,
        nextUrl: '/promo/mobile/select-package',
      });
    })(e);
  };

  toggleModal = () => this.setState(prevState => ({ modal: !prevState.modal }));

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
                      label="First Name*"
                      placeholder="First Name"
                      autocorrect="off"
                      autocomplete="given-name"
                    />
                    <Field
                      containerClass="frmelmnts3"
                      component={TextField}
                      name="lastName"
                      label="Last Name*"
                      placeholder="Last Name*"
                      autocorrect="off"
                      autocomplete="family-name"
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts2"
                      component={AddressField}
                      name="address"
                      label="Adress Line 1*"
                      placeholder="Street and number, P.O. box, c/o."
                      changeField={this.props.change}
                      autocorrect="off"
                      autocomplete="address-line1"
                    />
                    <Field
                      containerClass="frmelmnts2"
                      component={TextField}
                      name="address2"
                      label="Adress Line 2"
                      placeholder="Apartment, suite, unit, building, floor, etc."
                      autocorrect="off"
                      autocomplete="address-line2"
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts2"
                      component={TextField}
                      name="city"
                      label="City*"
                      placeholder="Your City"
                      autocorrect="off"
                      autocomplete="address-level2"
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts1"
                      component={TextField}
                      name="postalCode"
                      label="Zip Code*"
                      placeholder="Zip Code"
                      normalize={normalizePostalCode}
                      inputmode="numeric"
                      autocorrect="off"
                      autocomplete="postal-code"
                    />
                    <Field
                      inputStyle={{ width: '99%' }}
                      containerClass="frmelmnts3"
                      component={SelectField}
                      name="state"
                      label="State*"
                      placeholder="Select State"
                      options={stateslist}
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts1"
                      component={TextField}
                      name="phoneNumber"
                      label="Phone Number*"
                      placeholder="Example: (123) 555-6789"
                      normalize={normalizePhone}
                      type="tel"
                      autocorrect="off"
                      autocomplete="tel"
                    />
                    <Field
                      containerClass="frmelmnts3"
                      component={TextField}
                      name="email"
                      label="Email*"
                      placeholder="Example: email@somewhere.com"
                      type="email"
                      autocapitalize="off"
                      autocorrect="off"
                      autocomplete="email"
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
        {this.state.modal && (
          <Modal onClose={this.toggleModal} onCloseBtn={this.toggleModal}>
            <React.Fragment>Alert</React.Fragment>
            <div style={{ padding: 20, textAlign: 'center' }}>
              <h2>Please fill in all the details to continue</h2>
            </div>
          </Modal>
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

export { MobileShippingContainer };
