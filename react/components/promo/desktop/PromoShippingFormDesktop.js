import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  TextField,
  SelectField,
  CardExpiryField,
  SameAddressCheckField,
} from 'react/components/common';
import { stateslist } from 'helpers';
import { connect } from 'react-redux';

class PromoShippingFormDesktop extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <form
        onSubmit={this.props.handleSubmit}
        className="pure-form pure-form-aligned fv-form fv-form-pure"
      >
        {props.billing && <Field component={SameAddressCheckField} name="same" />}
        {props.shipping && (
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
              component={TextField}
              name="address"
              label="Address Line 1"
              placeholder="Street and number, P.O. box, c/o."
              required
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
            />
            <Field
              component={TextField}
              name="phoneNumber"
              label="Phone"
              placeholder="Example: (123) 555-6789"
              required
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
        {props.billing && (
          <React.Fragment>
            <Field
              component={TextField}
              name="cardNumber"
              className="creditcard"
              maxLength="19"
              placeholder="•••• •••• •••• ••••"
              label="Card No"
              required
            />
            <CardExpiryField />
            <Field
              containerClass="frm-elem-cvv"
              component={TextField}
              label="CVV"
              name="cardSecurityCode"
              className="short"
              type="text"
              required
            />
          </React.Fragment>
        )}
        <div className="clearall" />
        <button className={`chk-submit pulse ${this.props.shipping && 'sprite5 sprite-submit'}`} />
        <div className="clearall" />
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'The first name is required.';
  }
  if (!values.lastName) {
    errors.lastName = 'The last name is required.';
  }
  if (!values.address) {
    errors.address = 'The address is required';
  }
  if (values.address && values.address.length > 100) {
    errors.address = 'The address must be less than 100 characters long.';
  }
  if (!values.city) {
    errors.city = 'The city is required';
  }
  if (values.city && values.city.length > 50) {
    errors.city = 'The city must be less than 50 characters long.';
  }
  if (!values.state) {
    errors.state = 'The state is required';
  }
  if (!values.postalCode) {
    errors.postalCode = 'The zip code is required';
  }
  if (values.postalCode && values.postalCode.length !== 5) {
    errors.postalCode = 'The zip code must be 5 characters long.';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Please enter your phone number';
    // Not a valid 10-digit US phone number (must not include spaces or special characters).
  }
  if (!values.email) {
    errors.email = 'The email address is required';
    // The value is not a valid email address
  }
  return errors;
};

PromoShippingFormDesktop = reduxForm({
  form: 'PromoContact',
  validate,
  destroyOnUnmount: false,
})(PromoShippingFormDesktop);

function mapStateToProps() {
  return {};
}

PromoShippingFormDesktop = connect(mapStateToProps)(PromoShippingFormDesktop);

export { PromoShippingFormDesktop };
