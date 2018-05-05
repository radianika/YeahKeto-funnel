import React from 'react';

const format = input => {
  if (input === 0 || input < 0) return '00';
  return input < 10 ? `0${input}` : `${input}`;
};

class PromoSectionFiveDesktop extends React.PureComponent {
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
    const { hours, minutes, seconds } = this.state;
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
            <div
              className="wistia_responsive_padding"
              style={{ padding: '56.25% 0 0 0', position: 'relative' }}
            >
              <div
                className="wistia_responsive_wrapper"
                style={{
                  height: '100%',
                  left: 0,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                }}
              >
                <iframe
                  src="https://fast.wistia.net/embed/iframe/5xe74yifg5?videoFoam=true"
                  title="Wistia video player"
                  allowTransparency="true"
                  frameBorder="0"
                  scrolling="no"
                  className="wistia_embed"
                  name="wistia_embed"
                  allowFullScreen
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  oallowfullscreen="true"
                  msallowfullscreen="true"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <p className="limited-offer">HURRY! Limited Time Offer</p>
            <div id="clockdiv">
              <div>
                <span className="hours">{hours}</span>
                <p>HOUR</p>
              </div>
              <p className="colon">:</p>
              <div>
                <span className="minutes">{minutes}</span>
                <p>Minute</p>
              </div>
              <p className="colon">:</p>
              <div>
                <span className="seconds">{seconds}</span>
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
