import router from '@/router';
import axios from 'axios';
import storeVuex from '@/store/';
import LocalStorage from '../localStorage/LocalStorage';

class HttpService {
  constructor() {
    this.baseURL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3001';
    axios.defaults.baseURL = this.baseURL;

    axios.interceptors.request.use((config) => {
      const user = storeVuex.getters.getUser;
      const userLocalStorage = LocalStorage.get('user');
      if (user.token && !userLocalStorage) {
        LocalStorage.set('user', user);
      }
      const token = userLocalStorage ? userLocalStorage.token : '';
      config.headers = { Authorization: token };
      return config;
    });

    axios.interceptors.response.use((response) => {
      if (response.data.message) {
        storeVuex.dispatch('openAlert', {
          message: response.data.message,
          variant: 'info',
        });
      }
      return response;
    }, (error) => {
      const { response } = error;
      const { data: { message } } = response;
      const isAuthenticated = !(message.includes('não encontrado')
        || message.includes('invalido'));
      storeVuex.dispatch('openAlert', { message, variant: 'danger' });
      if (!isAuthenticated) {
        router.push({ name: 'login' });
        LocalStorage.remove('user');
      }
      return Promise.reject(error);
    });
  }
}

export default HttpService;
