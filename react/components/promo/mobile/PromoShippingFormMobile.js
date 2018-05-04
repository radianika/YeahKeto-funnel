import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class PromoContact extends React.PureComponent {
  render() {
    return (
      <form
        id="form-contact"
        method="POST"
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
        <div className="pure-control-group frmElemts fv-has-feedback">
          <label htmlFor="index_first_name">
            First Name<span>*</span>:
          </label>
          <input
            name="firstName"
            placeholder="First name"
            id="index_first_name"
            type="text"
          />
          <i style={{ display: 'none' }} className="fv-control-feedback" />
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-for="firstName"
            data-fv-result="NOT_VALIDATED"
          >
            The first name is required.
          </small>
        </div>
        <div className="pure-control-group frmElemts fv-has-feedback">
          <label htmlFor="index_last_name">
            Last Name<span>*</span>:
          </label>
          <input
            name="lastName"
            placeholder="Last name"
            id="index_last_name"
            type="text"
          />
          <i style={{ display: 'none' }} className="fv-control-feedback" />
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-for="lastName"
            data-fv-result="NOT_VALIDATED"
          >
            The last name is required.
          </small>
        </div>
        <div className="pure-control-group frmElemts fv-has-feedback">
          <label htmlFor="address_1">
            Address Line 1<span>*</span>:
          </label>
          <input
            name="address"
            id="address_1"
            placeholder="Street and number, P.O. box, c/o."
            onFocus="geolocate()"
            autoComplete="off"
            type="text"
          />
          <i style={{ display: 'none' }} className="fv-control-feedback" />
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-validator="stringLength"
            data-fv-for="address"
            data-fv-result="NOT_VALIDATED"
          >
            The address must be less than 100 characters long.
          </small>
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-for="address"
            data-fv-result="NOT_VALIDATED"
          >
            The address is required.
          </small>
        </div>
        <div className="pure-control-group frmElemts fv-has-feedback">
          <label htmlFor="address_2">Address Line 2:</label>
          <input
            name="address2"
            id="address_2"
            placeholder="Apartment, suite, unit, building, floor, etc."
            type="text"
          />
          <i style={{ display: 'none' }} className="fv-control-feedback" />
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-validator="stringLength"
            data-fv-for="address2"
            data-fv-result="NOT_VALIDATED"
          >
            Please enter a value with valid length
          </small>
        </div>
        <div className="pure-control-group frmElemts fv-has-feedback">
          <label htmlFor="city">
            City<span>*</span>:
          </label>
          <input id="city" name="city" placeholder="Your City" type="text" />
          <i style={{ display: 'none' }} className="fv-control-feedback" />
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-validator="stringLength"
            data-fv-for="city"
            data-fv-result="NOT_VALIDATED"
          >
            The city must be less than 50 characters long.
          </small>
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-for="city"
            data-fv-result="NOT_VALIDATED"
          >
            The city is required.
          </small>
        </div>
        <div className="pure-control-group frmElemts fv-has-feedback">
          <label htmlFor="state">
            State<span>*</span>:
          </label>
          <select
            name="state"
            id="state"
            className="sprite5 sprite-select-arrow"
          >
            <option value="" onClick="" selected="">
              State
            </option>
          </select>
          <i style={{ display: 'none' }} className="fv-control-feedback" />
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-for="state"
            data-fv-result="NOT_VALIDATED"
          >
            The State is required.
          </small>
        </div>
        <div className="pure-control-group frmElemts fv-has-feedback">
          <label htmlFor="zip_code">
            Zip Code<span>*</span>:
          </label>
          <input
            id="zip_code"
            name="postalCode"
            placeholder="Zip Code"
            maxLength="5"
            type="text"
            pattern="[0-9]*"
          />
          <i style={{ display: 'none' }} className="fv-control-feedback" />
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-validator="stringLength"
            data-fv-for="postalCode"
            data-fv-result="NOT_VALIDATED"
          >
            The zip code must be 5 number long.
          </small>
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-for="postalCode"
            data-fv-result="NOT_VALIDATED"
          >
            The zip code is required.
          </small>
        </div>
        <div className="pure-control-group frmElemts fv-has-feedback">
          <label htmlFor="phone_number">
            Phone<span>*</span>:
          </label>
          <input
            name="phoneNumber"
            id="phone_number"
            placeholder="Example: (123) 555-6789"
            maxLength="14"
            type="tel"
          />
          <i style={{ display: 'none' }} className="fv-control-feedback" />
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-for="phoneNumber"
            data-fv-result="NOT_VALIDATED"
          >
            Please enter your phone number.
          </small>
          <small
            style={{ display: 'none' }}
            className="fv-help-block"
            data-fv-validator="callback"
            data-fv-for="phoneNumber"
            data-fv-result="NOT_VALIDATED"
          >
            Not a valid 10-digit US phone number (must not include spaces or
            special characters).
          </small>
        </div>
        <div className="pure-control-group frmElemts fv-has-feedback">
          <label htmlFor="index_email_id">
            Email<span>*</span>:
          </label>
          <input
            name="email"
            placeholder="Example: email@somewhere.com"
            id="index_email_id"
            type="text"
          />
          <i style={{ display: 'none' }} className="fv-control-feedback" />
        </div>
        <div className="clearall" />
        <button type="submit" className="submit pulse sprite5 sprite-submit" />
        <div className="clearall" />
        <div>
          <i className="s1logos sprite3 sprite-s1logos" />
        </div>
      </form>
    );
  }
}

const PromoContactForm = reduxForm({
  form: 'PromoContact',
})(PromoContact);

function mapStateToProps() {
  return {};
}

const PromoContactMobile = connect(mapStateToProps)(PromoContactForm);

export { PromoContactMobile };
