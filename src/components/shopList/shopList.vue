<template>
  <div>
    <div class="allmodule module">
      <div class="banner_item">
        <div class="swiper-container">
          <mt-swipe :auto="4000">
            <mt-swipe-item><a href=""><img src="./img/1.jpg"></a></mt-swipe-item>
            <mt-swipe-item><a href=""><img src="./img/2.jpg"></a></mt-swipe-item>
            <mt-swipe-item><a href=""><img src="./img/3.jpg"></a></mt-swipe-item>
            <mt-swipe-item><a href=""><img src="./img/4.jpg"></a></mt-swipe-item>
            <mt-swipe-item><a href=""><img src="./img/5.jpg"></a></mt-swipe-item>
            <mt-swipe-item><a href=""><img src="./img/6.jpg"></a></mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <div>
        <div class="banner_item"></div>
      </div>
      <div class="columnnavdiv">
        <ul class="clearfix hottype pt10 pb10" v-if="menus.length">
          <li class="fl" style="width: 20%;" v-for="(menu,index) in menus" :key="index">
            <a :href="menu.target.param">
              <img :src="menu.image" lazy="loaded">
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div class="xline">
          <div class="page-line"></div>
        </div>
      </div>
      <div>
        <div class="banner_item">
          <div class="swiper-container banner-scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide default_bg"><a
                href="https://sale.epet.com/m/1706/newWelfare.html?pet_type=dog&amp;fw=0" class="pointer"><img
                src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif" lazy="loaded"></a>
              </div>
            </div>
            <div class="swiper-pagination banner-round"></div>
          </div>
        </div>
      </div>
      <!--每日疯抢-->
      <dynamic/>
      <!--e宠团列表-->
      <eGroupBuy/>

      <!--<div class="wap-footer-bar hide" style="display: block;">
        <div class="footer" style="top: -120px;position:relative;display: block;">
          <div class="ft">
            <span class="bt" title="触屏版">触屏版</span>
            <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
            <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
            <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
          </div>
          <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">© wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import dynamic from '../dynamic/dynamic.vue'
  import eGroupBuy from '../eGroupBuy/eGroupBuy.vue'
  export default {
    computed: {
      ...mapState(['main']),
      menus(){
        var m = []
        if (this.main.datas && this.main.datas[2].index == "3047") {
          m = this.main.datas[2].menus
        } else if (this.main.datas) {
          var obj = this.main.datas.find((value, inde) => {
            return value.index == "3047"
          })
          m = obj.menus
        }

        return m
      }
    },
    components: {
      dynamic,
      eGroupBuy
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .allmodule
    .banner_item
      .swiper-container
        width 100%
        height 160px
        img
          width 100%
    .columnnavdiv
      ul
        li
          a
          display block
          height 100%
          img
            width 100%


    .footer div
      font-size: 14px;
      .ft
        padding: 15px 0 5px;
        text-align: center;
        span
          padding-right: 10px;
        .bt
          color: red;

</style>
