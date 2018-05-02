import React from 'react';

class Carousel extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <React.Fragment>
        <p className="pkg-hding">Special Deal for New Customers Only</p>
        <div className="pkg-container dsplay">
          {props.upsells.map((upsell, index) => (
            <div key={String(index)} className={`pkg${index + 1}-box`}>
              <p className="pkgbox-hding">{upsell.title}</p>
              <img
                src={`/static/desktop-new/images/${upsell.img}`}
                alt=""
                className="pkgbox-btl"
              />
              <p className="pkgbox-txt">
                {upsell.boxTxt}
                <br />
                for only<br />
                <span className="span2">{upsell.price}</span>
                <br />
                {upsell.discount}
              </p>
              <a href="#" className="select">
                Select
              </a>
            </div>
          ))}
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
