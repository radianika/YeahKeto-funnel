import React from 'react';
// import { PromoContactMobile } from 'react/containers';

class PromoSectionOneMobile extends React.PureComponent {
  render() {
    return (
      <div id="section-one" className="sprite2 sprite-sec1">
        <i className="s1-logo sprite3 sprite-s1-logo " />
        <i className="s1-hd sprite3 sprite-s1-hd" />
        <p className="s1-txt4">
          Derived from organic, US-harvested hemp, lab-tested for quality.
          Clinically proven therapeutic effects.
        </p>
        <p className="clearall" />
        <ul className="s1-list">
          <li>
            <i className="sprite3 sprite-s1-tick" />
            <span>Relieves</span>
            <br /> Anxiety &amp; Stress
          </li>
          <li>
            <i className="sprite3 sprite-s1-tick" />
            <span>Eliminates</span>
            <br />Chronic Pain &amp; Aches
          </li>
          <li>
            <i className="sprite3 sprite-s1-tick" />
            <span>Regulates</span>
            <br /> Mood &amp; Sleep Patterns
          </li>
          <li>
            <i className="sprite3 sprite-s1-tick" />
            <span>Enhances </span>
            <br /> Focus &amp; Clarity
          </li>
        </ul>
        <p className="clearall" />{' '}
        <i className="as-seen sprite1 sprite-as-seen" />
        {/* <i className="s1-bottle sprite3 sprite-s1-bottle" /> */}
        <img
          src="/static/promo/mobile/images/s1-bottle.png"
          className="s1-bottle"
          alt=""
        />
      </div>
    );
  }
}

export { PromoSectionOneMobile };
