import axios from 'axios';
import HttpService from './HttpService';

class WalletServiceHttp extends HttpService {
  constructor() {
    super();
    this.model = '/wallet';
  }

  async findAll() {
    return axios(this.model);
  }

  async findOne(id) {
    return axios(`${this.model}/${id}`);
  }

  async update(idWallet, payload) {
    return axios.put(`${this.model}/${idWallet}`, payload);
  }
}

export default WalletServiceHttp;
