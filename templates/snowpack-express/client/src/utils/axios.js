/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';

import env from '../constants/env';
import { MultipleChoicesError } from '../types/Errors';

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: env.API_URL,
  headers: DEFAULT_HEADERS,
});

instance.interceptors.response.use(
  (response) =>
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

    response.data,
  (error) => {
    if (error.response) {
      if (error.response.data.code === 300) {
        throw new MultipleChoicesError();
      }

      return Promise.reject({
        responseType: 'server',
        ...error.response.data,
      });
    }
    if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log('Request Error', error.response);
      return Promise.reject({
        responseType: 'request',
        message: error.message,
      });
    }
    // Something happened in setting up the request that triggered an Error
    console.log('Generic Error', error.message);

    return Promise.reject({
      responseType: 'generic',
      message: error.message,
    });
  },
);

export default instance;
