import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { Footer } from 'react/components/common';
import { packages } from 'helpers';

class MobileConfirmContainer extends React.PureComponent {
  confirmOrder = () => {
    const { productid } = this.props.url.query;
    this.props.router.push(`/upsell-mobile?productid=${productid}`);
  };

  render() {
    const { pack } = this.props;
    return (
      <div className="mobile-body">
        <div className="container">
          <div className="getHeight">
            <div className="spng-hd1">
              <div className="spng-hd2">
                <img
                  src="/static/promo/mobile/images/ck-top.jpg"
                  alt=""
                  className="sping-logo"
                />
              </div>
            </div>
            <div className="con-hd2" />
            <p className="clearall" />
            <div className="trialsec2">
              <div className="package picked">
                <div className="smrhding">
                  <p>Order Summary</p>
                </div>
                <div className="odrsmry">
                  <div className="detailbox">
                    <div className="lftbox">
                      <img
                        src="/static/promo/mobile/images/con-pro5.png"
                        alt=""
                        className="lftbtl"
                      />
                    </div>
                    <div className="rgtbox">
                      <ul className="rgtlist1">
                        <li>
                          <span>american science</span>
                          <br /> {pack.title}
                        </li>
                      </ul>
                      <ul className="rgtlist2">
                        {/* <!--<li>Subtotal:</li>-->
                  <!--<li>$195.00</li>--> */}
                        <li>S&amp;H: </li>
                        <li>$0.00</li>
                        <li>TOTAL</li>
                        <li style={{ fontWeight: 600 }}>{pack.price}</li>
                      </ul>
                    </div>
                    <img src="/static/promo/mobile/images/post.jpg" />
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <p className="clearall" />
              <p className="trial-toptxt1 border-bottom">
                Enter your payment information
              </p>
              <p className="clearall" />
              <div className="trialfrmmid">
                <form
                  id="form-checkout"
                  method="POST"
                  className="pure-form pure-form-aligned fv-form fv-form-pure"
                  noValidate="novalidate"
                >
                  <button
                    type="submit"
                    className="fv-hidden-submit"
                    style={{ display: 'none', width: '0px', height: '0px' }}
                  />
                  <div className="sameas">
                    <p>
                      <input id="checkbox" type="checkbox" checked="" /> Billing
                      address is the same as shipping
                    </p>
                    <div className="cards">
                      <span className="card-visa">
                        <img
                          src="/static/promo/mobile/images/card-visa.png"
                          alt=""
                        />
                      </span>
                      <span className="card-mastercard">
                        <img
                          src="/static/promo/mobile/images/card-mastercard.png"
                          alt=""
                        />
                      </span>
                      <span className="card-discover">
                        <img
                          src="/static/promo/mobile/images/card-discover.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <div className="clearall" />
                  <div style={{ display: 'none' }} id="billingDiv">
                    <div className="pure-control-group frmelmnts2 fv-has-feedback">
                      <label>
                        First Name<span>*</span>:
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        autoCorrect="off"
                        autoComplete="name"
                        placeholder="First name"
                        data-fv-field="firstName"
                      />
                    </div>
                    <div className="pure-control-group frmelmnts2 fv-has-feedback">
                      <label>
                        Last Name<span>*</span>:
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        autoCorrect="off"
                        autoComplete="name"
                        placeholder="First name"
                        data-fv-field="lastName"
                      />
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2 fv-has-feedback">
                      <label>
                        Address Line 1<span>*</span>:
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address_1"
                        autoCorrect="off"
                        autoComplete="off"
                        onFocus={this.geolocate}
                        placeholder="Street and number, P.O. box, c/o."
                        data-fv-field="address"
                      />
                    </div>
                    <div className="pure-control-group frmelmnts2 fv-has-feedback">
                      <label>Address Line 2:</label>
                      <input
                        type="text"
                        name="address2"
                        id="address_2"
                        autoCorrect="off"
                        autoComplete="address-line2"
                        placeholder="Apartment, suite, unit, building, floor, etc."
                        data-fv-field="address2"
                      />
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2 fv-has-feedback">
                      <label>
                        City<span>*</span>:
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoCorrect="off"
                        autoComplete="address-level2"
                        placeholder="Your City"
                        data-fv-field="city"
                      />
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2 fv-has-feedback">
                      <label>
                        Zip Code<span>*</span>:
                      </label>
                      <input
                        type="number"
                        name="postalCode"
                        inputMode="numeric"
                        id="zip_code"
                        pattern="[0-9]*"
                        noValidate=""
                        autoCorrect="off"
                        autoComplete="postal-code"
                        placeholder="Zip Code"
                        data-fv-field="postalCode"
                        maxLength="5"
                      />
                    </div>
                    <div className="pure-control-group frmelmnts2 fv-has-feedback">
                      <label>
                        State<span>*</span>:
                      </label>
                      <select name="state" id="state" data-fv-field="state">
                        <option value="" />
                      </select>
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2 fv-has-feedback">
                      <label>
                        Phone<span>*</span>:
                      </label>
                      <input
                        name="phoneNumber"
                        inputMode="numeric"
                        id="phone_number"
                        pattern="\d*"
                        autoCorrect="off"
                        autoComplete="tel"
                        type="tel"
                        placeholder="Example: (123) 555-6789"
                        data-fv-field="phoneNumber"
                        maxLength="14"
                      />
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2 fv-has-feedback">
                      <label>
                        Email<span>*</span>:
                      </label>
                      <input
                        name="email"
                        type="email"
                        autoCapitalize="off"
                        autoCorrect="off"
                        autoComplete="email"
                        placeholder="Example: email@somewhere.com"
                        data-fv-field="email"
                      />
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div style={{ display: 'block' }} id="cardDiv">
                    <div className="clearfix" />
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2 fv-has-feedback">
                      <label>
                        Card Number<span>*</span>:
                      </label>
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        name="cardNumber"
                        className="creditcard"
                        maxLength="19"
                        placeholder="•••• •••• •••• ••••"
                        noValidate=""
                        autoCorrect="off"
                        autoComplete="cc-number"
                        data-fv-field="cardNumber"
                      />
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2 hideIcon fv-has-feedback">
                      <label className="exp-label">
                        Expiry Date<span>*</span>: <span>(MM/YY)</span>
                      </label>
                      <select
                        className="short"
                        name="month"
                        autoComplete="cc-exp-month"
                        data-fv-field="month"
                      >
                        <option disabled="" value="">
                          – –
                        </option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select
                        className="short2"
                        name="year"
                        autoComplete="cc-exp-year"
                        data-fv-field="year"
                      >
                        <option disabled="" value="">
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
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2 frmelmnts-cvv fv-has-feedback">
                      <label>
                        CVV<span>*</span>:
                      </label>
                      <input
                        type="tel"
                        name="cardSecurityCode"
                        inputMode="numeric"
                        className="short"
                        pattern="[0-9]*"
                        maxLength="3"
                        noValidate=""
                        autoCorrect="off"
                        autoComplete="cc-csc"
                        data-fv-field="cardSecurityCode"
                      />
                      <img
                        src="/static/promo/mobile/images/cvv.png"
                        width="402"
                        height="69"
                        alt=""
                        className="cvv"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="clearall" />
            <div className="shpbtm">
              <a onClick={this.confirmOrder} className="button">
                <img
                  src="/static/promo/mobile/images/conf-btn.png"
                  alt=""
                  className="ship-btn pulse"
                />
              </a>
              <img
                src="/static/promo/mobile/images/loogs.png"
                alt=""
                className="loogs"
              />
            </div>
            <div className="clearfix" />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

MobileConfirmContainer = withRouter(MobileConfirmContainer);

function mapStateToProps(state, ownProps) {
  const { productid } = ownProps.url.query;
  const pack = packages.find(p => String(p.id) === String(productid));
  return {
    pack,
  };
}

MobileConfirmContainer = connect(mapStateToProps)(MobileConfirmContainer);

export { MobileConfirmContainer };
