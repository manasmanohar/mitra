<template>
    <div>
        <TopNav />
        <div
            id="g_id_onload"
            data-client_id="YOUR_GOOGLE_CLIENT_ID"
            data-login_uri="https://your.domain/your_login_endpoint"
            data-your_own_param_1_to_login="any_value"
            data-your_own_param_2_to_login="any_value"
        ></div>

        <div id="loginPage">
            <div
                class="left bg-green-200 rounded-lg h-72 flex flex-row justify-center items-center"
            >
                <img
                    class="h-36 w-36 object-center"
                    src="../assets/logo2.png"
                    alt=""
                />
            </div>
            <div
                class="right bg-pink-400 rounded-lg h-96 flex flex-col text-center justify-center"
            >
                <p class="text-xl">Mitra</p>
                <p class="text-md">Find a Companion near you</p>
            </div>
        </div>
    </div>
</template>

<script>
    import TopNav from '../src/components/TopNav'
    export default {}
</script>

<style></style>
