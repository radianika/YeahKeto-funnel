import React from 'react';

class Carousel extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <p className="pkg-hding">Special Deal for New Customers Only</p>
        <div className="pkg-container dsplay">
          <div className="pkg1-box">
            <p className="pkgbox-hding">Add 2 Containers</p>
            <img
              src="/static/desktop/v1/images/two-bottles.png"
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
              Selected
            </a>
          </div>
          <div className="pkg2-box">
            <p className="pkgbox-hding">Add 3 Containers</p>
            <img
              src="/static/desktop/v1/images/three-botttles.png"
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
        <p className="s1txt2">
          But to get this special pricing, you must respond to this page!<br />
          Once you leave this page, the offer is gone.
        </p>
      </React.Fragment>
    );
  }
}

export { Carousel };
