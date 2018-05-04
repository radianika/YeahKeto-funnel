import React from 'react';
import Link from 'next/link';
import { PromoSession } from 'react/components/common';
import { Coupon } from './Coupon';
import { SatisfactionBox } from './SatisfactionBox';

class Upsell1 extends React.PureComponent {
  upgrade = () => {
    this.props.upgrade(214, '/promo/desktop/upsell-2');
  };

  render() {
    const { orderId } = this.props.url.query;
    return (
      <React.Fragment>
        <PromoSession pageType="leadPage/checkoutPage/upsellPage" />
        <div className="redbar">
          <p>
            Wait before you go!<br />
            We have an important message regarding coninuing supply.
          </p>
        </div>
        <div className="sec1 dsplay">
          <p className="s1txt1">
            Recent media buzz about the incredible results people are achieving
            with our CBD Oil has created huge demand, and our stock is rapidly
            dwindling. Read below why this is happening. In the meantime, assure
            yourself of an adequate supply to truly experience all the benefits
            of <span>American Science CBD Oil.</span>
          </p>

          <Coupon onUpgrade={this.upgrade} />
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
            solutions to common complaints. And that applies especially to PURE
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
            We insist on quality-certified U.S. organic growers of hemp who
            deliver the highest concentration of CBD – a very effective 500 mg
            per serving – with not a trace of the mind-altering THC. This is
            what makes our product legal in all 50 states without a
            prescription.
            <br />
            <br />
            Growers who meet all of our stringent specifications are hard to
            find. So far, we have found only one such grower, and he is
            scrambling to keep up with demand.
            <br />
            <br />
            That’s why it’s so urgent that you assure yourself of an adequate
            supply.
          </p>
          <div className="clearall" />
          <Coupon onUpgrade={this.upgrade} />
          <div className="clearall" />
          <SatisfactionBox onUpgrade={this.upgrade} />
          <div className="clearall" />
          <Link href={`/promo/desktop/upsell-2?orderId=${orderId}`}>
            <a className="nothank">
              No thanks. I understand that this is my only opportunity to get
              access to this special offer, and I’m okay with missing out.
              Instead, if I’m blown away by the results I get using CBD HEMP
              OIL, like so many thousands of folks before me, I’ll just re-order
              at $149 per bottle in the future. I’ll pass on this chance
              forever.
            </a>
          </Link>
          <div className="clearall" />
          <img
            src="/static/mobile/v2/images/secure-logos.png"
            alt=""
            className="secure-logos"
          />
        </div>
      </React.Fragment>
    );
  }
}

export { Upsell1 };
