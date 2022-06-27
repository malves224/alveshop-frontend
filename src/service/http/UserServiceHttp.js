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
      try {
        const response = await this.instanceAxios
          .post(`${this.model}/${action}`, loginInfo);
        this.instanceAxios.defaults.headers = { authorization: response.data.token };
        this.localStorage.get();
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    }

    async create(payload) {
      try {
        const response = await this.instanceAxios(this.model, payload);
        return response;
      } catch (error) {
        console.log(error);
      }
    }

    async findAll() {
      try {
        const users = await this.instanceAxios(this.model);
        return users;
      } catch (error) {
        console.log(error.response);
      }
    }

    async findOne(id) {
      try {
        const user = await this.instanceAxios(this.model, { params: { id } });
        return user;
      } catch (error) {
        console.log(error.response);
      }
    }

    async buyProduct({ idProduct, quantity }) {
      try {
        const response = await this.instanceAxios
          .post(`${this.model}/sale`, { idProduct, quantity });
        return response;
      } catch (error) {
        console.log(error.response);
      }
    }

    async update(idUser) {
      return this.instanceAxios.put(`${this.model}/${idUser}`);
    }
}

export default UserServiceHttp;
