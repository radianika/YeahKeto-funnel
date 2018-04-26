import React from 'react';

class PromoSectionSevenDesktop extends React.PureComponent {
  render() {
    const { props } = this;
    console.log({ props });
    return (
      <div className="section7">
        <div className="container position">
          <i className="s7logo sprite2 sprite-logo" />
          <i className="s7seal sprite3 sprite-s1seal" />
          <i className="s7hd sprite3 sprite-s1hd" />
          <p className="s7txt">
            Made from Hemp organically grown &amp; harvested in the USA, and
            medically proven to offer therapeutic benefits.{' '}
          </p>
          <ul className="s7list">
            <li className="sprite2 sprite-s1bullet">
              {' '}
              <span>Relieves</span> Anxiety &amp; Stress{' '}
            </li>
            <li className="sprite2 sprite-s1bullet">
              <span>Eliminates</span> Chronic Pain &amp; Aches{' '}
            </li>
            <li className="sprite2 sprite-s1bullet">
              <span>Promotes</span> Mood &amp; Sleep Patterns{' '}
            </li>
            <li className="sprite2 sprite-s1bullet">
              <span>Enhances </span> Focus &amp; Clarity{' '}
            </li>
          </ul>
          <div className="clearall" />
          <i className="s7bottle sprite4 sprite-s7-bottle" />
          <i className="s7-photos sprite4 sprite-s7-photos" />
          <a href="javascript:bookmarkscroll.scrollTo('topfrm')">
            <i className="s7btn pulse sprite5 sprite-submit" />
          </a>
        </div>
      </div>
    );
  }
}

export { PromoSectionSevenDesktop };
