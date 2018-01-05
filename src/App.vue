<template>
  <div class="app">
    <transition name="router-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>

    <transition name="router-fade">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <div class="footer">
      <epetFooter v-show="$route.meta.isTop"/>
    </div>
  </div>
</template>

<script>


  import epetFooter from './components/footer/footer.vue'

  export default {

    mounted(){
      this.$store.dispatch('getMain')
    },
    components:{
      epetFooter
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    font-size: 15px
    width 100%
    height 100%
    overflow hidden
      .router-fade-enter-active, .router-fade-leave-active
        transition: opacity .3s;
      .router-fade-enter, .router-fade-leave-to
        opacity: 0;

</style>
