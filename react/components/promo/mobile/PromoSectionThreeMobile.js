import React from 'react';

class PromoSectionThreeMobile extends React.PureComponent {
  render() {
    return (
      <div id="section-three">
        <p className="s2-hd-txt">
          <span>WHY AMERICAN SCIENCE HEMP OIL </span>
          <br />Triple Filtration Technology For High Potency
        </p>{' '}
        <i className="s2-img sprite1 sprite-s3-img" />
        <p className="s2-txt1">
          <strong>American Science Hemp Oil</strong> is made with the purest
          hemp extract at a certified facility to meet and exceed industry
          standards.{' '}
        </p>
        <p className="clearall" />
        <ul className="s3-list">
          <li>
            {' '}
            <i className="s3-icons sprite3 sprite-s3-icon1" />{' '}
            <span>Cold Press </span>
            <b>& Unrefined</b>
            <p className="s3-list-txt">
              Cold-pressed extraction of the oil from Hemp Extract ensure
              retention of all the therapeutic properties without the use of any
              chemicals.
            </p>
          </li>
          <li>
            {' '}
            <i className="s3-icons sprite3 sprite-s3-icon2" /> <span>co2</span>
            <b> extraction</b>
            <p className="s3-list-txt">
              Utilizes the most advanced, cleanest, & safest extraction method
              that preserves essential cannabinoids (CBD) and filters out THC
              (the high causing compound.)
            </p>
          </li>
          <li>
            {' '}
            <i className="s3-icons sprite3 sprite-s3-icon3" />{' '}
            <span>organic </span>
            <b>& pure</b>
            <p className="s3-list-txt">
              Hemp Oil that is made from hemp leaves organically grown and
              extracted in the USA, and is certified-free of any synthetics,
              pesticides or herbicides.
            </p>
          </li>
          <li>
            {' '}
            <i className="s3-icons sprite3 sprite-s3-icon4" />{' '}
            <span>sublingual </span>
            <b>delivery system</b>
            <p className="s3-list-txt">
              A cutting-edge delivery system ensures that the Hemp Oil is
              absorbed directly into the blood vessels and lymphatics of the
              mouth for rapid action & relief.{' '}
            </p>
          </li>
        </ul>
        <p className="clearall" />
        <div
          className="strip sprite3 sprite-strip-bg"
          style={{ 'margin-top': '50px' }}
        >
          <p className="strip-txt">
            <b>ORDER YOUR BOTTLE OF</b> <span>HEMP OIL</span> <b>TODAY!</b>
            <br />Limited Time Offer - Get Free Bottles
            <br />On Select Packages
          </p>
        </div>
      </div>
    );
  }
}

export { PromoSectionThreeMobile };
