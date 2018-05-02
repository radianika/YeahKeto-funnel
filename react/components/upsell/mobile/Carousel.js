import React from 'react';
import Head from 'next/head';
import Slider from 'react-slick';

class Carousel extends React.PureComponent {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <React.Fragment>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <p className="pkg-hding">Special Deal for New Customers Only</p>
        <div className="pkg-container dsplay">
          <div className="slider">
            <Slider {...settings}>
              <div className="slide1">
                <div className="pkg1-box">
                  <p className="pkgbox-hding">Add 1 Container</p>
                  <img
                    src="/static/mobile/v2/images/one-bottle.png"
                    alt=""
                    className="pkgbox-btl"
                  />
                  <p className="pkgbox-txt">
                    <span className="span1">
                      Purchase 1 container of<br />
                      CBD Capsules
                    </span>
                    <br />
                    for only<br />
                    <span className="span2">$90</span>
                    <br />
                    ($5 off retail)
                  </p>
                  <a href="#" className="select">
                    Select
                  </a>
                </div>
              </div>

              <div className="slide2">
                <div className="pkg1-box">
                  <p className="pkgbox-hding">Add 2 Containers</p>
                  <img
                    src="/static/mobile/v2/images/two-bottles.png"
                    alt=""
                    className="pkgbox-btl"
                  />
                  <p className="pkgbox-txt">
                    <span className="span1">
                      Purchase 2 containers of<br />
                      CBD Capsules
                    </span>
                    <br />
                    for only<br />
                    <span className="span2">$149</span>
                    <br />
                    ($5 off retail)
                  </p>
                  <a href="#" className="select">
                    Select
                  </a>
                </div>
              </div>
              <div className="slide3">
                <div className="pkg2-box">
                  <p className="pkgbox-hding">Add 3 Containers</p>
                  <img
                    src="/static/mobile/v2/images/three-bottles.png"
                    alt=""
                    className="pkgbox-btl"
                  />
                  <p className="pkgbox-txt">
                    <span className="span1">
                      Purchase 3 containers of<br />
                      CBD Capsules
                    </span>
                    <br />
                    for only<br />
                    <span className="span2">$195</span>
                    <br />
                    ($36 off retail)
                  </p>
                  <a href="#" className="select">
                    Select
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <p className="s1txt2">
          But to get this special pricing, you must respond to this page! Once
          you leave this page, the offer is gone.
        </p>
      </React.Fragment>
    );
  }
}

export { Carousel };
