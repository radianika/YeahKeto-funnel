import React from 'react';
import { PromoSession } from 'react/components/common';
import { Coupon } from '../desktop/Coupon';
import { SatisfactionBox } from './SatisfactionBox';
import { UpsellFooter } from '../UpsellFooter';

class Upsell1 extends React.PureComponent {
  upgrade = () => {
    this.props.upgrade(214, '/promo/mobile/upsell-2');
  };
  render() {
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage1" />
        <div className="redbar">
          <p>
            Wait before you go!<br />
            We have an important message regarding coninuing supply.
          </p>
        </div>
        <div className="sec1">
          <p className="s1txt1">
            Recent media buzz about the incredible results people are achieving
            with our CBD Oil has created huge demand, and our stock is rapidly
            dwindling. Read below why this is happening. In the meantime, assure
            yourself of an adequate supply to truly experience all the benefits
            of <span>American Science CBD Oil.</span>
          </p>
          <Coupon onUpgrade={this.upgrade} />
          <div className="clearall" />
          <SatisfactionBox />
          <p className="s1txt3">
            <span>Dear Friend…</span>
            <br />
            <br />
            First of all, we want to thank you for your order of CBD Oil and
            welcome you to our family of happy customers.<br />
            <br />
            There has been a lot of media buzz about the incredible results
            people are achieving with our CBD products.<br />
            <br />
            So many people are catching on to the effectiveness of natural
            solutions to common complaints. And that applies especially to our
            PURE CBD. Unlike prescription medications, PURE CBD comes with no
            undesirable side effects.<br />
            <br />
            All you’ll experience is less aches and pains, better sleep quality,
            and marked improvements in memory recall and cognitive brain
            functions.
          </p>
          <div className="clearall" />
          <Coupon onUpgrade={this.upgrade} />
          <SatisfactionBox />
        </div>
        <UpsellFooter />
      </React.Fragment>
    );
  }
}

export { Upsell1 };
