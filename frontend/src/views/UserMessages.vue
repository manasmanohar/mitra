<template>
    <div id="messagesWrapper" class="mx-2">
        <div class="pl-1 pb-1 mb-2 text-3xl border-b-2 text-gray-800 font-sans">
            Messages
        </div>
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
