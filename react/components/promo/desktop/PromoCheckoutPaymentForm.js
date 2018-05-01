import React from 'react';
import { withRouter } from 'next/router';

class PromoCheckoutPaymentForm extends React.PureComponent {
  submitForm = () => {
    this.props.router.push('/upsell-desktop');
  };
  render() {
    return (
      <div className="chkfrm-mid">
        <form
          id="form-checkout"
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
          <div className="sameas">
            {' '}
            Is your billing address the same as
            <br />your shipping address?<br />
            <span>
              <input
                id="radioOne"
                checked="checked"
                className="chkbx"
                name="same"
                type="radio"
              />&nbsp;Yes
              <input
                id="radioTwo"
                className="chkbx"
                name="same"
                type="radio"
              />&nbsp;No
            </span>
          </div>
          <div className="clearfix" />
          <div id="billingDiv" style={{ display: 'none' }} />
          <div className="pure-control-group frmElemts fv-has-feedback">
            <label>
              Card No<span>*</span>:
            </label>
            <input
              name="cardNumber"
              className="creditcard"
              maxLength="19"
              placeholder="•••• •••• •••• ••••"
              data-fv-field="cardNumber"
            />
          </div>
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
            <select
              className="short"
              name="month"
              autoComplete="cc-exp-month"
              data-fv-field="month"
            >
              <option disabled="" selected="" value="">
                – –
              </option>
            </select>
            <select
              className="short2"
              name="year"
              autoComplete="cc-exp-year"
              data-fv-field="year"
            >
              <option disabled="" selected="" value="">
                – –
              </option>
            </select>
          </div>
          <div className="pure-control-group frmElemts frm-elem-cvv fv-has-feedback">
            <label>
              CVV<span>*</span>:
            </label>
            <input
              name="cardSecurityCode"
              className="short"
              pattern="\d*"
              maxLength="3"
              data-fv-field="cardSecurityCode"
              type="text"
            />
          </div>
          <div className="clearall" />
          <button onClick={this.submitForm} className="chk-submit pulse" />
        </form>
      </div>
    );
  }
}

PromoCheckoutPaymentForm = withRouter(PromoCheckoutPaymentForm);

export { PromoCheckoutPaymentForm };
