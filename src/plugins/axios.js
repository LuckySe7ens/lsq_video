"use strict";

import Vue from 'vue';
import { Message, MessageBox, Loading } from 'element-ui';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = "172.0.0.1:8080"

let loading ;

function startLoading() { //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
function endLoading() { //使用Element loading-close 方法
  loading.close()
}

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "",
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.isForm ?
        config.headers["content-type"] = "application/x-www-form-urlencoded" :
        config.headers["content-type"] = "application/json";
    startLoading();
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    endLoading();
    return response;
  },
  function(error) {
    // Do something with response error
    Message({
      message: "网路错误，请重试",
      type: "error"
    });
    endLoading();
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @returns Promise
 */
export function post(url, params = {}, isForm = false) {
  return new Promise((resolve, reject) => {
    _axios({
      url,
      method: 'post',
      data: params,
      isForm
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @returns Promise
 */
export function get(url, params = {}, isForm = false) {
  return new Promise((resolve, reject) => {
    _axios({
      url,
      method: 'get',
      params: params,
      isForm
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

Vue.use(Plugin)

export default Plugin;
