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

class ThankyouDesktopComponent extends React.PureComponent {
  render() {
    const { order, isPromo } = this.props;
    return (
      <div className="container">
        <div className="contentWrap shadow">
          <div className="header position">
            <img
              src="/static/desktop/images/logo.png"
              alt=""
              className="logo"
            />
            <img
              src="/static/desktop/images/step2.png"
              alt=""
              className="step"
            />
            <img
              src="/static/desktop/images/seals.png"
              alt=""
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
              {Object.values(order.items).map(item => (
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
              ))}
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
                  <p className="user-info__value"> {order.firstName} </p>
                </li>
                <li>
                  <span>Last Name:</span>
                  <p className="user-info__value"> {order.lastName} </p>
                </li>
                <li>
                  <span>Address:</span>
                  <p className="user-info__value">
                    {' '}
                    {order.address1} <br /> {order.address2}{' '}
                  </p>
                </li>
                <li>
                  <span>City:</span>
                  <p className="user-info__value"> {order.city} </p>
                </li>
                <li>
                  <span>State:</span>
                  <p className="user-info__value"> {order.state} </p>
                </li>
                <li>
                  <span>Zip Code:</span>
                  <p className="user-info__value"> {order.postalCode} </p>
                </li>
                <li>
                  <span>Phone:</span>
                  <p className="user-info__value"> {order.phoneNumber} </p>
                </li>
                <li>
                  <span>Email:</span>
                  <p className="user-info__value"> {order.emailAddress} </p>
                </li>
              </ul>
              <div className="sh-heading">Billing Info</div>
              <ul className="user-info">
                <li>
                  <span>First Name:</span>
                  <p className="user-info__value"> {order.shipFirstName} </p>
                </li>
                <li>
                  <span>Last Name:</span>
                  <p className="user-info__value"> {order.shipLastName} </p>
                </li>
                <li>
                  <span>Address:</span>
                  <p className="user-info__value">
                    {' '}
                    {order.shipAddress1} <br /> {order.shipAddress2}
                  </p>
                </li>
                <li>
                  <span>City:</span>
                  <p className="user-info__value"> {order.shipCity} </p>
                </li>
                <li>
                  <span>State:</span>
                  <p className="user-info__value"> {order.shipState} </p>
                </li>
                <li>
                  <span>Zip Code:</span>
                  <p className="user-info__value"> {order.shipPostalCode} </p>
                </li>
                <li>
                  <span>Phone:</span>
                  <p className="user-info__value"> {order.phoneNumber} </p>
                </li>
                <li>
                  <span>Email:</span>
                  <p className="user-info__value"> {order.emailAddress} </p>
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
