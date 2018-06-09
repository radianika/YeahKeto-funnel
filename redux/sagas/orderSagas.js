import { select, put, all, fork, takeLatest } from 'redux-saga/effects';
import idx from 'idx';
import { OrderActions } from 'redux/actions';
import {
  post,
  get,
  parseQuery,
  getQueryString,
  parseLeadPostData,
} from 'helpers';
import { getCookie } from 'react/components/common';

const getSession = state => state.auth.sessionId;

function* submitLeadsForm(action) {
  yield put(OrderActions.submitLeadsFormRequest());
  try {
    const {
      values, nextUrl, headers, cart,
    } = action.payload;

    const parsedShipping = parseLeadPostData(values);
    let sessionId = '';
    if (typeof window !== 'undefined') {
      sessionId = yield getCookie('ascbd_session');

      if (!sessionId || !sessionId.length) {
        window.location.href = window.location.href;
      }
    } else {
      sessionId = yield select(getSession);
    }
    const queryString = getQueryString();
    const apiResponse = yield post(
      '/v1/response/lead',
      parsedShipping,
      sessionId,
      { ...headers },
    );
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const { lead } = apiResponse.response.data.data;
      const newQueryString = cart
        ? `&orderId=${lead.orderId}${queryString}`
        : queryString;
      yield put(OrderActions.submitLeadsFormSuccess({ lead }));
      window.location.assign(`${nextUrl}?${newQueryString}`);
    } else {
      yield put(OrderActions.submitLeadsFormFailure());
    }
  } catch (error) {
    yield put(OrderActions.submitLeadsFormFailure({ error }));
  }
}

function* getOrderDetails(action) {
  yield put(OrderActions.getOrderDetailsRequest());
  try {
    const { headers, orderId } = action.payload;
    let sessionId = '';
    let kSessionId = '';

    if (typeof window !== 'undefined') {
      sessionId = yield getCookie('ascbd_session');
      kSessionId = yield getCookie('ascbd_promo_session');

      if (!sessionId || !sessionId.length) {
        window.location.href = window.location.href;
        return;
      }
    } else {
      sessionId = yield select(getSession);
    }
    const url = orderId
      ? `/v1/konnektive/order/${orderId}`
      : '/v1/konnektive/order/';
    const apiResponse = yield get(url, sessionId, {
      ...headers,
      'k-session-id': kSessionId,
    });
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const order = apiResponse.response.data.data.data[0];
      yield put(OrderActions.getOrderDetailsSuccess({ order }));
    } else {
      yield put(
        OrderActions.getOrderDetails({
          headers: {
            'x-ascbd-req-origin': window.location.hostname,
          },
        }),
      );
      yield put(OrderActions.getOrderDetailsFailure());
    }
  } catch (error) {
    yield put(OrderActions.getOrderDetailsFailure({ error }));
  }
}

function* placeOrder(action) {
  yield put(OrderActions.placeOrderRequest());
  try {
    const {
      values, pack, nextUrl, headers,
    } = action.payload;
    let sessionId = '';
    let kSessionId = '';

    if (typeof window !== 'undefined') {
      sessionId = yield getCookie('ascbd_session');
      kSessionId = yield getCookie('ascbd_promo_session');

      if (!sessionId || !sessionId.length) {
        window.location.href = window.location.href;
        return;
      }
    } else {
      sessionId = yield select(getSession);
    }
    const {
      orderId,
      cardExpiry,
      cardNumber,
      cardSecurityCode,
      firstName,
      lastName,
      address,
      address2,
      city,
      state,
      postalCode,
    } = values;
    const payload = {
      orderId,
      cardNumber,
      cardMonth: cardExpiry.cardMonth,
      cardYear: cardExpiry.cardYear,
      cardSecurityCode,
      product1_id: pack.id,
      product1_qty: 1,
      shipping: {
        firstName,
        lastName,
        address,
        address2,
        city,
        state,
        postalCode,
      },
    };
    const queryString = `&orderId=${orderId}${
      getQueryString().startsWith('&') || !getQueryString().length ? '' : '&'
    }${getQueryString()}`;
    const apiResponse = yield post(
      '/v1/konnektive/order',
      { ...payload, tracking_vars: parseQuery(queryString) },
      sessionId,
      { ...headers, 'k-session-id': kSessionId },
    );
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const order = apiResponse.response.data.data;
      yield put(OrderActions.placeOrderSuccess({ order }));
      window.location.assign(`${nextUrl}?${queryString}`);
    } else {
      yield put(
        OrderActions.placeOrderFailure({
          error: apiResponse.response.data.message,
        }),
      );
    }
  } catch (error) {
    yield put(OrderActions.placeOrderFailure({ error }));
  }
}

function* addUpsellToOrder(action) {
  yield put(OrderActions.addUpsellToOrderRequest());
  try {
    const { productId, sendTo, headers } = action.payload;
    let sessionId = '';
    let kSessionId = '';

    if (typeof window !== 'undefined') {
      sessionId = yield getCookie('ascbd_session');
      kSessionId = yield getCookie('ascbd_promo_session');

      if (!sessionId || !sessionId.length) {
        window.location.href = window.location.href;
        return;
      }
    } else {
      sessionId = yield select(getSession);
    }
    const { orderId } = parseQuery(window.location.search);
    const payload = {
      orderId,
      productId,
      productQty: 1,
    };
    const apiResponse = yield post(
      '/v1/konnektive/upsale',
      payload,
      sessionId,
      {
        ...headers,
        'k-session-id': kSessionId,
      },
    );
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const newOrder = apiResponse.response.data.data;
      yield put(OrderActions.placeOrderSuccess({ order: newOrder }));
      yield put(OrderActions.addUpsellToOrderSuccess());
      const queryString = getQueryString();
      window.location.assign(`${sendTo}?${queryString}`);
    } else {
      yield put(OrderActions.addUpsellToOrderFailure());
    }
  } catch (error) {
    yield put(OrderActions.addUpsellToOrderFailure({ error }));
  }
}

export default function* OrderSagas() {
  yield all([
    fork(takeLatest, OrderActions.SUBMIT_LEADS_FORM, submitLeadsForm),
  ]);
  yield all([
    fork(takeLatest, OrderActions.GET_ORDER_DETAILS, getOrderDetails),
  ]);
  yield all([fork(takeLatest, OrderActions.PLACE_ORDER, placeOrder)]);
  yield all([
    fork(takeLatest, OrderActions.ADD_UPSELL_TO_ORDER, addUpsellToOrder),
  ]);
}
