import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  stateslist,
  normalizePostalCode,
  normalizePhone,
  shippingCartFormValidator,
  normalizeCardNumber,
  normalizeSecurityCode,
} from 'helpers';

import {
  TextField,
  AddressField,
  SelectField,
  Modal,
} from 'react/components/common';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

class CartForm extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isSame: true,
      tncAgreed: false,
      show_cvv_modal: false,
    };
  }

  getMonthOptions = () => {
    const monthOptions = {};
    [...Array(12).keys()].forEach(v => {
      monthOptions[v] = months[v];
    });
    return monthOptions;
  };

  getYearOptions = () => {
    const yearOptions = {};
    [18, 19, 20, 21, 22, 23, 24].forEach(v => {
      yearOptions[`20${v}`] = v;
    });
    return yearOptions;
  };

  _toggleCVVModal = e => {
    e.preventDefault();
    this.setState({ show_cvv_modal: !this.state.show_cvv_modal });
  };

  render() {
    const { props } = this;
    return (
      <form
        onSubmit={props.handleSubmit}
        className="pure-form pure-form-aligned fv-form fv-form-pure"
      >
        <div>
          <button
            type="submit"
            className="fv-hidden-submit"
            style={{ display: 'none', width: '0px', height: '0px' }}
          />
          <div className="sec1crt-frmlft">
            <div className="form-top">
              <img
                alt="hdng-icon"
                src="/static/assets/images/hdng-icon1.png"
                className="hdng-icon"
              />
              <p className="txt2-chk">Shipping Information</p>
            </div>
            <p className="sec1crt-frmlft__ship-info">
              All packages are shipped via Standard Shipping and are estimated
              to arrive within 3-5 business days from the day you place order.
            </p>
            <div className="form-content">
              <Field
                component={TextField}
                name="firstName"
                label="First Name*"
                placeholder="First name"
                icon="/static/assets/images/frmicon1.png"
                large
              />
              <Field
                component={TextField}
                name="lastName"
                label="Last Name*"
                placeholder="Last name"
                icon="/static/assets/images/frmicon1.png"
                large
              />
              <Field
                component={TextField}
                name="email"
                label="Email*"
                placeholder="Example: email@somewhere.com"
                icon="/static/assets/images/frmicon3.png"
                large
              />
              <Field
                component={AddressField}
                name="address"
                label="Address Line 1*"
                placeholder="Street and number, P.O. box, c/o."
                icon="/static/assets/images/frmicon5.png"
                changeField={this.props.change}
                large
              />
              <Field
                component={TextField}
                name="address2"
                label="Address Line 2"
                placeholder="Apartment, suite, unit, building, floor, etc."
                icon="/static/assets/images/frmicon5.png"
                large
              />
              <Field
                containerClass="short1"
                component={SelectField}
                name="state"
                label="State*"
                placeholder="Select State"
                options={stateslist}
                icon="/static/assets/images/frmicon7.png"
                large
              />
              <Field
                containerClass="short2"
                component={TextField}
                name="city"
                label="City*"
                placeholder="Your City"
                icon="/static/assets/images/frmicon6.png"
                large
              />
              <Field
                containerClass="short1"
                component={TextField}
                name="postalCode"
                label="Zip Code*"
                placeholder="Zip Code"
                normalize={normalizePostalCode}
                icon="/static/assets/images/frmicon8.png"
                large
              />
              <Field
                containerClass="short2"
                component={TextField}
                name="phoneNumber"
                label="Phone Number*"
                placeholder="Example: (123) 555-6789"
                normalize={normalizePhone}
                icon="/static/assets/images/frmicon4.png"
                large
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="fv-hidden-submit"
            style={{ display: 'none', width: '0px', height: '0px' }}
          />
          <div className="sec1crt-frmrgt">
            <div className="form-top">
              <img
                alt="hdng-icon"
                src="/static/assets/images/hdng-icon2.png"
                className="hdng-icon"
              />
              <p className="txt2-chk">Payment Information</p>
            </div>
            <div className="form-content">
              {/*
                TODO: might be used later when there is the case that
                billing andshipping have different addresses

                <p className="billing-toggle-txt">
                  <input
                    className="chkbx-chk"
                    id="billing_same"
                    checked={this.state.isSame}
                    type="checkbox"
                    onChange={() => {
                      this.setState({ isSame: !this.state.isSame });
                    }}
                  />
                  Billing Address is the same as Shipping Address
                </p>
              */}
              {!this.state.isSame && (
                <div id="billingflds">
                  <Field
                    component={TextField}
                    name="shipping.firstName"
                    label="First Name*"
                    placeholder="First Name"
                    icon="/static/assets/images/frmicon1.png"
                    large
                  />
                  <Field
                    component={TextField}
                    name="shipping.lastName"
                    label="Last Name*"
                    placeholder="Last Name"
                    icon="/static/assets/images/frmicon1.png"
                    large
                  />
                  <Field
                    component={TextField}
                    name="email"
                    label="Email*"
                    placeholder="Example: email@somewhere.com"
                    icon="/static/assets/images/frmicon3.png"
                    large
                  />
                  <Field
                    component={AddressField}
                    name="shipping.address"
                    label="Address Line 1*"
                    placeholder="Street and number, P.O. box, c/o."
                    icon="/static/assets/images/frmicon5.png"
                    changeField={this.props.change}
                    large
                  />
                  <Field
                    component={TextField}
                    name="shipping.address2"
                    label="Address Line 2"
                    placeholder="Apartment, suite, unit, building, floor, etc."
                    icon="/static/assets/images/frmicon5.png"
                    large
                  />
                  <Field
                    component={SelectField}
                    name="shipping.state"
                    label="State*"
                    placeholder="State"
                    options={stateslist}
                    icon="/static/assets/images/frmicon7.png"
                    large
                  />
                  <Field
                    component={TextField}
                    name="shipping.city"
                    label="City*"
                    placeholder="Your City"
                    icon="/static/assets/images/frmicon6.png"
                    large
                  />
                  <Field
                    component={TextField}
                    name="shipping.postalCode"
                    label="Zip Code*"
                    placeholder="Zip Code"
                    normalize={normalizePostalCode}
                    icon="/static/assets/images/frmicon8.png"
                    large
                  />
                  <Field
                    component={TextField}
                    name="phoneNumber"
                    label="Phone*"
                    placeholder="Example: (123) 555-6789"
                    normalize={normalizePhone}
                    icon="/static/assets/images/frmicon4.png"
                    large
                  />
                </div>
              )}
              <div className="cards">
                <span className="card-visa">
                  <img src="/static/assets/images/card-visa.png" alt="" />
                </span>
                <span className="card-mastercard">
                  <img src="/static/assets/images/card-mastercard.png" alt="" />
                </span>
                <span className="card-amex">
                  <img src="/static/assets/images/card-amex.png" alt="" />
                </span>
              </div>
              <Field
                component={TextField}
                name="order.cardNumber"
                className="creditcard"
                placeholder="•••• •••• •••• ••••"
                label="Card Number*"
                normalize={normalizeCardNumber}
                large
              />
              <Field
                containerClass="short1"
                component={SelectField}
                name="order.cardMonth"
                label="Expiration Month*"
                placeholder="- -"
                options={this.getMonthOptions()}
                large
              />
              <Field
                containerClass="short2"
                component={SelectField}
                name="order.cardYear"
                label="Expiration Year*"
                placeholder="- -"
                options={this.getYearOptions()}
                large
              />
              <Field
                containerClass="frmelements short1 mob-sort frm-elem-cvv"
                placeholder="123"
                component={TextField}
                label="CVV/CID*"
                name="order.cardSecurityCode"
                normalize={normalizeSecurityCode}
                large
              />
              <div className="frmelements short2 mob-sort">
                <a
                  href="javascript:;"
                  className="whats-this"
                  style={{ marginTop: '55px' }}
                  onClick={this._toggleCVVModal}
                >
                  What is this?{' '}
                </a>
              </div>
              <p className="billing-toggle-txt">
                <input
                  id="agree_terms"
                  name="agree_terms"
                  className="chkbx-chk"
                  checked={this.state.tncAgreed}
                  type="checkbox"
                  required="true"
                  onChange={() =>
                    this.setState({ tncAgreed: !this.state.tncAgreed })
                  }
                />
                I agree to the Terms &amp; Conditions &amp; Privacy Policy.{' '}
                <br />
                All charges on your bank statement will appear as &quot;American
                Science CBD 8883138529&quot;
              </p>
              <div className="clearall" />
              <div className="frmelements btn-element">
                <button
                  className="btn-payment-send"
                  onSubmit={props.handleSubmit}
                >
                  <img
                    alt="btn"
                    src="/static/assets/images/btn.png"
                    className="button-crt"
                    id="cart_submit"
                  />
                </button>
              </div>
              <center>
                <img
                  alt="postal"
                  src="/static/assets/images/postal-crt.png"
                  className="postal-crt"
                />
              </center>
            </div>
          </div>
        </div>
        {this.state.show_cvv_modal && (
          <Modal onClose={this._toggleCVVModal}>
            CVV/CID
            <center>
              <img src="/static/promo/common/cvv.jpg" alt="" />
            </center>
          </Modal>
        )}
      </form>
    );
  }
}

const CartFormContainer = reduxForm({
  form: 'CartForm',
  validate: shippingCartFormValidator,
})(CartForm);

export { CartFormContainer };
