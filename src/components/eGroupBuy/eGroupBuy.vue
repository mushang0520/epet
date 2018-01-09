<template>
  <div class="list">
    <div v-for="(ad,i) in ads">
      <div v-if="ad.type=='13'" class="currency_ad">
        <div class="currency-adcon dibimg1">
          <div class="titdiv rela">
            <div class="clum-tit">
              <div style="height: 0" class="leftimg2 titclass ftc">
                <a href="">
                  <img src="" style="max-height: 73px; max-width: 100%;"></a>
              </div>
              <div class="more titclass"><!----></div>
            </div>
          </div>
          <div class="divboximg flex">
            <div v-if="ad.content_images.length == 1" class="divimg" style="width: 100%;height: 160px">
              <a :href="ad.content_images[0][0].target.param" class="default_bg"
                 style="height: 185px;">
                <img name="750x370" style="width:100%" :src="ad.content_images[0][0].image" lazy="loaded">
              </a>
            </div>
            <div v-if="ad.content_images.length == 2" class="divboximg flex">
              <div class="divimg" style="width: 50.13%;">
                <a :href="ad.content_images[0][0].target.param" class="default_bg" style="height: 250px;">
                  <img style="width: 100%;" name="376x500" :src="ad.content_images[0][0].image" lazy="loaded">
                </a>
              </div>
              <div class="divimg" style="width: 49.87%;">
                <a :href="ad.content_images[1][0].target.param" class="default_bg" style="height: 125px;">
                  <img style="width: 100%;" name="374x250" :src="ad.content_images[1][0].image" lazy="loaded">
                </a>
                <a :href="ad.content_images[1][1].target.param" class="default_bg" style="height: 125px;">
                  <img style="width: 100%;" name="374x250" :src="ad.content_images[1][1].image" lazy="loaded">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分割线 -->
      <div v-if="ad.type=='21'" class="custom_tite pt10">
        <div class="titmoudle ftc rela clum-tit pb5">
          <div class="leftimg titclass">
            <img :style="`hight:${ad.value.title_height}px`" :src="ad.value.left.img.image">
          </div> <!---->
          <div>
            <div>
              <div class="more titclass">
                <a
                  :href="`http://wap.epet.com/main.html?menu_param=${ad.value.right.img.target.param}&amp;pet_type=dog&amp;is_single=1&amp;fw=0`">
                  <img :src="ad.value.right.img.image">
                </a>
              </div>
            </div> <!----></div>
        </div> <!----></div>
      <!-- 分割线 -->
      <div v-if="ad.type=='100'" class="xline">
        <div class="page-line"></div>
      </div>
      <!-- 分割线 -->
      <div v-if="ad.type=='1'" class="banner_item">
        <div class="banner-scroll banner-scroll3 ">
          <div class="swiper-wrapper" style="width: 100%; height:160px ">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(item,index) in ad.value" :key="index"><a :href="item.target.param"><img
                style="width: 100%" :src="item.image"></a></mt-swipe-item>
            </mt-swipe>
          </div>
        </div> <!---->
      </div>
      <!-- 分割线 4-->
      <div v-if="ad.type=='104'" class="fashion">
        <div>
          <ul class="cmVideoList cmVideoListIndex">
            <li>
              <a :href="ad.value[0].share_target.param.url">
                <div class="relative imgBox overflow default_bg">
                  <img :src="ad.value[0].share_target.param.image" lazy="loaded">
                  <span class="cmallPlayIco"></span>
                </div>
                <div class="ft12 c999 pad10 ftc">
                  <div class="textover c333">{{ad.value[0].title}}</div>
                  <div>
                    <span class="cmallViewIco mr3"></span>
                    <i>{{ad.value[0].visit}}</i>
                    <span class="ml10 mr10">|</span>{{ad.value[0].time}}
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    data(){
      return {

      }
    },
    computed: {
      ...mapState(['main']),
      ...mapGetters(['ads'])

    },

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .custom_tite
    .titmoudle
      .leftimg
        img
          margin: 0 50% 0 10px;
          max-width: 50%;
          max-height: 73px;

</style>
