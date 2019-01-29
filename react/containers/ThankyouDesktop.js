import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import {
  getTyProductImage,
  getTyProductContainer,
  getTyProductName,
} from 'helpers';
import { OrderActions } from 'redux/actions';
import moment from 'moment';

/**
 * @class ThankyouDesktopComponent
 * @extends {React.Component}
 * @description Common Thankyou page between promo flow and cart flow on desktop
 */
class ThankyouDesktopComponent extends React.Component {
  render() {
    const { items } = this.props;
    const shippingDetails = {
      ShippingAddress: {}
    }
    let CustomerInfo = {};
    if (items.length) {
      // eslint-disable-next-line
      CustomerInfo = items[0].CustomerInfo;
    }

    const total = items.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.OrderInfo.TotalAmount,
      0,
    );

    return (
      <div className="container">
        <div className="up-top">
          <div className="inner-container">
            <p><span>WARNING:</span> Due to extremely high media demand, there is limited supply of bottle in stock as of <span /></p>
          </div>
        </div>
        <div className="up-bg thnk-pg">
          <div className="inner-container">
            <img src="images/logo.png" alt className="up-logo" />
            <img src="images/ty-hdr.png" alt className="up-steps" />
            <div className="inr-thnk">
              <p className="up-hdg grn-clr">Congratulations!</p>
              <p className="up-sub-hdg">You've taken the first step to better health and wellness. We are confident that <br className="for-desk" />you will enjoy the benefits of Yeah Keto products. </p>
              <div className="thnk-recpt-box">
                <p className="thk-p1">Order Reciept</p>
                <div className="thnk-lft">
                  <div className="thk-in-lft">
                    <p className="thk-p2"><span>Order Placed:</span> </p>
                    <p className="thk-p2"><span>Order Number:</span> 341160</p>
                  </div>
                  <div className="thk-in-lft">
                    <p className="thk-p2"><span>Estimated Delivery Date: </span></p>
                    <p className="thk-p2" />
                  </div>
                  <div className="thk-in-box">
                    <div className="thk-dtl-l">
                      <p className="thk-p3">Items Orderd</p>
                      <div className="thk-prds">
                        <div className="thk-prd-row">
                          <div className="thk-prd-box">
                            <img src="images/thk-prd.png" />
                          </div>
                          <p className="thk-p2"><span>Yeah Keto</span><span className="fr">$195.00</span></p>
                          <p className="thk-p2 gry-clr">5 Bottles </p>
                        </div>
                        <div className="thk-prd-row">
                          <div className="thk-prd-box">
                            <img src="images/thk-prd-1.png" />
                          </div>
                          <p className="thk-p2"><span>Yeah Caralluma</span><span className="fr">$195.00</span></p>
                          <p className="thk-p2 gry-clr">1 Bottles </p>
                        </div>
                        <div className="thk-prd-row">
                          <div className="thk-prd-box">
                            <img src="images/thk-prd-2.png" />
                          </div>
                          <p className="thk-p2"><span>Yeah Forskolin</span><span className="fr">$49.99</span></p>
                          <p className="thk-p2 gry-clr">1 Bottles </p>
                        </div>
                      </div>
                      <div className="thk-total-div">
                        <div className="thk-total-inn">
                          <p className="thk-p4">Sub Total:  <span>$687.00</span></p>
                          <p className="thk-p4 brd-tb">Shipping &amp; handling: <span className="grn-clr"><b>FREE</b></span></p>
                          <p className="thk-p4">Total:  <span>$687.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="thk-dtl-r">
                  <p className="thk-p3">Shipping Info</p>
                  <ul className="user-info">
                    <li><span>First Name:</span> Name</li>
                    <li><span>Last Name:</span> name</li>
                    <li><span>Address:</span> 123, Church Street</li>
                    <li><span>City:</span> Mississippi</li>
                    <li><span>State:</span> CA</li>
                    <li><span>Zip Code:</span> 2311441</li>
                    <li><span>Phone:</span> 1-XXX-XXX-XXXX</li>
                    <li><span>Email:</span> name@email.com</li>
                  </ul>
                  <p className="thk-p3 pad-top">Billing Info</p>
                  <ul className="user-info">
                    <li><span>First Name:</span> Name</li>
                    <li><span>Last Name:</span> name</li>
                    <li><span>Address:</span> 123, Church Street</li>
                    <li><span>City:</span> Mississippi</li>
                    <li><span>State:</span> CA</li>
                    <li><span>Zip Code:</span> 2311441</li>
                    <li><span>Phone:</span> 1-XXX-XXX-XXXX</li>
                    <li><span>Email:</span> name@email.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="contentWrap shadow">
          <div className="header position">
            <a href="/">
              <img
                src="/static/desktop/images/logo.png"
                alt="logo"
                className="logo"
              />
            </a>
            <img
              src="/static/desktop/images/step2.png"
              alt="step-2"
              className="step"
            />
            <img
              src="/static/desktop/images/seals.png"
              alt="seals"
              className="seals"
            />
          </div>
          <div className="thank-top">
            <div className="thank-lft">
              <p className="thank-txt1">Congratulations! </p>
              <p className="thank-txt2">
                You&#39;ve taken the first step to better health and wellness.
                We are confident that you will enjoy the benefits of American
                Science products.
              </p>
              <ul className="thank-list">
                <li>
                  <span>
                    RELIEVES<br />
                  </span>Anxiety &amp; Stress
                </li>
                <li>
                  <span>
                    REGULATES <br />
                  </span>Mood &amp; Sleep Patterns
                </li>
                <li>
                  <span>
                    Eliminate <br />
                  </span>Chronic Pain &amp; Aches
                </li>
                <li>
                  <span>
                    Enhances <br />
                  </span>Focus &amp; Clarity
                </li>
              </ul>
            </div>
          </div>
          <div className="clearall" />
          <div className="green-sec">
            <p className="green-txt1">
              We&#39;re here<br />
              <span>to help</span>
            </p>
            <p className="green-txt2">
              If you have any questions regarding the product, it&#39;s usage or
              billing, our customer care executives are available 24/7 to assist
              you with the same.
            </p>
            <ul className="green-list">
              <li>1-877-279-5390</li>
              <li>support@americanscience.com</li>
            </ul>
          </div>
          <div className="ty-box">
            <div className="ord-p1">
              <p className="tp-heading">Order Receipt</p>
            </div>
            <div className="ty-left">
              <div className="opt-top">
                <p className="order-top">
                  Order Placed:{' '}
                  <span>{moment().format('dddd, MMM DD, YYYY')}</span>
                  <br />
                  Order Number:{' '}
                  <span>
                    {items[0].OrderInfo && items[0].OrderInfo.CustomerID}
                  </span>
                  <br />
                  Estimated Delivery Date:{' '}
                  <span>
                    {moment()
                      .add(4, 'days')
                      .format('dddd, MMM DD, YYYY')}
                  </span>
                </p>
              </div>
              <div className="itemordered-heading">Items Ordered</div>
              {Object.values(items).map(item => (
                // const originalProduct = this.getOriginalProduct(item);
                <div key={item.OrderInfo.TransactionID} className="prod-row">
                  <div className="prod-data ty">
                    <div className="prod-shoot">
                      <img
                        src={getTyProductImage(item.OrderInfo.Products[0])}
                        alt="prod-shoot"
                      />
                    </div>
                    <p className="prod-name">
                      American Science CBD
                      <br />
                      {getTyProductName(item.OrderInfo.Products[0])}
                      <br />
                      <span>
                        {item.OrderInfo.Products[0].Quantity}{' '}
                        {getTyProductContainer(item.OrderInfo.Products[0])}
                      </span>
                    </p>
                  </div>
                  <div className="prod-price">
                    ${item.OrderInfo.TotalAmount}
                  </div>
                </div>
              ))}
              <div className="summry-table">
                <div className="row pack-name">
                  Sub Total: <span>${total}</span>
                </div>

                <div className="row shipping">
                  Shipping &amp; handling:<span>FREE</span>
                </div>

                <div className="row total-price">
                  Total: <span>${total}</span>
                </div>
              </div>
            </div>
            <div className="ty-rgt">
              <div className="sh-heading">Shipping Info</div>
              <ul className="user-info">
                <li>
                  <span>First Name:</span>
                  <p className="user-info__value"> {CustomerInfo.FirstName} </p>
                </li>
                <li>
                  <span>Last Name:</span>
                  <p className="user-info__value"> {CustomerInfo.LastName} </p>
                </li>
                <li>
                  <span>Address:</span>
                  <p className="user-info__value">
                    {' '}
                    {shippingDetails.ShippingAddress.Address1} <br />{' '}
                    {shippingDetails.ShippingAddress.Address2}{' '}
                  </p>
                </li>
                <li>
                  <span>City:</span>
                  <p className="user-info__value">
                    {' '}
                    {shippingDetails.ShippingAddress.City}{' '}
                  </p>
                </li>
                <li>
                  <span>State:</span>
                  <p className="user-info__value">
                    {' '}
                    {shippingDetails.ShippingAddress.State}{' '}
                  </p>
                </li>
                <li>
                  <span>Zip Code:</span>
                  <p className="user-info__value">
                    {' '}
                    {shippingDetails.ShippingAddress.ZipCode}{' '}
                  </p>
                </li>
                <li>
                  <span>Phone:</span>
                  <p className="user-info__value"> {CustomerInfo.Phone} </p>
                </li>
                <li>
                  <span>Email:</span>
                  <p className="user-info__value"> {CustomerInfo.Email} </p>
                </li>
              </ul>
              <div className="sh-heading">Billing Info</div>
              <ul className="user-info">
                <li>
                  <span>First Name:</span>
                  <p className="user-info__value">
                    {' '}
                    {shippingDetails.ShippingAddress.FirstName}{' '}
                  </p>
                </li>
                <li>
                  <span>Last Name:</span>
                  <p className="user-info__value">
                    {' '}
                    {shippingDetails.ShippingAddress.LastName}{' '}
                  </p>
                </li>
                <li>
                  <span>Address:</span>
                  <p className="user-info__value">
                    {' '}
                    {shippingDetails.ShippingAddress.Address1} <br />{' '}
                    {shippingDetails.ShippingAddress.Address2}
                  </p>
                </li>
                <li>
                  <span>City:</span>
                  <p className="user-info__value">
                    {' '}
                    {shippingDetails.ShippingAddress.City}{' '}
                  </p>
                </li>
                <li>
                  <span>State:</span>
                  <p className="user-info__value">
                    {' '}
                    {shippingDetails.ShippingAddress.State}{' '}
                  </p>
                </li>
                <li>
                  <span>Zip Code:</span>
                  <p className="user-info__value">
                    {' '}
                    {shippingDetails.ShippingAddress.ZipCode}{' '}
                  </p>
                </li>
                <li>
                  <span>Phone:</span>
                  <p className="user-info__value"> {shippingDetails.Phone} </p>
                </li>
                <li>
                  <span>Email:</span>
                  <p className="user-info__value"> {shippingDetails.Email} </p>
                </li>
              </ul>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    order: state.order.order,
  };
}

const ThankyouDesktop = connect(mapStateToProps, { ...OrderActions })(
  withRouter(ThankyouDesktopComponent),
);

export default ThankyouDesktop;
