<template>
    <div
        id="LocBar"
        class="bg-white w-full p-3 flex justify-between align-bottom shadow-lg"
    >
        <div class="location flex justify-center items-center content-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2 content-center"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
            <span class="font-medium text-md content-center">Kakkanad</span>
        </div>
        <button class="rounded bg-green-300 p-2 content-center">
            Update Location
        </button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                address: '',
                error: '',
                spinner: false,
            }
        },

        methods: {
            locatorButtonPressed() {
                this.spinner = true

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            this.getAddressFrom(
                                position.coords.latitude,
                                position.coords.longitude
                            )
                        },
                        (error) => {
                            this.error =
                                'Locator is unable to find your address. Please type your address manually.'
                            this.spinner = false
                            console.log(error.message)
                        }
                    )
                } else {
                    // this.error = error.message
                    this.spinner = false
                    console.log(
                        'Your browser does not support geolocation API '
                    )
                }
            },
            getAddressFrom(lat, long) {
                axios
                    .get(
                        'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
                            lat +
                            ',' +
                            long +
                            '&key=AIzaSyB3ucjC0uvuW-JqLR1QduKxpLCJCAC_CkE'
                    )
                    .then((response) => {
                        if (response.data.error_message) {
                            this.error = response.data.error_message
                            console.log(response.data.error_message)
                        } else {
                            this.address =
                                response.data.results[0].formatted_address
                            // console.log(response.data.results[0].formatted_address);
                        }
                        this.spinner = false
                    })
                    .catch((error) => {
                        this.error = error.message
                        this.spinner = false
                        console.log(error.message)
                    })
            },
        },
    }
</script>

<style></style>
