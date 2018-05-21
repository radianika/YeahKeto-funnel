import React from 'react';
import Link from 'next/link';
import { PromoSession } from 'react/components/common';
import { upsell2Packs, getQueryString } from 'helpers';
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
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage2" />
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
            upsells={upsell2Packs}
            onUpgrade={this.upgrade}
            title="Special introductory pricing reserved for our new customers only:"
          />
          <div className="clearall" />
          <p className="s1txt5">
            Read the details below and learn why adding our{' '}
            <span>CBD Warming Rub</span> to your CBD Oil regimen will boost your
            results tenfold – and provide you with the INSTANT relief you crave.{' '}
          </p>
          <div className="clearall" />
          <SatisfactionBox onUpgrade={this.scrollToTop} />
          <p className="s1txt3">
            <span className="span1">Dear Friend…</span>
            <br />
            <br />
            First of all, we want to thank you for your order of CBD Oil and
            welcome you to our family of happy customers.<br />
            <br />
            We are so excited about our newest product in our popular line of
            CBD supplements. It was developed in response to customer requests.
            They told us that, while the CBD Oil is very effective systemically
            to address pain, sleeplessness and mental fuzziness, when joint and
            muscle pain are the primary issue, they wanted something that gives
            them INSTANT relief. <br />
            <br />
            So we went to work and assembled a cornucopia from Mother Nature’s
            treasure chest – all concentrated into precious essential oils. Most
            of them have great anti-inflammatory effects. These natural
            substances have been used for centuries and their effectiveness in
            addressing pain, swelling and inflammation is well documented.<br />
            <br />
            <span>
              Our CBD Warming Rub is formulated for the highest effectiveness
              with no unpleasant odors or skin irritation. It contains no
              preservatives or anything artificial.
            </span>{' '}
          </p>
          <ul className="s1list">
            <li>
              Sweet Fennel, Peppermint and Ravensara Wild Oil are well-known for
              their anti-spasmodic effect
            </li>
            <li>
              Camphor, Menthol, Cinnamon and Spearmint bring increased
              circulation to the affected areas for faster natural healing
            </li>
            <li>
              Heavenly scented Cypress Oil eases pain, swelling and inflammation
            </li>
            <li>
              Grapeseed Oil, Coconut Oil and Cocoa Butter feel soothing and
              healing on your skin
            </li>
            <li>
              An effective 50 mg of CBD – delivered through the skin right where
              it hurts the most – does its wonders with amazing speed
            </li>
          </ul>
          <Shortage />
          <Carousel
            upsells={upsell2Packs}
            onUpgrade={this.upgrade}
            title="Special introductory pricing reserved for our new customers only:"
          />
          <SatisfactionBox onUpgrade={this.scrollToTop} />
          <div className="clearall" />
          <Link href={`/promo/desktop/upsell-3?${getQueryString()}`}>
            <a href="#" className="nothank">
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
