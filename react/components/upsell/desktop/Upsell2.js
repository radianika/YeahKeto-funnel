import React from 'react';
import { PromoSession } from 'react/components/common';
import { getQueryString } from 'helpers';

/**
 * @class Upsell2
 * @extends {React.PureComponent}
 * @description Desktop component rendered after Upsell1 pages
 */
class Upsell2 extends React.PureComponent {
  upgrade = () => {
    this.props.upgrade(4166, '/promo/desktop/thankyou');
  };

  skipUpsell = () => {
    window.location.assign(`'/promo/desktop/thankyou?${getQueryString()}`);
  };

  render() {
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage2" />
        <div className="up-bg">
          <div className="inner-container">
            <div className="up-inr">
              <img src="/static/promo/desktop/images/images/logo.png" className="up-logo" />
              <img src="/static/promo/desktop/images/images/chk-hdr.png" alt className="up-steps" />
              <div className="inr-chk inr-pack inr-upsell">
                <div className="upsell-sec">
                  <p className="up-hdg">WAIT! YOU QUALIFY FOR A LIMITED TIME DISCOUNT</p>
                  <p className="up-sub-hdg">93% of customers who purchase <span>Yeah Keto</span> also purchase <span>Yeah Caralluma</span></p>
                  <div className="up-box-bg">
                    <div className="up-lft">
                      <img src="/static/promo/desktop/images/images/up-prd.png" alt className="up-prd" />
                      <img src="/static/promo/desktop/images/images/up-lft-img1.png" alt className="up-lft-img1" />
                      <div className="up-seal">
                        <p>save<br />$44%</p>
                      </div>
                    </div>
                    <div className="up-rgt">
                      <p className="up-rgt-txt1">Curb Your Cravings With</p>
                      <img src="/static/promo/desktop/images/images/up1-logo.png" className="up1-logo" />
                      <p className="up-rgt-txt3">Advanced Appetite Suppression*</p>
                      <ul className="up-list">
                        <li>
                          <img src="/static/promo/desktop/images/images/up-tick.png" alt className="for-desk" />
                          <p>Suppress<br /><span>Appetite</span></p>
                        </li>
                        <li>
                          <img src="/static/promo/desktop/images/images/up-tick.png" alt className="for-desk" />
                          <p>Reduces<br /><span>Overeating</span></p>
                        </li>
                        <li>
                          <img src="/static/promo/desktop/images/images/up-tick.png" alt className="for-desk" />
                          <p>Boost<br /><span>Weight Loss</span></p>
                        </li>
                      </ul>
                      <div className="up-prd-info">
                        <p className="up-prd-p1">Add Your <span>Special Discounted</span> Bottle<br />Just Pay a Special Price <span><img src="/static/promo/desktop/images/images/strike.png" alt />$89.99</span></p>
                        <p className="prd-prc">$49.99</p>
                        <a href="#" onClick={this.upgrade}><img src="/static/promo/desktop/images/images/up-btn.png" alt className="up-btn" /></a>
                        <a href="#" onClick={this.skipUpsell}><p className="no-p"> No thanks, I’m not interested </p></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="clearall"></p>
        <div className="footer">
          <div className="chk-contentWrap"> 
            <p className="ftr-txt1">This product has not been evaluated by the FDA. This product is not intended 
              to diagnose, treat, cure or prevent any disease.<br />
              Results in description and testimonials may not be typical results and individual results may vary.<br />
              This product intended to be used in conjunction with a healthy diet and regular exercise.<br />
              Consult your physician before starting any diet, exercise program, and taking any diet pill 
              to avoid any health issues.<br />
              Images above are dramatizations.<br /> <br /> 
              <a href="#">Terms &amp; Conditions</a> | <a href="#">Privacy Policy</a>
              | <a href="#">Contact Us </a><br /> 
              © Yeah Keto</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Upsell2 };
