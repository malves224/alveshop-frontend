import axios from 'axios';

class UserServiceHttp {
    urlbase;

    model;

    constructor(urlBase, model, localStorage = { get: () => console.log('get') }) {
      this.urlBase = urlBase;
      this.model = model;
      this.instanceAxios = axios.create({
        baseURL: urlBase,
      });
      this.localStorage = localStorage;
    }

    async authenticate(loginInfo, action = 'login') {
      const response = await this.instanceAxios
        .post(`${this.model}/${action}`, loginInfo);
      this.instanceAxios.defaults.headers = { authorization: response.data.token };
      return response;
    }

    async create(payload) {
      const response = await this.instanceAxios(this.model, payload);
      return response;
    }

    async findAll() {
      const users = await this.instanceAxios(this.model);
      return users;
    }

    async findOne(id) {
      const user = await this.instanceAxios(this.model, { params: { id } });
      return user;
    }

    async buyProduct({ idProduct, quantity }) {
      const response = await this.instanceAxios
        .post(`${this.model}/sale`, { idProduct, quantity });
      return response;
    }

    async update(idUser) {
      return this.instanceAxios.put(`${this.model}/${idUser}`);
    }

    async destroy(idUser) {
      return this.instanceAxios.delete(`${this.model}/${idUser}`);
    }
}

export default UserServiceHttp;
