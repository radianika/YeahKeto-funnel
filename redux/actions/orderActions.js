import { createAction } from 'redux-actions';

export const SUBMIT_LEADS_FORM = 'SUBMIT_LEADS_FORM';
export const submitLeadsForm = createAction(SUBMIT_LEADS_FORM);

export const SUBMIT_LEADS_FORM_REQUEST = 'SUBMIT_LEADS_FORM_REQUEST';
export const submitLeadsFormRequest = createAction(SUBMIT_LEADS_FORM_REQUEST);

export const SUBMIT_LEADS_FORM_SUCCESS = 'SUBMIT_LEADS_FORM_SUCCESS';
export const submitLeadsFormSuccess = createAction(SUBMIT_LEADS_FORM_SUCCESS);

export const SUBMIT_LEADS_FORM_FAILURE = 'SUBMIT_LEADS_FORM_FAILURE';
export const submitLeadsFormFailure = createAction(SUBMIT_LEADS_FORM_FAILURE);
