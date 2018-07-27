import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import { Footer } from 'react/components/common';
import { OrderActions } from 'redux/actions';
import { PromoCheckoutPaymentForm } from 'react/components/promo/desktop';
import { packages } from 'helpers';

const packMapping = {
  210: '5-bottle-order-1',
  209: '3-bottle-order-1',
  208: '1-bottle-order-1',
};

class PromoCheckout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: packages[0],
      scrolled: false
    };
    console.log(this.props);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.setState({ scrolled: true }));
  }

  submitBillingForm = values => {
    this.sendTransactionDetails();
    // this.sendTransactionDetailsPackInfo();
    this.props.placeOrder({
      values,
      pack: this.state.selected,
      router: this.props.router,
      nextUrl: '/promo/desktop/upsell-1',
      isDesktop: true,
    });
  };

  sendTransactionDetails = () => {
    const { localStorage } = window;
    const id = `${this.state.selected.id}`;
    const revenue = parseInt(this.state.selected.packagePrice);
    const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));
    const eventsArray = [
      'desktop-hp-text1-test-checkout',
      'desktop-hp-text2-test-checkout',
      'desktop-hp-top-module-symbol1-test-checkout',
      'desktop-hp-last-module-picture-test-checkout',
      'desktop-hp-form-top-section-test-checkout',
      'desktop-hp-module2-caption1-test-checkout',
      'desktop-hp-rush-my-order-texts-test-checkout',
      'desktop-hp-last-module-badge-test-checkout',
      'desktop-hp-as-advertised-on-text-test-checkout',
      'desktop-hp-first-module-badge-test-checkout',
      'desktop-hp-second-module-bulletpoints-test-checkout',
      'desktop-checkout-cc-label-test-checkout',
      'desktop-select-packages-badges-test-checkout',
      'desktop-select-package-dollar-sign-test-checkout',
      'desktop-select-package-arrow-test-checkout',
    ];
    eventsArray.push(packMapping[id]);
    const tracking_data = {
      device_type: 'DESKTOP',
      ip: abtastyParams ? abtastyParams.ip : '',
      origin: 'PromoCheckoutPaymentForm',
      timestamp: moment().format(),
      visitor_id: abtastyParams ? abtastyParams.visitorId : '',
    };
    const postData = {};

    eventsArray.forEach((event, index) => {
      postData[index] = {
        name: event,
        id,
        revenue,
        shipping: '0',
        tracking_data,
        action: 'transaction_event',
      };
    });

    axios.post('/multicampaign-abtasty', postData);
  };

  render() {
    const { selected } = this.state;
    const shippingDate =
      this.props.order && this.props.order.dateCreated
        ? moment(this.props.order.dateCreated).add(5, 'day')
        : moment();
    const { adv_sub, offerId, transaction_id } = this.props.query;
    const variation313018 = this.props.abtastyParams.campaignMaps['313018'];
    const variation319131 = this.props.abtastyParams.campaignMaps['319131'];
    const variation319133 = this.props.abtastyParams.campaignMaps['319133'];
    const variation319137 = this.props.abtastyParams.campaignMaps['319137'];

    return (
      <React.Fragment>
        {adv_sub && transaction_id && offerId ? (
          <iframe
            src={`https://kowboykit.com/api/event/purchase/?clickid=${adv_sub}&apikey=cad0f78407d7d852008a98df1b266293&programid=125&tid=${transaction_id}&oid=${offerId}`}
            frameBorder="0"
            width="1"
            height="1"
            style={{ position: 'absolute' }}
          />
        ) : null}
        <div className="secone">
          <div className="container">
            <div className="s1inner">
              <div className="chktop">
                <img
                  src="/static/promo/desktop/images/ck-logo.png"
                  alt="ck-logo"
                  className="ck-logo"
                />
                <img
                  src="/static/promo/desktop/images/chktop.png"
                  alt="chktop"
                  className="chktop-img"
                />
                {variation319131 === '420044' ? <img
                  src="/static/promo/desktop/images/ck-seal-treatment.png"
                  alt="ck-seal-treatment"
                  className="ck-ab"
                /> : <img
                  src="/static/promo/desktop/images/ck-seal.png"
                  alt="ck-seal"
                  className="ck-ab"
                />}
              </div>
              <div className="chk-lft">
                <p className="chklft-hding">
                  SELECT YOUR PACKAGE TODAY &amp; SAVE MORE!
                </p>
                {packages.map(pack => (
                  <div key={pack.id} className="pkg">
                    <a
                      id={`select-package-${pack.id}`}
                      href="javascript:void(0);"
                      className={
                        pack && pack.id === this.state.selected.id
                          ? 'picked'
                          : ''
                      }
                      onClick={() => {
                        this.setState({ selected: pack });
                      }}
                    >
                      <div className="pkg-hdbox">
                        <p className="pkg-hding">{pack.title}</p>
                        <div className="freeship">
                          <p>Free Shipping</p>
                        </div>
                      </div>
                      <div className="pkg-contbox">
                        <div className="pkg-contboxlft">
                          <img
                            src={`/static/promo/desktop/images/${
                              pack.desktopImg
                            }`}
                            alt="pkg-btl"
                            className="pkg-btl"
                          />
                        </div>
                        <div className="pkg-contboxrgt">
                          <p className="pkgtype-hding">{pack.msg}</p>
                          <p className="pkgcont-hding">
                            REGULAR PRICE {pack.regularPrice}
                          </p>
                          <p className="pkgcont-price">
                            {variation319133 === '420047' && '$'}{pack.price}
                            <span>/ea</span>
                          </p>

                          <div
                            className="select-btn"
                            style={{
                              display:
                                selected.id !== pack.id ? 'block' : 'none',
                            }}
                          />
                          <div
                            className="select-btn-selected"
                            style={{
                              display:
                                selected.id === pack.id ? 'block' : 'none',
                            }}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                {this.props.abtastyParams &&
                variation313018 === '412321' ? null : (
                  <div className="summary-box">
                    <p className="smry-hding">Order Summary</p>
                    <div className="clearall" />
                    <div className="smry-lft">
                      <p className="smry-lfttxt">
                        Your Order is estimated
                        <br /> to arrive by {shippingDate.format('dddd')},
                        <br /> <span>{shippingDate.format('ll')}</span>
                      </p>{' '}
                      <img
                        src="/static/promo/desktop/images/smryimg.png"
                        alt="smry-img"
                        className="smryimg"
                      />{' '}
                    </div>
                    <div className="smry-rgt">
                      <ul className="smrylist">
                        <li>
                          american science
                          <br />{' '}
                          <span id="pkg-name">{this.state.selected.title}</span>
                        </li>
                        <li id="" style={{ fontWeight: 400 }} />
                        <li>Shipping and Handling</li>
                        <li id="shp">$0.00</li>
                        <li>Total</li>
                        <li id="total">
                          {`$${this.state.selected.packagePrice}`}
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="chk-rgt">
                <div className="chkfrm-top">
                  <div className="sldrtxt" id="fades">
                    <p>
                      <img src="/static/promo/desktop/images/eye.png" alt="" />{' '}
                      13 others are viewing this offer right now!
                    </p>
                    <p>
                      <img src="/static/promo/desktop/images/eye.png" alt="" />{' '}
                      25 people purchased this in the last hour
                    </p>
                  </div>
                </div>
                <PromoCheckoutPaymentForm
                  onSubmit={this.submitBillingForm}
                  abtastyParams={this.props.abtastyParams}
                />
                {variation319137 === '420051' &&
                <div className={`${!this.state.scrolled && 'chkfrm-arrow-animate'} chkfrm-arrow`}>
                  <img src="/static/promo/desktop/images/arrow.png" alt="" />
                </div>}
                <div className="chkfrm-btm">
                  <img
                    src="/static/promo/desktop/images/chk-frmbtm.png"
                    alt=""
                  />
                </div>
                <div className="clearall" />
                <div className="moneyback-box">
                  <img
                    src="/static/promo/desktop/images/moneyback.jpg"
                    alt=""
                    className="moneyback-seal"
                  />
                  <p className="moneyback-txt1">100% Money Back Guarantee </p>
                  <p className="moneyback-txt">
                    Your purchase is insured by our 90 Day Money Back Guarantee,
                    which ensures that if you are not completely satisfied with
                    the results, we will refund your money, no questions asked.{' '}
                  </p>
                </div>
                <img
                  src="/static/promo/desktop/images/shop.png"
                  alt=""
                  className="shop"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer promo />
      </React.Fragment>
    );
  }
}

const PromoCheckoutWithRouter = withRouter(PromoCheckout);

const mapStateToProps = reduxState => {
  if (reduxState.order) {
    return {
      placeOrderStatus: reduxState.order.placeOrderStatus,
      abtastyParams: reduxState.auth.abtastyParams,
    };
  }
  return {};
};

const PromoCheckoutContainer = connect(mapStateToProps, { ...OrderActions })(
  PromoCheckoutWithRouter,
);

export default PromoCheckoutContainer;
