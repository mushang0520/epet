<template>
  <div class="app">
    <div class="downloadApp" v-if="isNew">
      <img src="../static/img/downloadApp.jpg">
    </div>
    <div class="header">
      <epetHeader/>
    </div>
    <div id="content">
      <shopList />
    </div>

    <div class="footer">
      <epetFooter />
    </div>
  </div>
</template>

<script>

  import epetHeader from './components/header/header.vue'
  import epetFooter from './components/footer/footer.vue'
  import shopList from './components/shopList/shopList.vue'

  export default {
    data(){
      return {
        isNew: true
      }
    },
    mounted(){
      this.$store.dispatch('getMain')
    },
    components:{
      epetHeader,
      epetFooter,
      shopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    font-size: 15px
    width 100%
    height 100%
    overflow hidden
    .downloadApp
      width: 100%
    .downloadApp > img
      width: 100%
    .footer
      position fixed
      left 0
      bottom 0
      width 100%
      height 94px
      & a
        float left
        font-size 20px
        width 25%
        height 100%
        text-align center
        line-height 94px
</style>
