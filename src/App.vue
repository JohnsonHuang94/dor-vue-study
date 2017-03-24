<template>
  <div id="app">
    <transition :name="animationName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      animationName: 'bounce'
    }
  }
}
</script>

<style lang="scss" scope>
@import './commom/style/animate';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
