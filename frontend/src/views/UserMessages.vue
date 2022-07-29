<template>
    <div id="messagesWrapper" class="mx-2">
        <div class="pl-1 pb-1 mb-2 text-3xl border-b-2 text-gray-800 font-sans">
            Messages
        </div>
        <MessageRequests />
        <MessageRequests />
        <MessageRequests />
        <BottomNav />
    </div>
</template>

<script>
    import axios from 'axios'
    import MessageRequests from '../components/MessageRequests.vue'
    import BottomNav from '../components/BottomNav.vue'

    export default {
        name: 'UserMessages',
        components: {
            MessageRequests,
            BottomNav,
        },
        data() {
            return {
                listOfTravelPosts: {},
                myname: {},
                pp: '',
            }
        },

        mounted() {
            this.myname = JSON.parse(localStorage.getItem('userinfo'))
        },
        async created() {
            let user = JSON.parse(localStorage.getItem('user_id'))
            console.log(`fetching ${user} posts`)
            //let userLoc = JSON.parse(localStorage.getItem('user_location'))
            console.log(user)

            axios
                .post('http://localhost:8080/messages', {
                    userId: user,
                })
                .then((response) => {
                    this.listOfTravelPosts = response.data

                    console.log(this.listOfTravelPosts)
                })
        },
    }

    ////----
</script>

<style></style>
