<template>
    <div class="w-full h-screen flex flex-col realtive">
        <TopNav />
        <router-view />
    </div>
</template>

<script>
    import TopNav from './components/TopNav.vue'

    // import LocationBar from './components/LocationBar.vue'
    // import PostSelector from './components/PostSelector.vue'
    // import PostCard from './components/PostCard.vue'
    // import HomePage from './views/HomePage.vue'
    // import BottomNav from './components/BottomNav.vue'

    export default {
        name: 'App',
        components: {
            TopNav,
        },
    }
</script>

<style></style>
