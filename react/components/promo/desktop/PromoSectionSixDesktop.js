import React from 'react';

class PromoSectionSixDesktop extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <div className="section6">
        <div className="container position">
          <p className="s6hding">
            <span>REAL PEOPLE. REAL RESULTS. </span>
            <br />Customer Testimonials From American Science Customers{' '}
          </p>{' '}
          <i className="s5hdimg sprite4 sprite-s5hd" />
          <p className="s5-txt1 bdfont">
            Find out how <strong>American Science Hemp Oil's</strong>{' '}
            therapeutic benefits have helped people enjoy a healthier and fuller
            lifestyle.{' '}
          </p>
          <p className="clearall" aria-hidden="true" />
          <div className="t-box1 sprite5 sprite-t-box">
            <p className="t-txt1">
              Finally, a high-performance hemp product that delivers results.{' '}
            </p>
            <p className="t-txt2">
              I was introduced to Hemp Oil by a colleague at the office, who
              spoke highly about its benefits as a safe alternative to
              anti-anxiety pills. I decided to give it a shot and since then
              have become not only a believer but an advocate of its benefits!
              It helps me sleep better, wake up refreshed and power through my
              day with more energy and calm.{' '}
            </p>
            <i className="t-img1 sprite5 sprite-t-img1" />
            <i className="stars sprite5 sprite-stars" />
            <p className="t-txt3">
              <span>Jim V. |</span> Los Angeles{' '}
            </p>
          </div>
          <div className="t-box2 sprite5 sprite-t-box">
            <p className="t-txt1">
              Hemp Oil has helped me eliminate the most chronic pains &amp;
              aches!{' '}
            </p>
            <p className="t-txt2">
              My pain therapist, recommended I give Hemp Oil a try to combat the
              joint pain that has riddled my lifestyle for years. In just about
              2 months, I could feel a marked difference in my mobility. It not
              only helped reduce my joint pain but also got me to a point where
              I can enjoy my walks and a more active lifestyle again! Highly
              recommended!{' '}
            </p>
            <i className="t-img1 sprite5 sprite-t-img2" />
            <i className="stars sprite5 sprite-stars" />
            <p className="t-txt3">
              <span>Erica J. |</span> South Carolina{' '}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export { PromoSectionSixDesktop };
