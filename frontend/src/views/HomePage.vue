<template>
    <div class="w-full h-screen flex flex-col realtive">
        <LocationBar />
        <PostSelector />
        <div class="flex flex-col m-4">
            <HomeBoard />
        </div>

        <router-view />
        <BottomNav />
    </div>
</template>

<script>
    import LocationBar from '../components/LocationBar.vue'
    import BottomNav from '../components/BottomNav.vue'
    import PostSelector from '../components/PostSelector.vue'
    // import PostCard from '../components/PostCard.vue'
    import HomeBoard from '../components/HomeBoard'

    export default {
        name: 'App',
        components: {
            LocationBar,
            PostSelector,
            BottomNav,
            HomeBoard,
        },
    }
</script>

<style></style>
