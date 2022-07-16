<template>
    <div
        id="travelPostWrapper"
        class="flex w-full items-center justify-center mb-8 shadow-sm"
    >
        <div class="bg-blue-200 rounded-lg p-5 flex-1">
            <!-- <header class="flex font-light text-sm">
                <p>Event</p>
            </header> -->

            <h2 class="font-bold text-3xl mt-2 mb-5 border-blue-500">
                Going to Aluva Railway Station
            </h2>

            <div class="flex-shrink-0 flex" id="userinfo">
                <img
                    class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=460&q=460"
                    alt="Thomas image"
                />

                <p class="text-black-600 conten-center">Manas Manohar</p>
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
                <p class="text-black-600 content-center">5:00pm</p>
            </div>

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
                class="bg-blue-600 text-white font-semibold rounded-lg py-2 px-5 text-sm mt-6 inline-flex items-center group"
            >
                <p>Join</p>
                <svg
                    aria-hidden="true"
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'userId',
            'title',
            'destination',
            'noParticipants',
            'currentLocation',
            'travelMode',
            'dateOfTravel',
            'timeOfTravel: ',
        ],
    }
</script>

<style></style>
