import React from 'react';

class PromoSectionFourMobile extends React.PureComponent {
  render() {
    return (
      <div id="section-four">
        <p className="s2-hd-txt">
          <span>BENEFITS OF AMERICAN SCIENCE CBD</span>
          <br />Supports Neurological, Physical & Mental Health{' '}
        </p>
        <ul className="s4-list1">
          <li>
            {' '}
            <i className="sprite3 sprite-s4-icon1" /> Calm
          </li>
          <li>
            {' '}
            <i className="sprite3 sprite-s4-icon2" /> Health
          </li>
          <li>
            {' '}
            <i className="sprite3 sprite-s4-icon3" /> Energy
          </li>
        </ul>
        <p className="clearall" />
        <p className="s2-txt1">
          <strong>American Science Hemp Oil</strong> positively modulates the
          ECS system, improving mental clarity, sleep cycles, healthy
          inflammatory response, cognitive function & more.{' '}
        </p>
        <p className="clearall" />
        <ul className="s4-list2">
          <li>
            <i className="s4-icons sprite3 sprite-s4-icon4" />{' '}
            <span>Boosts Cognitive Function </span>
            <br />Hemp Oil supports optimal brain function, improving focus,
            mental clarity, and memory recall. It also helps slow down the
            age-related decline in cognitive health.{' '}
          </li>
          <li>
            <i className="s4-icons sprite3 sprite-s4-icon5" />{' '}
            <span>Supports Joint Health </span>
            <br />Hemp Oil lubricates the joints to support improved flexibility
            and mobility. It also helps deliver essential cannabinoids to treat
            chronic aches and pains.{' '}
          </li>
          <li>
            <i className="s4-icons sprite3 sprite-s4-icon6" />{' '}
            <span>Reduces Anxiety & Stress </span>
            <br />Hemp Oil has a positive impact on mood patterns and sleep
            cycles. This helps promote a feeling of calm and relaxation to
            combat stress and anxiety.
          </li>
        </ul>
        <p className="clearall" />
        <div
          className="strip sprite3 sprite-strip-bg"
          style={{ 'margin-top': '50px' }}
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

export { PromoSectionFourMobile };
