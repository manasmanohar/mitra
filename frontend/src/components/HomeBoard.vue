<template>
    <div v-if="listOfTravelPosts" class="m-2">
        <travelPost
            v-for="(travelPosts, index) in listOfTravelPosts"
            :key="travelPosts"
            :travelDatas="listOfTravelPosts"
            :id="index"
        />
        <img :src="this.myname.picture" alt="" />

        <!-- {{ myname.sub }} -->
        <!-- <travelPost :data="[{ postDatas }]" /> -->

        <!-- {{ postDatas[0].id }} -->
        <!-- <travelPost />
        <helpPost />
        <eventPost />
        <helpPost />
        <userInterest /> -->
    </div>
</template>

<script>
    import travelPost from './travelPost.vue'
    import axios from 'axios'

    // import helpPost from './helpPost'
    // import eventPost from './helpPost'
    // import userInterest from './userInterest'

    export default {
        data() {
            return { listOfTravelPosts: {}, myname: {} }
        },
        name: 'app',
        components: {
            travelPost,
        },
        mounted() {
            this.myname = JSON.parse(localStorage.getItem('userinfo'))
            console.log('hi')
            console.log(this.myname.sub)
        },
        async created() {
            axios
                .get('http://localhost:8080/travelPosts', {
                    userId: this.myname.sub,
                })
                .then((response) => {
                    this.listOfTravelPosts = response.data

                    console.log(this.listOfTravelPosts)
                })
        },
    }
</script>

<style></style>
