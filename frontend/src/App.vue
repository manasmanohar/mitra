<template>
  <div class="w-full h-screen flex flex-col realtive">
    <TopNav />
    <LocationBar />
    <PostSelector />
    <BottomNav />
    <div class="cards"></div>
  </div>
</template>

<script>
  import TopNav from './components/TopNav.vue'
  import LocationBar from './components/LocationBar.vue'
  import BottomNav from './components/BottomNav.vue'
  import PostSelector from './components/PostSelector.vue'

  export default {
    name: 'App',
    components: {
      TopNav,
      LocationBar,
      BottomNav,
      PostSelector,
    },
  }
</script>

<style></style>
