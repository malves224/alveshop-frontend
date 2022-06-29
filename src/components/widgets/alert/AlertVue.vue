<template>
  <div class="container-alert">
    <b-alert :variant="variant" dismissible fade v-model="isOpen">
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
.container-alert {
  position: absolute;
  top: 20px;
  left: 30vw;
  width: 35vw;
  max-width: 320px;
  min-width: 280px;
}

@media (max-width: 400px) {
  .container-alert {
    left: 20vw;
    min-width:190px
  }
}
</style>
