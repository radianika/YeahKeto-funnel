import { select, put, all, fork, takeLatest } from 'redux-saga/effects';
import idx from 'idx';
import { OrderActions } from 'redux/actions';
import { post, get, setAuthHeaders } from 'helpers';

const getSession = state => state.auth.sessionId;

function* submitLeadsForm(action) {
  yield put(OrderActions.submitLeadsFormRequest());
  try {
    const { values, router } = action.payload;
    const {
      firstName,
      lastName,
      address,
      address2,
      city,
      state,
      postalCode,
    } = values;
    const shipping = {
      firstName,
      lastName,
      address,
      address2,
      city,
      state,
      postalCode,
    };
    const sessionId = yield select(getSession);
    setAuthHeaders(sessionId);
    const apiResponse = yield post('/api/v1/konnektive/lead', {
      ...values,
      shipping,
    });
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const { lead } = apiResponse.response.data.data;
      yield put(OrderActions.submitLeadsFormSuccess({ lead }));
      router.push(`/promo/desktop/checkout?orderId=${lead.orderId}`);
    }
  } catch (error) {
    yield put(OrderActions.submitLeadsFormFailure({ error }));
  }
}

function* getOrderDetails(action) {
  yield put(OrderActions.getOrderDetailsRequest());
  try {
    const { orderId } = action.payload;
    const sessionId = yield select(getSession);
    setAuthHeaders(sessionId);
    const apiResponse = yield get(`/api/v1/konnektive/order/${orderId}`);
    if (idx(apiResponse, _ => _.response.data.message) === 'Success') {
      const order = apiResponse.response.data.data.data[0];
      yield put(OrderActions.getOrderDetailsSuccess({ order }));
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
}
