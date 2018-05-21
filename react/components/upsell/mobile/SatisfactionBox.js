import React from 'react';

const SatisfactionBox = props => (
  <React.Fragment>
    <div className="up-strip" style={{ marginTop: '50px' }}>
      <h4>BENEFITS OF CANNABINOID (CBD) CAPSULES INCLUDE...</h4>
    </div>
    <div className="clearall" />
    <div className="up-bottom-box">
      <img src="/static/assets/images/up1-img1.png" alt="" />
      <p className="box-txt1">FULL SPECTRUM FORMULA</p>
      <p className="box-txt2">
        CBD Hemp Oil Capsules contains a high potency blend of 300mg - Full
        Spectrum Cannabinoids to offer maximum therapeutic benefits.
      </p>
    </div>
    <div className="up-bottom-box">
      <img src="/static/assets/images/up1-img2.png" alt="" />
      <p className="box-txt1">SUPPORTS MENTAL HEALTH </p>
      <p className="box-txt2">
        The Hemp Oil Capsules help support overall cognitive health while also
        boosting focus, mental clarity, and memory recall.
      </p>
    </div>
    <div className="up-bottom-box">
      <img src="/static/assets/images/up1-img3.png" alt="" />
      <p className="box-txt1">OFFERS ANTIOXIDANT SUPPORT</p>
      <p className="box-txt2">
        CBD Hemp Oil Capsules work at a cellular level to combat free radical
        damage and boost overall immunity.{' '}
      </p>
    </div>
    <div className="bnt-sec">
      <a href="javascript:void(0)" onClick={props.onUpgrade}>
        <img
          src="/static/assets/images/ord-btn.png"
          alt=""
          width="370"
          height="71"
          className="ord-btn pulse"
        />
      </a>
      <p className="thanks-txt">
        <a href="javascript:void(0)" onClick={props.onSkip}>
          <img
            src="/static/assets/images/cut-icon.png"
            width="15"
            height="15"
            alt=""
            className="cut-icon"
          />{' '}
          No, I don't want better results.
        </a>
      </p>
    </div>
  </React.Fragment>
);

export { SatisfactionBox };
