<template>
    <div class="search-bar">
        <b-input-group class="mb-2">
            <b-form-input type="search" placeholder="Pesquse o que você quer..." />
            <b-input-group-prepend is-text>
                <b-icon icon="search" />
            </b-input-group-prepend>
        </b-input-group>
    </div>
</template>
<script>
export default {
  name: 'SearchNav',
};
</script>
<style lang="scss">
</style>
