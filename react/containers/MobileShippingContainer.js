import React from 'react';
import { Footer } from 'react/components/common';

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
                        <option value="AL" onClick="">
                          Alabama (AL)
                        </option>
                        <option value="AK" onClick="">
                          Alaska (AK)
                        </option>
                        <option value="AS" onClick="">
                          American Samoa (AS)
                        </option>
                        <option value="AZ" onClick="">
                          Arizona (AZ)
                        </option>
                        <option value="AR" onClick="">
                          Arkansas (AR)
                        </option>
                        <option value="AE-A" onClick="">
                          Armed Forces Africa (AE)
                        </option>
                        <option value="AA" onClick="">
                          Armed Forces Americas (AA)
                        </option>
                        <option value="AE-C" onClick="">
                          Armed Forces Canada (AE)
                        </option>
                        <option value="AE-E" onClick="">
                          Armed Forces Europe (AE)
                        </option>
                        <option value="AE-M" onClick="">
                          Armed Forces Middle East (AE)
                        </option>
                        <option value="AP" onClick="">
                          Armed Forces Pacific (AP)
                        </option>
                        <option value="CA" onClick="">
                          California (CA)
                        </option>
                        <option value="CO" onClick="">
                          Colorado (CO)
                        </option>
                        <option value="CT" onClick="">
                          Connecticut (CT)
                        </option>
                        <option value="DE" onClick="">
                          Delaware (DE)
                        </option>
                        <option value="DC" onClick="">
                          District of Columbia (DC)
                        </option>
                        <option value="FM" onClick="">
                          Federated States of Micronesia (FM)
                        </option>
                        <option value="FL" onClick="">
                          Florida (FL)
                        </option>
                        <option value="GA" onClick="">
                          Georgia (GA)
                        </option>
                        <option value="GU" onClick="">
                          Guam (GU)
                        </option>
                        <option value="HI" onClick="">
                          Hawaii (HI)
                        </option>
                        <option value="ID" onClick="">
                          Idaho (ID)
                        </option>
                        <option value="IL" onClick="">
                          Illinois (IL)
                        </option>
                        <option value="IN" onClick="">
                          Indiana (IN)
                        </option>
                        <option value="IA" onClick="">
                          Iowa (IA)
                        </option>
                        <option value="KS" onClick="">
                          Kansas (KS)
                        </option>
                        <option value="KY" onClick="">
                          Kentucky (KY)
                        </option>
                        <option value="LA" onClick="">
                          Louisiana (LA)
                        </option>
                        <option value="ME" onClick="">
                          Maine (ME)
                        </option>
                        <option value="MD" onClick="">
                          Maryland (MD)
                        </option>
                        <option value="MA" onClick="">
                          Massachusetts (MA)
                        </option>
                        <option value="MI" onClick="">
                          Michigan (MI)
                        </option>
                        <option value="MN" onClick="">
                          Minnesota (MN)
                        </option>
                        <option value="MS" onClick="">
                          Mississippi (MS)
                        </option>
                        <option value="MO" onClick="">
                          Missouri (MO)
                        </option>
                        <option value="MT" onClick="">
                          Montana (MT)
                        </option>
                        <option value="NE" onClick="">
                          Nebraska (NE)
                        </option>
                        <option value="NV" onClick="">
                          Nevada (NV)
                        </option>
                        <option value="NH" onClick="">
                          New Hampshire (NH)
                        </option>
                        <option value="NJ" onClick="">
                          New Jersey (NJ)
                        </option>
                        <option value="NM" onClick="">
                          New Mexico (NM)
                        </option>
                        <option value="NY" onClick="">
                          New York (NY)
                        </option>
                        <option value="NC" onClick="">
                          North Carolina (NC)
                        </option>
                        <option value="ND" onClick="">
                          North Dakota (ND)
                        </option>
                        <option value="MP" onClick="">
                          Northern Mariana Islands (MP)
                        </option>
                        <option value="OH" onClick="">
                          Ohio (OH)
                        </option>
                        <option value="OK" onClick="">
                          Oklahoma (OK)
                        </option>
                        <option value="OR" onClick="">
                          Oregon (OR)
                        </option>
                        <option value="PA" onClick="">
                          Pennsylvania (PA)
                        </option>
                        <option value="PR" onClick="">
                          Puerto Rico (PR)
                        </option>
                        <option value="MH" onClick="">
                          Republic of Marshall Islands (MH)
                        </option>
                        <option value="RI" onClick="">
                          Rhode Island (RI)
                        </option>
                        <option value="SC" onClick="">
                          South Carolina (SC)
                        </option>
                        <option value="SD" onClick="">
                          South Dakota (SD)
                        </option>
                        <option value="TN" onClick="">
                          Tennessee (TN)
                        </option>
                        <option value="TX" onClick="">
                          Texas (TX)
                        </option>
                        <option value="UT" onClick="">
                          Utah (UT)
                        </option>
                        <option value="VT" onClick="">
                          Vermont (VT)
                        </option>
                        <option value="VI" onClick="">
                          Virgin Islands of the U.S. (VI)
                        </option>
                        <option value="VA" onClick="">
                          Virginia (VA)
                        </option>
                        <option value="WA" onClick="">
                          Washington (WA)
                        </option>
                        <option value="WV" onClick="">
                          West Virginia (WV)
                        </option>
                        <option value="WI" onClick="">
                          Wisconsin (WI)
                        </option>
                        <option value="WY" onClick="">
                          Wyoming (WY)
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
                    <a className="button">
                      <img
                        src="/static/promo/mobile/images/ship-btn.png"
                        alt="American Science CBD"
                        className="ship-btn pulse"
                      />
                    </a>
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
