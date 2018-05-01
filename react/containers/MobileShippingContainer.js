import React from 'react';
import { Footer } from 'react/components/common';
import Link from 'next/link';

class MobileShippingContainer extends React.PureComponent {
  render() {
    return (
      <div className="mobile-body">
        <div id="container">
          <div className="getheight">
            <div className="spng-hd">
              <div className="spng-hd2">
                <img
                  src="/static/promo/mobile/images/ck-top.jpg"
                  alt="American Science CBD"
                  className="sping-logo"
                />
                <p className="clearall" />
                <p className="trial-toptxt1">VERIFY YOUR SHIPPING INFO</p>
              </div>
            </div>
            <div id="trialsec2">
              <div className="clearfix" />
              <div className="trialform">
                <form
                  id="form-contact"
                  method="POST"
                  className="pure-form pure-form-aligned"
                  action="select-package.html"
                >
                  <div className="trialfrmmid">
                    <div className="pure-control-group frmelmnts1">
                      <label htmlFor="index_first_name">
                        First Name<span>*</span>:
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        id="index_first_name"
                      />
                    </div>
                    <div className="pure-control-group frmelmnts3">
                      <label htmlFor="index_last_name">
                        Last Name<span>*</span>:
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        id="index_last_name"
                      />
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2">
                      <label htmlFor="address_1">
                        Address Line 1<span>*</span>:
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address_1"
                        onFocus="geolocate()"
                        placeholder="Street and number, P.O. box, c/o."
                      />
                    </div>
                    <div className="pure-control-group frmelmnts2">
                      <label htmlFor="address_2">Address Line 2:</label>
                      <input
                        type="text"
                        name="address2"
                        id="address_2"
                        placeholder="Apartment, suite, unit, building, floor, etc."
                      />
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2">
                      <label htmlFor="city">
                        City<span>*</span>:
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Your City"
                      />
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts1">
                      <label htmlFor="zip_code">
                        Zip Code<span>*</span>:
                      </label>
                      <input
                        type="number"
                        name="postalCode"
                        id="zip_code"
                        placeholder="Zip Code"
                        pattern="\d*"
                      />
                    </div>
                    <div className="pure-control-group frmelmnts3">
                      <label htmlFor="state">
                        State<span>*</span>:
                      </label>
                      <select style={{ width: '99%' }} name="state" id="state">
                        <option value="" onClick="">
                          Select State
                        </option>
                      </select>
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts1">
                      <label htmlFor="phone_number">
                        Phone Number<span>*</span>:
                      </label>
                      <input
                        name="phoneNumber"
                        inputMode="numeric"
                        id="phone_number"
                        autoCorrect="off"
                        autoComplete="tel"
                        pattern="\d*"
                        type="tel"
                        placeholder="Example: (123) 555-6789"
                      />
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts3">
                      <label htmlFor="index_email_id">
                        E-mail<span>*</span>:
                      </label>
                      <input
                        name="email"
                        type="email"
                        id="index_email_id"
                        placeholder="Example: email@somewhere.com"
                      />
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="shpbtm">
                    <Link href="/select-package">
                      <a className="button">
                        <img
                          src="/static/promo/mobile/images/ship-btn.png"
                          alt="American Science CBD"
                          className="ship-btn pulse"
                        />
                      </a>
                    </Link>

                    <img
                      src="/static/promo/mobile/images/loogs.png"
                      alt="American Science CBD"
                      className="loogs"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>

        <div className="js-div-loading-bar">
          <div className="sk-circle">
            <div className="sk-circle1 sk-child" />
            <div className="sk-circle2 sk-child" />
            <div className="sk-circle3 sk-child" />
            <div className="sk-circle4 sk-child" />
            <div className="sk-circle5 sk-child" />
            <div className="sk-circle6 sk-child" />
            <div className="sk-circle7 sk-child" />
            <div className="sk-circle8 sk-child" />
            <div className="sk-circle9 sk-child" />
            <div className="sk-circle10 sk-child" />
            <div className="sk-circle11 sk-child" />
            <div className="sk-circle12 sk-child" />
          </div>
        </div>
      </div>
    );
  }
}

export { MobileShippingContainer };
