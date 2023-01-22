import store from '@/store';
import { notification } from 'ant-design-vue';
import Axios from 'axios';
import router from '../router';
const service = Axios.create({
  timeout: 30000
});

const isLoginExpired = (res) => {
  if (res && res.status && res.status === 401) {
    return true;
  }
  if (res && res.data && res.data.code === 401) {
    return true;
  }
  return false;
}

const requestInterceptor = (config) => {
  const token = localStorage.getItem('token');
  config.headers.common = {
    ...config.headers.common,
    token
  };
  return config;
}

const successInterceptor = async (res) => {
  if (isLoginExpired(res)) {
    const err = await errorInterceptor(res);
    return Promise.reject(err);
  }
  return res;
}

const errorInterceptor = async (err) => {
  let msg = '系统异常';
  if (isLoginExpired(err)) {
    setTimeout(() => {
      store.dispatch('goLogin');
      router.push('/login');
    }, 2000);
    msg = '登录失效，即将返回登录页';
  }
  notification.error({
    message: msg
  });
  return err;
}
service.interceptors.request.use(requestInterceptor);
service.interceptors.response.use(successInterceptor, errorInterceptor)
export default service;
