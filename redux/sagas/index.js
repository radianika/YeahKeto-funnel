import { fork, all } from 'redux-saga/effects';
// import authSagas from './authSagas';
import orderSagas from './orderSagas';

export default function* sagas() {
  // yield all([fork(authSagas)]);
  yield all([fork(orderSagas)]);
}
