import router from '@/router';
import axios from 'axios';
import storeVuex from '@/store/';
import LocalStorage from '../localStorage/LocalStorage';

class HttpService {
  constructor() {
    this.baseURL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3001';
    axios.defaults.baseURL = this.baseURL;

    axios.interceptors.request.use((config) => {
      const userInfo = LocalStorage.get('credentials');
      const token = userInfo ? userInfo.token : '';
      config.headers = { Authorization: token };
      return config;
    });

    axios.interceptors.response.use((response) => response, (error) => {
      const { response } = error;
      const { data: { message } } = response;
      const isAuthenticated = !(message.includes('não encontrado')
        || message.includes('invalido'));
      storeVuex.dispatch('openAlert', { message, variant: 'danger' });
      if (!isAuthenticated) {
        router.push({ name: 'login' });
        return;
      }
      return error;
    });
  }
}

export default HttpService;
