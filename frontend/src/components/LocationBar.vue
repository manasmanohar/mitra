<template>
    <div
        id="LocBar"
        class="bg-white w-full p-3 flex justify-between align-bottom shadow-lg"
    >
        <div class="location flex content-center">
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
    export default {}
</script>

<style></style>
