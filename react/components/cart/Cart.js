import React, { PureComponent } from 'react';
import Head from 'next/head';
import 'styles/cart.scss';

const prices = {
  product1: 69,
  product2: 77,
  product3: 87,
};

const validators = {};
validators.UInfoForm = {};
validators.UInfoForm.firstName = value =>
  (value.length ? new RegExp('^.*[^A-zs ].*$').test(value) : false);
validators.UInfoForm.lastName = validators.firstName;
validators.UInfoForm.email = value =>
  (value.length ? new RegExp('S+@S+.S+').test(value) : false);
validators.UInfoForm.address_1 = value =>
  (value.length ? new RegExp("^[a-zA-Z0-9s,.'-]{3,}$ .").test(value) : false);
validators.UInfoForm.address_2 = validators.address_1;
validators.UInfoForm.city = validators.firstName;
validators.UInfoForm.zip_code = value =>
  (value.length ? !/^\d{0,6}$/.test(value) : false);
validators.UInfoForm.phone_number = value =>
  (value.length ? !/^[\+]{0,1}[\d-]{0,35}$/.test(value) : false);

// validators.

class UInfoForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address_1: '',
      address_2: '',
      state: 'select_state',
      city: '',
      zip_code: '',
      phone_number: '',
    };
    this.uInfoChangeHandler = this.uInfoChangeHandler.bind(this);
    // this.geoLocate = this.geoLocate.bind(this);
  }
  uInfoChangeHandler(e) {
    if (
      e.target.id in validators.UInfoForm &&
      validators.UInfoForm[e.target.id](e.target.value)
    ) {
      e.preventDefault();
      return undefined;
    }
    this.setState({
      [e.target.id]: e.target.value,
    });
    return undefined;
  }
  /* geoLocate() {
    //    console.log(this.geoLocate);
  } */
  render() {
    return (
      <form id="cart_user_info">
        <div className="sec1crt-frmlft">
          <div className="form-top">
            <img
              src="/static/assets/images/hdng-icon1.png"
              className="hdng-icon"
              alt=""
            />
            <p className="txt2-chk">Shipping Information</p>
          </div>
          <div>
            <p>
              All packages are shipped via Standard Shipping and are estimated
              to arrive within 3-5 business days from the day you place order.
            </p>
          </div>
          <div className="form-content">
            <div className="frmelements pure-control-group">
              <label>
                First Name<span>*</span>
              </label>
              <div className="field">
                <div className="icon-box">
                  <center>
                    <img src="/static/assets/images/frmicon1.png" alt="" />
                  </center>
                </div>
                <input
                  type="text"
                  name="firstName"
                  className="ft-input"
                  required
                  autoComplete="off"
                  placeholder="First name"
                  id="firstName"
                  value={this.state.firstName}
                  onChange={this.uInfoChangeHandler}
                />
              </div>
            </div>
            <div className="frmelements pure-control-group">
              <label>
                Last Name<span>*</span>
              </label>
              <div className="field">
                <div className="icon-box">
                  <center>
                    <img src="/static/assets/images/frmicon1.png" alt="" />
                  </center>
                </div>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="ft-input"
                  required
                  autoComplete="off"
                  placeholder="Last name"
                  value={this.state.lastName}
                  onChange={this.uInfoChangeHandler}
                />
              </div>
            </div>
            <div className="frmelements pure-control-group">
              <label>
                Email <span>*</span>{' '}
              </label>
              <div className="field">
                <div className="icon-box">
                  <center>
                    <img src="/static/assets/images/frmicon3.png" alt="" />
                  </center>
                </div>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Example: email@somewhere.com"
                  className="ft-input"
                  required
                  autoComplete="off"
                  value={this.state.email}
                  onChange={this.uInfoChangeHandler}
                />
              </div>
            </div>
            <div className="frmelements pure-control-group">
              <label>
                Address Line 1<span>*</span>
              </label>
              <div className="field">
                <div className="icon-box">
                  <center>
                    <img src="/static/assets/images/frmicon5.png" alt="" />
                  </center>
                </div>
                <input
                  type="text"
                  name="address"
                  id="address_1"
                  placeholder="Street and number, P.O. box, c/o."
                  className="ft-input"
                  required
                  autoComplete="off"
                  value={this.state.address_1}
                  onChange={this.uInfoChangeHandler}
                />
              </div>
            </div>
            <div className="frmelements pure-control-group">
              <label>Address Line 2</label>
              <div className="field address-2">
                <div className="icon-box">
                  <center>
                    <img src="/static/assets/images/frmicon5.png" alt="" />
                  </center>
                </div>
                <input
                  type="text"
                  name="address2"
                  id="address_2"
                  placeholder="Apartment, suite, unit, building, floor, etc."
                  className="ft-input"
                  required
                  autoComplete="off"
                  value={this.state.address_2}
                  onChange={this.uInfoChangeHandler}
                />
              </div>
            </div>
            <div className="frmelements short1 pure-control-group">
              <label>
                State<span>*</span>
              </label>
              <div className="field">
                <div className="icon-box">
                  <center>
                    <img src="/static/assets/images/frmicon7.png" alt="" />
                  </center>
                </div>
                <select
                  name="state"
                  id="state"
                  className="ft-input"
                  value={this.state.state}
                  onChange={this.uInfoChangeHandler}
                >
                  <option value="select_state">Select State</option>
                  <option value="AL">Alabama (AL)</option>
                  <option value="AK">Alaska (AK)</option>
                  <option value="AS">American Samoa (AS)</option>
                  <option value="AZ">Arizona (AZ)</option>
                  <option value="AR">Arkansas (AR)</option>
                  <option value="AE-A">Armed Forces Africa (AE)</option>
                  <option value="AA">Armed Forces Americas (AA)</option>
                  <option value="AE-C">Armed Forces Canada (AE)</option>
                  <option value="AE-E">Armed Forces Europe (AE)</option>
                  <option value="AE-M">Armed Forces Middle East (AE)</option>
                  <option value="AP">Armed Forces Pacific (AP)</option>
                  <option value="CA">California (CA)</option>
                  <option value="CO">Colorado (CO)</option>
                  <option value="CT">Connecticut (CT)</option>
                  <option value="DE">Delaware (DE)</option>
                  <option value="DC">District of Columbia (DC)</option>
                  <option value="FM">
                    Federated States of Micronesia (FM)
                  </option>
                  <option value="FL">Florida (FL)</option>
                  <option value="GA">Georgia (GA)</option>
                  <option value="GU">Guam (GU)</option>
                  <option value="HI">Hawaii (HI)</option>
                  <option value="ID">Idaho (ID)</option>
                  <option value="IL">Illinois (IL)</option>
                  <option value="IN">Indiana (IN)</option>
                  <option value="IA">Iowa (IA)</option>
                  <option value="KS">Kansas (KS)</option>
                  <option value="KY">Kentucky (KY)</option>
                  <option value="LA">Louisiana (LA)</option>
                  <option value="ME">Maine (ME)</option>
                  <option value="MD">Maryland (MD)</option>
                  <option value="MA">Massachusetts (MA)</option>
                  <option value="MI">Michigan (MI)</option>
                  <option value="MN">Minnesota (MN)</option>
                  <option value="MS">Mississippi (MS)</option>
                  <option value="MO">Missouri (MO)</option>
                  <option value="MT">Montana (MT)</option>
                  <option value="NE">Nebraska (NE)</option>
                  <option value="NV">Nevada (NV)</option>
                  <option value="NH">New Hampshire (NH)</option>
                  <option value="NJ">New Jersey (NJ)</option>
                  <option value="NM">New Mexico (NM)</option>
                  <option value="NY">New York (NY)</option>
                  <option value="NC">North Carolina (NC)</option>
                  <option value="ND">North Dakota (ND)</option>
                  <option value="MP">Northern Mariana Islands (MP)</option>
                  <option value="OH">Ohio (OH)</option>
                  <option value="OK">Oklahoma (OK)</option>
                  <option value="OR">Oregon (OR)</option>
                  <option value="PA">Pennsylvania (PA)</option>
                  <option value="PR">Puerto Rico (PR)</option>
                  <option value="MH">Republic of Marshall Islands (MH)</option>
                  <option value="RI">Rhode Island (RI)</option>
                  <option value="SC">South Carolina (SC)</option>
                  <option value="SD">South Dakota (SD)</option>
                  <option value="TN">Tennessee (TN)</option>
                  <option value="TX">Texas (TX)</option>
                  <option value="UT">Utah (UT)</option>
                  <option value="VT">Vermont (VT)</option>
                  <option value="VI">Virgin Islands of the U.S. (VI)</option>
                  <option value="VA">Virginia (VA)</option>
                  <option value="WA">Washington (WA)</option>
                  <option value="WV">West Virginia (WV)</option>
                  <option value="WI">Wisconsin (WI)</option>
                  <option value="WY">Wyoming (WY)</option>
                </select>
              </div>
            </div>
            <div className="frmelements short2 pure-control-group">
              <label>
                City<span>*</span>
              </label>
              <div className="field">
                <div className="icon-box">
                  <center>
                    <img src="/static/assets/images/frmicon6.png" alt="" />
                  </center>
                </div>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Your City"
                  className="ft-input"
                  required
                  autoComplete="off"
                  value={this.state.city}
                  onChange={this.uInfoChangeHandler}
                />
              </div>
            </div>
            <div className="frmelements short1 pure-control-group">
              <label>
                Zip Code <span>*</span>
              </label>
              <div className="field">
                <div className="icon-box">
                  <center>
                    <img src="/static/assets/images/frmicon8.png" alt="" />
                  </center>
                </div>
                <input
                  type="tel"
                  id="zip_code"
                  name="postalCode"
                  placeholder="Post Code"
                  className="ft-input"
                  required
                  autoComplete="off"
                  value={this.state.zip_code}
                  onChange={this.uInfoChangeHandler}
                />
              </div>
            </div>
            <div className="frmelements short2 pure-control-group">
              <label>
                Phone Number <span>*</span>
              </label>
              <div className="field">
                <div className="icon-box">
                  <center>
                    <img src="/static/assets/images/frmicon4.png" alt="" />
                  </center>
                </div>
                <input
                  value={this.state.phone_number}
                  onChange={this.uInfoChangeHandler}
                  type="tel"
                  name="phoneNumber"
                  id="phone_number"
                  placeholder="Example: (123) 555-6789"
                  className="ft-input"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

class Cart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product1Selected: '0',
      product2Selected: '0',
      product3Selected: '0',
    };
    this.selectProduct = this.selectProduct.bind(this);
  }
  selectProduct(e, productId) {
    this.setState({
      [`product${productId}Selected`]: e.target.value,
    });
  }
  /* geoLocate(...a) {
    // const e = a[0];
    // console.log('NOT IMPLEMENTED YET!');
  } */
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
                    <form id="product_select">
                      <table
                        border="0"
                        cellSpacing="0"
                        cellPadding="0"
                        width="97%"
                        className="tbl2"
                      >
                        <tbody>
                          <tr>
                            <td className="row2 txt1-cart midc1">
                              <img
                                alt=""
                                src="/static/assets/images/pro1crt.png"
                                className="procrt"
                              />
                              <p className="txt3-crt">
                                American Science<br />
                                <span>CBD HEMP OIL 500 mg</span>
                              </p>
                            </td>
                            <td className="row2 txt1-cart midc2">
                              <select
                                id="product1_qty"
                                name="cbd-oil"
                                className="drop"
                                onChange={e => {
                                  this.selectProduct(e, 1);
                                }}
                                defaultValue="0"
                              >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                              <div style={{ display: 'none' }}>
                                <input
                                  type="text"
                                  name="product1_id"
                                  defaultValue={152}
                                />
                              </div>
                            </td>
                            <td
                              className="row2 txt1-cart midc3 pinktxt1"
                              id="cbd-oil-price"
                            >
                              ${(
                                parseInt(this.state.product1Selected, 10) *
                                prices.product1
                              ).toFixed(2)}
                            </td>
                          </tr>
                          <tr>
                            <td className="txt1-cart midc1 row3">
                              <img
                                alt=""
                                src="/static/assets/images/pro2crt.png"
                                className="procrt"
                              />
                              <p className="txt3-crt">
                                American Science<br />
                                <span>CBD HEMP CAPSULES 300 mg</span>
                              </p>
                            </td>
                            <td className="txt1-cart row3 midc2">
                              <select
                                id="product2_qty"
                                name="cbd-capsules"
                                className="drop"
                                onChange={e => {
                                  this.selectProduct(e, 2);
                                }}
                              >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                              <div style={{ display: 'none' }}>
                                <input
                                  type="text"
                                  name="product2_id"
                                  defaultValue={157}
                                />
                              </div>
                            </td>
                            <td
                              className="txt1-cart row3 midc3 pinktxt1"
                              id="cbd-capsules-price"
                            >
                              ${(
                                parseInt(this.state.product2Selected, 10) *
                                prices.product2
                              ).toFixed(2)}
                            </td>
                          </tr>
                          <tr>
                            <td className="txt1-cart midc1 row3">
                              <img
                                alt=""
                                src="/static/assets/images/pro3crt.png"
                                width="54"
                                height="80"
                                className="procrt"
                              />
                              <p className="txt3-crt">
                                American Science<br />
                                <span>WARMING BALM 50 mg</span>
                              </p>
                            </td>
                            <td className="txt1-cart row3 midc2">
                              <select
                                id="product3_qty"
                                name="cbd-balm"
                                className="drop"
                                onChange={e => {
                                  this.selectProduct(e, 3);
                                }}
                              >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                              <div style={{ display: 'none' }}>
                                <input
                                  type="text"
                                  name="product3_id"
                                  defaultValue={175}
                                />
                              </div>
                            </td>
                            <td
                              className="txt1-cart row3 midc3 pinktxt1"
                              id="cbd-balm-price"
                            >
                              ${(
                                parseInt(this.state.product3Selected, 10) *
                                prices.product3
                              ).toFixed(2)}
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td colSpan="2">
                              <table
                                border="0"
                                cellSpacing="0"
                                cellPadding="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="sec1crt-row4td-l">Total</td>
                                    <td
                                      className="sec1crt-row4td-r"
                                      id="product-total"
                                    >
                                      ${() => {
                                        const s1 =
                                          parseInt(
                                            this.state.product3Selectedm,
                                            10,
                                          ) * prices.product3;
                                        const s2 =
                                          parseInt(
                                            this.state.product2Selected,
                                            10,
                                          ) * prices.product2;
                                        const s3 =
                                          parseInt(
                                            this.state.product2Selected,
                                            10,
                                          ) * prices.product1;
                                        return (s1 + s2 + s3).toFixed(2);
                                      }}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            <td colSpan="2">
                              <table
                                border="0"
                                cellSpacing="0"
                                cellPadding="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="sec1crt-row4td-l">
                                      Shipping
                                    </td>
                                    <td className="sec1crt-row4td-r">FREE</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ float: 'left' }} />
                            <td colSpan="2">
                              <table
                                border="0"
                                cellSpacing="0"
                                cellPadding="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="sec1crt-row4td-l grand">
                                      Grand Total
                                    </td>
                                    <td
                                      className="sec1crt-row4td-r grand"
                                      id="product-grand-total"
                                    >
                                      ${() => {
                                        const s1 =
                                          parseInt(
                                            this.state.product3Selectedm,
                                            10,
                                          ) * prices.product3;
                                        const s2 =
                                          parseInt(
                                            this.state.product2Selected,
                                            10,
                                          ) * prices.product2;
                                        const s3 =
                                          parseInt(
                                            this.state.product2Selected,
                                            10,
                                          ) * prices.product1;
                                        return (s1 + s2 + s3).toFixed(2);
                                      }}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="clearall" />
            <div className="sec1crt-frm" id="select_cart_form">
              <div className="confidence">
                <p className="txtconfi">Shop With Confidence</p>
                <img
                  alt=""
                  src="/static/assets/images/confidence.jpg"
                  className="confi-img"
                />
              </div>
              <UInfoForm />
              <form id="cart_billing_info">
                <div className="sec1crt-frmrgt">
                  <div className="form-top">
                    <center>
                      <img
                        alt=""
                        src="/static/assets/images/hdng-icon2.png"
                        className="hdng-icon"
                      />
                    </center>
                    <p className="txt2-chk">Payment Information</p>
                  </div>
                  <div className="form-content">
                    <p className="billing-toggle-txt">
                      <input
                        type="checkbox"
                        name="agree_terms"
                        className="chkbx-chk"
                        id="billing_same"
                        defaultValue="checked"
                      />
                      Billing Address is the same as Shipping Address
                    </p>
                    <div
                      style={{ float: 'left', width: '100%', display: 'none' }}
                      id="billingflds"
                    >
                      <div className="frmelements pure-control-group">
                        <label>
                          First Name<span>*</span>
                        </label>
                        <div className="field">
                          <div className="icon-box">
                            <center>
                              <img
                                alt=""
                                src="/static/assets/images/frmicon1.png"
                              />
                            </center>
                          </div>
                          <input
                            type="text"
                            name="firstName"
                            className="ft-input"
                            required
                            autoComplete="off"
                            placeholder="First name"
                          />
                        </div>
                      </div>
                      <div className="frmelements pure-control-group">
                        <label>
                          Last Name<span>*</span>
                        </label>
                        <div className="field">
                          <div className="icon-box">
                            <center>
                              <img
                                alt=""
                                src="/static/assets/images/frmicon1.png"
                              />
                            </center>
                          </div>
                          <input
                            type="text"
                            name="lastName"
                            className="ft-input"
                            required
                            autoComplete="off"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      <div className="frmelements pure-control-group">
                        <label>
                          Email <span>*</span>{' '}
                        </label>
                        <div className="field">
                          <div className="icon-box">
                            <center>
                              <img
                                alt=""
                                src="/static/assets/images/frmicon3.png"
                              />
                            </center>
                          </div>
                          <input
                            name="email"
                            type="email"
                            placeholder="Example: email@somewhere.com"
                            className="ft-input"
                            required
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="frmelements pure-control-group">
                        <label>
                          Address Line 1<span>*</span>
                        </label>
                        <div className="field">
                          <div className="icon-box">
                            <center>
                              <img
                                alt=""
                                src="/static/assets/images/frmicon5.png"
                              />
                            </center>
                          </div>
                          <input
                            type="text"
                            name="address"
                            id="billing_cart_address_1"
                            placeholder="Street and number, P.O. box, c/o."
                            className="ft-input"
                            required
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="frmelements pure-control-group">
                        <label>Address Line 2</label>
                        <div className="field address-2">
                          <div className="icon-box">
                            <center>
                              <img
                                alt=""
                                src="/static/assets/images/frmicon5.png"
                              />
                            </center>
                          </div>
                          <input
                            type="text"
                            name="address2"
                            id="billing_cart_address_2"
                            placeholder="Apartment, suite, unit, building, floor, etc."
                            className="ft-input"
                            required
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="frmelements short1 pure-control-group">
                        <label>
                          State<span>*</span>
                        </label>
                        <div className="field">
                          <div className="icon-box">
                            <center>
                              <img
                                alt=""
                                src="/static/assets/images/frmicon7.png"
                              />
                            </center>
                          </div>
                          <select
                            name="state"
                            className="ft-input"
                            id="billing_cart_state"
                            defaultValue="select_state"
                          >
                            <option value="select_state">Select State</option>
                            <option value="AL">Alabama (AL)</option>
                            <option value="AK">Alaska (AK)</option>
                            <option value="AS">American Samoa (AS)</option>
                            <option value="AZ">Arizona (AZ)</option>
                            <option value="AR">Arkansas (AR)</option>
                            <option value="AE-A">
                              Armed Forces Africa (AE)
                            </option>
                            <option value="AA">
                              Armed Forces Americas (AA)
                            </option>
                            <option value="AE-C">
                              Armed Forces Canada (AE)
                            </option>
                            <option value="AE-E">
                              Armed Forces Europe (AE)
                            </option>
                            <option value="AE-M">
                              Armed Forces Middle East (AE)
                            </option>
                            <option value="AP">
                              Armed Forces Pacific (AP)
                            </option>
                            <option value="CA">California (CA)</option>
                            <option value="CO">Colorado (CO)</option>
                            <option value="CT">Connecticut (CT)</option>
                            <option value="DE">Delaware (DE)</option>
                            <option value="DC">
                              District of Columbia (DC)
                            </option>
                            <option value="FM">
                              Federated States of Micronesia (FM)
                            </option>
                            <option value="FL">Florida (FL)</option>
                            <option value="GA">Georgia (GA)</option>
                            <option value="GU">Guam (GU)</option>
                            <option value="HI">Hawaii (HI)</option>
                            <option value="ID">Idaho (ID)</option>
                            <option value="IL">Illinois (IL)</option>
                            <option value="IN">Indiana (IN)</option>
                            <option value="IA">Iowa (IA)</option>
                            <option value="KS">Kansas (KS)</option>
                            <option value="KY">Kentucky (KY)</option>
                            <option value="LA">Louisiana (LA)</option>
                            <option value="ME">Maine (ME)</option>
                            <option value="MD">Maryland (MD)</option>
                            <option value="MA">Massachusetts (MA)</option>
                            <option value="MI">Michigan (MI)</option>
                            <option value="MN">Minnesota (MN)</option>
                            <option value="MS">Mississippi (MS)</option>
                            <option value="MO">Missouri (MO)</option>
                            <option value="MT">Montana (MT)</option>
                            <option value="NE">Nebraska (NE)</option>
                            <option value="NV">Nevada (NV)</option>
                            <option value="NH">New Hampshire (NH)</option>
                            <option value="NJ">New Jersey (NJ)</option>
                            <option value="NM">New Mexico (NM)</option>
                            <option value="NY">New York (NY)</option>
                            <option value="NC">North Carolina (NC)</option>
                            <option value="ND">North Dakota (ND)</option>
                            <option value="MP">
                              Northern Mariana Islands (MP)
                            </option>
                            <option value="OH">Ohio (OH)</option>
                            <option value="OK">Oklahoma (OK)</option>
                            <option value="OR">Oregon (OR)</option>
                            <option value="PA">Pennsylvania (PA)</option>
                            <option value="PR">Puerto Rico (PR)</option>
                            <option value="MH">
                              Republic of Marshall Islands (MH)
                            </option>
                            <option value="RI">Rhode Island (RI)</option>
                            <option value="SC">South Carolina (SC)</option>
                            <option value="SD">South Dakota (SD)</option>
                            <option value="TN">Tennessee (TN)</option>
                            <option value="TX">Texas (TX)</option>
                            <option value="UT">Utah (UT)</option>
                            <option value="VT">Vermont (VT)</option>
                            <option value="VI">
                              Virgin Islands of the U.S. (VI)
                            </option>
                            <option value="VA">Virginia (VA)</option>
                            <option value="WA">Washington (WA)</option>
                            <option value="WV">West Virginia (WV)</option>
                            <option value="WI">Wisconsin (WI)</option>
                            <option value="WY">Wyoming (WY)</option>
                          </select>
                        </div>
                      </div>
                      <div className="frmelements short2 pure-control-group">
                        <label>
                          City<span>*</span>
                        </label>
                        <div className="field">
                          <div className="icon-box">
                            <center>
                              <img
                                alt=""
                                src="/static/assets/images/frmicon6.png"
                              />
                            </center>
                          </div>
                          <input
                            type="text"
                            name="city"
                            id="billing_cart_city"
                            placeholder="Your City"
                            className="ft-input"
                            required
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="frmelements short1 pure-control-group">
                        <label>
                          Zip Code <span>*</span>
                        </label>
                        <div className="field">
                          <div className="icon-box">
                            <center>
                              <img
                                alt=""
                                src="/static/assets/images/frmicon8.png"
                              />
                            </center>
                          </div>
                          <input
                            type="tel"
                            id="billing_cart_zip_code"
                            name="postalCode"
                            placeholder="Post Code"
                            className="ft-input"
                            required
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="frmelements short2 pure-control-group">
                        <label>
                          Phone Number <span>*</span>
                        </label>
                        <div className="field">
                          <div className="icon-box">
                            <center>
                              <img
                                alt=""
                                src="/static/assets/images/frmicon4.png"
                              />
                            </center>
                          </div>
                          <input
                            type="tel"
                            name="phoneNumber"
                            id="billing_cart_phone_number"
                            placeholder="Example: (123) 555-6789"
                            className="ft-input"
                            required
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="cards">
                      <span className="card-visa">
                        <img alt="" src="/static/assets/images/card-visa.png" />
                      </span>
                      <span className="card-mastercard">
                        <img
                          alt=""
                          src="/static/assets/images/card-mastercard.png"
                        />
                      </span>
                    </div>
                    <div className="frmelements pure-control-group">
                      <label>
                        Card Number<span>*</span>
                      </label>
                      <div className="field no-icon">
                        <input
                          type="tel"
                          name="cardNumber"
                          className="ft-input noicon creditcard"
                          maxLength="19"
                          placeholder="•••• •••• •••• ••••"
                        />
                      </div>
                    </div>
                    <div className="frmelements short1 pure-control-group">
                      <label>
                        Expiration Month<span>*</span>
                      </label>
                      <div className="field no-icon">
                        <select
                          name="month"
                          className="ft-input noicon"
                          id=""
                          placeholder="Select an option..."
                          defaultValue="--"
                        >
                          <option disabled="" value="--">
                            – –
                          </option>
                          <option value="01">January</option>
                          <option value="02">February</option>
                          <option value="03">March</option>
                          <option value="04">April</option>
                          <option value="05">May</option>
                          <option value="06">June</option>
                          <option value="07">July</option>
                          <option value="08">August</option>
                          <option value="09">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                      </div>
                    </div>
                    <div className="frmelements short2 pure-control-group">
                      <label>
                        Expiration Year<span>*</span>
                      </label>
                      <div className="field no-icon">
                        <select
                          name="year"
                          className="ft-input noicon"
                          id=""
                          placeholder="Select an option..."
                          defaultValue="--"
                        >
                          <option disabled="" value="--">
                            – –
                          </option>
                          <option value="2018">18</option>
                          <option value="2019">19</option>
                          <option value="2020">20</option>
                          <option value="2021">21</option>
                          <option value="2022">22</option>
                          <option value="2023">23</option>
                          <option value="2024">24</option>
                        </select>
                      </div>
                    </div>
                    <div className="frmelements short1 mob-sort pure-control-group">
                      <label>
                        CVV<span>*</span>
                      </label>
                      <div className="field no-icon">
                        <input
                          type="tel"
                          name="cardSecurityCode"
                          pattern="\d*"
                          maxLength="3"
                          className="ft-input noicon"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    <div className="frmelements short2 mob-sort">
                      <a
                        href="cvv.html"
                        className="fancybox fancybox.iframe whats-this"
                      >
                        What is this?
                      </a>
                    </div>
                    <p className="billing-toggle-txt">
                      <input
                        type="checkbox"
                        name="agree_terms"
                        className="chkbx-chk"
                        id="agree_terms"
                        defaultValue="checked"
                      />
                      I agree to the Terms &amp; Conditions &amp;Privacy Policy.<br />All
                      charges on your bank statement will appear as
                      &quot;AmericanScience8442601422&quot;
                    </p>
                    <div className="clearall" />
                    <div className="frmelements btn-element">
                      <input
                        alt=""
                        type="image"
                        src="/static/assets/images/btn.png"
                        className="button-crt"
                        id="cart_submit"
                      />
                    </div>
                    <center>
                      <img
                        alt=""
                        src="/static/assets/images/postal-crt.png"
                        className="postal-crt"
                      />
                    </center>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Cart };
