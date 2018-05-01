import React from 'react';
import Head from 'next/head';
import { Carousel } from './Carousel';
import { SatisfactionBox } from './SatisfactionBox';
import { Shortage } from './Shortage';
import { UpsellFooter } from './UpsellFooter';

class Upsell2 extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/mobile/v2/css/style.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/mobile/v2/css/slick.css"
          />
        </Head>
        <div className="redbar">
          <p>
            Wait before you go!<br />
            Do you know someone who wants CBD in capsule form?
          </p>
        </div>
        <div className="sec1 dsplay">
          <p className="s1txt1">
            Although sublingual oil is the fastest form of delivery, some
            customers have told us that they would rather not have the taste of
            the oil under their tongue.<br />
            <br />
            Our <span>CBD Capsules</span> are equally effective, very easy to
            swallow and leave no taste in your mouth. Perhaps you know someone
            who is struggling with aches and pains, poor sleep and mental
            fuzziness? Our CBD Capsules make a loving gift at only $77 per
            container.
          </p>
        </div>
        <Carousel />
        <div className="clearall" />
        <SatisfactionBox />
        <p className="s1txt3">
          <span>Dear Friend…</span>
          <br />
          <br />
          First of all, we want to thank you for your order of CBD Oil and
          welcome you to our family of happy customers.<br />
          <br />
          There has been a lot of media buzz about the incredible results people
          are achieving with our CBD products.<br />
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
        <Carousel />
        <div className="clearall" />
        <SatisfactionBox />
        <UpsellFooter />
      </React.Fragment>
    );
  }
}

export { Upsell2 };
