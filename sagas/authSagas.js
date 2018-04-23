import { put, all, fork, takeLatest } from 'redux-saga/effects';
import { AuthActions } from 'actions';

function* login(action) {
  yield put(AuthActions.loginRequest());
  try {
    yield put(AuthActions.loginSuccess());
    yield put(
      AuthActions.setAuthUser({
        data: { user: action.payload, token: 'dummyToken' },
      }),
    );
  } catch (error) {
    let msgError = `${error}`;
    if (error.data) {
      const { message } = error.data;
      msgError = `${message}`;
    }
    yield put(AuthActions.loginFailure(msgError));
  }
}

function* signUp(action) {
  yield put(AuthActions.signupRequest());
  try {
    yield put(AuthActions.signupSuccess({ data: { user: action.payload, token: 'dummyToken' } }));
  } catch (error) {
    let msgError = `${error}`;
    if (error.data) {
      const { message, errors } = error.data;
      msgError = `${message} ${errors || ''}`;
    }
    yield put(AuthActions.signupFailure({ msgError }));
  }
}

export default function* authSagas() {
  yield all([
    fork(takeLatest, AuthActions.LOGIN, login),
    fork(takeLatest, AuthActions.SIGNUP, signUp),
  ]);
}
