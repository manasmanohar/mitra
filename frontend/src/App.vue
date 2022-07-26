<template>
    <div class="w-full h-screen flex flex-col realtive">
        <TopNav />
        <router-view />
    </div>
</template>

<script>
    import TopNav from './components/TopNav.vue'

    export default {
        name: 'App',
        components: {
            TopNav,
        },
    }
</script>

<style></style>
