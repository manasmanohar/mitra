<template>
    <div
        id="travelPostWrapper"
        class="flex w-full items-center justify-center mb-20"
    >
        <div class="bg-blue-200 rounded-lg p-5 flex-1 shadow-md">
            <!-- <header class="flex font-light text-sm">
                <p>Event</p>
            </header> -->

            <h2 class="font-bold text-3xl mt-2 mb-3 border-blue-500">
                Need a USB C Dongle
            </h2>

            <div class="flex-shrink-0 flex mb-1" id="userinfo">
                <div id="user_details" class="flex felx-col items-center mr-4">
                    <img
                        class="w-12 h-12 rounded-full mr-3"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=460&q=460"
                        alt="profile-image"
                    />

                    <p class="text-lg content-center font-medium">
                        Manas Manohar,
                    </p>
                </div>

                <div id="post-date" class="flex flex-row items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>

                    <p class="content-center mr-2 font-md font-medium">
                        Fri, July 21
                    </p>
                </div>
            </div>

            <div id="post-date" class="flex flex-row">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>

                <p class="content-center mr-2 font-md font-medium">
                    Fri, July 21
                </p>

                <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 inline content-center mr-2"
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

                <p class="font-md font-medium">5:00pm</p> -->
            </div>

            <h3 class="font-xs text-md mt-3">Description:</h3>
            <p class="font-md font-medium text-lg text-slate-600">
                Hey! I have a presentation tomorrow and urgently need a usb c
                hdmi adapter for my macbook. Can anyone lend it to me for a day?
            </p>

            <!-- <div class="mt-5 flex justify-self-auto border-gray-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 mr-1"
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

                <p href="#" class="content-center mr-6 font-md font-medium">
                    Uber
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
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
                <p class="ml-2 font-md font-medium">3</p>
            </div> -->

            <button
                class="bg-blue-600 :hover:bg-blue-900 justify-center w-full text-white font-semibold rounded-lg py-2 px-5 text-sm mt-4 inline-flex items-center group"
            >
                <p class="text-lg content-center font-medium">Help</p>
                <!-- <svg
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
                </svg> -->
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
