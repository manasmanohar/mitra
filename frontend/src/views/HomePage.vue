<template>
    <div id="homePage" class="w-full h-screen flex flex-col realtive">
        <TopNav />
        <LocationBar />
        <PostSelector />
        <div class="flex flex-col m-4" id="homeboardWrapper">
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
        data() {
            return {
                listOfTravelPosts: [],
                listOfHelpPosts: [],
                listOfEventPoss: [],
                listOfInterests: [],
            }
        },
        name: 'App',
        components: {
            LocationBar,
            PostSelector,
            BottomNav,
            HomeBoard,
        },
        mounted() {
            console.log('travelposts')
            axios
                .get('http://localhost:8080/travelPosts')
                .then((response) => console.log(response))
            // console.log('eventposts')
            // axios
            //     .get('http://localhost:8080/eventposts')
            //     .then((response) => console.log(response))
            // console.log('helpposts')

            // axios
            //     .get('http://localhost:8080/helpposts')
            //     .then((response) => console.log(response))
        },
    }
</script>

<style></style>
