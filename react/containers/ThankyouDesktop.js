import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import {
  getTyProductImage,
  getTyProductContainer,
  getTyProductName,
  getTyProductQuantity,
} from 'helpers';
import { OrderActions } from 'redux/actions';
import moment from 'moment';

class ThankyouDesktopComponent extends React.Component {
  render() {
    const { isPromo, items, shippingDetails } = this.props;
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
        <div className="contentWrap shadow">
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
              <li>1-888-888-8888</li>
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
                        {isPromo
                          ? getTyProductQuantity(item.OrderInfo.Products[0])
                          : item.OrderInfo.Products[0].Quantity}{' '}
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
        </div>
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

export { ThankyouDesktop };
