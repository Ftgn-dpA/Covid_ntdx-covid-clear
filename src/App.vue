<template>
    <div id="app">
        <keep-alive :include="keepAlive">
            <router-view :key="$route.fullPath"/>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App',
        computed: {
            keepAlive () {
                return this.$store.getters.keepAlive
            }
        },
        created() {
            this.$requireModul(['china', 'world', 'echartsgl']);
        },
    }

</script>

<style lang="scss">
    @import "@/assets/scss/common.scss";
</style>