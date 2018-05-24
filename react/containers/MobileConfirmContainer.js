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
  SuccessModal,
  MobileCardExpiryField,
} from 'react/components/common';
import { OrderActions } from 'redux/actions';

class MobileConfirmContainerComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isSame: true,
      summaryOpen: false,
    };
    this.toggleSummary = this.toggleSummary.bind(this);
  }

  getPrice() {
    if (this.props.pack.packagePrice) {
      return this.props.pack.packagePrice;
    }
    return this.props.pack.price;
  }

  confirmOrder = values => {
    if (this.state.isSame) {
      values.address = this.props.initialValues.address;
      values.address2 = this.props.initialValues.address2;
      values.city = this.props.initialValues.city;
      values.email = this.props.initialValues.email;
      values.firstName = this.props.initialValues.firstName;
      values.lastName = this.props.initialValues.lastName;
      values.phoneNumber = this.props.initialValues.phoneNumber;
      values.postalCode = this.props.initialValues.postalCode;
      values.state = this.props.initialValues.state;
    }
    const { pack, router } = this.props;
    this.props.placeOrder({
      values,
      pack,
      router,
      nextUrl: '/promo/mobile/upsell-1',
    });
  };

  toggleSummary() {
    this.setState({ summaryOpen: !this.state.summaryOpen });
  }

  renderSummary() {
    const { pack } = this.props;

    if (this.state.summaryOpen) {
      return (
        <div className="package picked" onClick={this.toggleSummary}>
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
                  <li>S&amp;H: </li>
                  <li>$0.00</li>
                  <li>TOTAL</li>
                  <li style={{ fontWeight: 600 }}>{this.getPrice()}</li>
                </ul>
              </div>
              <img src="/static/promo/mobile/images/post.jpg" alt="" />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="package picked" onClick={this.toggleSummary}>
        <div className="smrhding smrhding-close">
          <p>Order Summary</p>
        </div>
      </div>
    );
  }

  render() {
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
              {this.renderSummary()}

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
                    {/*
                      TODO: might be used later when there is the case that
                      billing andshipping have different addresses
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
                    */}
                    <div className="cards">
                      <span className="card-visa">
                        <img src="/static/Visa.png" alt="" />
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
                    <Field
                      name="cardExpiry"
                      component={MobileCardExpiryField}
                    />
                    <div className="clearfix" />
                    <Field
                      name="cardSecurityCode"
                      component={props => {
                        const hasError = props.meta.touched && props.meta.error;
                        const valid = props.input.value && props.meta.valid;
                        return (
                          <div
                            className={`frmelmnts2 frmelmnts-cvv fv-has-feedback ${hasError &&
                              'fv-has-error'} ${valid && 'fv-has-success'}`}
                          >
                            <label>
                              CVV/CID<span>*</span>:
                            </label>
                            <input
                              {...props.input}
                              inputMode="numeric"
                              className="short"
                              autoCorrect="off"
                              autoComplete="cc-csc"
                              type="tel"
                            />
                            <img
                              src="/static/promo/mobile/images/cvv.png"
                              width="402"
                              height="69"
                              alt=""
                              className="cvv"
                            />
                            <div className="clearall" />
                            {props.meta.touched &&
                              props.meta.error && (
                                <small className="fv-help-block">
                                  {props.meta.error}
                                </small>
                              )}
                          </div>
                        );
                      }}
                      normalize={normalizeSecurityCode}
                    />
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
            <div className="legal">
              <div className="ftr-txt">
                <Footer promo />
              </div>
            </div>
          </div>
        </div>
        {this.props.submitStatus === 'submitting' && <Spinner />}
        <SuccessModal
          visible={this.props.submitStatus === 'success'}
          message="Your order has been placed successfully."
        />
      </div>
    );
  }
}

// eslint-disable-next-line
const MobileConfirmContainerPage = reduxForm({
  form: 'MobileConfirmForm',
  validate: billingFormValidator,
})(withRouter(MobileConfirmContainerComponent));

function mapStateToProps(reduxState, ownProps) {
  const { productId } = ownProps.query;
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
      phoneNumber: normalizePhone(phoneNumber),
      email: emailAddress,
    },
    pack,
    submitStatus: reduxState.order.placeOrderStatus,
  };
}

const MobileConfirmContainer = connect(mapStateToProps, {
  ...OrderActions,
})(MobileConfirmContainerPage);

export { MobileConfirmContainer };
