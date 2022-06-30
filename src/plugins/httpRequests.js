import ProductServiceHttp from '@/service/http/ProductsServiceHttp';
import UserServiceHttp from '@/service/http/UserServiceHttp';
import WalletServiceHttp from '@/service/http/WalletServiceHttp';
import Vue from 'vue';

const userServiceHttp = new UserServiceHttp();
const walletServiceHttp = new WalletServiceHttp();
const productServiceHttp = new ProductServiceHttp();

Vue.use({
  install(VueInstance) {
    VueInstance.prototype.$userService = userServiceHttp;
    VueInstance.prototype.$walletService = walletServiceHttp;
    VueInstance.prototype.$productService = productServiceHttp;
  },
});

export default { userServiceHttp, walletServiceHttp, productServiceHttp };
