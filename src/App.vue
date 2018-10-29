<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    setTimeout(() => {
      this.$store.dispatch('getCoins')
      this.$store.dispatch('getMarketData')
    }, 500)
  }
}
</script>


<style src="@/assets/styles/app.css">
</style>
