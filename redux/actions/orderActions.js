import { createAction } from 'redux-actions';

export const SUBMIT_LEADS_FORM = 'SUBMIT_LEADS_FORM';
export const submitLeadsForm = createAction(SUBMIT_LEADS_FORM);

export const SUBMIT_LEADS_FORM_REQUEST = 'SUBMIT_LEADS_FORM_REQUEST';
export const submitLeadsFormRequest = createAction(SUBMIT_LEADS_FORM_REQUEST);

export const SUBMIT_LEADS_FORM_SUCCESS = 'SUBMIT_LEADS_FORM_SUCCESS';
export const submitLeadsFormSuccess = createAction(SUBMIT_LEADS_FORM_SUCCESS);

export const SUBMIT_LEADS_FORM_FAILURE = 'SUBMIT_LEADS_FORM_FAILURE';
export const submitLeadsFormFailure = createAction(SUBMIT_LEADS_FORM_FAILURE);

export const GET_ORDER_DETAILS = 'GET_ORDER_DETAILS';
export const getOrderDetails = createAction(GET_ORDER_DETAILS);

export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST';
export const getOrderDetailsRequest = createAction(GET_ORDER_DETAILS_REQUEST);

export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';
export const getOrderDetailsSuccess = createAction(GET_ORDER_DETAILS_SUCCESS);

export const GET_ORDER_DETAILS_FAILURE = 'GET_ORDER_DETAILS_FAILURE';
export const getOrderDetailsFailure = createAction(GET_ORDER_DETAILS_FAILURE);
