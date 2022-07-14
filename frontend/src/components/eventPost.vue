<template>
    <div id="eventPost" class="flex w-full items-center justify-center mb-8">
        <card class="bg-blue-200 rounded-lg p-5 flex-1">
            <header class="flex font-light text-sm">
                <p>Event</p>
            </header>

            <h2 class="font-bold text-3xl mt-2">
                Going to Aluva Railway Station
            </h2>

            <p class="mt-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 inline content-center"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
                <a href="#" class="text-black-600 conten-center">
                    Manas Manohar
                </a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 inline content-center"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <a href="#" class="text-black-600 content-center"> 5:00pm </a>
            </p>
            <h3 class="font-sm text-md mt-4">Description</h3>
            <p class="font-light">
                Going to catch Janashadabti Expreess at 7pm
            </p>

            <p class="mt-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 inline mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                </svg>

                <a href="#" class="text-black-600 conten-center mr-6"> Uber </a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
                <a href="#" class="text-black-600 content-center"> 3 </a>
            </p>

            <button
                class="bg-blue-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group"
            >
                <p>Join</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </card>
    </div>
</template>

<script>
    // import axios from 'axios'

    export default {
        // props: info,
        // async getEvents() {
        //     let res = await axios
        //         .get('http://localhost:8080/travelPosts/')
        //         .then(res.data)
        // },
    }
</script>

<style></style>
