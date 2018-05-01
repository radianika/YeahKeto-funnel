import React, { PureComponent } from 'react';

const Slider = props => (
  <React.Fragment>
    <div className="prd-sec1-inr-lft slider-nav-thumbnails slick-initialized slick-slider">
      <div className="slick-list draggable">
        <div className="slick-track">
          <div
            className="slick-slide slick-current slick-active"
            data-slick-index="0"
            aria-hidden="false"
          >
            <div>
              <div className="smll-sec">
                <img
                  src={`../static/assets/images/cbd-${props.type}-side1.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="slick-slide" data-slick-index="1" aria-hidden="false">
            <div>
              <div className="smll-sec">
                <img
                  src={`../static/assets/images/cbd-${props.type}-side2.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="slick-slide" data-slick-index="2" aria-hidden="false">
            <div>
              <div className="smll-sec">
                <img
                  src={`../static/assets/images/cbd-${props.type}-side3.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="slider slick-initialized slick-slider">
      <div className="slick-list draggable">
        <div className="slick-track">
          <div
            className="slick-slide slick-current slick-active"
            data-slick-index="0"
            aria-hidden="false"
          >
            <div>
              <div className="prd-sec1-inr-rgt">
                <img
                  src={`../static/assets/images/cbd-${props.type}-side1.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="slick-slide"
            data-slick-index="1"
            aria-hidden="true"
            tabIndex="-1"
          >
            <div>
              <div className="prd-sec1-inr-rgt">
                <img
                  src={`../static/assets/images/cbd-${props.type}-side2.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="slick-slide"
            data-slick-index="2"
            aria-hidden="true"
            tabIndex="-1"
          >
            <div>
              <div className="prd-sec1-inr-rgt">
                <img
                  src={`../static/assets/images/cbd-${props.type}-side3.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="prd-sec1-rgt">{props.children}</div>
  </React.Fragment>
);

class Products extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="inner-bg">
          <div className="container">
            <div className="inner-txt">
              <span>our products</span>
              <p className="comn-txt">
                Find out more about American Science&#8217;s range of hemp
                extract enriched dietary supplements.{' '}
              </p>
            </div>
            <img
              src="../static/assets/images/bnr-prd.png"
              alt=""
              className="inner-prd for-desk for-tab"
            />
          </div>
        </div>

        <div className="prd-sec1">
          <div className="container">
            <Slider type="oil">
              <p className="prd-sec1-txt1">American science</p>
              <p className="prd-sec1-txt2">CBD hemp oil</p>
              <p className="prd-sec-1txt3">Pure Cannabidiol complex</p>
              <p className="comn-txt prd-sec1-txt5">
                Formulated with high-potency 500MG Hemp Extract, American
                Science's Hemp Oil is rich in a wide range of cannabinoids (CBD)
                that have been proven to support mood patterns, joint health,
                and mental clarity.{' '}
              </p>
              <ul className="prd-sec1-list">
                <li>
                  Available in an easy-to-take tincture or herbal drops form
                </li>
                <li>
                  Free from THC, harmful chemicals, pesticides, and synthetics
                </li>
                <li>
                  Made from hemp extract that is organically grown &amp;
                  extracted in the USA
                </li>
              </ul>
              <div style={{ float: 'left', width: '100%' }}>
                <p className="prd-sec1-txt6">$69.00</p>
                <a href="cart.html" className="prd-sec1-btn">
                  <img src="../static/assets/images/btn.png" alt="" />
                </a>
              </div>
            </Slider>
          </div>
        </div>

        <div className="prd-sec2">
          <div className="container">
            <p className="comn-hdg">Supplement Facts &amp; Directions Of Use</p>
            <p className="comn-sub-hdg">
              Find out what&#8217;s inside our hemp supplements and how to use
              them for best results.
            </p>
            <img src="../static/assets/images/comn-hdg-img.png" alt="" />
            <div className="clearall" />
            <img
              src="../static/assets/images/cbd-oil-label.jpg"
              className="cbd-label-img"
              alt=""
            />
            <div className="howtouse">
              <h3>How to use</h3>
              <ul>
                <li>
                  <span>
                    Step<br />1
                  </span>
                  <p>
                    Take 1 dropper full of the American Science Hemp Oil once a
                    day.
                  </p>
                </li>
                <li>
                  <span>
                    Step<br />2
                  </span>
                  <p>
                    Follow a healthy lifestyle along with a balanced diet &amp;
                    regular exercise.
                  </p>
                </li>
                <li>
                  <span>
                    Step<br />3
                  </span>
                  <p>
                    Follow the supplementation &amp; use daily for best results
                    and maximum benefits.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="prd-sec3">
          <div className="container">
            <p className="comn-hdg">Recommended Products</p>
            <p className="comn-sub-hdg">
              Complete Your American Science Supplement Stack
            </p>
            <img src="../static/assets/images/comn-hdg-img.png" alt="" />
            <ul className="prd-sec3-list">
              <li>
                <img
                  src="../static/assets/images/sec2-prd2.png"
                  alt=""
                  className="sec2-prd"
                />
                <div className="prd-details">
                  <p className="prd-txt1">American Science</p>
                  <p className="prd-txt2">CBD hemp capsules</p>
                  <p className="prd-txt3">Pure Cannabidiol complex</p>
                  <p className="prd-txt4 comn-txt">
                    Hemp capsules may help support joint health &amp; may
                    promote better sleep quality.
                  </p>
                  <a href="hemp-capsule.html">
                    <img
                      src="../static/assets/images/btn.png"
                      alt=""
                      className="btn"
                    />
                  </a>
                </div>
              </li>
              <li>
                <img
                  src="../static/assets/images/sec2-prd3.png"
                  alt=""
                  className="sec2-prd"
                />
                <div className="prd-details">
                  <p className="prd-txt1">American Science</p>
                  <p className="prd-txt2">Warming balm</p>
                  <p className="prd-txt3">Premium Cognitive Function</p>
                  <p className="prd-txt4 comn-txt">
                    Warming balm may help support relief from problems like
                    soreness, inflammation, and irritated skin.
                  </p>
                  <a href="warming_balm.html">
                    <img
                      src="../static/assets/images/btn.png"
                      alt=""
                      className="btn"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Products };
