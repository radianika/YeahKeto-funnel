import React from 'react';
// import { PromoContactMobile } from 'react/containers';

class PromoSectionOneMobile extends React.PureComponent {
  render() {
    return (
      <div id="section-one" className="sprite2 sprite-sec1">
        <i className="s1-logo sprite3 sprite-s1-logo " />
        <i className="s1-hd sprite3 sprite-s1-hd" />
        <p className="s1-txt4">
          Made from Hemp organically grown & harvested in the USA, and medically
          proven to offer therapeutic benefits.{' '}
        </p>
        <p className="clearall" />
        <ul className="s1-list">
          <li>
            <i className="sprite3 sprite-s1-tick" />
            <span>Relieves</span>
            <br /> Anxiety & Stress{' '}
          </li>
          <li>
            <i className="sprite3 sprite-s1-tick" />
            <span>Eliminates</span>
            <br />Chronic Pain & Aches{' '}
          </li>
          <li>
            <i className="sprite3 sprite-s1-tick" />
            <span>Promotes</span>
            <br /> Mood & Sleep Patterns{' '}
          </li>
          <li>
            <i className="sprite3 sprite-s1-tick" />
            <span>Enhances </span> <br /> Focus & Clarity{' '}
          </li>
        </ul>
        <p className="clearall" />
        <i className="as-seen sprite1 sprite-as-seen" />
        <i className="s1-bottle sprite3 sprite-s1-bottle" />
      </div>
    );
  }
}

export { PromoSectionOneMobile };
