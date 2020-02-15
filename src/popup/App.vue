<template>
    <div class="app">
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
        <RouterView/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['foo']),
    },
};
</script>

<style lang="scss" scoped>
.app {
    position: relative;
    width: 400px;
    min-height: 200px;
    background: #fff;
}
</style>
