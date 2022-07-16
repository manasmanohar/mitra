<template>
    <div>
        <travelPost />
        <helpPost />
    </div>
</template>

<script>
    import travelPost from './travelPost.vue'
    import helpPost from './helpPost'

    export default {
        name: 'app',
        components: {
            travelPost,
            helpPost,
        },
    }
</script>

<style></style>
