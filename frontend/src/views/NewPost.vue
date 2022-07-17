<template>
    <div id="activtyChoose" class="w-full h-screen flex flex-col realtive">
        <div class="flex flex-row ml-5 mt-5">
            <svg
                @click="goToHome()"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mt-1 mr-1"
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
            <p class="font-bold text-2xl ml-1">Choose Post Type</p>
        </div>

        <div
            @click="goToNewTravel"
            id="event-types"
            class="flex flex-col p-3 justify-center items-center"
        >
            <div
                id="Travel"
                class="rounded bg-pink-400 p-12 m-3 w-full h-1/3 flex flex-col justify-center text-center"
            >
                Travel
            </div>
            <div
                id="Help"
                class="rounded bg-green-400 p-12 m-3 w-full h-1/3 text-center flex flex-col justify-center"
            >
                Help
            </div>
            <div
                id="Event"
                class="rounded bg-yellow-400 p-12 m-3 w-full h-1/3 flex flex-col justify-center items-center"
            >
                Event
            </div>
        </div>
        <BottomNav />
    </div>
</template>

<script>
    import BottomNav from '../components/BottomNav.vue'

    export default {
        name: 'App',
        components: {
            BottomNav,
        },
        methods: {
            goToNewTravel() {
                this.$router.push('/newtravel')
            },
            goToHome() {
                this.$router.push('/home')
            },
        },
    }
</script>

<style></style>
