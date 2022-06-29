import UserServiceHttp from '@/service/http/UserServiceHttp';
import WalletServiceHttp from '@/service/http/WalletServiceHttp';
import Vue from 'vue';

const userServiceHttp = new UserServiceHttp();
const walletServiceHttp = new WalletServiceHttp();

Vue.use({
  install(VueInstance) {
    VueInstance.prototype.$userService = userServiceHttp;
    VueInstance.prototype.$walletService = walletServiceHttp;
  },
});

export default { userServiceHttp, walletServiceHttp };
