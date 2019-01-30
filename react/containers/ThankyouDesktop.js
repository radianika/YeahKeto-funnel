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

// id: {
//   imgUrl: ,
//   name: '',
//   packSize: '',
//   price: ''
// }

const productMapping = {
  4165: {
    imgUrl: '/static/promo/desktop/images/images/thk-prd.png',
    name: 'Yeah Keto',
    packSize: '5 Bottles',
    price: 195
  },
  4163: {
    imgUrl: '/static/promo/desktop/images/images/thk-prd.png',
    name: 'Yeah Keto',
    packSize: '3 Bottles',
    price: 147
  },
  4161: {
    imgUrl: '/static/promo/desktop/images/images/thk-prd.png',
    name: 'Yeah Keto',
    packSize: '1 Bottles',
    price: 69
  },
  4168: {
    imgUrl: '/static/promo/desktop/images/images/thk-prd-2.png',
    name: 'Yeah Forskolin',
    packSize: '1 Bottles',
    price: 49.99
  },
  4166: {
    imgUrl: '/static/promo/desktop/images/images/thk-prd-1.png',
    name: 'Yeah Caralluma',
    packSize: '1 Bottles',
    price: 49.99
  }
}

/**
 * @class ThankyouDesktopComponent
 * @extends {React.Component}
 * @description Common Thankyou page between promo flow and cart flow on desktop
 */
class ThankyouDesktopComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leadData: JSON.parse(localStorage.getItem('leadData'))
    }
  }

  render() {
    console.log('this.state', this.state.items);
    const products = JSON.parse(localStorage.getItem('pdcts'));
    const items = [];
    let totalPrice = 0;
    products.forEach(prod => {
      totalPrice = totalPrice + productMapping[prod.productId].price;
      items.push(productMapping[prod.productId])
    });

    return (
      <div className="container">
        <div className="up-top">
          <div className="inner-container">
            <p><span>WARNING:</span> Due to extremely high media demand, there is limited supply of bottle in stock as of <span /></p>
          </div>
        </div>
        <div className="up-bg thnk-pg">
          <div className="inner-container">
            <img src="/static/promo/desktop/images/images/logo.png" alt className="up-logo" />
            <img src="/static/promo/desktop/images/images/ty-hdr.png" alt className="up-steps" />
            <div className="inr-thnk">
              <p className="up-hdg grn-clr">Congratulations!</p>
              <p className="up-sub-hdg">You've taken the first step to better health and wellness. We are confident that <br className="for-desk" />you will enjoy the benefits of Yeah Keto products. </p>
              <div className="thnk-recpt-box">
                <p className="thk-p1">Order Reciept</p>
                <div className="thnk-lft">
                  <div className="thk-in-lft">
                    <p className="thk-p2"><span>Order Placed:</span> {moment(this.state.leadData.dateCreated).format('MMM DD hh:mm:ss')}</p>
                    <p className="thk-p2"><span>Order Number:</span> {this.state.leadData.orderId}</p>
                  </div>
                  <div className="thk-in-lft">
                    <p className="thk-p2"><span>Estimated Delivery Date: </span></p>
                    <p className="thk-p2" />
                  </div>
                  <div className="thk-in-box">
                    <div className="thk-dtl-l">
                      <p className="thk-p3">Items Orderd</p>
                      <div className="thk-prds">
                      {
                        items.map(item => (
                          <div className="thk-prd-row">
                            <div className="thk-prd-box">
                              <img src={item.imgUrl} />
                            </div>
                            <p className="thk-p2"><span>Yeah Keto</span><span className="fr">${item.price}</span></p>
                            <p className="thk-p2 gry-clr">{item.packSize} </p>
                          </div>
                        ))
                      }
                      </div>
                      <div className="thk-total-div">
                        <div className="thk-total-inn">
                          <p className="thk-p4">Sub Total:  <span>${totalPrice}</span></p>
                          <p className="thk-p4 brd-tb">Shipping &amp; handling: <span className="grn-clr"><b>FREE</b></span></p>
                          <p className="thk-p4">Total:  <span>${totalPrice}</span></p>
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
        <div className="footer">
          <div className="inner-container">
            <p className="ftr-txt1">This product has not been evaluated by the FDA. This product is not intended 
              to diagnose, treat, cure or prevent any disease.<br />
              Results in description and testimonials may not be typical results and individual results may vary.<br />
              This product intended to be used in conjunction with a healthy diet and regular exercise.<br />
              Consult your physician before starting any diet, exercise program, and taking any diet pill 
              to avoid any health issues.<br />
              Images above are dramatizations.<br /> <br /> 
              <a href="#">Terms &amp; Conditions</a> | <a href="#">Privacy Policy</a>
              | <a href="#">Contact Us</a><br /> 
              © Yeah Keto</p>
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

export default ThankyouDesktop;
