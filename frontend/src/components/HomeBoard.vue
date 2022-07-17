<template>
    <div>
        <travelPost />
        <helpPost />
        <eventPost />
        <helpPost />
        <userInterest />
    </div>
</template>

<script>
    import travelPost from './travelPost.vue'
    import helpPost from './helpPost'
    import eventPost from './helpPost'
    import userInterest from './userInterest'

    export default {
        name: 'app',
        components: {
            travelPost,
            helpPost,
            eventPost,
            userInterest,
        },
    }
</script>

<style></style>
