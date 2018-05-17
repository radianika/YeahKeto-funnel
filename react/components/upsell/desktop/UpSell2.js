import React from 'react';
import Link from 'next/link';
import { PromoSession } from 'react/components/common';
import { upsell2Packs } from 'helpers';
import { Carousel } from './Carousel';
import { SatisfactionBox } from './SatisfactionBox';
import { Shortage } from '../Shortage';

class Upsell2 extends React.PureComponent {
  upgrade = productId => {
    this.props.upgrade(productId, '/promo/desktop/upsell-3');
  };
  scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  render() {
    const { orderId } = this.props.url.query;
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage2" />
        <div className="redbar">
          <p>
            Before you go!<br />
            Know someone who prefers capsules?
          </p>
        </div>
        <div className="sec1 display">
          <p className="s1txt1">
            We get it, not everyone loves sublingual delivery. Although it
            offers the fastest absorption, the taste or feeling of the oil may
            not be for them.<br />
            <br />
            Our <span>CBD Capsules</span> are equally effective, very easy to
            swallow and leave no taste in your mouth. Know someone who is
            struggling with aches, pains, poor sleep or brain fog? Our CBD
            Capsules make a loving gift at only $77 per container.
          </p>
          <Carousel
            upsells={upsell2Packs}
            onUpgrade={this.upgrade}
            title="Special Deal for New Customers Only"
          />
          <div className="clearall" />
          <SatisfactionBox onUpgrade={this.scrollToTop} />
          <div className="clearall" />
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
            solutions to common ailments. And that applies especially to our
            PURE CBD. Unlike prescription medications, PURE CBD comes with no
            undesirable side effects.<br />
            <br />
            All you’ll experience is less aches and pains, better sleep quality,
            and marked improvements in memory recall and cognitive brain
            functions.
          </p>
          <Shortage />
          <Carousel
            upsells={upsell2Packs}
            onUpgrade={this.upgrade}
            title="Special Deal for New Customers Only"
          />
          <SatisfactionBox onUpgrade={this.scrollToTop} />
          <div className="clearall" />
          <Link href={`/promo/desktop/upsell-3?orderId=${orderId}`}>
            <a className="nothank">
              No thank you. I’ll pass on this huge savings now and realize I
              will never have this opportunity again.
            </a>
          </Link>
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

export { Upsell2 };
