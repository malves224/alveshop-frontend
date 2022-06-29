import axios from 'axios';
import storeVuex from '@/store/';
import HttpService from './HttpService';

class UserServiceHttp extends HttpService {
  constructor() {
    super();
    this.model = '/user';
  }

  async authenticate(loginInfo) {
    const response = await axios.post(`${this.model}/login`, loginInfo);
    storeVuex.dispatch('setUserBindingLocalStorage', response.data);
    return response;
  }

  async create(payload) {
    return axios.post(this.model, payload);
  }

  async findAll() {
    return axios(this.model);
  }

  async findOne(id) {
    return axios(`${this.model}/${id}`);
  }

  async buyProduct({ idProduct, quantity }) {
    return axios.post(`${this.model}/sale`, { idProduct, quantity });
  }

  async update(idUser) {
    return axios.put(`${this.model}/${idUser}`);
  }

  async destroy(idUser) {
    return axios.delete(`${this.model}/${idUser}`);
  }
}

export default UserServiceHttp;
