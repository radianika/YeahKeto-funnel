import ip from 'icepick';
import { OrderActions } from 'redux/actions';

const initialState = ip.freeze({
  submitLeadsFormStatus: null,
  lead: null,
});

export default function (state = initialState, action) {
  switch (action.type) {
    case OrderActions.SUBMIT_LEADS_FORM_SUCCESS:
      return ip.setIn(state, ['lead'], action.payload.lead);
    default:
      return state;
  }
}
