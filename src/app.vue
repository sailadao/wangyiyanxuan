<template>
  <div class="app">
    <!--显示当前路由组件-->
    <router-view/>

    <Footer/>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer'
  import Header from './components/Header/Header'
  export default {
    components: {
      Footer,
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../static/css/reset.css"
  html,body
    width 100%
    height 100%
    overflow hidden
    .app
      width 100%
      height 100%

</style>
