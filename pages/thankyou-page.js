import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { PromoSession } from 'react/components/common';
import { ThankyouDesktop, ThankyouMobile } from 'react/containers';
import { AuthActions, OrderActions } from 'redux/actions';
import { getParameterByName } from 'helpers';

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
    // eslint-disable-next-line
    this.setState({
      items: this.getItem(),
      shippingDetails: JSON.parse(localStorage.getItem('parsedShipping')),
    });
  }

  getItem = () => {
    const { localStorage } = window;
    if (getParameterByName('cart')) {
      const items = JSON.parse(localStorage.getItem('upsell1'));
      const newItem = [];

      items[0].OrderInfo.Products.forEach((item, index) => {
        const newObj = {
          CustomerInfo: items[0].CustomerInfo,
          OrderInfo: items[0].OrderInfo,
        };

        newObj.OrderInfo.Products = [item];
        newObj.OrderInfo.TransactionID = index;

        newItem.push(newObj);
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
