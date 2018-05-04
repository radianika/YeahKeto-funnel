import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { getTyProductImage } from 'helpers';
import { OrderActions } from 'redux/actions';

class PromoThankyouDesktop extends React.PureComponent {
  render() {
    const { order } = this.props;
    console.log({ order });
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
                You've taken the first step to better health and wellness. We
                are confident that you will enjoy the benefits of American
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
                    Promotes <br />
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
              We're here<br />
              <span>to help</span>
            </p>
            <p className="green-txt2">
              If you have any questions regarding the product, it's usage or
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
                  Order Placed: <span>Thursday, May 3, 2018</span>
                  <br />
                  Order Number: <span>341160</span>
                  <br />
                  Estimated Delivery Date: <span>Monday, May 7, 2018</span>
                </p>
              </div>
              <div className="itemordered-heading">Items Ordered</div>
              {Object.values(order.items).map(item => (
                // const originalProduct = this.getOriginalProduct(item);
                <div key={item.productId} className="prod-row">
                  <div className="prod-data ty">
                    <div className="prod-shoot">
                      <img src={getTyProductImage(item)} />
                    </div>
                    <p className="prod-name">
                      {item.name}
                      <br />
                      <span>
                        Organic Cannabidiol Complex<br />
                        6 Bottles
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
                  <span>First Name:</span> {order.shipFirstName}
                </li>
                <li>
                  <span>Last Name:</span> {order.shipLastName}
                </li>
                <li>
                  <span>Address:</span> {order.shipAddress1} <br />{' '}
                  {order.shipAddress2}
                </li>
                <li>
                  <span>City:</span> {order.shipCity}
                </li>
                <li>
                  <span>State:</span> {order.shipState}
                </li>
                <li>
                  <span>Zip Code:</span> {order.shipPostalCode}
                </li>
                <li>
                  <span>Phone:</span> {order.phoneNumber}
                </li>
                <li>
                  <span>Email:</span> {order.emailAddress}
                </li>
              </ul>
              <div className="sh-heading">Billing Info</div>
              <ul className="user-info">
                <li>
                  <span>First Name:</span> {order.firstName}
                </li>
                <li>
                  <span>Last Name:</span> {order.lastName}
                </li>
                <li>
                  <span>Address:</span> {order.address1} <br /> {order.address2}
                </li>
                <li>
                  <span>City:</span> {order.city}
                </li>
                <li>
                  <span>State:</span> {order.state}
                </li>
                <li>
                  <span>Zip Code:</span> {order.postalCode}
                </li>
                <li>
                  <span>Phone:</span> {order.phoneNumber}
                </li>
                <li>
                  <span>Email:</span> {order.emailAddress}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PromoThankyouDesktop = withRouter(PromoThankyouDesktop);

function mapStateToProps(state) {
  return {
    order: state.order.order,
  };
}

PromoThankyouDesktop = connect(mapStateToProps, { ...OrderActions })(
  PromoThankyouDesktop,
);

export { PromoThankyouDesktop };
