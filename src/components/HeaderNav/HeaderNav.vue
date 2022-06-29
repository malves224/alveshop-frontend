<template>
    <header>
        <div class="header-nav">
            <div class="header-action">
                <h1>ALVESHOP</h1>
                <UserInfo />
            </div>
            <SearchBar></SearchBar>
        </div>
    </header>
</template>
<script>
import SearchBar from './SearchBar.vue';
import UserInfo from './UserInfo.vue';

export default {
  name: 'HeaderNav',
  components: { SearchBar, UserInfo },
};
</script>
<style lang="scss" scoped>
.header-nav {
    align-items: center;
    flex-direction: column;
    display: flex;
    height: 150px;
    padding: 10px 0;
    justify-content: space-between;
}

.header-action {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}
</style>
