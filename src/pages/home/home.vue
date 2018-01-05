<template>
  <div>
    <div class="headContent">
      <div ref="downloadApp" class="downloadApp" :class="{floathearder:isMove}" v-if="isNew">
        <img src="../../../static/img/downloadApp.jpg">
      </div>
      <div ref="header" class="header" :class="{floathearder:isMove}">
        <epetHeader/>
      </div>
    </div>

    <div id="content">
      <shopList />
    </div>

    <button @click="test">test</button>
  </div>
</template>

<script>
  import epetHeader from '../../components/header/header.vue'
  import shopList from '../../components/shopList/shopList.vue'

  export default {
    data(){
      return {
        isNew: true
      }
    },
    mounted(){console.log(this.$refs.downloadApp.offsetHeight)},
    computed:{
      scrollTop(){return window.screenTop},
      isMove(){
          console.log(this.scrollTop);
      }
    },
    components:{
      epetHeader,
      shopList
    },
    methods:{
      test(){
        console.log(this.$refs.downloadApp.scrollHeight);
        console.log(window.scrollHeight);
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headContent

    .downloadApp
      width: 100%
      height 55px
      &>img
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
