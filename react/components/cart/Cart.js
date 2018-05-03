import React, { PureComponent } from 'react';
import Head from 'next/head';
import 'styles/cart.scss';
import { ChoseProductsForm } from './ChoseProductsForm';
import { UInfoForm } from './UInfoForm';

const axios = require('axios');

class Cart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      billingAsShipping: true,
      firstName: '',
      lastName: '',
      email: '',
      address_1: '',
      address_2: '',
      state: 'select_state',
      city: '',
      zip_code: '',
      phone_number: '',
      product1_qty: 0,
      product2_qty: 0,
      product3_qty: 0,
    };
    this.switchBillingAsShipping = this.switchBillingAsShipping.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.fFormUpdater = this.fFormUpdater.bind(this);
    this.updateProducts = this.updateProducts.bind(this);
  }
  switchBillingAsShipping() {
    this.setState({
      billingAsShipping: !this.state.billingAsShipping,
    });
  }
  submitHandler(sFormState) {
    console.log(sFormState);
    console.log(this.state);
    let body = {
      email: this.state.email,
      order: {
        cardNumber: sFormState.card_number,
        cardMonth: sFormState.month,
        cardYear: sFormState.year,
        cardSecurityCode: sFormState.cvv,
      },
      shipping: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address_1,
        address2: this.state.address_2,
        city: this.state.city,
        state: this.state.state,
        postalCode: this.state.zip_code,
        phoneNumber: this.state.phone_number,
      },
    };
    if (this.state.product1_qty > 0) {
      body.order.product1_qty = this.state.product1_qty;
      body.order.product1_id = 152;
    }
    if (this.state.product2_qty > 0) {
      body.order.product2_qty = this.state.product2_qty;
      body.order.product2_id = 157;
    }
    if (this.state.product3_qty > 0) {
      body.order.product3_qty = this.state.product3_qty;
      body.order.product3_id = 175;
    }
    if (this.state.billingAsShipping) {
      body = Object.assign({}, body, body.shipping);
    } else {
      body.firstName = sFormState.firstName;
      body.lastName = sFormState.lastName;
      body.address = sFormState.billing_cart_address_1;
      body.address2 = sFormState.billing_cart_address_2;
      body.city = sFormState.billing_cart_city;
      body.state = sFormState.billing_cart_state;
      body.postalCode = sFormState.billing_cart_zip_code;
      body.phoneNumber = sFormState.billing_cart_phone_number;
    }
    axios
      .post('/api/v1/konnektive/lead', body)
      .then(result => {
        console.log(result);
      })
      .catch(e => {
        console.error(e);
      });
  }
  fFormUpdater(update) {
    this.setState(update);
  }
  updateProducts(update) {
    this.setState(update);
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <script type="text/javascript" src="/static/assets/js/geoSearch.js" />
        </Head>
        <div className="inner-bg">
          <div className="container">
            <div className="inner-txt">
              <span>CART</span>
              <p className="comn-txt">
                Congratulations! You&#8217;re one step closer to better health.{' '}
                <br className="for-desk" />Use our secure checkout to complete
                your order.
              </p>
            </div>
            <img
              src="/static/assets/images/bnr-prd.png"
              alt=""
              className="inner-prd for-desk"
            />
          </div>
        </div>
        <div className="container">
          <div className="sec1-cartin">
            <table
              border="0"
              cellSpacing="0"
              cellPadding="0"
              width="100%"
              className="tbl1"
            >
              <tbody>
                <tr>
                  <td className="row1" style={{ paddingLeft: '8%' }}>
                    Product
                  </td>
                  <td className="row1 c2">QTY.</td>
                  <td className="row1 c3">Price</td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <ChoseProductsForm updater={this.updateProducts} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="clearall">
              <div className="sec1crt-frm" id="select_cart_form">
                <div className="confidence">
                  <p className="txtconfi">Shop With Confidence</p>
                  <img
                    alt=""
                    src="/static/assets/images/confidence.jpg"
                    className="confi-img"
                  />
                </div>
                <UInfoForm fType="cart_user_info" updater={this.fFormUpdater} />
                <UInfoForm
                  fType="cart_billing_info"
                  basSwitcher={this.switchBillingAsShipping}
                  basEnabled={this.state.billingAsShipping}
                  submitHandler={this.submitHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Cart };
