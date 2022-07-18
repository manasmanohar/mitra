<template>
    <div id="homePage" class="w-full h-screen flex flex-col realtive">
        <TopNav />
        <LocationBar />
        <PostSelector />
        <div class="flex flex-col m-4" id="homeboardWrapper">
            <HomeBoard :postDatas="listOfTravelPosts" />
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
            return {}
        },
        name: 'App',
        components: {
            LocationBar,
            PostSelector,
            BottomNav,
            HomeBoard,
        },
        async mounted() {
            axios.get('http://localhost:8080/travelPosts').then((response) => {
                // let listOfTravelPosts = response.data
                // console.log('response.data')

                // console.log(response.data[0].id)
                this.listOfTravelPosts = response.data
                console.log('listOfTravelPosts')
                console.log(this.listOfTravelPosts)
            })
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
