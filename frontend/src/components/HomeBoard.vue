<template>
    <div v-if="listOfTravelPosts" class="m-2">
        <travelPost
            v-for="(travelPosts, index) in listOfTravelPosts"
            :key="travelPosts"
            :travelDatas="listOfTravelPosts"
            :id="index"
        />
        <img :src="pp" alt="" />

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
            return {
                listOfTravelPosts: {},
                myname: {},
                pp: '',
            }
        },
        name: 'app',
        components: {
            travelPost,
        },
        mounted() {
            this.myname = JSON.parse(localStorage.getItem('userinfo'))
        },
        async created() {
            let user = JSON.parse(localStorage.getItem('user_id'))
            console.log(`fetching ${user} posts`)
            let userLoc = JSON.parse(localStorage.getItem('user_location'))

            console.log(user)
            axios
                .post('http://localhost:8080/travelposts', {
                    userId: user,
                    currentLocation: userLoc,
                })
                .then((response) => {
                    this.listOfTravelPosts = response.data

                    console.log(this.listOfTravelPosts)
                })
        },
    }
</script>

<style></style>
