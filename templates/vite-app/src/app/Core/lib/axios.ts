import { AuthenticationError } from '@Core/interfaces/errors/AuthenticationError'
import { AuthorizationError } from '@Core/interfaces/errors/AuthorizationError'
import { NetworkError } from '@Core/interfaces/errors/NetworkError'
import { NotFoundError } from '@Core/interfaces/errors/NotFoundError'
import { ServerError } from '@Core/interfaces/errors/ServerError'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'ADD YOUR API URL HERE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

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

    request
)

axiosInstance.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error) => {
    if (!error.status) {
      throw new NetworkError()
    }

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Server Error', error.response)

      switch (error.response.data.code) {
        case 401:
          throw new AuthenticationError()

        case 403:
          throw new AuthorizationError()

        case 404:
          throw new NotFoundError()

        case 500:
          throw new ServerError()

        default:
          return Promise.reject({
            responseType: 'server',
            ...error.response.data
          })
      }
    }

    if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error('Request Error', error.response)
      return Promise.reject({
        responseType: 'request',
        message: error.message
      })
    }
    // Something happened in setting up the request that triggered an Error
    console.error('Generic Error', error.message)

    return Promise.reject({
      responseType: 'generic',
      message: error.message
    })
  }
)

export default axiosInstance
