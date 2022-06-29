<template>
  <div class="user-info">
    <p class="h3 mb-0 mr-2">
      <b-icon variant="danger" icon="person-circle"></b-icon>
    </p>
    <div v-if="userLogged" class="user-logged">
      <div class="d-flex justify-content-between">
        <span class="mb-0">Olá, {{ getUser.name.split(" ")[0] }}</span>
        <b-button @click="logout" variant="outline" class="border-0 p-0 m-0">
          sair
        </b-button>
      </div>
      <p @changeCoins="getCoinsRequest" class="text-warning mb-0 coins">
        Coins: $ {{ coinsUser }}
      </p>
    </div>
    <div v-else class="user-not-logged">
      <span class="mb-0">Minha conta</span>
      <router-link class="p-0 m-0 cursor-pointer" tag="p" to="/Login">
        Entrar / Cadastro
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      coinsUser: '',
    };
  },
  computed: {
    ...mapGetters(['getUser', 'userLogged']),
  },
  methods: {
    ...mapActions(['removeUserBindingLocalStorage']),
    logout() {
      this.removeUserBindingLocalStorage();
    },
    getCoinsRequest() {
      if (this.userLogged) {
        this.$walletService.findOne(this.getUser.id).then((res) => {
          this.coinsUser = res.data.coins;
        });
      }
    },
  },
  mounted() {
    if (this.userLogged) {
      this.getCoinsRequest();
    }
  },
  updated() {
    if (this.userLogged) {
      this.getCoinsRequest();
    }
  },
};
</script>
<style lang="scss">
.user-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25%;
  max-width: 190px;
}
.user-logged {
  width: 100%;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
