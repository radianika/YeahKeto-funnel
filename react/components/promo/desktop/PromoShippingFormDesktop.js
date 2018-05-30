import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  stateslist,
  shippingFormValidator,
  normalizePhone,
  normalizePostalCode,
} from 'helpers';
import { TextField, SelectField, AddressField } from 'react/components/common';
import { connect } from 'react-redux';

class PromoShippingFormDesktopComponent extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <form
        id="form-contact"
        onChange={props.handleSubmit}
        className="pure-form pure-form-aligned fv-form fv-form-pure"
      >
        <button
          type="submit"
          className="fv-hidden-submit"
          style={{ display: 'none', width: '0px', height: '0px' }}
        />
        <div className="sldrtxt" id="fades">
          <div className="aggettivi">
            <div className="text-animated-one">
              <i className="sprite2 sprite-eye" /> 13 others are viewing this
              offer right now!
            </div>
            <div className="text-animated-two">
              <i className="sprite2 sprite-eye" /> 25 people purchased this in
              the last hour
            </div>
          </div>
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
          label="First Name*:"
          placeholder="First name"
        />
        <Field
          component={TextField}
          name="lastName"
          label="Last Name*:"
          placeholder="Last name"
        />
        <Field
          component={AddressField}
          name="address"
          label="Address Line 1*:"
          placeholder="Street and number, P.O. box, c/o."
          changeField={this.props.change}
        />
        <Field
          component={TextField}
          name="address2"
          label="Address Line 2:"
          placeholder="Apartment, suite, unit, building, floor, etc."
        />
        <Field
          component={TextField}
          name="city"
          label="City*:"
          placeholder="Your City"
        />
        <Field
          component={SelectField}
          name="state"
          label="State*:"
          placeholder="State"
          options={stateslist}
        />
        <Field
          component={TextField}
          name="postalCode"
          label="Zip Code*:"
          placeholder="Zip Code"
          normalize={normalizePostalCode}
        />
        <Field
          component={TextField}
          name="phoneNumber"
          label="Phone*:"
          placeholder="Example: (123) 555-6789"
          normalize={normalizePhone}
        />
        <Field
          component={TextField}
          name="email"
          label="Email*:"
          placeholder="Example: email@somewhere.com"
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

function mapStateToProps() {
  return {};
}

const PromoShippingFormDesktop = connect(mapStateToProps)(
  reduxForm({
    form: 'PromoContact',
    validate: shippingFormValidator,
  })(PromoShippingFormDesktopComponent),
);

export { PromoShippingFormDesktop };
