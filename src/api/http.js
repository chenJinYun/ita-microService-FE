import axios from 'axios'

const instance = axios.create({
  headers: {'content-type': 'application/json;charset=UTF-8'}
});
instance.defaults.timeout = 600 * 1000;
instance.defaults.baseURL = '/api/v1';
// request拦截器
instance.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json;charset=utf-8'
    };
    return config;
  },
  error => {
    return Promise.reject(error)
  }
);

// response拦截器
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error)
  }
);

// 封装get请求
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// 封装delete请求
export function del(url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.delete(url, {
      params: params
    }).then(response => {
      resolve(response.data);
    }, err => {
      reject(err);
    })
  })
}

// 封装Post请求
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(response => {
        resolve(response.data);
      },
      err => {
        reject(err)
      })
  })
}

// 封装patch请求
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.patch(url, data).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}

// 封装put请求
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.put(url, data).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}




