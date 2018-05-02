import { select, put, all, fork, takeLatest } from 'redux-saga/effects';
import idx from 'idx';
import { OrderActions } from 'redux/actions';
import { post, setAuthHeaders } from 'helpers';

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
      const { data } = apiResponse.response.data;
      yield put(OrderActions.submitLeadsFormSuccess({ lead: data }));
      router.push('/promo/desktop/checkout');
    }
  } catch (error) {
    yield put(OrderActions.submitLeadsFormFailure({ error }));
  }
}

export default function* OrderSagas() {
  yield all([
    fork(takeLatest, OrderActions.SUBMIT_LEADS_FORM, submitLeadsForm),
  ]);
}
