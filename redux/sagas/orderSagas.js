import { select, put, all, fork, takeLatest } from 'redux-saga/effects';
import idx from 'idx';
import { OrderActions } from 'redux/actions';
import { post, get, setAuthHeaders } from 'helpers';
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
    const sessionId = yield getCookie('ascbd_session');
    if (!sessionId || !sessionId.length) {
      window.location.href = window.location.href;
      return;
    }
    setAuthHeaders(sessionId);
    const apiResponse = yield post('/v1/konnektive/lead', {
      ...values,
      shipping,
    });
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const { lead } = apiResponse.response.data.data;
      yield put(OrderActions.submitLeadsFormSuccess({ lead }));
      router.push(`${nextUrl}?orderId=${lead.orderId}`);
    }
  } catch (error) {
    console.log({ error });
    yield put(OrderActions.submitLeadsFormFailure({ error }));
  }
}

function* getOrderDetails(action) {
  yield put(OrderActions.getOrderDetailsRequest());
  try {
    const { orderId } = action.payload;
    const sessionId = yield getCookie('ascbd_session');
    if (!sessionId || !sessionId.length) {
      window.location.href = window.location.href;
      return;
    }
    setAuthHeaders(sessionId);
    const apiResponse = yield get(`/v1/konnektive/order/${orderId}`);
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const order = apiResponse.response.data.data.data[0];
      yield put(OrderActions.getOrderDetailsSuccess({ order }));
    }
  } catch (error) {
    yield put(OrderActions.getOrderDetailsFailure({ error }));
  }
}

function* placeOrder(action) {
  yield put(OrderActions.placeOrderRequest());
  try {
    const {
      values, pack, router, nextUrl,
    } = action.payload;
    const sessionId = yield getCookie('ascbd_session');
    if (!sessionId || !sessionId.length) {
      window.location.href = window.location.href;
      return;
    }
    const {
      orderId,
      cardNumber,
      cardMonth,
      cardYear,
      cardSecurityCode,
      firstName,
      lastName,
      address,
      address2,
      city,
      state,
      postalCode,
    } = values;
    setAuthHeaders(sessionId);
    const payload = {
      orderId,
      cardNumber,
      cardMonth,
      cardYear,
      cardSecurityCode,
      product1_id: pack.id,
      product1_qty: 1,
      shipping: {
        firstName,
        lastName,
        address,
        address2: address2 || '.',
        city,
        state,
        postalCode,
      },
    };
    const apiResponse = yield post('/v1/konnektive/order', payload);
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const order = apiResponse.response.data.data;
      yield put(OrderActions.placeOrderSuccess({ order }));
      router.push(`${nextUrl}?orderId=${order.orderId}`);
    }
  } catch (error) {
    console.log({ error });
    yield put(OrderActions.placeOrderFailure({ error }));
  }
}

function* addUpsellToOrder(action) {
  yield put(OrderActions.addUpsellToOrderRequest());
  try {
    const { productId, sendTo, router } = action.payload;
    const sessionId = yield getCookie('ascbd_session');
    if (!sessionId || !sessionId.length) {
      window.location.href = window.location.href;
      return;
    }
    const order = yield select(getOrder);
    setAuthHeaders(sessionId);
    const payload = {
      orderId: order.orderId,
      productId,
      productQty: 1,
    };
    const apiResponse = yield post('/v1/konnektive/upsale', payload);
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const newOrder = apiResponse.response.data.data;
      yield put(OrderActions.placeOrderSuccess({ order: newOrder }));
      router.push(`${sendTo}?orderId=${order.orderId}`);
    }
  } catch (error) {
    console.log({ error });
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
