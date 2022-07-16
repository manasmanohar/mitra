<template>
    <div
        id="PostSelector"
        class="w-full flex flex-row justify-between p-3 shadow-lg m"
    >
        <button
            v-bind:class="{
                ' active': !clicked1,
            }"
            v-on:click="clicked1 = !clicked1"
            class="h-10 px-5 ml-2 text-blue-600 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline"
        >
            Travel
        </button>

        <button
            v-bind:class="{
                ' active': !clicked2,
            }"
            v-on:click="clicked2 = !clicked2"
            class="h-10 px-5 ml-2 text-blue-600 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline"
        >
            Events</button
        ><button
            v-bind:class="{
                ' active': !clicked3,
            }"
            v-on:click="clicked3 = !clicked3"
            class="h-10 px-5 ml-2 text-blue-600 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline"
        >
            Help</button
        ><button
            v-bind:class="{
                ' active': !clicked4,
            }"
            v-on:click="clicked4 = !clicked4"
            class="h-10 px-5 ml-2 text-blue-600 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline"
        >
            Interest
        </button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                clicked1: 'false',
                clicked2: 'false',
                clicked3: 'false',
                clicked4: 'false',
            }
        },
    }
</script>

<style>
    .active {
        background-color: #636ef1;
        color: white !important;
    }
</style>
