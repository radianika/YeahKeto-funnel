import axios from 'axios';

const { API_BASE_URL } = process.env;

export function post(location, body, sessionId) {
  console.log(`post ${API_BASE_URL}${location}`);
  return axios
    .post(`${API_BASE_URL}${location}`, body, { headers: { Authorization: `JWT ${sessionId}` } })
    .then(response => {
      console.log({ response });
      return { error: null, response };
    })
    .catch(error => {
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

export function put(location, body, sessionId) {
  console.log(`put ${API_BASE_URL}${location}`);
  return axios
    .put(`${API_BASE_URL}${location}`, body, { headers: { Authorization: `JWT ${sessionId}` } })
    .then(response => {
      console.log({ response });
      return { error: null, response };
    })
    .catch(error => {
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

export function get(location, sessionId) {
  console.log(`get ${API_BASE_URL}${location}`);
  return axios
    .get(`${API_BASE_URL}${location}`, { headers: { Authorization: `JWT ${sessionId}` } })
    .then(response => {
      console.log({ response });
      return { error: null, response };
    })
    .catch(error => {
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

// export function setAuthHeaders(authToken) {
//   axios.defaults.headers.common.Authorization = `JWT ${authToken}`;
// }
