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
            <div v-if="!user_id" class="mt-20 w-full flex justify-center">
                <div class="mb-3 w-72">
                    <label
                        for="exampleFormControlInput1"
                        class="form-label inline-block mb-2 text-lg text-gray-800"
                        >Enter your Phone Number</label
                    >
                    <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="userPhone"
                        placeholder="+918547866768"
                    />
                </div>
            </div>

            <button
                @click="registerUser()"
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
    const options = {
        client_id: process.env.VUE_APP_clientId, // required
        auto_select: false, // optional
        cancel_on_tap_outside: false, // optional
        context: 'signin', // optional
    }
    let user_id
    let user_name
    let user_email
    let user_picture
    let user_number

    export default {
        data() {
            return {
                userDetails: '',
                user_id: '',
                phone: '',
                currentUser: '',
                isnew: 'true',
            }
        },
        // signin

        mounted() {
            googleOneTap(options, (response) => {
                let jwtresponse = jwt_decode(response.credential)
                console.log(jwtresponse)
                if (jwtresponse) {
                    localStorage.setItem(
                        'user_id',
                        JSON.stringify(jwtresponse.sub)
                    )
                    localStorage.setItem(
                        'name',
                        JSON.stringify(jwtresponse.name)
                    )
                    localStorage.setItem(
                        'email',
                        JSON.stringify(jwtresponse.email)
                    )
                    localStorage.setItem(
                        'picture',
                        JSON.stringify(jwtresponse.picture)
                    )
                    localStorage.setItem(
                        'email',
                        JSON.stringify(jwtresponse.email)
                    )
                }
                console.log('hihi')

                console.log(user_picture)

                if (user_id) {
                    this.$router.push({ name: 'home' })
                }
                console.log(this.user_id)
                this.checkuserExists()

                // this.$router.push({ name: 'home' })
                // this.$router.push({ name: 'home' })
                // this.$router.push({ name: 'home' })
            })

            // user_id = JSON.parse(localStorage.getItem('userid'))
            // user_name = JSON.parse(localStorage.getItem('name'))
            // user_email = JSON.parse(localStorage.getItem('email'))
            // user_picture = JSON.parse(localStorage.getItem)('picture')
        },

        methods: {
            mounted() {
                // let br_user = JSON.parse(localStorage.getItem('user_id'))
                // if (br_user) {
                //     this.$router.push({ name: 'home' })
                // }
            },
            // router
            goToHome() {
                this.$router.push({
                    name: 'home',
                    // params: { currentUser: userDetails.sub },
                })
            },
            // backend api calls
            checkuserExists(registerUser) {
                console.log('userexists')
                user_id = JSON.parse(localStorage.getItem('user_id'))
                console.log(user_id)

                axios
                    .post('http://localhost:8080/users/checkifuserexists', {
                        userId: user_id,
                    })
                    .then((response) => {
                        console.log(response)
                        if (!response) {
                            this.isnew = true
                            console.log(this.isnew)
                            registerUser()
                        }
                    })
            },

            registerUser() {
                user_number = document.getElementById('userPhone').value
                console.log(user_number)
                localStorage.setItem('phone', JSON.stringify(user_number))
                // user_number = JSON.parse(localStorage.getItem('phone'))

                console.log('register invoked')
                user_id = JSON.parse(localStorage.getItem('user_id'))
                user_name = JSON.parse(localStorage.getItem('name'))
                user_email = JSON.parse(localStorage.getItem('email'))
                user_picture = JSON.parse(localStorage.getItem('picture'))
                user_number = JSON.parse(localStorage.getItem('phone'))
                axios
                    .post('http://localhost:8080/users/registeruser', {
                        user_id,
                        user_name,
                        user_picture,
                        user_email,
                        user_number,
                    })
                    .then((response) => {
                        console.log(response)
                    })
                this.$router.push({ name: 'home' })
            },
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
