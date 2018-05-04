import React from 'react';
import Link from 'next/link';
import { PromoSession } from 'react/components/common';
import { upsell3Packs } from 'helpers';
import { Carousel } from './Carousel';
import { SatisfactionBox } from './SatisfactionBox';
import { Shortage } from '../Shortage';

class Upsell3 extends React.PureComponent {
  upgrade = productId => {
    this.props.upgrade(productId, '/promo/desktop/thankyou');
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
        <PromoSession pageType="leadPage/checkoutPage/upsellPage/upsell2Page/upsell3Page" />
        <div className="redbar">
          <p>
            Wait before you go!<br />
            If muscle and joint pain is what’s torturing you, boost your results{' '}
            <br />
            tenfold and get INSTANT relief that will amaze you!
          </p>
        </div>
        <div className="sec1 display">
          <p className="s1hding">INTRODUCING OUR NEWEST PRODUCT</p>
          <p className="s1txt6" style={{ padding: '30px 0 0 0' }}>
            <span>American Science CBD Warming Rub</span>
            <br />
            with our proprietary blend of 10 all natural active ingredients
          </p>
          <Carousel
            upsells={upsell3Packs}
            onUpgrade={this.upgrade}
            title="Special introductory pricing reserved for our new customers only:"
          />
          <div className="clearall" />
          <SatisfactionBox onUpgrade={this.scrollToTop} />
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
          <Shortage />
          <Carousel
            upsells={upsell3Packs}
            onUpgrade={this.upgrade}
            title="Special introductory pricing reserved for our new customers only:"
          />
          <SatisfactionBox onUpgrade={this.scrollToTop} />
          <div className="clearall" />
          <Link href={`/promo/desktop/thankyou?orderId=${orderId}`}>
            <a href="#" className="nothank">
              No thank you. I’ll pass on this huge savings now and realize I
              will never have this opportunity again.
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

export { Upsell3 };
