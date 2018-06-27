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
  getParameterByName,
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

/**
 * @class MobileConfirmContainerComponent
 * @extends {React.PureComponent}
 * @description This is the equivalant of PromoCheckoutContainer on Mobile
 */
class MobileConfirmContainerComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isSame: true,
      summaryOpen: false,
      showErrorModal: false,
      pack: {},
    };
    this.toggleSummary = this.toggleSummary.bind(this);
  }

  componentDidMount() {
    const { localStorage } = window;
    // eslint-disable-next-line
    this.setState({
      pack: JSON.parse(localStorage.getItem('pack')),
    });
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.submitStatus === 'submitting' &&
      newProps.submitStatus === 'failure'
    ) {
      this.setState({ showErrorModal: true });
    }
  }

  getPrice() {
    if (this.state.pack.packagePrice) {
      return this.state.pack.packagePrice;
    }
    return this.state.pack.price;
  }

  confirmOrder = values => {
    const { localStorage } = window;
    const customerData = JSON.parse(localStorage.getItem('parsedShipping'));
    if (this.state.isSame) {
      values.Email = customerData.Email;
      values.Phone = customerData.Phone;
      values.Address1 = customerData.ShippingAddress.Address1;
      values.Address2 = customerData.ShippingAddress.Address2;
      values.City = customerData.ShippingAddress.City;
      values.FirstName = customerData.ShippingAddress.FirstName;
      values.LastName = customerData.ShippingAddress.LastName;
      values.ZipCode = customerData.ShippingAddress.ZipCode;
      values.State = customerData.ShippingAddress.State;
    }

    const { router } = this.props;
    const pack = { id: getParameterByName('productId') };
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
    const { pack } = this.state;

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
                    <br /> {pack.title.props.children[0]}
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
                        autoCorrect="off"
                        autoComplete="given-name"
                      />
                      <Field
                        containerClass="frmelmnts3"
                        component={TextField}
                        name="lastName"
                        label="Last Name"
                        placeholder="Last Name"
                        autoCorrect="off"
                        autoComplete="family-name"
                      />
                      <div className="clearfix" />
                      <Field
                        containerClass="frmelmnts2"
                        component={AddressField}
                        name="address"
                        label="Address Line 1"
                        placeholder="Street and number, P.O. box, c/o."
                        changeField={this.props.change}
                        autoCorrect="off"
                        autoComplete="address-line1"
                      />
                      <Field
                        containerClass="frmelmnts2"
                        component={TextField}
                        name="address2"
                        label="Address Line 2"
                        placeholder="Apartment, suite, unit, building, floor, etc."
                        autoCorrect="off"
                        autoComplete="address-line2"
                      />
                      <div className="clearfix" />
                      <Field
                        containerClass="frmelmnts2"
                        component={TextField}
                        name="city"
                        label="City"
                        placeholder="Your City"
                        autoCorrect="off"
                        autoComplete="address-level2"
                      />
                      <div className="clearfix" />
                      <Field
                        containerClass="frmelmnts1"
                        component={TextField}
                        name="postalCode"
                        label="Zip Code"
                        placeholder="Zip Code"
                        normalize={normalizePostalCode}
                        inputMode="numeric"
                        autoCorrect="off"
                        autoComplete="postal-code"
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
                        autoCorrect="off"
                        autoComplete="tel"
                      />
                      <Field
                        containerClass="frmelmnts3"
                        component={TextField}
                        name="email"
                        label="Email"
                        placeholder="Example: email@somewhere.com"
                        type="email"
                        autoCapitalize="off"
                        autoCorrect="off"
                        autoComplete="email"
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
                      normalize={normalizeCardNumber}
                      inputMode="numeric"
                      autoComplete="cc-number"
                      autoCorrect="off"
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
                              className="short"
                              inputMode="numeric"
                              autoCorrect="off"
                              autoComplete="cc-csc"
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
                  id="checkout-submit-mobile"
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
        <SuccessModal
          style={{ width: '80%' }}
          title="Problem with your order"
          visible={this.state.showErrorModal}
          onClose={() => this.setState({ showErrorModal: false })}
          message={this.props.submitFailure}
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
  if (reduxState.order) {
    return {
      initialValues: {},
      pack,
      submitStatus: reduxState.order.placeOrderStatus,
      submitFailure: reduxState.order.placeOrderError,
    };
  }

  return {};
}

const MobileConfirmContainer = connect(mapStateToProps, {
  ...OrderActions,
})(MobileConfirmContainerPage);

export default MobileConfirmContainer;
