import React from 'react';

class PromoSectionSixMobile extends React.PureComponent {
  render() {
    return (
      <div id="section-six">
        <p className="s2-hd-txt">
          <span>REAL PEOPLE. REAL RESULTS. </span>
          <br />Customer Testimonials From American Science Customers
        </p>
        <p className="s5-txt1">
          Find out how <strong>American Science Hemp Oil&quot;s</strong>{' '}
          therapeutic benefits have helped people enjoy a healthier and fuller
          lifestyle.{' '}
        </p>
        <div className="t-box sprite2 sprite-t-box">
          <p className="t-txt1">
            Finally, a high-performance hemp product that delivers results.{' '}
          </p>
          <p className="t-txt2">
            I was introduced to Hemp Oil by a colleague at the office, who spoke
            highly about its benefits as a safe alternative to anti-anxiety
            pills. I decided to give it a shot and since then have become not
            only a believer but an advocate of its benefits! It helps me sleep
            better, wake up refreshed and power through my day with more energy
            and calm.
          </p>{' '}
          <i className="t-img1 sprite3 sprite-t-img1" />{' '}
          <i className="stars sprite3 sprite-stars" />
          <p className="t-txt3">
            <span>Jim V. |</span> Los Angeles{' '}
          </p>
        </div>
        <div className="t-box sprite2 sprite-t-box">
          <p className="t-txt1">
            Hemp Oil has helped me eliminate the most chronic pains & aches!{' '}
          </p>
          <p className="t-txt2">
            My pain therapist, recommended I give Hemp Oil a try to combat the
            joint pain that has riddled my lifestyle for years. In just about 2
            months, I could feel a marked difference in my mobility. It not only
            helped reduce my joint pain but also got me to a point where I can
            enjoy my walks and a more active lifestyle again! Highly
            recommended!{' '}
          </p>{' '}
          <i className="t-img1 sprite3 sprite-t-img2" />
          <i className="stars sprite3 sprite-stars" />
          <p className="t-txt3">
            <span>Erica J. | </span>South Carolina{' '}
          </p>
        </div>
        <p className="clearall" />
        <div
          className="strip sprite3 sprite-strip-bg"
          style={{ 'margin-top': '40px' }}
        >
          <p className="strip-txt">
            <b>ORDER YOUR BOTTLE OF</b> <span>CBD OIL</span> <b>TODAY!</b>
            <br />Limited Time Offer - Get Free Bottles
            <br />On Select Packages
          </p>
        </div>
      </div>
    );
  }
}

export { PromoSectionSixMobile };
