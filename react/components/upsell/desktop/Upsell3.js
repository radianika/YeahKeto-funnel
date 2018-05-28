import React from 'react';
import Link from 'next/link';
import { PromoSession } from 'react/components/common';
import { getQueryString } from 'helpers';
import { Coupon } from './Coupon';
import { SatisfactionBox } from './SatisfactionBox';

class Upsell3 extends React.PureComponent {
  upgrade = () => {
    this.props.upgrade(214, '/promo/desktop/thankyou');
  };

  render() {
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage3" />
        <div className="redbar">
          <p>
            Before you go,<br />
            An URGENT message regarding future supply.
          </p>
        </div>
        <div className="sec1 dsplay">
          <p className="s1txt1">
            Huge demand, driven by recent media buzz covering the results people
            are achieving with our CBD oil, means our stock is dwindling fast.
            More information on this below. Before we restock, you can ensure an
            adequate supply of <span>American Science CBD Oil</span> at an
            additional discount.
          </p>
          <div className="clearall" />
          <Coupon onUpgrade={this.upgrade} showSeal />
          <div className="clearall" />
          <SatisfactionBox onUpgrade={this.upgrade} />
          <div className="clearall" />
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
          <Coupon onUpgrade={this.upgrade} showSeal />
          <div className="clearall" />
          <SatisfactionBox onUpgrade={this.upgrade} />
          <div className="clearall" />
          <a
            href={`/promo/desktop/thankyou?${getQueryString()}`}
            className="nothank"
          >
            No thanks. I understand that this is my only opportunity to get
            access to this special offer, and I’m okay with missing out.
            Instead, if I’m blown away by the results I get using CBD HEMP OIL,
            like so many thousands of folks before me, I’ll just re-order at
            $149 per bottle in the future. I’ll pass on this chance forever.
          </a>
          <div className="clearall" />
          {/* <img
            src="/static/mobile/v2/images/secure-logos.png"
            alt=""
            className="secure-logos"
          /> */}
          <div
            className="secure-logo-container"
            style={{ textAlign: 'center' }}
          >
            <img
              src="/static/assets/images/badges/ext.jpeg"
              alt=""
              className="secure-logos trusty"
              width="100px"
              height="50px"
            />
            <img
              src="/static/assets/images/badges/imgnortonsiteseal.png"
              alt=""
              className="secure-logos nortan"
              width="100px"
              height="50px"
            />
            <img
              src="/static/assets/images/badges/mcafee.png"
              alt=""
              className="secure-logos mcafee"
              width="125px"
              height="45px"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Upsell3 };
