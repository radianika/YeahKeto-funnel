import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { OrderActions } from 'redux/actions';
import { Spinner, ImageModal } from 'react/components/common';
import { getQueryString } from 'helpers';
import { PromoShippingFormDesktop } from './PromoShippingFormDesktop';

class PromoSectionOneDesktopComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timerRef = '';
  }

  state = {
    showCheckingModal: false,
    timerData: '05:00'
  };

  componentDidMount() {
    var spd = 100;
    var spdVal = 10;
    var cntDown = 5 * 60 * spdVal;

    const self = this;
    self.timerRef = setInterval(function () {
      var mn, sc, ms;
      cntDown--;
      if(cntDown < 0) {
        return false;
      }
      mn = Math.floor((cntDown / spdVal) / 60 );
      mn = (mn < 10 ? '0' + mn : mn);
      sc = Math.floor((cntDown / spdVal) % 60);
      sc = (sc < 10 ? '0' + sc : sc);
      ms = Math.floor(cntDown % spdVal);
      ms = (ms < 10 ? '0' + ms : ms);
      var result = mn + ':' + sc;
      self.setState({ timerData: result })
    }, spd);
  }

  componentWillUnmount() {
    clearInterval(this.timerRef);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.submitStatus !== 'success' &&
      this.props.submitStatus === 'success'
    ) {
      this.setState({ showCheckingModal: false });
      const queryString = getQueryString();
      setTimeout(
        () => window.location.assign(`/promo/desktop/checkout?${queryString}`),
        1000,
      );
    }
  }

  submitShippingForm = values => {
    this.setState({ showCheckingModal: true });
    this.props.submitLeadsForm({
      values,
      router: this.props.router,
      nextUrl: '/promo/desktop/checkout',
    });
  };

  render() {
    return (
      <div id="section1">       
        <div className="contentWrap position" id="sec1">
          <div className="lft-content">
            <img src="/static/promo/desktop/images/images/logo.png" alt className="s1-logo" /> 
            <img src="/static/promo/desktop/images/images/s1-hd.png" alt className="s1-hd" /> 
            <p className="s1-p1"><strong>Yeah Keto</strong> triggers and maintains the state of ketosis,  burning fat for energy!</p>
            <p className="s1-p2">Yeah Keto Helps You With</p>
            <ul className="s1-list">
              <li><span>Rapid</span> Ketogenic Weight Loss </li>
              <li><span>Instant</span> Energy Boost</li>
              <li><span>Appetite</span> Suppression</li>
              <li><span>Optimal</span> Metabolic Rate</li>
            </ul>
            <p className="clearall" />
            <img src="/static/promo/desktop/images/images/s1-arrow.png" alt className="s1-arrow" /> 
            <img src="/static/promo/desktop/images/images/s1-btl1.png" alt className="s1-btl1" />
            <p className="guarantee-seal">Join the Keto Revolution with Yeah Keto! </p>
          </div>
          <div className="rgt-form">
            <img src="/static/promo/desktop/images/images/s1-arrow2.png" alt className="s1-animate-arrow" />
            <img src="/static/promo/desktop/images/images/s1-seal.png" alt className="s1-seal" />
            <div className="form-position form-wrapper">
              <p className="frm-timer">Hurry! Limited Time Offer <span id="stopwatch">{this.state.timerData}</span></p>
              <img src="/static/promo/desktop/images/images/s1-rgt-hd.png" alt className="s1-rgt-hd" />
              <form>              
                <PromoShippingFormDesktop
                  id="promo-section1-submit-desktop"
                  onSubmit={this.submitShippingForm}
                />
                {this.props.submitStatus === 'submitting' && <Spinner />}
              </form>
            </div>
          </div>
          <p className="clearall" /> 
        </div>                         
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    submitStatus: state.order.submitLeadsFormStatus,
    abtastyParams: state.auth.abtastyParams,
    isAuthentic: state.auth.isAuthentic,
  };
}

const PromoSectionOneDesktop = connect(mapStateToProps, { ...OrderActions })(
  withRouter(PromoSectionOneDesktopComponent),
);

export { PromoSectionOneDesktop };
