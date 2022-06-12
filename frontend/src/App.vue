<template>
  <div class="w-full h-screen">
    <TopNav />
    <Post-card />
    <BottomNav />
  </div>
</template>

<script>
  import TopNav from './components/TopNav.vue'
  import BottomNav from './components/BottomNav.vue'
  import PostCard from './components/PostCard.vue'

  export default {
    name: 'App',
    components: {
      TopNav,
      BottomNav,
      PostCard,
    },
  }
</script>

<style></style>
