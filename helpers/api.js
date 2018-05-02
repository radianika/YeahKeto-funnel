import axios from 'axios';

const API_BASE_URL =
  process.env == 'production'
    ? 'https://americanscienceapi-production1.herokuapp.com'
    : 'https://americanscienceapi-staging1.herokuapp.com';

export function post(location, body) {
  console.log(`post ${API_BASE_URL}${location}`);
  return axios
    .post(`${API_BASE_URL}${location}`, body)
    .then(response => {
      console.log({ response });
      return { error: null, response };
    })
    .catch(error => {
      console.log(error);
      if (error.response) {
        return { error: error.response };
      }
      if (error.request) {
        return { error: 'No response from server' };
      }
      return error.message;
    });
}

export function put(location, body) {
  console.log(`put ${API_BASE_URL}${location}`);
  return axios
    .put(`${API_BASE_URL}${location}`, body)
    .then(response => {
      console.log({ response });
      return { error: null, response };
    })
    .catch(error => {
      if (error.response) {
        return { error: error.response };
      }
      if (error.request) {
        return { error: 'No response from server' };
      }
      return error.message;
    });
}

export function get(location) {
  console.log(`get ${API_BASE_URL}${location}`);
  return axios
    .get(`${API_BASE_URL}${location}`)
    .then(response => {
      console.log({ response });
      return { error: null, response };
    })
    .catch(error => {
      if (error.response) {
        return { error: error.response };
      }
      if (error.request) {
        return { error: 'No response from server' };
      }
      return error.message;
    });
}

export function setAuthHeaders(authToken) {
  axios.defaults.headers.common.Authorization = `JWT ${authToken}`;
}
