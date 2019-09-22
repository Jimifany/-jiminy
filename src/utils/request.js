import axios from 'axios';
import {getToken} from './index'
const instance = axios.create({
  baseURL:'/api',
  timeout: 1000,
  headers:{'sessionid':getToken('')}//给请求头添加免登陆信息
});
console.log(getToken())
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  console.log(config)
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default instance
