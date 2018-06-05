import React from 'react';
import { PromoSession } from 'react/components/common';
import { Coupon } from '../mobile/Coupon';
import { SatisfactionBox } from './SatisfactionBox';
import { UpsellFooter } from '../UpsellFooter';

class Upsell3 extends React.PureComponent {
  upgrade = () => {
    this.props.upgrade(214, '/promo/mobile/thankyou');
  };
  render() {
    const { orderId } = this.props.query;
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage3" />
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
            welcome you to our family of happy customers.
            <br />
            <br />
            So many people are catching on to the effectiveness of natural
            solutions to common ailments. And that applies especially to PURE
            CBD. Unlike prescription medications, PURE CBD comes with no
            undesirable side effects.
            <br />
            <br />
            All you’ll experience is less aches and pains, better sleep quality,
            and marked improvements in memory recall and cognitive brain
            functions.
            <br />
            <br />
            You have also chosen wisely by putting your trust in American
            Science.
            <br />
            <br />
            We insist on certified US-grown hemp and lab-test to ensure the
            highest concentration of CBD- 500 mg per serving—and our filtration
            and extraction processes mean zero THC. This is what makes our
            product legal in al 50 states, no prescription necessary.
            <br />
            <br />
            Farmers who meet all of our stringent specifications are hard to
            find. As we expand, we will continue to find new sources, but so far
            we are limited to a single farm that meets our standards. This means
            supply struggles to keep up with huge demand.
            <br />
            <br />
            For this reason, we suggest you ensure an adequate supply, and we’ve
            established these special promotional offers to help you do just
            that.
          </p>
          <div className="clearall" />
          <Coupon onUpgrade={this.upgrade} />
          <SatisfactionBox />
        </div>
        <UpsellFooter nextUrl="/promo/mobile/thankyou" orderId={orderId} />
      </React.Fragment>
    );
  }
}

export { Upsell3 };
