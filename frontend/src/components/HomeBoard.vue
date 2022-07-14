<template>
    <TravelPost />
</template>

<script>
    import TravelPost from './travelPost'
    export default {
        name: 'app',
        components: {
            TravelPost,
        },
        props: ['username'],
    }
</script>

<style></style>
