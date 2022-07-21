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
    // import axios from 'axios'
    import LocationBar from '../components/LocationBar.vue'
    import BottomNav from '../components/BottomNav.vue'
    import PostSelector from '../components/PostSelector.vue'
    import HomeBoard from '../components/HomeBoard'

    export default {
        data() {
            return {
                listOfTravelPosts: {},
            }
        },
        name: 'App',
        components: {
            LocationBar,
            PostSelector,
            BottomNav,
            HomeBoard,
        },

        // async created() {
        //     axios.get('http://localhost:8080/travelPosts').then((response) => {
        //         this.listOfTravelPosts = response.data

        //         console.log('in homepage')
        //         console.log(this.listOfTravelPosts)

        //         // console.log(response.data[0].id)
        //     })

        // axios
        //     .get('http://localhost:8080/eventposts')
        //     .then((response) => console.log(response))
        // console.log('helpposts')

        // axios
        //     .get('http://localhost:8080/helpposts')
        //     .then((response) => console.log(response))
        // },
    }
</script>

<style></style>
