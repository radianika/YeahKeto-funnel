import React from 'react';

class PromoSectionTwoDesktop extends React.PureComponent {
  render() {
    return (
      <div className="section2">
        <div className="container position">
          <p className="s2hding">
            <span>American Science HEMP OIL </span>
            <br /> Enriched with Cannabidiol Extract (CBD){' '}
          </p>{' '}
          <i className="s2hdimg sprite3 sprite-s2hd" />
          <p className="sec2txt bdfont">
            Cannabidiol, part of a family of molecules called cannabinoids, is
            non-psychoactive and has been clinically proven to offer a wide
            range of therapeutic health benefits.{' '}
            <strong>American Science CBD Oil</strong> is formulated with organic
            hemp, grown &amp; harvested in the US, and is patented (under Patent
            #6,630,507) to support our bodies as we age.
            <br />
            <br />
            <b>
              When used as directed, American Science CBD Oil regulates mood
              patterns and sleep cycle, mitigates inflammatory response, and
              boosts cognitive performance.{' '}
            </b>{' '}
          </p>
          <p className="s2subhd1">All Natural Organic CBD Extract </p>
          <p className="s2subhd2">
            Quick Absorption, Extended Release Formula{' '}
          </p>
          <ul className="s2list">
            <li>
              {' '}
              <i className="s2limg sprite4 sprite-s2limg1" />
              <p className="s2ltxt">
                <span>Legal</span>
                <br /> In All 50
                <br />US States{' '}
              </p>
              <i className="s5limg2 sprite4 sprite-s2line" />
            </li>
            <li>
              {' '}
              <i className="s2limg sprite4 sprite-s2limg2" />
              <p className="s2ltxt">
                <span>100%</span>
                <br /> THC Free
                <br />&amp; No High
              </p>{' '}
              <i className="s5limg2 sprite4 sprite-s2line" />{' '}
            </li>
            <li>
              {' '}
              <i className="s2limg sprite4 sprite-s2limg3" />
              <p className="s2ltxt">
                <span>Doesn&#39;t</span>
                <br /> Show On
                <br /> Drug test{' '}
              </p>{' '}
              <i className="s5limg2 sprite4 sprite-s2line" />{' '}
            </li>
            <li>
              {' '}
              <i className="s2limg sprite4 sprite-s2limg4" />
              <p className="s2ltxt">
                <span>Available</span>
                <br /> Without Prescription{' '}
              </p>{' '}
              <i className="s5limg2 sprite4 sprite-s2line" />{' '}
            </li>
          </ul>{' '}
          {/* <i className="s2bottle sprite3 sprite-s2bottle" />{' '} */}
          <img
            src="/static/promo/desktop/images/s2bottle.png"
            className="s2bottle"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export { PromoSectionTwoDesktop };
