import React from 'react';
import { connect } from 'react-redux';
// import { PromoContactMobile } from 'react/containers';

class PromoSectionOneMobileComponent extends React.PureComponent {
  render() {
    const variationId = this.props.abtastyParams.campaignMaps['314235'];
    console.log({ variationId });
    return (
      <div id="section-one" className="sprite2 sprite-sec1">
        <i className="s1-logo sprite3 sprite-s1-logo " />
        <i className={`s1-hd sprite3 sprite3-${this.props.abtastyParams.campaignMaps['314411']} sprite-s1-hd`} />
        {!variationId || variationId === '413873' ? (
          <p className="s1-txt4">
            Derived from organic, US-harvested hemp, lab-tested for quality.
            Clinically proven therapeutic effects.
          </p>
        ) : null}
        {variationId === '413874' ? (
          <p className="s1-txt4">
            For a limited, receive a FREE bottle of our FDA Approved CBD Oil on
            your first order (no prescription required).
          </p>
        ) : null}
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

function mapStateToProps(state) {
  return {
    abtastyParams: state.auth.abtastyParams,
  };
}

const PromoSectionOneMobile = connect(mapStateToProps, {})(
  PromoSectionOneMobileComponent,
);

export { PromoSectionOneMobile };
