// #region Global Imports
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const configs: AxiosRequestConfig = {
  baseURL: process.env.API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
};

const axiosClient: AxiosInstance = axios.create(configs);
axiosClient.defaults.timeout = 20000;
axiosClient.interceptors.request.use((request) => {
  return request;
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // TODO: should return response with data not empty
    if (
      ([200, 201].includes(response.status) && response.data) ||
      [204].includes(response.status)
    ) {
      return response.data;
    }
    return Promise.reject(response.statusText || '');
  },
  (error) => {
    const originalRequest = error.config;
    const { data, status } = error.response;

    if (
      status === 401 &&
      (data.message === 'UNAUTHORIZED' || data.message === 'Unauthorized') &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
    }
    return Promise.reject<APIResponseError>(error.response.data);
  }
);

export default axiosClient;
