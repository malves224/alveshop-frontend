<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderNav from './components/HeaderNav/HeaderNav.vue';

export default {
  components: { HeaderNav },
};
</script>
<style>
</style>
