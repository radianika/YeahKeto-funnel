import React from 'react';
import { connect } from 'react-redux';
import { Footer } from 'react/components/common';
import { getQueryString } from 'helpers';

import moment from 'moment';
import axios from 'axios';

class FooterPromoComponent extends React.PureComponent {
  constructor() {
    super();
    this.footerRef = React.createRef();
    this.ctaRef = React.createRef();
    this.state = {
      ctaStyle: { position: 'fixed' },
    };
  }

  componentDidMount() {
    if (this.props.isMobile) {
      document.onscroll = () => {
        const footer = this.footerRef.current;
        const cta = this.ctaRef.current;
        const docViewTop = window.scrollY;
        const docViewBottom = docViewTop + window.innerHeight;
        const elemTop = footer.offsetTop;
        const elemBottom = cta.offsetHeight;
        if (
          elemTop >= docViewBottom + 20 ||
          elemBottom >= docViewBottom + 134
        ) {
          this.setState({ ctaStyle: { position: 'fixed' } });
        } else {
          this.setState({ ctaStyle: { position: 'relative' } });
        }
      };
    }
  }

  gotoShipping = () => {
    window.location.assign(`/promo/mobile/shipping?${getQueryString()}`);
  };

  postActionTracker() {
    if (this.props.isMobile) {
      this.postActionTrackerForMobile();
    } else {
      this.postActionTrackerForDesktop();
    }
  }

  postActionTrackerForDesktop = () => {
    try {
      const { localStorage } = window;
      const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));

      const eventsArray = [
        'desktop-hp-text1-test-rush-my-order',
        'desktop-hp-text2-test-rush-my-order',
        'desktop-hp-top-module-symbol1-test-rush-my-order',
        'desktop-hp-module2-caption1-test-rush-my-order',
        'desktop-hp-rush-my-order-texts-test-rush-my-order',
        'desktop-hp-last-module-badge-test-rush-my-order',
        'desktop-hp-as-advertised-on-text-test-rush-my-order',
        'desktop-hp-first-module-badge-test-rush-my-order',
      ];
      const tracking_data = {
        visitor_id: abtastyParams.visitorId,
        device_type: 'DESKTOP',
        origin: 'promo DESKTOP',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      };
      const postData = {};

      eventsArray.forEach((event, index) => {
        postData[index] = {
          name: event,
          value_string: event,
          type: 'CLICK',
          tracking_data,
          action: 'action_tracking_event',
        };
      });

      axios.post('/multicampaign-abtasty', postData);
    } catch (err) {
      console.log(err);
    }
  };

  postActionTrackerForMobile = () => {
    try {
      const { localStorage } = window;
      const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));

      const eventsArray = [
        'mobile-hp-text1-test-rush-my-order',
        'mobile-hp-top-module-symbol1-test-rush-my-order',
        'mobile-hp-text2-test-rush-my-order',
        'mobile-hp-benefits-module-test-rush-my-order',
        'mobile-hp-module2-caption1-test-rush-my-order',
        'mobile-hp-rush-my-order-texts-test-rush-my-order',
        'mobile-hp-last-module-badge-test-rush-my-order',
        'mobile-hp-last-module-picture-test-rush-my-order',
        'mobile-hp-first-module-badge-test-rush-my-order',
        'mobile-hp-top-module-symbol1-test-rush-my-order',
      ];
      const tracking_data = {
        visitor_id: abtastyParams.visitorId,
        device_type: 'MOBILE_PHONE',
        origin: 'promo mobile',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      };
      const postData = {};

      eventsArray.forEach((event, index) => {
        postData[index] = {
          name: event,
          value_string: event,
          type: 'TOUCH',
          tracking_data,
          action: 'action_tracking_event',
        };
      });

      axios.post('/multicampaign-abtasty', postData);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const variation316344 = this.props.abtastyParams.campaignMaps['316344'];

    return (
      <footer ref={this.footerRef}>
        {this.props.isMobile && (
          <div id="cta" ref={this.ctaRef} style={this.state.ctaStyle}>
            <a
              id={this.props.tagID}
              href="javascript:void(0)"
              onClick={() => {
                this.postActionTracker();
                this.gotoShipping();
              }}
              className="shipping_redirect"
            >
              <i
                className={`btn pulse sprite3 sprite3-413418 sprite3-${
                  this.props.isAuthentic.isAuthenticUser
                } sprite-ship-btn sprite3-${variation316344}`}
                id="mobie-order-now"
              />
            </a>
          </div>
        )}
        <p className="clearall" />
        <div className="legal">
          <div className="ftr-txt">
            <Footer promo>
              <br /> * These statements have not been evaluated by the FDA. If
              you are pregnant, nursing, taking medications, or have a medical
              condition, consult your physician before using this product.
              Representations regarding the efficacy and safety of American
              Science CBD have not been evaluated by the Food and Drug
              Administration. The FDA only evaluates foods and drugs, not
              supplements like these products. These products are not intended
              to diagnose, prevent, treat, or cure any disease. &nbsp;
              <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/18728714"
                target="_blank"
                rel="noopener noreferrer"
                className="legal-wiki-click"
              >
                CLICK HERE
              </a>
              &nbsp; to find evidence of a test, analysis, research, or study
              describing the ben efits, performance or efficacy of American
              Science CBD based on the expertise of relevant professionals.
            </Footer>
          </div>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = reduxState => {
  if (reduxState.order) {
    return {
      abtastyParams: reduxState.auth.abtastyParams,
      isAuthentic: reduxState.auth.isAuthentic,
    };
  }
  return {};
};

const FooterPromo = connect(mapStateToProps, null)(FooterPromoComponent);

export { FooterPromo };
