import React, { PureComponent } from 'react';
import { OilSlider, OilHowToUse, OilSquare, OilIngredients } from './Oil';
import { CapSlider, CapHowToUse, CapSquare, CapIngredients } from './Cap';
import { BalmSlider, BalmHowToUse, BalmSquare, BalmIngredients } from './Balm';

const urlTemplate = 'http://localhost:3000';
const links = {
  oil: `${urlTemplate}/hemp-oil.html`,
  cap: `${urlTemplate}/hemp-capsule.html`,
  balm: `${urlTemplate}/warming_balm.html`,
};

class Products extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productType: 'oil',
      translate3d: '0%',
    };
  }

  componentDidMount() {
    history.pushState(
      { id: 'oil' },
      'American Science Hemp Oil CBD',
      links.oil,
    );
  }
  componentDidUpdate() {
    history.pushState(
      { id: this.state.productType },
      'American Science Hemp Oil CBD',
      links[this.state.productType],
    );
  }
  sliderClick(e) {
    this.setState({ translate3d: e });
  }
  changeType(block) {
    if (block === 'frst') {
      return this.state.productType === 'oil'
        ? this.setState({ productType: 'cap' })
        : this.setState({ productType: 'oil' });
    } else if (block === 'scnd') {
      return this.state.productType === 'balm'
        ? this.setState({ productType: 'cap' })
        : this.setState({ productType: 'balm' });
    }
    return '';
  }

  Slider = props => (
    <React.Fragment>
      <div className="prd-sec1-lft">
        <div className="prd-sec1-inr-lft slider-nav-thumbnails slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div className="slick-track">
              <div
                className="slick-slide slick-current slick-active"
                data-slick-index="0"
                aria-hidden="false"
              >
                <div>
                  <div
                    className="smll-sec"
                    onClick={() => this.sliderClick('0%')}
                  >
                    <img
                      src={`../static/assets/images/cbd-${
                        props.type
                      }-side1.png`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div>
                  <div
                    className="smll-sec"
                    onClick={() => this.sliderClick('33.33%')}
                  >
                    <img
                      src={`../static/assets/images/cbd-${
                        props.type
                      }-side2.png`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div>
                  <div
                    className="smll-sec"
                    onClick={() => this.sliderClick('66.66%')}
                  >
                    <img
                      src={`../static/assets/images/cbd-${
                        props.type
                      }-side3.png`}
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
            <div
              className="slick-track"
              style={{
                width: '300%',
                transition: '0.5s',
                transform: `translate3d(-${this.state.translate3d}, 0px, 0px)`,
              }}
            >
              <div className="slick-slide" style={{ width: '33.333%' }}>
                <div>
                  <div
                    className="prd-sec1-inr-rgt"
                    style={{ width: '100%', display: 'inline-block' }}
                  >
                    <img
                      src={`../static/assets/images/cbd-${
                        props.type
                      }-side1.png`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="slick-slide" style={{ width: '33.333%' }}>
                <div>
                  <div
                    className="prd-sec1-inr-rgt"
                    style={{ width: '100%', display: 'inline-block' }}
                  >
                    <img
                      src={`../static/assets/images/cbd-${
                        props.type
                      }-side2.png`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="slick-slide" style={{ width: '33.333%' }}>
                <div>
                  <div
                    className="prd-sec1-inr-rgt"
                    style={{ width: '100%', display: 'inline-block' }}
                  >
                    <img
                      src={`../static/assets/images/cbd-${
                        props.type
                      }-side3.png`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prd-sec1-rgt">{props.children}</div>
    </React.Fragment>
  );

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
            <this.Slider type={this.state.productType}>
              {(() => {
                switch (this.state.productType) {
                  case 'oil':
                    return <OilSlider switcher={this.props.switcher} />;
                  case 'balm':
                    return <BalmSlider switcher={this.props.switcher} />;
                  case 'cap':
                    return <CapSlider switcher={this.props.switcher} />;
                  default:
                    return undefined;
                }
              })()}
            </this.Slider>
          </div>

          <div className="container inline-bl">
            <div className="prd-sec1-lft">
              <div className="slider slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div className="slick-track" style={{ width: '100%' }}>
                    <div
                      className="slick-slide slick-current slick-active"
                      data-slick-index="0"
                      aria-hidden="false"
                    >
                      <div>
                        {(() => {
                          switch (this.state.productType) {
                            case 'oil':
                              return <OilIngredients />;
                            case 'balm':
                              return <BalmIngredients />;
                            case 'cap':
                              return <CapIngredients />;
                            default:
                              return undefined;
                          }
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prd-sec1-rgt" />
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
              src={`../static/assets/images/cbd-${
                this.state.productType === 'cap'
                  ? 'capsule'
                  : this.state.productType
              }-label.jpg`}
              className="cbd-label-img"
              alt=""
            />
            <div className="howtouse">
              <h3>How to use</h3>
              <ul>
                {(() => {
                  switch (this.state.productType) {
                    case 'oil':
                      return <OilHowToUse />;
                    case 'balm':
                      return <BalmHowToUse />;
                    case 'cap':
                      return <CapHowToUse />;
                    default:
                      return undefined;
                  }
                })()}
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
                  src={
                    this.state.productType === 'oil'
                      ? '../static/assets/images/sec2-prd2.png'
                      : '../static/assets/images/sec2-prd1.png'
                  }
                  alt=""
                  className="sec2-prd"
                />
                <div className="prd-details">
                  {this.state.productType === 'oil' ? (
                    <CapSquare />
                  ) : (
                    <OilSquare />
                  )}
                  <a onClick={() => this.changeType('frst')}>
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
                  src={
                    this.state.productType === 'balm'
                      ? '../static/assets/images/sec2-prd2.png'
                      : '../static/assets/images/sec2-prd3.png'
                  }
                  alt=""
                  className="sec2-prd"
                />
                <div className="prd-details">
                  {this.state.productType === 'balm' ? (
                    <CapSquare />
                  ) : (
                    <BalmSquare />
                  )}
                  <a onClick={() => this.changeType('scnd')}>
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
