<template>
    <b-card>
        <component :is="ActionComponent" />
        <b-button
          @click="changeAction"
        >
          {{inLogin ? "CADASTRAR" : "VOLTAR"}}
        </b-button>
    </b-card>
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

</style>
