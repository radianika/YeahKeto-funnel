import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'next/router';
import {
  stateslist,
  packages,
  billingFormValidator,
  normalizePhone,
  normalizePostalCode,
  normalizeCardNumber,
  normalizeSecurityCode,
} from 'helpers';
import {
  Footer,
  TextField,
  SelectField,
  AddressField,
  Spinner,
} from 'react/components/common';
import { OrderActions } from 'redux/actions';

class MobileConfirmContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isSame: true,
    };
  }

  confirmOrder = values => {
    const { pack, router } = this.props;
    this.props.placeOrder({
      values,
      pack,
      router,
      nextUrl: '/promo/mobile/upsell-1',
    });
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
                  className="pure-form pure-form-aligned fv-form fv-form-pure"
                >
                  <button
                    type="submit"
                    className="fv-hidden-submit"
                    style={{ display: 'none', width: '0px', height: '0px' }}
                  />
                  <div className="sameas">
                    <p>
                      <input
                        id="checkbox"
                        type="checkbox"
                        checked={this.state.isSame}
                        onChange={() => {
                          this.setState({ isSame: !this.state.isSame });
                        }}
                      />{' '}
                      Billing address is the same as shipping
                    </p>
                    <div className="cards">
                      <span className="card-visa">
                        <img src="/static/visa.png" alt="" />
                      </span>
                      <span className="card-mastercard">
                        <img src="/static/Mastercard.png" alt="" />
                      </span>
                      <span className="card-discover">
                        <img src="/static/amex.png" alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="clearall" />
                  {!this.state.isSame && (
                    <div id="billingDiv">
                      <Field
                        containerClass="frmelmnts1"
                        component={TextField}
                        name="firstName"
                        label="First Name"
                        placeholder="First Name"
                      />
                      <Field
                        containerClass="frmelmnts3"
                        component={TextField}
                        name="lastName"
                        label="Last Name"
                        placeholder="Last Name"
                      />
                      <div className="clearfix" />
                      <Field
                        containerClass="frmelmnts2"
                        component={AddressField}
                        name="address"
                        label="Address Line 1"
                        placeholder="Street and number, P.O. box, c/o."
                        changeField={this.props.change}
                      />
                      <Field
                        containerClass="frmelmnts2"
                        component={TextField}
                        name="address2"
                        label="Adress Line 2"
                        placeholder="Apartment, suite, unit, building, floor, etc."
                      />
                      <div className="clearfix" />
                      <Field
                        containerClass="frmelmnts2"
                        component={TextField}
                        name="city"
                        label="City"
                        placeholder="Your City"
                      />
                      <div className="clearfix" />
                      <Field
                        containerClass="frmelmnts1"
                        component={TextField}
                        name="postalCode"
                        label="Zip Code"
                        placeholder="Zip Code"
                        normalize={normalizePostalCode}
                      />
                      <Field
                        containerClass="frmelmnts3"
                        component={SelectField}
                        name="state"
                        label="State"
                        placeholder="Select State"
                        options={stateslist}
                      />
                      <div className="clearfix" />
                      <Field
                        containerClass="frmelmnts1"
                        component={TextField}
                        name="phoneNumber"
                        label="Phone Number"
                        placeholder="Example: (123) 555-6789"
                        normalize={normalizePhone}
                        type="tel"
                      />
                      <Field
                        containerClass="frmelmnts3"
                        component={TextField}
                        name="email"
                        label="Email"
                        placeholder="Example: email@somewhere.com"
                        type="email"
                      />
                    </div>
                  )}
                  <div className="clearfix" />
                  <div style={{ display: 'block' }} id="cardDiv">
                    <div className="clearfix" />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts2"
                      component={TextField}
                      name="cardNumber"
                      className="creditcard"
                      placeholder="•••• •••• •••• ••••"
                      label="Card No"
                      type="tel"
                      autoComplete="cc-number"
                      autoCorrect="off"
                      normalize={normalizeCardNumber}
                    />
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2 hideIcon fv-has-feedback">
                      <label className="exp-label">
                        Expiry Date<span>*</span>: <span>(MM/YY)</span>
                      </label>
                      <Field
                        name="cardMonth"
                        component={props => (
                          <select
                            className="short"
                            autoComplete="cc-exp-month"
                            {...props.input}
                          >
                            <option disabled="" value="">
                              – –
                            </option>
                            {[...Array(12).keys()].map(month => (
                              <option key={month} value={month + 1}>
                                {month + 1}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                      <Field
                        name="cardYear"
                        component={props => (
                          <select
                            className="short2"
                            autoComplete="cc-exp-year"
                            {...props.input}
                          >
                            <option disabled="" value="">
                              – –
                            </option>
                            {[18, 19, 20, 21, 22, 23, 24].map(year => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                    <div className="clearfix" />
                    <div className="pure-control-group frmelmnts2 frmelmnts-cvv fv-has-feedback">
                      <label>
                        CVV/CID<span>*</span>:
                      </label>
                      <Field
                        name="cardSecurityCode"
                        component={props => (
                          <input
                            {...props.input}
                            inputMode="numeric"
                            className="short"
                            autoCorrect="off"
                            autoComplete="cc-csc"
                          />
                        )}
                        normalize={normalizeSecurityCode}
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
              <a
                href="javascript:void(0)"
                onClick={this.props.handleSubmit(this.confirmOrder)}
                className="button"
              >
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
            <Footer promo />
          </div>
        </div>
        {this.props.submitStatus === 'submitting' && <Spinner />}
      </div>
    );
  }
}

MobileConfirmContainer = withRouter(MobileConfirmContainer);

MobileConfirmContainer = reduxForm({
  form: 'MobileConfirmForm',
  validate: billingFormValidator,
})(MobileConfirmContainer);

function mapStateToProps(reduxState, ownProps) {
  const { productId } = ownProps.url.query;
  const pack = packages.find(p => String(p.id) === String(productId));
  const {
    orderId,
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    postalCode,
    phoneNumber,
    emailAddress,
  } = reduxState.order.order;
  return {
    initialValues: {
      orderId,
      firstName,
      lastName,
      address: address1,
      address2,
      city,
      state,
      postalCode,
      phoneNumber,
      email: emailAddress,
    },
    pack,
    submitStatus: reduxState.order.placeOrderStatus,
  };
}

MobileConfirmContainer = connect(mapStateToProps, { ...OrderActions })(
  MobileConfirmContainer,
);

export { MobileConfirmContainer };
