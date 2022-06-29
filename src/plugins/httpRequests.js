import UserServiceHttp from '@/service/http/UserServiceHttp';
import Vue from 'vue';

const userServiceHttp = new UserServiceHttp();

Vue.use({
  install(VueInstance) {
    VueInstance.prototype.$userService = userServiceHttp;
  },
});

export default userServiceHttp;
