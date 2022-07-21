<template>
    <div v-if="listOfTravelPosts" class="m-2">
        <!-- <p>{{ postDatas }}</p> -->

        <travelPost
            v-for="(travelPosts, index) in listOfTravelPosts"
            :key="travelPosts"
            :travelDatas="listOfTravelPosts"
            :id="index"
        />

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
            return { listOfTravelPosts: {} }
        },
        name: 'app',
        components: {
            travelPost,
            // helpPost,
            // eventPost,
            // userInterest,
        },
        async created() {
            axios.get('http://localhost:8080/travelPosts').then((response) => {
                this.listOfTravelPosts = response.data

                console.log('in homeboard')
                console.log(this.listOfTravelPosts)

                // console.log(response.data[0].id)
            })
        },
    }
</script>

<style></style>
