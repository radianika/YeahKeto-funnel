import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';
import { get, getParameterByName, normalizePhone } from 'helpers';
import { MobileShippingContainer } from 'react/containers';
import { AuthActions } from 'redux/actions';

class Promo extends React.PureComponent {
  static async getInitialProps(props) {
    const {
      store, isServer, query, req,
    } = props.ctx;
    // const { visitorId, variationId } = query;
    // const { ip } = req.session;
    if (isServer) {
      store.dispatch(
        AuthActions.setUniqueSessionId({
          sessionId: query.sessionId,
          headers: {
            'x-ascbd-req-origin': req.get('host'),
          },
        }),
      );
      // store.dispatch(
      //   AuthActions.setAbtastyParams({
      //     visitorId,
      //     variationId,
      //     ip,
      //   }),
      // );
      console.log(req.url);
      const cidParams = getParameterByName('cid', req.url);
      if (cidParams) {
        const { sessionId } = query;
        const cidResponse = await get(
          `/v1/response/customer/${cidParams}`,
          sessionId,
          {},
        );
        if (idx(cidResponse, _ => _.response.data.code) === 200) {
          let { data: userInfo } = cidResponse.response.data;
          userInfo = { ...userInfo, Phone: normalizePhone(userInfo.Phone) };
          store.dispatch(AuthActions.setUserInfo(userInfo));
        }
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Oil</title>
          <meta name="viewport" content="width=640, user-scalable=0" />
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-hind.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/promo/mobile/index.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/mb-style.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/formvalidation/formValidation.min.css"
          />
        </Head>
        <MobileShippingContainer />
      </React.Fragment>
    );
  }
}

export default connect()(Promo);
