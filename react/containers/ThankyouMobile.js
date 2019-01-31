import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import {
  getTyProductImage,
  getTyProductName,
  getTyProductContainer,
} from 'helpers';
import { OrderActions } from 'redux/actions';
import moment from 'moment';

const productMapping = {
  4165: {
    imgUrl: '/static/promo/mobile/images/images/thk-prd.png',
    name: 'Yeah Keto',
    packSize: '5 Bottles',
    price: 195
  },
  4163: {
    imgUrl: '/static/promo/mobile/images/images/thk-prd.png',
    name: 'Yeah Keto',
    packSize: '3 Bottles',
    price: 147
  },
  4161: {
    imgUrl: '/static/promo/mobile/images/images/thk-prd.png',
    name: 'Yeah Keto',
    packSize: '1 Bottles',
    price: 69
  },
  4168: {
    imgUrl: '/static/promo/mobile/images/images/thk-prd-2.png',
    name: 'Yeah Forskolin',
    packSize: '1 Bottles',
    price: 49.99
  },
  4166: {
    imgUrl: '/static/promo/mobile/images/images/thk-prd-1.png',
    name: 'Yeah Caralluma',
    packSize: '1 Bottles',
    price: 49.99
  }
}

/**
 * @class ThankyouMobileComponent
 * @extends {React.PureComponent}
 * @description Common Thankyou page between promo flow and cart flow on mobile
 */
class ThankyouMobileComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      leadData: JSON.parse(localStorage.getItem('leadData'))
    }
  }

  render() {
    const products = JSON.parse(localStorage.getItem('pdcts'));
    const items = [];
    let totalPrice = 0;
    products.forEach(prod => {
      totalPrice = totalPrice + productMapping[prod.productId].price;
      items.push(productMapping[prod.productId])
    });

    return (
      <div className="container"> 
        <div className="upsell-hdr" style={{padding: '17px 0 10px'}}><img src="/static/promo/mobile/images/images/logo.png" /></div>
        <div className="upsell-midbd dsplay">  
          <p className="thnk-hding">THANK YOU FOR YOUR PURCHASE</p>
          <p className="thnk-txt">We hope you enjoy the benefits of <b>Yeah Keto</b><br />
            Your order is scheduled to arrive by<br /><span /></p>        
          <p className="odr-rcpt">ORDER RECEIPT</p>
          <p className="odr-rcpt-txt">Order Placed: {moment(this.state.leadData.dateCreated).format('LLLL') } <br />
            Order Number: {this.state.leadData.orderId}<br />
            Items Ordered:</p>
          <p className="order-name">Yeah Keto</p>
          <p className="order-dtl">
            3-Month Supply <span className="span1 span2">$28.99</span></p>
          <div className="updvdr" />
          <p className="order-dtl">Shipping &amp; Handling: <span className="span1">$0.00</span></p>
          <p className="order-name">Yeah Caralluma</p>
          <p className="order-dtl">
            1-Month Supply <span className="span1 span2">$28.99</span></p>
          <div className="updvdr" />
          <p className="order-dtl">Shipping &amp; Handling: <span className="span1">$0.00</span></p>
          <p className="order-name2">Yeah Forskolin</p>
          <p className="order-dtl">
            1-Month Supply <span className="span1 span2">$49.99</span></p>
          <div className="updvdr" />
          <p className="order-dtl">Shipping &amp; Handling: <span className="span1">$0.00</span></p>
          <p className="order-total">Total <span className="span1">$78.98</span></p>
        </div>
        <div className="info-box dsplay">
          <p className="info-hding1">Shipping Info</p>
          <ul className="info-list">
            <li><span className="span1">First Name:</span> Lorem</li>
            <li><span className="span1">Last Name:</span> Ipsum</li>
            <li><span className="span1">Address:</span> 123, Church Street</li>
            <li><span className="span1">City:</span> Mississippi</li>
            <li><span className="span1">State:</span> CA</li>
            <li><span className="span1">Zip Code:</span> 2311441</li>
            <li><span className="span1">Phone:</span> 1-XXX-XXX-XXXX</li>
            <li><span className="span1">Email:</span> name@companyname.com</li>
          </ul>
          <div className="clearall" />
          <p className="info-hding2">Shipping Info</p>
          <ul className="info-list">
            <li><span className="span1">First Name:</span> Lorem</li>
            <li><span className="span1">Last Name:</span> Ipsum</li>
            <li><span className="span1">Address:</span> 123, Church Street</li>
            <li><span className="span1">City:</span> Mississippi</li>
            <li><span className="span1">State:</span> CA</li>
            <li><span className="span1">Zip Code:</span> 2311441</li>
            <li><span className="span1">Phone:</span> 1-XXX-XXX-XXXX</li>
            <li><span className="span1">Email:</span> name@companyname.com</li>
          </ul>
        </div>
        <footer>
          <div className="legal">
            <p className="ftr-txt">
              <a href="#">Terms &amp; Conditions</a>&nbsp;|&nbsp; 
              <a href="#"> Privacy Policy </a>&nbsp;|&nbsp; 
              <a href="#"> Contact Us </a> <br /><br />
              <span style={{textTransform: 'none'}}> 
                ©
                Yeah Keto</span>
            </p>
          </div>
        </footer> 
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

export default ThankyouMobile;
