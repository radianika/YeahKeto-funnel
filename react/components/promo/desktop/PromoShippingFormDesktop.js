import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField, SelectField } from 'react/components/common';
import { stateslist, shippingFormValidator, normalizePhone } from 'helpers';
import { connect } from 'react-redux';

class PromoShippingFormDesktop extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <form
        id="form-contact"
        onSubmit={props.handleSubmit}
        className="pure-form pure-form-aligned fv-form fv-form-pure"
      >
        <button
          type="submit"
          className="fv-hidden-submit"
          style={{ display: 'none', width: '0px', height: '0px' }}
        />
        <div className="sldrtxt" id="fades">
          <p style={{ opacity: '0.816285' }}>
            <i className="sprite2 sprite-eye" /> 13 others are viewing this
            offer right now!
          </p>
          <p style={{ display: 'none' }}>
            <i className="sprite2 sprite-eye" /> 25 people purchased this in the
            last hour
          </p>
        </div>
        <div className="frmhdr sprite2 sprite-frmhdr">
          <p className="frmhd-txt">
            TELL US WHERE TO SEND
            <br /> <span>Your Bottle Today!</span>
          </p>
        </div>
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
          normalize={normalizePhone}
        />
        <Field
          component={TextField}
          name="email"
          label="Email"
          placeholder="Example: email@somewhere.com"
          required
        />
        <div className="clearall" />
        <button
          onClick={this.submitShippingForm}
          className="submit pulse sprite5 sprite-submit"
        />
        <div className="clearall" />
        <div>
          <i className="s1logos sprite3 sprite-s1logos" />
        </div>
      </form>
    );
  }
}

PromoShippingFormDesktop = reduxForm({
  form: 'PromoContact',
  validate: shippingFormValidator,
})(PromoShippingFormDesktop);

function mapStateToProps() {
  return {};
}

PromoShippingFormDesktop = connect(mapStateToProps)(PromoShippingFormDesktop);

export { PromoShippingFormDesktop };
