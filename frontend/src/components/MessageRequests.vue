<template>
    <div
        id="messageRequestWrapper"
        class="flex flex-col py-2 w-full h-1/3 border-b-2 mb-2 pl-4 pr-2 border-gray-200"
    >
        <div class="flex-shrink-0 flex mb-3" id="userinfo">
            <div id="user_details" class="flex felx-col items-center">
                <img
                    class="w-12 h-12 rounded-full mr-3"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=460&q=460"
                    alt="Thomas image"
                />

                <div class="flex flex-col">
                    <p class="text-lg content-center font-medium">
                        Manas Manohar
                    </p>
                    <p class="text-sm">Trip to Aluva</p>
                </div>
            </div>
        </div>
        <!-- <p class="text-2xl font0sma">Trip to Aluva</p> -->

        <div class="flex">
            <button
                class="bg-green-500 w-1/2 mr-2 rounded-lg text-white font-semibold text-sm inline-flex items-center justify-center"
            >
                <p class="px-2">Chat</p>
                <svg
                    class="w-5 h-5 transform rotate-90 ml-0 -mr-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                </svg>
            </button>
            <button
                class="bg-red-400 w-1/2 rounded-lg opacity-80 text-white font-semibold py-2 px-5 text-sm inline-flex items-center group justify-center"
            >
                <p>Decline</p>

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
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style></style>
