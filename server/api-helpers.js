import axios from 'axios';
import Raven from 'raven';
import idx from 'idx';

require('dotenv').config();

const { API_BASE_URL, ABTASTY_BASE_URL, ABTASTY_API_KEY } = process.env;

export function post(location, body, headers) {
  console.log(`post ${API_BASE_URL}${location}`);
  return axios
    .post(`${API_BASE_URL}${location}`, body, headers)
    .then(response => ({ error: null, response }))
    .catch(error => {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
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
    .then(response => ({ error: null, response }))
    .catch(error => {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
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
    .then(response => ({ error: null, response }))
    .catch(error => {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
      if (error.response) {
        return { error: error.response };
      }
      if (error.request) {
        return { error: 'No response from server' };
      }
      return error.message;
    });
}

export async function postToAbtasty(action, body) {
  try {
    const url = `${ABTASTY_BASE_URL}/${action}`;
    const response = await axios.post(url, body, {
      headers: { 'x-api-key': ABTASTY_API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function generateAbtastyVisitorId() {
  try {
    const response = await axios.post(
      `${ABTASTY_BASE_URL}/visitor`,
      {},
      { headers: { 'x-api-key': ABTASTY_API_KEY } },
    );
    if (idx(response, _ => _.data.id)) {
      return response.data.id;
    }
  } catch (error) {
    Raven.captureException(error);
    console.error('Exception Occurred in ReactApp', error.stack || error);
  }
}

export async function getVariationForVisitor(visitor_id) {
  try {
    const response = await axios.post(
      `${ABTASTY_BASE_URL}/allocate`,
      { campaign_id: '306329', visitor_id },
      {
        headers: {
          'x-api-key': ABTASTY_API_KEY,
        },
      },
    );
    if (idx(response, _ => _.data.variation_id)) {
      return response.data.variation_id;
    }
  } catch (error) {
    Raven.captureException(error);
    console.error('Exception Occurred in ReactApp', error.stack || error);
  }
}
