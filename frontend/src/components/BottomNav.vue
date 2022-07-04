<template>
    <div
        id="BottomNav"
        class="pr-4 pl-4 pb-2 pt-3 items-center space-y-0 flex justify-between flex-row flex-grow align-bottom fixed inset-x-0 bottom-0 bg-white shadow border-t-4 border-grey-100"
    >
        <div
            @click="goToHome()"
            class="botom-btn flex flex-col items-center pr-3"
        >
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
            <span>Home</span>
        </div>

        <div
            @click="goToChooseActivity()"
            class="botom-btn flex flex-col items-center mr-2"
        >
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
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span>New Activity</span>
        </div>

        <div
            @click="goToNewTravel()"
            class="botom-btn flex flex-col items-center"
        >
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
            </svg>
            <span>Messages</span>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            goToHome() {
                this.$router.push('/home')
            },
            goToChooseActivity() {
                this.$router.push('/newactivity')
            },
            goToNewTravel() {
                this.$router.push('/newtravel')
            },
            goToMessages() {
                this.$router.push('/messages')
            },
        },
    }
</script>

<style></style>
