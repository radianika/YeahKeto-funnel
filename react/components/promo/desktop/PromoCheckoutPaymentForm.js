import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import {
  TextField,
  SelectField,
  SameAddressCheckField,
  AddressField,
} from 'react/components/common';
import {
  stateslist,
  billingFormValidator,
  normalizePhone,
  normalizePostalCode,
  normalizeCardNumber,
} from 'helpers';

class PromoCheckoutPaymentForm extends React.PureComponent {
  render() {
    const { same } = this.props.currentValues;
    return (
      <div className="chkfrm-mid">
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
            <span className="card-visa">
              <img src="/static/visa.png" alt="" />
            </span>
            <span className="card-mastercard">
              <img src="/static/Mastercard.png" alt="" />
            </span>
            <span className="card-discover">
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
                required
              />
              <Field
                component={TextField}
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                required
              />
              <Field
                component={AddressField}
                name="address"
                label="Address Line 1"
                placeholder="Street and number, P.O. box, c/o."
                required
                changeField={this.props.change}
              />
              <Field
                component={TextField}
                name="address2"
                label="Address Line 2"
                placeholder="Apartment, suite, unit, building, floor, etc."
              />
              <Field
                component={TextField}
                name="city"
                label="City"
                placeholder="Your City"
                required
              />
              <Field
                component={SelectField}
                name="state"
                label="State"
                placeholder="State"
                required
                options={stateslist}
              />
              <Field
                component={TextField}
                name="postalCode"
                label="Zip Code"
                placeholder="Zip Code"
                required
                normalize={normalizePostalCode}
              />
              <Field
                component={TextField}
                name="phoneNumber"
                label="Phone"
                placeholder="Example: (123) 555-6789"
                required
                normalize={normalizePhone}
              />
              <Field
                component={TextField}
                name="email"
                label="Email"
                placeholder="Example: email@somewhere.com"
                required
              />
            </React.Fragment>
          )}
          <Field
            component={TextField}
            name="cardNumber"
            className="creditcard"
            placeholder="•••• •••• •••• ••••"
            label="Card No"
            required
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
            <Field
              component={props => (
                <select className="short" {...props.input}>
                  <option>– –</option>
                  {[...Array(12).keys()].map(month => (
                    <option key={month} value={month + 1}>
                      {month + 1}
                    </option>
                  ))}
                </select>
              )}
              name="cardMonth"
            />
            <Field
              component={props => (
                <select className="short2" {...props.input}>
                  <option>– –</option>
                  {[18, 19, 20, 21, 22, 23, 24].map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              )}
              name="cardYear"
            />
          </div>
          <Field
            containerClass="frm-elem-cvv"
            component={TextField}
            label="CVV"
            name="cardSecurityCode"
            className="short"
            required
            maxLength={3}
            pattern="[0-9]*"
          />
          <div className="clearall" />
          <button onClick={this.submitForm} className="chk-submit pulse" />
        </form>
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
  };
}

PromoCheckoutPaymentForm = connect(mapStateToProps)(PromoCheckoutPaymentForm);

export { PromoCheckoutPaymentForm };
