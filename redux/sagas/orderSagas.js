import { put, all, fork, takeLatest } from 'redux-saga/effects';
import { OrderActions } from 'redux/actions';
import { post } from 'helpers';

function* submitLeadsForm(action) {
  yield put(OrderActions.submitLeadsFormRequest());
  try {
    const apiResponse = yield post('/v1/konnektive/lead', {
      ...action.payload.values,
    });
    console.log({ apiResponse });
    yield put(OrderActions.submitLeadsFormSuccess());
    // action.payload.router.push('/promo/desktop/checkout');
  } catch (error) {
    yield put(OrderActions.submitLeadsFormFailure({ error }));
  }
}

export default function* OrderSagas() {
  yield all([
    fork(takeLatest, OrderActions.SUBMIT_LEADS_FORM, submitLeadsForm),
  ]);
}
