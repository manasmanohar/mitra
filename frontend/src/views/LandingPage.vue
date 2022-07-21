<template>
    <div id="landingPage">
        <div
            id="mainection "
            class="p-4 bg-green-200 min-h-100 rounded-lg flex flex-row flex-grow justify-center items-center"
        >
            <img
                class="h-36 w-36 object-center m-3"
                src="../assets/logo.png"
                alt=""
            />

            <div id="text ">
                <!-- <p class="text-6xl bold font-serif">Mitra</p> -->

                <span class="text-2xl italic">Find a Companion near you</span>
            </div>
        </div>

        <div
            class="bg-pink-400 h-40 flex flex-col text-center justify-center items-center"
        >
            <button
                @click="gsign()"
                class="px-6 py-3 mt-4 w-f font-semibold text-gray-900 bg-white border-2 border-gray-500 rounded-md shadow outline-none hover:bg-blue-50 hover:border-blue-400 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline w-4 h-4 mr-3 text-gray-900 fill-current"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                >
                    <path
                        fill="#fbc02d"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                        fill="#e53935"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                        fill="#4caf50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                        fill="#1565c0"
                        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path></svg
                >Sign in with Google
            </button>

            <div
                class="g-signin2"
                data-onsuccess="onSignIn"
                data-theme="dark"
            ></div>

            <!-- <p class="text-xl">Mitra</p>
                <p class="text-md">Find a Companion near you</p> -->
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    import googleOneTap from 'google-one-tap'
    import jwt_decode from 'jwt-decode'
    var userDetails = [{}]
    const options = {
        client_id: process.env.VUE_APP_clientId, // required
        auto_select: false, // optional
        cancel_on_tap_outside: false, // optional
        context: 'signin', // optional
    }
    export default {
        methods: {
            goToHome() {
                this.$router.push('/home')
            },
            gsign() {
                googleOneTap(options, (response) => {
                    // Send response to server
                    console.log(response)
                    console.log('hi')
                })
            },
            verifyUser(userDetails) {
                axios
                    .get('http://localhost:8080/verifyuser', {
                        data: { userid: userDetails.userid },
                    })
                    .then((response) => console.log(response))
            },
        },

        data() {
            return {
                userDetails: {},
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
                this.verifyUser(userDetails)
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
