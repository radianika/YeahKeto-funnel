import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import {
  getTyProductImage,
  getTyProductName,
  getTyProductQuantity,
  getTyProductContainer,
} from 'helpers';
import { OrderActions } from 'redux/actions';
import moment from 'moment';

class ThankyouMobileComponent extends React.PureComponent {
  render() {
    const { order, isPromo } = this.props;
    return (
      <div className="contentWrap">
        <div className="header position">
          <img src="/static/mobile/images/logo.png" alt="" className="logo" />
        </div>
        <div className="thank-mid">
          <p className="thank-txt1">Congratulations! </p>
          <p className="thank-txt2">
            You&#39;ve taken the first step to better health and wellness. We
            are confident that you will enjoy the benefits of American Science
            products.{' '}
          </p>
          <ul className="thank-list">
            <li>
              <span>RELIEVES </span>Anxiety &amp; Stress
            </li>
            <li>
              <span>REGULATES </span>Mood &amp; Sleep Patterns
            </li>
            <li>
              <span>Eliminate </span>Chronic Pain &amp; Aches
            </li>
            <li>
              <span>Enhances </span>Focus &amp; Clarity
            </li>
          </ul>
        </div>
        <p className="green-bg-txt1">We&#39;re here to help</p>
        <p className="thank-txt2">
          If you have any questions regarding the product, it&#39;s usage or
          billing, our customer care executives are available 24/7 to assist you
          with the same.{' '}
        </p>
        <ul className="green-list">
          <li>1-888-888-8888</li>
          <li>support@americanscience.com</li>
        </ul>
        {order && (
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
                  Order Number: <span>{order.clientOrderId}</span>
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
              {Object.keys(order.items).map(key => {
                const item = order.items[key];
                return (
                  // const originalProduct = this.getOriginalProduct(item);
                  <div key={item.productId} className="prod-row">
                    <div className="prod-data ty">
                      <div className="prod-shoot">
                        <img src={getTyProductImage(item)} alt="" />
                      </div>
                      <p className="prod-name">
                        American Science CBD
                        <br />
                        {getTyProductName(item)}
                        <br />
                        <span>
                          {isPromo ? getTyProductQuantity(item) : item.qty}{' '}
                          {getTyProductContainer(item)}
                        </span>
                      </p>
                    </div>
                    <div className="prod-price">${item.price}</div>
                  </div>
                );
              })}
              <div className="summry-table">
                <div className="row pack-name">
                  Sub Total: <span>${order.price}</span>
                </div>

                <div className="row shipping">
                  Shipping &amp; handling:<span>FREE</span>
                </div>

                <div className="row total-price">
                  Total: <span>${order.totalAmount}</span>
                </div>
              </div>
            </div>
            <div className="ty-rgt">
              <div className="sh-heading">Shipping Info</div>
              <ul className="user-info">
                <li>
                  <span>First Name:</span>
                  <p className="user-info__value-mb"> {order.firstName} </p>
                </li>
                <li>
                  <span>Last Name:</span>
                  <p className="user-info__value-mb"> {order.lastName} </p>
                </li>
                <li>
                  <span>Address:</span>
                  <p className="user-info__value-mb">
                    {' '}
                    {order.address1} <br /> {order.address2}{' '}
                  </p>
                </li>
                <li>
                  <span>City:</span>
                  <p className="user-info__value-mb"> {order.city} </p>
                </li>
                <li>
                  <span>State:</span>
                  <p className="user-info__value-mb"> {order.state} </p>
                </li>
                <li>
                  <span>Zip Code:</span>
                  <p className="user-info__value-mb"> {order.postalCode} </p>
                </li>
                <li>
                  <span>Phone:</span>
                  <p className="user-info__value-mb"> {order.phoneNumber} </p>
                </li>
                <li>
                  <span>Email:</span>
                  <p className="user-info__value-mb"> {order.emailAddress} </p>
                </li>
              </ul>
              <div className="sh-heading">Billing Info</div>
              <ul className="user-info">
                <li>
                  <span>First Name:</span>
                  <p className="user-info__value-mb"> {order.shipFirstName} </p>
                </li>
                <li>
                  <span>Last Name:</span>
                  <p className="user-info__value-mb"> {order.shipLastName} </p>
                </li>
                <li>
                  <span>Address:</span>
                  <p className="user-info__value-mb">
                    {' '}
                    {order.shipAddress1} <br /> {order.shipAddress2}{' '}
                  </p>
                </li>
                <li>
                  <span>City:</span>
                  <p className="user-info__value-mb"> {order.shipCity} </p>
                </li>
                <li>
                  <span>State:</span>
                  <p className="user-info__value-mb"> {order.shipState} </p>
                </li>
                <li>
                  <span>Zip Code:</span>
                  <p className="user-info__value-mb">
                    {' '}
                    {order.shipPostalCode}{' '}
                  </p>
                </li>
                <li>
                  <span>Phone:</span>
                  <p className="user-info__value-mb"> {order.phoneNumber} </p>
                </li>
                <li>
                  <span>Email:</span>
                  <p className="user-info__value-mb"> {order.emailAddress} </p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    order: state.order.order,
  };
}

const ThankyouMobile = connect(mapStateToProps, { ...OrderActions })(
  withRouter(ThankyouMobileComponent),
);

export { ThankyouMobile };
