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
}

export default UserServiceHttp;
