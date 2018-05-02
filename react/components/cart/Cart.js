import React, { PureComponent } from 'react';
import Head from 'next/head';
import 'styles/cart.scss';
import { ChoseProductsForm } from './ChoseProductsForm';
import { UInfoForm } from './UInfoForm';

class Cart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      billingAsShipping: true,
    };
    this.switchBillingAsShipping = this.switchBillingAsShipping.bind(this);
  }
  switchBillingAsShipping() {
    this.setState({
      billingAsShipping: !this.state.billingAsShipping,
    });
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
                    <ChoseProductsForm />
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
                <UInfoForm fType="cart_user_info" />
                <UInfoForm
                  fType="cart_billing_info"
                  basSwitcher={this.switchBillingAsShipping}
                  basEnabled={this.state.billingAsShipping}
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
