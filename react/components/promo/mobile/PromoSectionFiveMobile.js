import React from 'react';

const format = input => {
  if (input === 0 || input < 0) return '00';
  return input < 10 ? `0${input}` : `${input}`;
};

class PromoSectionFiveMobile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.hours = '00';
    this.state.minutes = '04';
    this.state.seconds = '33';
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  updateTime() {
    let seconds = parseInt(this.state.seconds, 10) - 1;
    let minutes = parseInt(this.state.minutes, 10);
    let hours = parseInt(this.state.hours, 10);
    if (seconds <= 0) {
      seconds = 59;
      minutes -= 1;
    }
    if (minutes <= 0) {
      minutes = 59;
      hours -= 1;
      if (hours < 0) hours = 0;
    }
    this.setState({
      seconds: format(seconds),
      minutes: format(minutes),
      hours: format(hours),
    });
  }
  render() {
    return (
      <div id="section-five">
        <p className="s2-hd-txt">
          <span>in the media</span>
          <br />Hemp Benefits Has Global Media Buzzing{' '}
        </p>
        <p className="s5-txt1">
          CBD (Hemp Extract) has taken the American media by storm. The safe &
          non-habit forming benefits of CBD have been widely publicized across
          print & media.
        </p>
        <p>
          <a href="/promo/mobile/?wvideo=5xe74yifg5">
            <img
              alt=""
              src="https://embedwistia-a.akamaihd.net/deliveries/a1427acc25ee59ea265e881b30d4e279f391ca2b.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=7fff54e0"
              width="400"
              height="225"
              style={{ width: '400px', height: '225px' }}
            />
          </a>
        </p>
        <p>
          <a href="/promo/mobile/?wvideo=5xe74yifg5">
            American Science CBD Hemp Oil
          </a>
        </p>
        <i className="vdo-arw sprite3 sprite-vdo-arw" />
        <p className="limited-offer">HURRY! Limited Time Offer</p>
        <div id="clockdiv">
          <div>
            <span className="hours">{this.state.hours}</span>
            <p>HOUR</p>
          </div>
          <p className="colon">:</p>
          <div>
            <span className="minutes">{this.state.minutes}</span>
            <p>Minute</p>
          </div>
          <p className="colon">:</p>
          <div>
            <span className="seconds">{this.state.seconds}</span>
            <p>SECONDS</p>
          </div>
        </div>
        <div className="clearall" />
        <i className="sprite3 sprite-s5-line" />
        <p className="s5-txt5">
          <span>BENEFITS OF CBD </span>
          <br />HAS BEEN ADVERTISED ON
        </p>{' '}
        <i className="s5-line sprite3 sprite-s5-line" />{' '}
        <i className="s5-logos sprite2 sprite-s5-logos" />
        <p className="clearall" />
        <div
          className="strip sprite3 sprite-strip-bg"
          style={{ 'margin-top': '40px' }}
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

export { PromoSectionFiveMobile };
