<template>
    <div
        id="TopBar"
        class="sticky top-0 z-50 w-full bg-white p-2 h-20 flex items-center justify-between align-top mb-3"
    >
        <img
            src="../assets/logo3.jpg"
            class="mx-auto h-20 w-49"
            alt="mitra_logo"
        />
        <!-- hi {{ user_picture }}
        <img :src="user_picture" class="mx-auto h-20 w-49 ml-0" alt="userdp" /> -->
    </div>
</template>

<script>
    let user_picture
    // console.log(this.user_picture)
    export default {
        data() {
            user_picture = JSON.parse(localStorage.getItem('picture'))
            console.log(user_picture)
            return {
                user_picture: this.user_picture,
            }
        },
        mounted() {
            // user_picture = JSON.parse(localStorage.getItem('picture'))
            // console.log(user_picture)
        },
        methods: {
            getImgUrl() {},
        },
    }
</script>

<style></style>
