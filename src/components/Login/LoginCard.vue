<template>
  <div @keydown.enter="login" class="container-form">
    <h2>Login</h2>
      <b-input v-model="email" placeholder="Digite seu email" id="email" />
      <b-input
        v-model="password"
        placeholder="Digite sua senha"
        type="password"
      />
      <b-button
        @click="login"
        :disabled="loading"
        :variant="loading ? '' : 'danger'"
        >{{ loading ? "Aguarde..." : "Acessar conta" }}
      </b-button>
  </div>
</template>
<script>
export default {
  name: 'LoginCard',
  props: {
    emailInitial: String,
  },
  data() {
    return {
      email: this.emailInitial,
      password: '',
      loading: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$userService
        .authenticate({
          email: this.email,
          password: this.password,
        })
        .finally(() => { this.loading = false; });
    },
  },
};
</script>
<style lang="scss">
</style>
