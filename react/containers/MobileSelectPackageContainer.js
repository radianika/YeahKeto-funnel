import React from 'react';
import { Footer } from 'react/components/common';
import { withRouter } from 'next/router';
import { packages, getQueryString } from 'helpers';

class MobileSelectPackageContainer extends React.PureComponent {
  selectPackage = pack => {
    window.location.assign(
      `/promo/mobile/confirm?${getQueryString()}&productId=${pack.id}`,
    );
  };

  render() {
    return (
      <div id="container">
        <div className="spng-hd">
          <div className="spng-hd2">
            <img
              src="/static/promo/mobile/images/ck-top.jpg"
              alt=""
              className="sping-logo"
            />
            <p className="clearall" />
            <p className="trial-toptxt1">
              Select Your Package TODAY &amp; SAVE MORE!
            </p>
          </div>
        </div>
        {packages.map(pack => (
          <React.Fragment key={pack.id}>
            <div
              className="link-container-3"
              style={{ cursor: 'pointer', marginBottom: '20px !important' }}
              onClick={() => this.selectPackage(pack)}
            >
              <div className="select-box1">
                <div className="slt-box-hd">
                  <img
                    src="/static/promo/mobile/images/select-btn.png"
                    alt=""
                    className="select-btn"
                  />
                  <p className="slt-box-hd-txt">{pack.title}</p>
                </div>
                <div className="box-mid">
                  <div className="box-mid-left">
                    <img
                      src={`/static/promo/mobile/images/${pack.img}`}
                      alt=""
                      className="product-box1"
                    />
                  </div>
                  <div className="box-mid-right">
                    <div className="pkgtype-hdbox">
                      <p className="pkgtype-hding">{pack.msg}</p>
                    </div>
                    <div className="box-mid-right-box">
                      <p className="box-mid-left-txt1">
                        REGULAR PRICE {pack.regularPrice}
                      </p>
                      <img
                        src="/static/promo/mobile/images/rd-strk.png"
                        className="rd-strk"
                        alt=""
                      />
                      <p className="pkgcont-price">
                        {pack.price}
                        <span>/ea</span>
                      </p>
                    </div>
                    <img
                      src="/static/promo/mobile/images/ship-icon.png"
                      alt=""
                      className="ship-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ clear: 'both' }} />
          </React.Fragment>
        ))}
        <div className="clearboth" />
        <div className="legal">
          <div className="ftr-txt">
            <Footer promo />
          </div>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line
MobileSelectPackageContainer = withRouter(MobileSelectPackageContainer);

export { MobileSelectPackageContainer };
