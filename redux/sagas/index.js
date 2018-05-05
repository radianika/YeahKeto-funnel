import { fork, all } from 'redux-saga/effects';
import orderSagas from './orderSagas';

export default function* sagas() {
  yield all([fork(orderSagas)]);
}
