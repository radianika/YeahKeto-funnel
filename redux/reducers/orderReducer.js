import ip from 'icepick';
import { OrderActions } from 'redux/actions';

const initialState = ip.freeze({
  submitLeadsFormStatus: null,
  lead: null,
  order: null,
});

export default function (state = initialState, action) {
  switch (action.type) {
    case OrderActions.SUBMIT_LEADS_FORM_SUCCESS:
      return ip.setIn(state, ['lead'], action.payload.lead);
    case OrderActions.GET_ORDER_DETAILS_SUCCESS:
      return ip.setIn(state, ['order'], action.payload.order);
    case OrderActions.PLACE_ORDER_SUCCESS:
      return ip.setIn(state, ['order'], action.payload.order);
    default:
      return state;
  }
}
