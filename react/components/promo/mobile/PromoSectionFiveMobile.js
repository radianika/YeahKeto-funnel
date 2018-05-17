import React from 'react';

const format = input => {
  if (input === 0 || input < 0) return '00';
  return input < 10 ? `0${input}` : `${input}`;
};

class PromoSectionFiveMobile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hours: '00',
      minutes: '04',
      seconds: '33',
    };
  }

  componentDidMount() {
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
          <br />CBD Benefits Has Global Media Buzzing{' '}
        </p>
        <p className="s5-txt1">
          The press is catching onto the amazing benefits of Cannabidiol (CBD).
          The incredibly powerful benefits of CBD Oil have been widely featured
          across print &amp; media in 2018.
        </p>
        <div
          className="wistia_responsive_padding"
          style={{ padding: '0 0 0 0', position: 'relative' }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: '300px',
              left: 0,
              position: 'relative',
              top: 0,
            }}
          >
            <iframe
              src="https://fast.wistia.net/embed/iframe/5xe74yifg5?videoFoam=true"
              title="Wistia video player"
              allowTransparency="true"
              frameBorder="0"
              scrolling="no"
              className="wistia_embed vedio"
              name="wistia_embed"
              allowFullScreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              oallowfullscreen="true"
              msallowfullscreen="true"
              width="517px"
              height="300px"
            />
          </div>
        </div>
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
          <br />HAVE BEEN SEEN ON
        </p>{' '}
        <i className="s5-line sprite3 sprite-s5-line" />{' '}
        <i className="s5-logos sprite2 sprite-s5-logos" />
        <p className="clearall" />
        <div
          className="strip sprite3 sprite-strip-bg"
          style={{ 'margin-top': '40px' }}
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

export { PromoSectionFiveMobile };
