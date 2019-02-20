import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { DisableBackButton, PromoSession } from 'react/components/common';
import { ThankyouDesktop, ThankyouMobile } from 'react/containers';
import { AuthActions, OrderActions } from 'redux/actions';
import axios from 'axios';
import moment from 'moment';

class Thankyou extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      shippingDetails: {},
    };
  }

  componentDidMount() {
    const { localStorage } = window;
    const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));
    if (
      this.props.query.isPromo &&
      abtastyParams &&
      abtastyParams.requestAgent === 'desktop'
    ) {
      this.sendTransactionDetails();
      this.postVisitEvent();
    }
    const items = this.getItem();
    // eslint-disable-next-line
    this.setState({
      items,
      shippingDetails: JSON.parse(localStorage.getItem('parsedShipping')),
    });
  }

  static async getInitialProps(props) {
    const { store, isServer, query } = props.ctx;
    if (isServer) {
      store.dispatch(
        AuthActions.setUniqueSessionId({ sessionId: query.sessionId }),
      );
    }
  }

  getItem = () => {
    const { localStorage } = window;
    const upsellData = JSON.parse(localStorage.getItem('upsell1'));

    if (JSON.parse(localStorage.getItem('cartthankyou'))) {
      return upsellData[0].items.map((item, index) => ({
        CustomerInfo: upsellData[0].CustomerInfo,
        OrderInfo: {
          Products: [item],
          TransactionID: index,
          SubTotalAmount: item.price * item.productQty,
          TotalAmount: item.price * item.productQty,
          CustomerID: upsellData[0].customerId,
        },
      }));
    }

    return upsellData;
  };

  postVisitEvent = () => {
    const { localStorage } = window;
    const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));
    const body = {
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'DESKTOP',
        origin: window.location.href,
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };
    axios.post('/abtasty', { ...body, action: 'visit_event' });
  };

  sendTransactionDetails = () => {
    const { localStorage } = window;
    const items = JSON.parse(localStorage.getItem('upsell1'));
    const id = items[0].OrderInfo.CustomerID.toString();
    const revenue = items.reduce((agg, val) => agg + val.totalAmount, 0);
    const abtastyParams = JSON.parse(localStorage.getItem('abtastyParams'));
    const body = {
      name: 'order-confirmation-2',
      id,
      revenue,
      shipping: '0',
      tracking_data: {
        device_type:
          this.props.query.device === 'desktop' ? 'DESKTOP' : 'MOBILE_PHONE',
        ip: abtastyParams ? abtastyParams.ip : '',
        origin: 'ThankyouPage',
        timestamp: moment().format(),
        visitor_id: abtastyParams ? abtastyParams.visitorId : '',
      },
    };
    axios.post('/abtasty', { ...body, action: 'transaction_event' });
  };

  render() {
    const { props } = this;
    const { device, isPromo } = props.query;

    return (
      <React.Fragment>
        <Head>
          <title>Yeah Keto</title>
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/desktop/css/upsell-new.css"
          />
          {device === 'mobile' && (
            <meta name="viewport" content="width=640, user-scalable=0" />
          )}
          {device === 'desktop' && (
            <link
              rel="stylesheet"
              type="text/css"
              href="/static/desktop/css/style.css"
            />
          )}
          {device === 'mobile' && (
            <React.Fragment>
              <link
                rel="stylesheet"
                type="text/css"
                href="/static/mobile/css/style.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="/static/mobile/css/upsell-new.css"
              />
            </React.Fragment>
          )}
        </Head>
        <DisableBackButton />
        <PromoSession pageType="thankyouPage" />
        {device === 'desktop' && this.state.items.length ? (
          <ThankyouDesktop
            isPromo={isPromo}
            items={this.state.items}
            shippingDetails={this.state.shippingDetails}
          />
        ) : null}
        {device === 'mobile' && this.state.items.length ? (
          <ThankyouMobile
            isPromo={isPromo}
            items={this.state.items}
            shippingDetails={this.state.shippingDetails}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = reduxState => ({
  order: reduxState.order.order,
});

export default connect(mapStateToProps, { ...OrderActions })(Thankyou);
