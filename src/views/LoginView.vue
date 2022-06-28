<template>
  <div class="container-login">
    <b-card width>
      <div class="card-login">
        <component :is="ActionComponent" />
        <b-button
          :variant="inLogin ? 'success' : 'outline'"
          size="sm"
          @click="changeAction">
            {{ inLogin ? "CADASTRA-SE" : "VOLTAR" }}
        </b-button>
      </div>
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
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0;
  width: 45vw;
  max-width: 300px;
  min-width: 220px;
  height: 300px;
}

.card-login > button {
  width: 120px;
}

.container-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 82%;
}
</style>
