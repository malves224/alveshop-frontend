<template>
  <div @keydown.enter="register" class="container-form">
    <h2>Cadastra-se</h2>
    <b-input v-model="user.name" placeholder="Nome: " />
    <b-input v-model="user.email" placeholder="Email: " />
    <b-input v-model="user.password" type="password" placeholder="Senha: " />
    <b-button
      @click="register"
      :disabled="loading"
      :variant="loading ? '' : 'danger'"
      >{{ loading ? "Aguarde..." : "Criar conta" }}
    </b-button>
  </div>
</template>
<script>
export default {
  name: 'RegisterCard',
  props: {
    handleCreatedUser: Function,
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
      loading: false,
    };
  },
  methods: {
    register() {
      const payload = {
        ...this.user,
      };
      this.loading = true;
      this.$userService
        .create(payload)
        .then(() => this.handleCreatedUser(this.user.email))
        .finally(() => { this.loading = false; });
    },
  },
};
</script>
<style lang="scss">
</style>
