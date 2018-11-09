<template>
  <div id="app">
    <Navigator></Navigator>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script>
  import Navigator from '@/components/Navigator.vue'
  export default {
      components:{
        Navigator
      }
  }
</script>
