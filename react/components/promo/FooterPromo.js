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
      const event1 = {
        name: 'rush-my-order-form-click',
        value_string: 'rush-my-order-form-click',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'DESKTOP',
          origin: 'promo desktop',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      const event2 = {
        name: 'rush-my-order-shipping-page-color-test',
        value_string: 'rush-my-order-shipping-page-color-test',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'DESKTOP',
          origin: 'promo desktop',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      const event3 = {
        name: 'desktop-hp-text1-test-rush-my-order',
        value_string: 'desktop-hp-text1-test-rush-my-order',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'DESKTOP',
          origin: 'promo desktop',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      const event4 = {
        name: 'desktop-hp-text2-test-rush-my-order',
        value_string: 'desktop-hp-text2-test-rush-my-order',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'DESKTOP',
          origin: 'promo desktop',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      const event5 = {
        name: 'desktop-hp-top-module-symbol1-test-rush-my-order',
        value_string: 'desktop-hp-top-module-symbol1-test-rush-my-order',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'DESKTOP',
          origin: 'promo desktop',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      const event6 = {
        name: 'desktop-hp-module2-caption1-test-rush-my-order',
        value_string: 'desktop-hp-module2-caption1-test-rush-my-order',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'DESKTOP',
          origin: 'promo desktop',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      axios.post('/multicampaign-abtasty', {
        312492: {
          ...event1,
          action: 'action_tracking_event',
        },
        313763: {
          ...event2,
          action: 'action_tracking_event',
        },
        314234: {
          ...event3,
          action: 'action_tracking_event',
        },
        314334: {
          ...event4,
          action: 'action_tracking_event',
        },
        314363: {
          ...event5,
          action: 'action_tracking_event',
        },
        315257: {
          ...event6,
          action: 'action_tracking_event',
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  postActionTrackerForMobile = () => {
    try {
      const { localStorage } = window;
      const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));
      const event1 = {
        name: 'mobile-order-now',
        value_string: 'mobile-order-now',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'MOBILE_PHONE',
          origin: 'promo mobile',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      const event2 = {
        name: 'mobile-rush-my-order-shipping-page-color-test',
        value_string: 'mobile-rush-my-order-shipping-page-color-test',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'MOBILE_PHONE',
          origin: 'promo mobile',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      const event3 = {
        name: 'mobile-hp-text1-test-rush-my-order',
        value_string: 'mobile-hp-text1-test-rush-my-order',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'MOBILE_PHONE',
          origin: 'promo mobile',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      const event4 = {
        name: 'mobile-hp-top-module-symbol1-test-rush-my-order',
        value_string: 'mobile-hp-top-module-symbol1-test-rush-my-order',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'MOBILE_PHONE',
          origin: 'promo mobile',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      const event5 = {
        name: 'mobile-hp-text2-test-rush-my-order',
        value_string: 'mobile-hp-text2-test-rush-my-order',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'MOBILE_PHONE',
          origin: 'promo mobile',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      const event6 = {
        name: 'mobile-hp-benefits-module-test-rush-my-order',
        value_string: 'mobile-hp-benefits-module-test-rush-my-order',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'MOBILE_PHONE',
          origin: 'promo mobile',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      const event7 = {
        name: 'mobile-hp-module2-caption1-test-rush-my-order',
        value_string: 'mobile-hp-module2-caption1-test-rush-my-order',
        type: 'CLICK',
        tracking_data: {
          visitor_id: abtastyParams.visitorId,
          device_type: 'MOBILE_PHONE',
          origin: 'promo mobile',
          timestamp: moment().format(),
          ip: abtastyParams.ip,
        },
      };

      axios.post('/multicampaign-abtasty', {
        312492: {
          ...event1,
          action: 'action_tracking_event',
        },
        313763: {
          ...event2,
          action: 'action_tracking_event',
        },
        314235: {
          ...event3,
          action: 'action_tracking_event',
        },
        314336: {
          ...event4,
          action: 'action_tracking_event',
        },
        314411: {
          ...event5,
          action: 'action_tracking_event',
        },
        314431: {
          ...event6,
          action: 'action_tracking_event',
        },
        315258: {
          ...event7,
          action: 'action_tracking_event',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
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
                className={`btn pulse sprite3 sprite3-${
                  this.props.abtastyParams.campaignMaps['313876']
                } sprite-ship-btn`}
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
    };
  }
  return {};
};

const FooterPromo = connect(mapStateToProps, null)(FooterPromoComponent);

export { FooterPromo };
