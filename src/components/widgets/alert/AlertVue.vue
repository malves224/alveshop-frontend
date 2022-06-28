<template>
  <div>
    <b-alert show :variant="variant" dismissible fade v-model="isOpen">
      <p>{{ message }}</p>
    </b-alert>
  </div>
</template>
<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'info',
    },
    open: {
      type: Boolean,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  computed: {
    isOpen: {
      get() {
        return this.open;
      },
      set(value) {
        return this.$store.commit('setAllertOpen', value);
      },
    },
  },
  mounted() {
    const FIVE_SECONDS = 5000;
    setTimeout(() => {
      this.$store.commit('setAllertOpen', false);
    }, FIVE_SECONDS);
  },
};
</script>
<style lang="scss">
// falta estilizar para o componente flutar e diminuir o tamanho.
</style>
