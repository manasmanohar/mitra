<template>
    <div id="travelPost" class="flex flex-col justify-center items-center mt-0">
        <div
            id="innerTravelPost"
            class="static top-0 bg-blue-600 w-full m-0 p-40 z-0"
        ></div>

        <div class="absolute top-40 w-full max-w-lg m">
            <div class="flex flex-row m-auto items-center">
                <svg
                    @click="goToChooseActivity()"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mb-2 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                <p class="text-3xl text-white font-sans pb-3">
                    Add Travel Details
                </p>
            </div>
            <form class="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-1">
                <div class="identity-input mb-4">
                    <label
                        for="identity"
                        class="block text-gray-700 text-lg font-bold mb-2"
                    >
                        Post Title</label
                    >
                    <input
                        id="identity"
                        class="rounded-lg shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Eg:Going to Lulu Mall"
                        v-model="title"
                    />
                    <span class="text-xs text-red-700" id="emailHelp"></span>
                </div>
                <div class="identity-input mb-4">
                    <label
                        for="identity"
                        class="block text-gray-700 text-lg font-bold mb-2"
                    >
                        Post Description</label
                    >
                    <input
                        id="identity"
                        class="rounded-lg shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Add a short description"
                        v-model="description"
                    />
                    <span class="text-xs text-red-700" id="description"></span>
                </div>

                <div class="identity-input mb-4">
                    <label
                        for="identity"
                        class="block text-gray-700 text-lg font-bold mb-2"
                    >
                        Destination</label
                    >
                    <input
                        id="identity"
                        class="rounded-lg shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Eg:Edappalli"
                        v-model="destination"
                    />
                    <span class="text-xs text-red-700" id="emailHelp"></span>
                </div>

                <div class="flex">
                    <div class="mb-3 w-full">
                        <label
                            for="exampleNumber0"
                            class="form-label inline-block text-gray-700 text-lg font-bold mb-2"
                            >Number of Participants</label
                        >
                        <input
                            type="number"
                            class="rounded-lg form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleNumber0"
                            placeholder="Number input"
                            v-model="noParticipants"
                        />
                    </div>
                </div>

                <div class="flex">
                    <div class="mb-3 w-full">
                        <label
                            for="exampleNumber0"
                            class="form-label inline-block text-gray-700 text-lg font-bold mb-2"
                            >Mode of Travel</label
                        >
                        <select
                            class="rounded-lg form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label="Default select example"
                            v-model="modeOfTravel"
                        >
                            <option selected>Select</option>
                            <option value="1">Uber</option>
                            <option value="2">Auto</option>
                            <option value="3">Car</option>
                            <option value="3">Bus</option>
                            <option value="3">Bike</option>
                        </select>
                    </div>
                </div>

                <div class="relative mb-3 xl:w-96">
                    <label
                        for="exampleNumber0"
                        class="rounded-lg form-label inline-block text-gray-700 text-lg font-bold mb-2"
                        >Date of Event</label
                    >

                    <div
                        class="absolute inset-y-0 left-0 flex items-center pl-3 mt-5 pointer-events-none"
                    >
                        <svg
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        datepicker
                        type="date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                        v-model="dateOfTravel"
                    />
                </div>

                <div class="flex justify-center flex-col">
                    <label
                        for="exampleNumber0"
                        class="form-label inline-block text-gray-700 text-lg font-bold mb-2"
                        >Time of Event</label
                    >
                    <div class="timepicker relative form-floating mb-3 xl:w-96">
                        <input
                            type="time"
                            v-model="timeOfTravel"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Select a date"
                        />

                        <button
                            tabindex="0"
                            type="button"
                            class="timepicker-toggle-button inline-block"
                            data-mdb-toggle="timepicker"
                        >
                            <i class="fas fa-clock timepicker-icon"></i>
                        </button>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        @click="submitForm()"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .custom-number-input input:focus {
        outline: none !important;
    }

    .custom-number-input button:focus {
        outline: none !important;
    }
</style>

<script>
    import axios from 'axios'
    export default {
        name: 'TravelPost',
        data() {
            return {
                userId: '1231',
                title: '',
                description: '',
                destination: '',
                noParticipants: '',
                modeOfTravel: '',
                currentLocation: '',
                travelMode: '',
                dateOfTravel: '',
                timeOfTravel: '',
            }
        },
        methods: {
            goToChooseActivity() {
                this.$router.push('/newpost')
            },
            submitForm() {
                axios
                    .post('http://localhost:8080/travelPosts/addtravelpost', {
                        userID: this.userId,
                        title: this.title,
                        description: this.description,
                        destination: this.destination,
                        noParticipants: this.noParticipants,
                        modeOfTravel: this.modeOfTravel,
                        currentLocation: this.currentLocation,
                        travelMode: this.travelMode,
                        dateOfTravel: this.dateOfTravel,
                        timeOfTravel: this.timeOfTravel,
                    })
                    .then((response) => {
                        console.log(response)
                        this.response = response.data
                    })
                    .catch((error) => {
                        this.response = 'Error: ' + error.response.status
                    })
            },
        },
        mounted() {
            const { res } = axios.get('http://localhost:8080/travelPosts/')
            console.log(res)
        },
    }

    function decrement(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
            'button[data-action="decrement"]'
        )
        const target = btn.nextElementSibling
        let value = Number(target.value)
        value--
        target.value = value
    }

    function increment(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
            'button[data-action="decrement"]'
        )
        const target = btn.nextElementSibling
        let value = Number(target.value)
        value++
        target.value = value
    }

    const decrementButtons = document.querySelectorAll(
        `button[data-action="decrement"]`
    )

    const incrementButtons = document.querySelectorAll(
        `button[data-action="increment"]`
    )

    decrementButtons.forEach((btn) => {
        btn.addEventListener('click', decrement)
    })

    incrementButtons.forEach((btn) => {
        btn.addEventListener('click', increment)
    })
</script>
