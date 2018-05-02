import React from 'react';

class Coupon extends React.PureComponent {
  render() {
    return (
      <div className="s1-doteed-sec">
        <div className="s1-dot-left">
          <img src="/static/desktop/images/up-btl1.png" className="up-btl1" />
          <div className="save-seal">
            save<br />
            <span>43%</span>
          </div>
          <img
            src="/static/desktop/images/free-ship.png"
            className="free-ship"
          />
        </div>
        <div className="s1-dot-right">
          <p className="dot-rgt-txt1">
            Purchase 6 additional bottles of our CBD Oil at an astounding{' '}
          </p>
          <p className="dot-rgt-txt2">43% discount off retail </p>
          <p className="dot-rgt-txt3">
            Only <span>$39.00</span>/ Bottle{' '}
          </p>
          <p className="dot-rgt-txt1 txt4-fnt-sz">
            That’s an incredible $180.00 off our regular price!{' '}
          </p>
          <p className="dot-rgt-txt4">
            This page is your only opportunity to purchase at such a low price.
            Our offer is limited to our new customers and to our inventory on
            hand.
            <br />
            <br />
            You will never see this price again. Make sure you act right now
            before you leave this page!
          </p>
          <a href="javascript:void(0)" onClick={this.props.onUpgrade}>
            <img src="/static/desktop/images/button.png" className="button" />
          </a>
        </div>
      </div>
    );
  }
}

export { Coupon };
