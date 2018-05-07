import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import creditCartType from 'credit-card-type';
import {
  TextField,
  CVVField,
  SelectField,
  SameAddressCheckField,
  AddressField,
  Spinner,
  Modal,
} from 'react/components/common';
import {
  stateslist,
  billingFormValidator,
  normalizePhone,
  normalizePostalCode,
  normalizeCardNumber,
  normalizeSecurityCode,
} from 'helpers';

const ExpiryMonth = props => (
  <span>
    <select className="short" {...props.input}>
      <option>– –</option>
      {[...Array(12).keys()].map(month => (
        <option key={month} value={month + 1}>
          {month + 1}
        </option>
      ))}
    </select>
  </span>
);
const ExpiryYear = props => (
  <span>
    <select className="short2" {...props.input}>
      <option>– –</option>
      {[18, 19, 20, 21, 22, 23, 24].map(year => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </span>
);

class PromoCheckoutPaymentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active_cc_type: '',
      show_cvv_modal: false,
    };
    this._toggleCVVModal = this._toggleCVVModal.bind(this);
  }

  _toggleCVVModal(e) {
    e.preventDefault();
    this.setState({ show_cvv_modal: !this.state.show_cvv_modal });
  }

  _checkCardType(cc) {
    if (!cc) return;

    // let value = '4222222222222222';
    const value = cc.toString().replace(/\s/g, '');
    const cc_type = creditCartType(value);
    // console.log(cc, cc_type)

    if (cc_type && cc_type[0] && value.length > 3) {
      this.setState({ active_cc_type: cc_type[0].type });
    } else if (this.state.active_cc_type || value.length < 3) {
      this.setState({ active_cc_type: '' });
    }
  }

  render() {
    const { active_cc_type, show_cvv_modal } = this.state;
    const { same } = this.props.currentValues;

    return (
      <div className="chkfrm-mid">
        {show_cvv_modal && (
          <Modal onClose={this._toggleCVVModal}>
            CVV/CID
            <center>
              <img
                src="/static/promo/desktop/images/cvv2-location.jpeg"
                alt=""
              />
            </center>
          </Modal>
        )}
        <form
          onSubmit={this.props.handleSubmit}
          className="pure-form pure-form-aligned fv-form fv-form-pure"
        >
          <button
            type="submit"
            className="fv-hidden-submit"
            style={{ display: 'none', height: 0, width: 0 }}
          />
          <div className="cards">
            <span
              className={`card-visa ${
                active_cc_type == 'visa' ? 'active' : ''
              }`}
            >
              <img src="/static/Visa.png" alt="" />
            </span>
            <span
              className={`card-mastercard ${
                active_cc_type == 'master-card' ? 'active' : ''
              }`}
            >
              <img src="/static/Mastercard.png" alt="" />
            </span>
            <span
              className={`card-discover" ${
                active_cc_type == 'american-express' ? 'active' : ''
              }`}
            >
              <img src="/static/amex.png" alt="" />
            </span>
          </div>
          <Field component={SameAddressCheckField} name="same" />
          <div className="clearfix" />
          <div id="billingDiv" style={{ display: 'none' }} />
          {same !== 'Yes' && (
            <React.Fragment>
              <Field
                component={TextField}
                name="firstName"
                label="First Name"
                placeholder="First Name"
              />
              <Field
                component={TextField}
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
              />
              <Field
                component={AddressField}
                name="address"
                label="Address 1"
                placeholder="Street and number, P.O. box, c/o."
                changeField={this.props.change}
              />
              <Field
                component={TextField}
                name="address2"
                label="Address 2"
                placeholder="Apartment, suite, unit, building, floor, etc."
              />
              <Field
                component={TextField}
                name="city"
                label="City"
                placeholder="Your City"
              />
              <Field
                component={SelectField}
                name="state"
                label="State"
                placeholder="State"
                options={stateslist}
              />
              <Field
                component={TextField}
                name="postalCode"
                label="Zip Code"
                placeholder="Zip Code"
                normalize={normalizePostalCode}
              />
              <Field
                component={TextField}
                name="phoneNumber"
                label="Phone"
                placeholder="Example: (123) 555-6789"
                normalize={normalizePhone}
              />
              <Field
                component={TextField}
                name="email"
                label="Email"
                placeholder="Example: email@somewhere.com"
              />
            </React.Fragment>
          )}
          <Field
            component={TextField}
            name="cardNumber"
            className="creditcard"
            placeholder="•••• •••• •••• ••••"
            label="Card No"
            onChange={e => this._checkCardType(e.target.value)}
            normalize={normalizeCardNumber}
          />
          <div className="frmElemts exp-label">
            <label>&nbsp;</label>
            <label>(MM/YY)</label>
          </div>
          <div
            className="pure-control-group frmElemts frm-elem-expiry hideIcon fv-has-feedback"
            style={{ marginTop: 0 }}
          >
            <label>
              Expiry Date<span>*</span>:
            </label>
            <Field component={ExpiryMonth} name="cardMonth" />
            <Field component={ExpiryYear} name="cardYear" />
          </div>
          <Field
            containerClass="frm-elem-cvv"
            component={CVVField}
            label="CVV/CID"
            name="cardSecurityCode"
            className="short"
            normalize={normalizeSecurityCode}
            cvvClick={this._toggleCVVModal}
          />
          <div className="clearall" />
          <button onClick={this.submitForm} className="chk-submit pulse" />
        </form>
        {this.props.submitStatus === 'submitting' && <Spinner />}
      </div>
    );
  }
}

PromoCheckoutPaymentForm = reduxForm({
  form: 'BillingForm',
  validate: billingFormValidator,
})(PromoCheckoutPaymentForm);

const selector = formValueSelector('BillingForm');

function mapStateToProps(reduxState) {
  const {
    orderId,
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    postalCode,
    phoneNumber,
    emailAddress,
  } = reduxState.order.order;
  return {
    initialValues: {
      same: 'Yes',
      orderId,
      firstName,
      lastName,
      address: address1,
      address2,
      city,
      state,
      postalCode,
      phoneNumber,
      email: emailAddress,
    },
    currentValues: {
      same: selector(reduxState, 'same'),
    },
    submitStatus: reduxState.order.placeOrderStatus,
  };
}

PromoCheckoutPaymentForm = connect(mapStateToProps)(PromoCheckoutPaymentForm);

export { PromoCheckoutPaymentForm };
