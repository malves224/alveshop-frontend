<template>
  <div class="list-products">
    <div class="card-product" v-for="product in getProducts" :key="product.id">
      <img
        :width="100"
        :src="product.urlImage"
        :alt="`imagem do produto ${product.name}`"
      />
      <div class="text-product">
        <p>{{ product.name }}</p>
        <p>
          <span>Preço: </span>
          {{ product.price }}
        </p>
      </div>
      <b-button :variant="product.active ? 'danger' : ''">
        {{ product.active ? "COMRAR" : "INDISPONIVEL" }}
      </b-button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods: {
    ...mapActions(['loadingProducts']),
  },
  mounted() {
    this.loadingProducts();
  },
};
</script>
<style lang="scss">
.list-products {
    display: flex;
    flex-flow: row wrap;
}
</style>
