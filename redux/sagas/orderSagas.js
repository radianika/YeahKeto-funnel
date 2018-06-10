import { select, put, all, fork, takeLatest } from 'redux-saga/effects';
import idx from 'idx';
import { OrderActions } from 'redux/actions';
import {
  post,
  get,
  getQueryString,
  parseLeadPostData,
  parseOrderPostData,
} from 'helpers';
import { getCookie } from 'react/components/common';

const getSession = state => state.auth.sessionId;

const packIdMap = {
  210: '35404d48-489b-4390-a099-f0b9a27faca5',
  209: '75c92745-62cb-4360-83a5-35b26b1b7e0e',
  208: 'b5a06b4c-df89-4381-8a79-f594349d22ae',
  213: 'd9d05acc-66a8-40bc-a344-d119d75e7dd0',
  212: '4db523ed-baf0-4bf7-90d3-3b4b847445aa',
  217: '6917e892-e169-4f94-8f54-3aac2e9ab547',
  215: '0041249f-9f8b-41c5-a137-ad4ce8133cf6',
};

function* submitLeadsForm(action) {
  yield put(OrderActions.submitLeadsFormRequest());

  const { values, nextUrl, headers } = action.payload;
  const { localStorage } = window;

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

  localStorage.setItem('parsedShipping', JSON.stringify(parsedShipping));
  const queryString = getQueryString();
  const apiResponse = yield post(
    '/v1/response/lead',
    parsedShipping,
    sessionId,
    { ...headers },
  );

  if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
    yield put(OrderActions.submitLeadsFormSuccess());
    window.location.assign(`${nextUrl}?${queryString}`);
  } else {
    yield put(OrderActions.submitLeadsFormFailure());
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
      ? `/v1/response/order/${orderId}`
      : '/v1/response/order/';
    const apiResponse = yield get(url, sessionId, {
      ...headers,
      'k-session-id': kSessionId,
    });
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const order = apiResponse.response.data.data.data[0];
      yield put(OrderActions.getOrderDetailsSuccess({ order }));
    } else {
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
    const { orderId } = values;

    const parsedOrder = parseOrderPostData(values, pack);
    const queryString = `&orderId=${orderId}${
      getQueryString().startsWith('&') || !getQueryString().length ? '' : '&'
    }${getQueryString()}`;
    const apiResponse = yield post(
      '/v1/response/order',
      parsedOrder,
      sessionId,
      { ...headers, 'k-session-id': kSessionId },
    );
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const { localStorage } = window;
      const order = apiResponse.response.data.data;
      localStorage.setItem('upsell1', JSON.stringify([order]));
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
    const { sendTo, headers } = action.payload;
    let sessionId = '';
    let kSessionId = '';
    const { localStorage } = window;

    let upsell1 = JSON.parse(localStorage.getItem('upsell1'));
    upsell1 = upsell1[upsell1.length - 1];

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

    const payload = {
      CustomerID: upsell1.OrderInfo.CustomerID,
      ProductGroups: [
        {
          ProductGroupKey: packIdMap[action.payload.productId],
        },
      ],
    };

    const apiResponse = yield post('/v1/response/upsale', payload, sessionId, {
      ...headers,
      'k-session-id': kSessionId,
    });
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const newOrder = apiResponse.response.data.data;

      const oldUpselldata = JSON.parse(localStorage.getItem('upsell1'));
      oldUpselldata.push(newOrder);

      localStorage.setItem('upsell1', JSON.stringify(oldUpselldata));
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
