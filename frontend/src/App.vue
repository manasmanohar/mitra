<template>
  <div class="w-full h-screen">
    <TopNav />
    <BottomNav />
  </div>
</template>

<script>
  import TopNav from './components/TopNav.vue'
  import BottomNav from './components/BottomNav.vue'

  export default {
    name: 'App',
    components: {
      TopNav,
      BottomNav,
    },
  }
</script>

<style></style>
