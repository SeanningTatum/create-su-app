import axios from 'axios';

import Errors from '@app/utils/Errors';

const { NotAuthorizedError, NotFoundError } = Errors;

const DEFAULT_HEADERS: Record<string, string> = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: DEFAULT_HEADERS,
});

axiosInstance.interceptors.request.use(
  (request) =>
    // Intercept Token

    // const authStore = window.localStorage.getItem('authStore');

    // if (!authStore) return request;

    // const user = JSON.parse(authStore) as {
    //   token: string;
    // };

    // // send token whenever available which is when logged in
    // if (user && user.token) {
    //   request.headers.Authorization = `Bearer ${user.token}`;
    // }

    request,
);

axiosInstance.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('Server Error', error.response);

      if (error.response.data.code === 401) {
        throw new NotAuthorizedError();
      }

      if (error.response.data.code === 404) {
        throw new NotFoundError();
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

export default axiosInstance;
