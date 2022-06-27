<template>
    <header>
        <div class="header-nav">
            <div class="header-action">
                <h1>ALVESHOP</h1>
                <div>
                    <!--condicional apenas se o usuario tiver logado-->
                    <p>Rogeirinho</p>
                    <p class="coins">Coins: $ 150,30</p>
                </div>
                <!--if userLogado else-->
                <b-button v-if="false" variant="secondary">
                    Sair
                </b-button>
                <router-link v-else :to="inLogin ? '/' : '/Login'">
                    <b-button variant="danger">
                        {{ inLogin ? 'Voltar' : 'Login' }}
                    </b-button>
                </router-link>
            </div>
            <SearchBar></SearchBar>
        </div>
    </header>
</template>
<script>
import SearchBar from './SearchBar.vue';

export default {
  name: 'HeaderNav',
  components: { SearchBar },
  computed: {
    inLogin() {
      return this.$route.name === 'login';
    },
  },
};
</script>
<style lang="scss" scoped>
.header-nav {
    align-items: center;
    flex-direction: column;
    display: flex;
    height: 150px;
    padding: 10px 0;
    justify-content: space-between;
}

.header-action {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

.coins {
    color: gold;
}

button {
    width: 66px;
    max-width: 66px;
}
</style>
