import React from 'react';

class PromoSectionThreeDesktop extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <div className="section3">
        <div className="container">
          <p className="s3hding">
            <span>Why American Science Hemp Oil </span>
            <br /> Triple Filtration Technology For High Potency{' '}
          </p>{' '}
          <i className="s3hdimg sprite3 sprite-s2hd" />
          <p className="sec3txt bdfont">
            <strong>American Science Hemp Oil</strong> is made with the purest
            hemp extract at a certified facility to meet and exceed industry
            standards.{' '}
          </p>
          <ul className="s3list">
            <li>
              {' '}
              <i className="sprite4 sprite-s3img1" />
              <p className="s3lhding">
                Cold Press <span>&amp; Unrefined</span>
              </p>
              <p className="s3ltxt bdfont">
                Cold-pressed extraction of the oil from Hemp Extract ensure
                retention of all the therapeutic properties without the use of
                any chemicals.{' '}
              </p>
            </li>
            <li>
              {' '}
              <i className="sprite4 sprite-s3img2" />
              <p className="s3lhding">
                <span>CO2</span> Extraction
              </p>
              <p className="s3ltxt bdfont">
                Utilizes the most advanced, cleanest, &amp; safest extraction
                method that preserves essential cannabinoids (CBD) and filters
                out THC (the high causing compound.){' '}
              </p>
            </li>
            <li>
              {' '}
              <i className="sprite4 sprite-s3img3" />
              <p className="s3lhding">
                <span>Organic</span> &amp; Pure
              </p>
              <p className="s3ltxt bdfont">
                <strong>Hemp Oil</strong> that is made from hemp leaves
                organically grown and extracted in the USA, and is
                certified-free of any synthetics, pesticides or herbicides.{' '}
              </p>
            </li>
            <li>
              {' '}
              <i className="sprite4 sprite-s3img4" />
              <p className="s3lhding">
                <span>Sublingual</span> Delivery System
              </p>
              <p className="s3ltxt bdfont">
                A cutting-edge delivery system ensures that the Hemp Oil is
                absorbed directly into the blood vessels and lymphatics of the
                mouth for rapid action &amp; relief.{' '}
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export { PromoSectionThreeDesktop };
