<template>
    <div id="messagesWrapper" class="mx-2">
        <MessageRequests />
        <MessageRequests />
        <MessageRequests />
        <BottomNav />
    </div>
</template>

<script>
    import MessageRequests from '../components/MessageRequests.vue'
    import BottomNav from '../components/BottomNav.vue'

    export default {
        name: 'UserMessages',
        components: {
            MessageRequests,
            BottomNav,
        },
    }
</script>

<style></style>
