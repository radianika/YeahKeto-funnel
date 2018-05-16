import React from 'react';
import { PromoSession } from 'react/components/common';
import { Coupon } from '../mobile/Coupon';
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
          <p>Before you go! An URGENT message regarding future supply.</p>
        </div>
        <div className="sec1">
          <p className="s1txt1">
            Huge demand, driven by recent media buzz covering the results people
            are achieving with our CBD oil, means our stock is dwindling fast.
            More information on this below. Before we restock, you can ensure an
            adequate supply of <span>American Science CBD Oil</span> at an
            additional discount.
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
