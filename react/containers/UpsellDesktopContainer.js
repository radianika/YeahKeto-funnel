import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { OrderActions } from 'redux/actions';
import { Footer, Spinner, SuccessModal } from 'react/components/common';
import { Upsell1, Upsell2, Upsell3 } from '../components/upsell/desktop';

class UpsellDesktopContainer extends React.PureComponent {
  upgrade = (productId, nextPage) => {
    this.props.addUpsellToOrder({
      productId,
      sendTo: nextPage,
      router: this.props.router,
    });
  };

  render() {
    const { upsell } = this.props.url.query;
    console.log(this.props.submitStatus);
    return (
      <div className="container">
        <div className="contentWrap shadow">
          <div className="header position">
            <img
              src="/static/desktop/images/logo.png"
              alt=""
              className="logo"
            />
            <img
              src="/static/desktop/images/step.png"
              alt=""
              className="step"
            />
            <img
              src="/static/desktop/images/seals.png"
              alt=""
              className="seals"
            />
          </div>
          {upsell === 1 && <Upsell1 upgrade={this.upgrade} {...this.props} />}
          {upsell === 2 && <Upsell2 upgrade={this.upgrade} {...this.props} />}
          {upsell === 3 && <Upsell3 upgrade={this.upgrade} {...this.props} />}
          <div className="footer">
            <div className="clearall" />

            <div
              style={{
                display: 'table',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <img
                src="/static/assets/images/badges/mcafee.png"
                alt=""
                style={{ height: 50, width: 150, display: 'inline-block' }}
              />
              <img
                src="/static/assets/images/badges/imgnortonsiteseal.png"
                alt=""
                style={{
                  height: 54,
                  width: 100,
                  display: 'inline-block',
                  marginLeft: 15,
                }}
              />
              <img
                src="/static/assets/images/badges/ext.jpeg"
                alt=""
                style={{
                  height: 60,
                  width: 105,
                  display: 'inline-block',
                  marginLeft: 15,
                }}
              />
            </div>
          </div>
        </div>
        <div className="contentWrap">
          <p className="ftrtxt">
            <Footer noLogo>
              <br />
            </Footer>
          </p>
        </div>
        {this.props.submitStatus === 'submitting' && <Spinner />}
        <SuccessModal
          visible={this.props.submitStatus === 'success'}
          message="Order updated successfully."
        />
      </div>
    );
  }
}

UpsellDesktopContainer = withRouter(UpsellDesktopContainer);

function mapStateToProps(state) {
  return {
    submitStatus: state.order.addUpsellToOrderStatus,
  };
}

UpsellDesktopContainer = connect(mapStateToProps, { ...OrderActions })(
  UpsellDesktopContainer,
);

export { UpsellDesktopContainer };
