import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { PromoSession } from 'react/components/common';
import { ThankyouDesktop, ThankyouMobile } from 'react/containers';
import { AuthActions, OrderActions } from 'redux/actions';
import axios from 'axios';

class Thankyou extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      shippingDetails: {},
    };
  }

  sendTransactionDetails = localStorage => {
    console.log(localStorage);
    const body = {
      name: 'complete_order',
      id: localStorage,
      revenue: '123',
      shipping: '123',
      tracking_data: {
        device_type: 'DESKTOP',
        ip: '87.200.72.165',
        origin: 'https://www.mywebsite.com/order-confirmation.php',
        timestamp: '2018-02-12T17:29:02Z',
        visitor_id: 'ba0u0ckaai1g00b7br60',
      },
    };
    axios.post('/abtasty', { ...body, action: 'transaction_event' });
  };

  componentDidMount() {
    const { localStorage } = window;
    if (this.props.query.isPromo) {
      this.sendTransactionDetails(localStorage);
    }
    const items = this.getItem();
    // eslint-disable-next-line
    this.setState({
      items,
      shippingDetails: JSON.parse(localStorage.getItem('parsedShipping')),
    });
  }

  getItem = () => {
    const { localStorage } = window;
    if (JSON.parse(localStorage.getItem('cartthankyou'))) {
      const items = JSON.parse(localStorage.getItem('upsell1'));
      const newItem = [];
      const { Products } = items[0].OrderInfo;

      Products.forEach((item, index) => {
        const newObj = Object.assign(
          {},
          {
            CustomerInfo: items[0].CustomerInfo,
            OrderInfo: items[0].OrderInfo,
          },
        );

        const newObj2 = Object.assign(newObj, {
          OrderInfo: {
            Products: new Array(item),
            TransactionID: index,
            SubTotalAmount: item.ProductAmount * item.Quantity,
            TotalAmount: item.ProductAmount * item.Quantity,
            CustomerID: items[0].OrderInfo.CustomerID,
          },
        });
        newItem.push(newObj2);
      });
      return newItem;
    }
    return JSON.parse(localStorage.getItem('upsell1'));
  };

  static async getInitialProps(props) {
    const { store, isServer, query } = props.ctx;
    if (isServer) {
      store.dispatch(
        AuthActions.setUniqueSessionId({ sessionId: query.sessionId }),
      );
    }
  }

  render() {
    const { props } = this;
    const { device, isPromo } = props.query;

    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Hemp Oil</title>
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
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
            <link
              rel="stylesheet"
              type="text/css"
              href="/static/mobile/css/style.css"
            />
          )}
        </Head>
        <PromoSession pageType="thankyouPage" />
        {device === 'desktop' &&
          this.state.items.length && (
            <ThankyouDesktop
              isPromo={isPromo}
              items={this.state.items}
              shippingDetails={this.state.shippingDetails}
            />
          )}
        {device === 'mobile' &&
          this.state.items.length && (
            <ThankyouMobile
              isPromo={isPromo}
              items={this.state.items}
              shippingDetails={this.state.shippingDetails}
            />
          )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = reduxState => ({
  order: reduxState.order.order,
});

export default connect(mapStateToProps, { ...OrderActions })(Thankyou);
