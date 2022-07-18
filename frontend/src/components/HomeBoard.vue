<template>
    <div>
        <!-- <p v-if="postDatas">{{ postDatas }}</p> -->
        <travelPost
            v-for="postData in postDatas"
            :key="postData.id"
            :travelDatas="postDatas"
        />

        <!-- <travelPost :data="[{ postDatas }]" /> -->
        <!-- {{ postDatas }} -->

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
    // import helpPost from './helpPost'
    // import eventPost from './helpPost'
    // import userInterest from './userInterest'

    export default {
        name: 'app',
        components: {
            travelPost,
            // helpPost,
            // eventPost,
            // userInterest,
        },
        props: {
            postDatas: {
                type: Object,
            },
        },
    }
</script>

<style></style>
