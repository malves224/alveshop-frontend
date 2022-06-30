<template>
    <div class="search-bar">
        <b-input
            @keydown.enter="search"
            v-model="searchTerm.name"
            placeholder="Pesquse o que você quer...">
        </b-input>
        <p class="h5 d-flex align-items-center mb-0 pr-2 pl-1">
            <b-icon
                class="cursor-pointer mr-3"
                @click="searchTerm.name = ''"
                v-show="searchTerm.name"
                icon="x-lg"
            />
            <b-icon
                class="cursor-pointer"
                @click="search"
                icon="search"
            />
        </p>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchNav',
  data() {
    return {
      searchTerm: {
        name: '',
      },
    };
  },
  methods: {
    ...mapActions(['searchProducts']),
    search() {
      this.searchProducts(this.searchTerm);
      if (this.$route.name !== 'home') {
        this.$router.push({ name: 'home' });
      }
    },
  },
  watch: {
    searchTerm: {
      handler() {
        if (!this.searchTerm.name) {
          this.searchProducts(this.searchTerm.name);
        }
      },
      deep: true,
    },
  },
};
</script>
<style scoped lang="scss">
    .search-bar {
        display: flex;
        align-items: center;
        background-color: #202020;
        width: 40%;
        height: 45px;
        max-width: 420px;
        border-radius: 12px;
        box-shadow: 3px 3px 10px 4px rgb(40 40 40 / 89%);

    }
    input, input:focus {
        background-color: transparent;
        border: none;
        color: white;
        box-shadow: none;
    }
</style>
