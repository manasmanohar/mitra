<template>
    <div id="homePage" class="w-full h-screen flex flex-col realtive">
        <LocationBar />
        <PostSelector />
        <div class="flex flex-col m-4" id="homeBoardOuter">
            <HomeBoard />
        </div>

        <router-view />
        <BottomNav />
    </div>
</template>

<script>
    import axios from 'axios'
    import LocationBar from '../components/LocationBar.vue'
    import BottomNav from '../components/BottomNav.vue'
    import PostSelector from '../components/PostSelector.vue'
    import HomeBoard from '../components/HomeBoard'

    export default {
        name: 'App',
        components: {
            LocationBar,
            PostSelector,
            BottomNav,
            HomeBoard,
            // TravelPost,
        },
        mounted() {
            axios
                .get('http://localhost:8080/travelposts')
                // headers: {
                //     'Access-Control-Allow-Origin': 'true',
                // },
                .then((response) => console.log(response))
            // console.log(info)
        },
    }
</script>

<style></style>
