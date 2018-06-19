import axios from 'axios';
import Raven from 'raven';

require('dotenv').config();

const { API_BASE_URL, ABTASTY_BASE_URL, ABTASTY_API_KEY } = process.env;

export function post(location, body, headers) {
  console.log(`post ${API_BASE_URL}${location}`);
  return axios
    .post(`${API_BASE_URL}${location}`, body, headers)
    .then(response => {
      console.log({ response });
      return { error: null, response };
    })
    .catch(error => {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', (error.stack || error));
      if (error.response) {
        return { error: error.response };
      }
      if (error.request) {
        return { error: 'No response from server' };
      }
      return error.message;
    });
}

export function put(location, body, headers) {
  console.log(`put ${API_BASE_URL}${location}`);
  return axios
    .put(`${API_BASE_URL}${location}`, body, headers)
    .then(response => {
      console.log({ response });
      return { error: null, response };
    })
    .catch(error => {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', (error.stack || error));
      if (error.response) {
        return { error: error.response };
      }
      if (error.request) {
        return { error: 'No response from server' };
      }
      return error.message;
    });
}

export function get(location, headers) {
  console.log(`get ${API_BASE_URL}${location}`);
  return axios
    .get(`${API_BASE_URL}${location}`, headers)
    .then(response => {
      console.log({ response });
      return { error: null, response };
    })
    .catch(error => {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', (error.stack || error));
      if (error.response) {
        return { error: error.response };
      }
      if (error.request) {
        return { error: 'No response from server' };
      }
      return error.message;
    });
}

export function postToTransactionApi(action, body) {
  const url = `${ABTASTY_BASE_URL}/${action}`;
  console.log("action", url, body, ABTASTY_API_KEY);
  return axios
    .post(url, body, {
      headers: { "x-api-key": ABTASTY_API_KEY }
    })
    .then(response => {
      return { error: null, response };
    })
    .catch(error => {
      console.error(
        "Exception Occurred in ReactApp ABTASTY call",
        error.stack || error
      );
      if (error.response) {
        return { error: error.response };
      }
      if (error.request) {
        return { error: "No response from ABTASTY server" };
      }
      return error.message;
    });
}
