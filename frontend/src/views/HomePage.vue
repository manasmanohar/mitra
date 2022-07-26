<template>
    <div id="homePage" class="w-full h-screen flex flex-col realtive">
        <LocationBar />
        <PostSelector />

        <HomeBoard class="pb-14 px-2" />
        <router-view />
        <BottomNav />
    </div>
</template>

<script>
    import LocationBar from '../components/LocationBar.vue'
    import BottomNav from '../components/BottomNav.vue'
    import PostSelector from '../components/PostSelector.vue'
    import HomeBoard from '../components/HomeBoard'

    export default {
        data() {
            return {}
        },
        props: {
            userDetails: {
                type: Object,
            },
        },
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
