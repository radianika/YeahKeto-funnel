import React from 'react';
import { Footer } from 'react/components/common';
import { withRouter } from 'next/router';
import { packages, getQueryString } from 'helpers';

/**
 * @class MobileSelectPackageContainer
 * @extends {React.PureComponent}
 * @description selection of packages, comes before shipping page on mobile
 */
class MobileSelectPackageContainer extends React.PureComponent {
  selectPackage = pack => {
    const { localStorage } = window;
    window.location.assign(
      `/promo/mobile/confirm?${getQueryString()}&productId=${pack.id}`,
    );
    localStorage.setItem('pack', JSON.stringify(pack));
  };

  render() {
    return (
      <div id="container">
        <img src="/static/promo/mobile/images/images/top-img.jpg" alt className="img-resp" />
        <p className="chk-toptxt1 chk-toptxt1-bdr">SELECT YOUR PACKAGE</p>
        <div className="clearall" />

        {packages.map((pack, index) => (
          <div className="slct-box1" key={pack.id}>
            <div className="slct-mid" onClick={() => this.selectPackage(pack)}>
              <p className="seclt-txt1">{pack.title}</p>
            </div>
            <img src="/static/promo/mobile/images/images/product-box1.png" className="pack1-prod" />
            <p className="seclt-txt2">{pack.msg}</p>
            <div className="select-mid-sec">
              <p className="seclt-reg-txt">REGULAR <span>{pack.regularPrice}<img src="/static/promo/mobile/images/images/cut-line.png" /></span></p>
              <div className="p5-pkgchk">
                <p className="prc-details-txt1">{pack.price}</p>
                <p className="prc-details-txt2">/ea</p>
              </div>
              <p className="s-mid-txt2">You Save: $139.98</p>
              <p className="s-mid-txt3">FREE SHIPPING</p>
              <div className="link-container-5"  onclick="location.href='payment.php?pid=1'" style={{'cursor': 'pointer'}}>
                <img src="/static/promo/mobile/images/images/select-btn2.png" />
              </div>
            </div>
          </div>
        ))}
        <div className="clearboth" />
        <div className="legal">
          <p className="ftr-txt">
            <a href="#">Terms &amp; Conditions</a>&nbsp;|&nbsp; 
            <a href="#"> Privacy Policy </a>&nbsp;|&nbsp; 
            <a href="#"> Contact Us </a> <br /><br />
            <span style={{'text-transform': 'none'}}>
              <script type="text/javascript">
                var year = new Date();document.write(year.getFullYear());
              </script> &copy;
              Yeah Keto
            </span>
          </p>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line
MobileSelectPackageContainer = withRouter(MobileSelectPackageContainer);

export default MobileSelectPackageContainer;
