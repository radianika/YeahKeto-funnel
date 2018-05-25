import { delay } from 'redux-saga';
import { select, put, all, fork, takeLatest } from 'redux-saga/effects';
import idx from 'idx';
import { OrderActions } from 'redux/actions';
import { post, get, parseQuery, getQueryString } from 'helpers';
import { getCookie } from 'react/components/common';

const getSession = state => state.auth.sessionId;
const getOrder = state => state.order.order;

function* submitLeadsForm(action) {
  yield put(OrderActions.submitLeadsFormRequest());
  try {
    const { values, nextUrl, router } = action.payload;
    const {
      firstName,
      lastName,
      address,
      address2,
      city,
      state,
      postalCode,
    } = values;
    const shipping = values.shipping || {
      firstName,
      lastName,
      address,
      address2,
      city,
      state,
      postalCode,
    };
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
      '/v1/konnektive/lead',
      {
        ...values,
        shipping,
        tracking_vars: parseQuery(queryString),
      },
      sessionId,
    );
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const { lead } = apiResponse.response.data.data;
      yield put(OrderActions.submitLeadsFormSuccess({ lead }));
      router.push(`${nextUrl}?${queryString}&orderId=${lead.orderId}`);
    } else {
      console.error(
        `Exception Occurred in ReactApp - ${JSON.stringify(apiResponse)}`,
      );
      yield put(OrderActions.submitLeadsFormFailure());
    }
  } catch (error) {
    console.error(`Exception Occurred in ReactApp - ${JSON.stringify(error)}`);
    yield put(OrderActions.submitLeadsFormFailure({ error }));
  }
}

function* getOrderDetails(action) {
  yield put(OrderActions.getOrderDetailsRequest());
  try {
    const { orderId } = action.payload;
    let sessionId = '';
    if (typeof window !== 'undefined') {
      sessionId = yield getCookie('ascbd_session');
      if (!sessionId || !sessionId.length) {
        window.location.href = window.location.href;
        return;
      }
    } else {
      sessionId = yield select(getSession);
    }
    const apiResponse = yield get(`/v1/konnektive/order/${orderId}`, sessionId);
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const order = apiResponse.response.data.data.data[0];
      yield put(OrderActions.getOrderDetailsSuccess({ order }));
    } else {
      console.error(
        `Exception Occurred in ReactApp - ${JSON.stringify(apiResponse)}`,
      );
      yield put(OrderActions.getOrderDetailsFailure());
    }
  } catch (error) {
    console.error(`Exception Occurred in ReactApp - ${JSON.stringify(error)}`);
    yield put(OrderActions.getOrderDetailsFailure({ error }));
  }
}

function* placeOrder(action) {
  yield put(OrderActions.placeOrderRequest());
  try {
    const {
      values, pack, router, nextUrl,
    } = action.payload;
    let sessionId = '';
    if (typeof window !== 'undefined') {
      sessionId = yield getCookie('ascbd_session');
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
    const queryString = getQueryString();
    const apiResponse = yield post(
      '/v1/konnektive/order',
      { ...payload, tracking_vars: parseQuery(queryString) },
      sessionId,
    );
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const order = apiResponse.response.data.data;
      yield put(OrderActions.placeOrderSuccess({ order }));
      yield delay(2000);
      router.push(`${nextUrl}?${queryString}`);
    } else {
      console.error(
        `Exception Occurred in ReactApp - ${JSON.stringify(apiResponse)}`,
      );
      yield put(OrderActions.placeOrderFailure());
    }
  } catch (error) {
    console.error(`Exception Occurred in ReactApp - ${JSON.stringify(error)}`);
    yield put(OrderActions.placeOrderFailure({ error }));
  }
}

function* addUpsellToOrder(action) {
  yield put(OrderActions.addUpsellToOrderRequest());
  try {
    const { productId, sendTo, router } = action.payload;
    let sessionId = '';
    if (typeof window !== 'undefined') {
      sessionId = yield getCookie('ascbd_session');
      if (!sessionId || !sessionId.length) {
        window.location.href = window.location.href;
        return;
      }
    } else {
      sessionId = yield select(getSession);
    }
    const order = yield select(getOrder);
    const payload = {
      orderId: order.orderId,
      productId,
      productQty: 1,
    };
    const apiResponse = yield post('/v1/konnektive/upsale', payload, sessionId);
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const newOrder = apiResponse.response.data.data;
      yield put(OrderActions.placeOrderSuccess({ order: newOrder }));
      yield put(OrderActions.addUpsellToOrderSuccess());
      const queryString = getQueryString();
      router.push(`${sendTo}?${queryString}`);
    } else {
      console.error(
        `Exception Occurred in ReactApp - ${JSON.stringify(apiResponse)}`,
      );
      yield put(OrderActions.addUpsellToOrderFailure());
    }
  } catch (error) {
    console.error(`Exception Occurred in ReactApp - ${JSON.stringify(error)}`);
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
