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
import { getParameterByName } from '../../helpers/leadParser';

const getSession = state => state.auth && state.auth.sessionId;

const packIdMap = {
  210: {
    ProductGroupKey: 'b5a06b4c-df89-4381-8a79-f594349d22ae',
    CustomProducts: [
      {
        ProductID: 21340,
        Quantity: 5,
        Amount: 39,
      },
    ],
  },
  209: {
    ProductGroupKey: 'b5a06b4c-df89-4381-8a79-f594349d22ae',
    CustomProducts: [
      {
        ProductID: 21340,
        Quantity: 3,
        Amount: 49,
      },
    ],
  },
  208: {
    ProductGroupKey: 'b5a06b4c-df89-4381-8a79-f594349d22ae',
    CustomProducts: [
      {
        ProductID: 21340,
        Quantity: 1,
        Amount: 69,
      },
    ],
  },
  213: {
    ProductGroupKey: '4db523ed-baf0-4bf7-90d3-3b4b847445aa',
    CustomProducts: [
      {
        ProductID: 21347,
        Quantity: 3,
        Amount: 77,
      },
    ],
  },
  212: {
    ProductGroupKey: '4db523ed-baf0-4bf7-90d3-3b4b847445aa',
    CustomProducts: [
      {
        ProductID: 21347,
        Quantity: 1,
        Amount: 87,
      },
    ],
  },
  217: {
    ProductGroupKey: '0041249f-9f8b-41c5-a137-ad4ce8133cf6',
    CustomProducts: [
      {
        ProductID: 21348,
        Quantity: 3,
        Amount: 87,
      },
    ],
  },
  215: {
    ProductGroupKey: '0041249f-9f8b-41c5-a137-ad4ce8133cf6',
    CustomProducts: [
      {
        ProductID: 21348,
        Quantity: 1,
        Amount: 97,
      },
    ],
  },
};

/**
 * submitLeadsForm: calls a post leads api which internally calls the CRM api
 * @namespace orderSaga
 * @param  {} action
 */
function* submitLeadsForm(action) {
  console.log({ action });
  yield put(OrderActions.submitLeadsFormRequest());

  const { values, nextUrl, headers } = action.payload;
  const { localStorage } = window;

  const parsedShipping = parseLeadPostData(values).postData;
  const { parseLeadData } = parseLeadPostData(values);

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
    '/v1/response/customers',
    parseLeadData,
    sessionId,
    {
      ...headers,
    },
  );

  if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
    if (!nextUrl) {
      return;
    }
    yield put(OrderActions.submitLeadsFormSuccess());
    // window.location.assign(`${nextUrl}?${queryString}`);
  } else {
    yield put(OrderActions.submitLeadsFormFailure());
  }
}

/**
 * placeOrder: calls the api which internally calls the placeOrder call to CRM api
 * @namespace orderSaga
 * @param  {} action
 */
function* placeOrder(action) {
  yield put(OrderActions.placeOrderRequest());
  try {
    const {
      values, pack, nextUrl, headers,
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

    let parsedOrder = parseOrderPostData(values, pack);
    const queryString = `${
      getQueryString().startsWith('&') || !getQueryString().length ? '' : '&'
    }${getQueryString()}`;
    const mailsoft_person_id = getParameterByName('mailsoft_person_id');
    if (mailsoft_person_id) {
      parsedOrder = { ...parsedOrder, mailsoft_person_id };
    }
    console.log({ parsedOrder });
    const apiResponse = yield post(
      '/v1/response/order',
      parsedOrder,
      sessionId,
      { ...headers },
    );
    if (
      idx(apiResponse, _ => _.response.data.message) === 'Success' &&
      idx(apiResponse, _ => _.response.data.code) !== 500
    ) {
      const { localStorage } = window;
      const order = apiResponse.response.data.data;
      localStorage.setItem('upsell1', JSON.stringify([order]));
      if (values.cart) {
        localStorage.setItem('cartthankyou', true);
        yield put(OrderActions.submitLeadsFormSuccess());
      }
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

/**
 * addUpsellToOrder calls the upsale api which internally calls the upsell api of CRM
 * @namespace orderSaga
 * @param  {} action
 */
function* addUpsellToOrder(action) {
  yield put(OrderActions.addUpsellToOrderRequest());
  try {
    const { sendTo, headers } = action.payload;
    let sessionId = '';
    const { localStorage } = window;

    let upsell1 = JSON.parse(localStorage.getItem('upsell1'));
    upsell1 = upsell1[upsell1.length - 1];

    if (typeof window !== 'undefined') {
      sessionId = yield getCookie('ascbd_session');

      if (!sessionId || !sessionId.length) {
        window.location.href = window.location.href;
        return;
      }
    } else {
      sessionId = yield select(getSession);
    }

    const payload = {
      CustomerID: upsell1.OrderInfo.CustomerID,
      ProductGroups: [packIdMap[action.payload.productId]],
    };

    const apiResponse = yield post('/v1/response/upsale', payload, sessionId, {
      ...headers,
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

/**
 * getOrderDetails
 * @namespace orderSaga
 * @param  {} action
 * @yields {} orderDetails
 */
function* getOrderDetails(action) {
  yield put(OrderActions.getOrderDetailsRequest());
  try {
    const { headers, orderId } = action.payload;
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
    const url = orderId
      ? `/v1/response/order/${orderId}`
      : '/v1/response/order/';
    const apiResponse = yield get(url, sessionId, {
      ...headers,
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
