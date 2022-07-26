<template>
    <div id="landingPage">
        <div
            id="mainsection "
            class="p-4 mt-0 bg-white-100 h-screen flex flex-col flex-grow justify-center items-center"
        >
            <img
                class="h-36 w-36 object-center m-3"
                src="../assets/logo.png"
                alt=""
            />

            <div id="text ">
                <span class="text-2xl">Find a Companion near you</span>
            </div>

            <div class="mt-20 w-full flex justify-center invisible">
                <div class="mb-3 w-72">
                    <label
                        for="exampleFormControlInput1"
                        class="form-label inline-block mb-2 text-gray-700"
                        >Enter your Phone Number</label
                    >
                    <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="userPhone"
                        placeholder="+918547866768"
                    />
                </div>
            </div>

            <button
                @click="goToHome()"
                class="flex flex-row px-6 py-3 mt-4 w-f font-semibold text-white bg-blue-400 border-2 rounded-md shadow outline-nonefocus:outline-none"
            >
                Login
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </button>

            <div
                class="g-signin2"
                data-onsuccess="onSignIn"
                data-theme="dark"
            ></div>

            <!-- <p class="text-xl">Mitra</p>
                <p class="text-md">Find a Companion near you</p> -->
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    import googleOneTap from 'google-one-tap'
    import jwt_decode from 'jwt-decode'
    var userDetails = {}
    const options = {
        client_id: process.env.VUE_APP_clientId, // required
        auto_select: false, // optional
        cancel_on_tap_outside: false, // optional
        context: 'signin', // optional
    }
    export default {
        methods: {
            goToHome() {
                this.$router.push({
                    name: 'home',
                    params: { currentUser: userDetails.sub },
                })
            },
            gsign() {
                googleOneTap(options, (response) => {
                    // Send response to server
                    console.log(response)
                    console.log('hi')
                    console.log(response.sub)
                })
            },
            registerUser() {
                axios
                    .get('http://localhost:8080/user/registeruser', {
                        data: {
                            userid: userDetails.sub,
                            name: userDetails.name,
                            picture: userDetails.picture,
                            email: userDetails.email,
                            number: document.getElementById('userPhone').value,
                        },
                    })
                    .then((response) => console.log(response))
            },
            userExists(userDetails) {
                axios
                    .get('http://localhost:8080/user/userexists', {
                        data: { userid: userDetails.userid },
                    })
                    .then((response) => console.log(response))
            },
        },

        data() {
            return {
                userDetails: '',
                userId: '',
                phone: '',
            }
        },

        mounted() {
            const options = {
                client_id: process.env.VUE_APP_clientId, // required
                auto_select: false, // optional
                cancel_on_tap_outside: false, // optional
                context: 'signin', // optional
            }
            googleOneTap(options, (response) => {
                // Send response to server
                userDetails = jwt_decode(response.credential)
                console.log(userDetails)
                console.log('hi')
                // this.verifyUser(userDetails)
            })
        },
    }
</script>

<style>
    .google-signin-button {
        color: white;
        height: 50px;
        font-size: 16px;
        width: 250px;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>
