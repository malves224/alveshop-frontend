<template>
  <div class="container-login">
    <b-card class="card-login">
      <component :is="ActionComponent" />
      <b-button @click="changeAction">
        {{ inLogin ? "CADASTRAR" : "VOLTAR" }}
      </b-button>
    </b-card>
  </div>
</template>
<script>
import RegisterCard from '@/components/Login/RegisterCard.vue';
import LoginCard from '@/components/Login/LoginCard.vue';

export default {
  components: { LoginCard, RegisterCard },
  name: 'LoginView',
  data() {
    return {
      ActionComponent: 'LoginCard',
    };
  },
  computed: {
    inLogin() {
      return this.ActionComponent === 'LoginCard';
    },
  },
  methods: {
    changeAction() {
      this.ActionComponent = this.inLogin ? 'RegisterCard' : 'LoginCard';
    },
  },
};
</script>
<style lang="scss">
.container-login {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 0;
}

.card-login {
  display: flex;
  width: 40%;
  min-width: 250px;
  max-width: 320px;
  height: 280px;
}
</style>
