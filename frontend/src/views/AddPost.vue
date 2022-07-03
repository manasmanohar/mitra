<template>
    <div class="w-full h-screen flex flex-col realtive">
        <TopNav />
        <div id="back-nav">
            <p>Choose Post Type</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
        </div>
        <BottomNav />
    </div>
</template>

<script>
    import TopNav from '../components/TopNav.vue'
    import BottomNav from '../components/BottomNav.vue'

    export default {
        name: 'App',
        components: {
            BottomNav,
            TopNav,
        },
    }
</script>

<style></style>
