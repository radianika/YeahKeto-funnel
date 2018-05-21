import ip from 'icepick';
import { AuthActions } from 'redux/actions';

const initialState = ip.freeze({
  sessionId: null,
});

export default function (state = initialState, action) {
  switch (action.type) {
    case AuthActions.SET_UNIQUE_SESSION_ID:
      return ip.setIn(state, ['sessionId'], action.payload.sessionId.id);
    default:
      return state;
  }
}
