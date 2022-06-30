import axios from 'axios';
import HttpService from './HttpService';

class ProductServiceHttp extends HttpService {
  constructor() {
    super();
    this.model = '/product';
  }

  async create(payload) {
    return axios.post(this.model, payload);
  }

  async findAll(params = {}) {
    const price = params.rangePrice && params.rangePrice[0];
    console.log(price);
    return axios.get(this.model, {
      params: {
        active: params.active,
        priceGreaterThan: params.rangePrice && params.rangePrice[0],
        priceLessThan: params.rangePrice && params.rangePrice[1],
        name: params.name,
      },
    });
  }

  async findOne(id) {
    return axios(`${this.model}/${id}`);
  }

  async update(id, payload) {
    return axios.put(`${this.model}/${id}`, payload);
  }

  async destroy(id) {
    return axios.delete(`${this.model}/${id}`);
  }
}

export default ProductServiceHttp;
