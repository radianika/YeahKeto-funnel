import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { AuthActions } from 'actions';

const appReducer = combineReducers({
  form: formReducer,
});

const rootReducer = (state, action) => {
  if (action.type === AuthActions.LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
