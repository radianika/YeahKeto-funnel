import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {
  TextField,
  SelectField,
  SameAddressCheckField,
} from 'react/components/common';
import { stateslist } from 'helpers';

class PromoCheckoutPaymentForm extends React.PureComponent {
  render() {
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
              <img src="/static/promo/desktop/images/card-visa.png" alt="" />
            </span>
            <span className="card-mastercard">
              <img
                src="/static/promo/desktop/images/card-mastercard.png"
                alt=""
              />
            </span>
            <span className="card-discover">
              <img
                src="/static/promo/desktop/images/card-discover.png"
                alt=""
              />
            </span>
          </div>
          <Field component={SameAddressCheckField} name="same" />
          <div className="clearfix" />
          <div id="billingDiv" style={{ display: 'none' }} />
          <Field
            component={TextField}
            name="cardNumber"
            className="creditcard"
            maxLength="19"
            placeholder="•••• •••• •••• ••••"
            label="Card No"
            required
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
                </select>
              )}
              name="month"
            />
            <Field
              component={props => (
                <select className="short2" {...props.input}>
                  <option>– –</option>
                </select>
              )}
              name="year"
            />
          </div>
          <Field
            containerClass="frm-elem-cvv"
            component={TextField}
            label="CVV"
            name="cardSecurityCode"
            className="short"
            type="text"
            required
          />
          <div className="clearall" />
          <button onClick={this.submitForm} className="chk-submit pulse" />
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.cardNumber) {
    errors.cardNumber = 'Card number is required';
  }
  if (!values.month) {
    errors.cardNumber = 'Month is required';
  }
  if (!values.year) {
    errors.cardNumber = 'Year is required';
  }
  if (!values.cardSecurityCode) {
    errors.cardSecurityCode = 'Security Code is required';
  }
  return errors;
}

PromoCheckoutPaymentForm = reduxForm({
  form: 'BillingForm',
  validate,
})(PromoCheckoutPaymentForm);

function mapStateToProps(state) {
  return {
    initialValues: {
      same: 'Yes',
    },
  };
}

PromoCheckoutPaymentForm = connect(mapStateToProps)(PromoCheckoutPaymentForm);

export { PromoCheckoutPaymentForm };
