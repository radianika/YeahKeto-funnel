import React from 'react';

class PromoSectionFiveDesktop extends React.PureComponent {
  render() {
    const { props } = this;
    console.log({ props });
    return (
      <div className="section5">
        <div className="container position">
          <p className="s5hding">
            <span>In The Media</span>
            <br />Hemp Benefits Has Global Media Buzzing{' '}
          </p>{' '}
          <i className="s5hdimg sprite4 sprite-s5hd" />
          <p className="s5-txt1 bdfont">
            CBD (Hemp Extract) has taken the American media by storm. The safe
            &amp; non-habit forming benefits of CBD have been widely publicized
            across print &amp; media.
          </p>
          <i className="s5-line sprite4 sprite-s5-line" />
          <div className="s5left">
            <i className="vdo-arw sprite5 sprite-vdo-arw" />
            <p className="limited-offer">HURRY! Limited Time Offer</p>
            <div id="clockdiv">
              <div>
                <span className="hours">00</span>
                <p>HOUR</p>
              </div>
              <p className="colon">:</p>
              <div>
                <span className="minutes">00</span>
                <p>Minute</p>
              </div>
              <p className="colon">:</p>
              <div>
                <span className="seconds">00</span>
                <p>SECONDS</p>
              </div>
            </div>
          </div>
          <div className="s5right">
            <p className="s5-txt5">
              <span>BENEFITS OF CBD </span>
              <br />HAS BEEN ADVERTISED ON{' '}
            </p>
            <i className="s5-logos sprite4 sprite-s5-logos" />
          </div>
        </div>
      </div>
    );
  }
}

export { PromoSectionFiveDesktop };
