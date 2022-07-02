<template>
    <div class="w-full h-screen flex flex-col realtive">
        <LocationBar />
        <PostSelector />
        <div class="flex flex-col m-4">
            <PostCard />
            <PostCard />
        </div>

        <router-view />
        <BottomNav />
    </div>
</template>

<script>
    // import TopNav from './components/TopNav.vue'
    import LocationBar from '../components/LocationBar.vue'
    import BottomNav from '../components/BottomNav.vue'
    import PostSelector from '../components/PostSelector.vue'
    import PostCard from '../components/PostCard.vue'

    export default {
        name: 'App',
        components: {
            LocationBar,
            PostSelector,
            PostCard,
            BottomNav,
        },
    }
</script>

<style></style>
