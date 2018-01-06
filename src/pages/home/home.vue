<template>
  <div>
    <div class="headContent floathearder">
      <div ref="downloadApp" class="overflow " style="display: block;" :class="{floathearder:isMove}" v-if="isNew">
        <div class="overflow rela">
          <span @click="closeDownload" class="clsoebtn">
            <img id="close_down_bar" src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
          </span>
          <div class="downloadApp">
            <a href="http://wap.epet.com/download.html?appname=epetmall" style="display: block;">
              <img src="../../../static/img/downloadApp.jpg">
            </a>
          </div>
        </div>
      </div>
     <!-- <div ref="downloadApp" class="downloadApp" :class="{floathearder:isMove}" v-if="isNew">
        <img src="../../../static/img/downloadApp.jpg">
      </div>-->
      <div ref="header" class="header" :class="{floathearder:isMove}">
        <epetHeader/>
      </div>
    </div>

    <div id="content"  :class="{wid:isNew,widS:!isNew}">
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
        isNew: !(localStorage.getItem('isNew')=='false')
      }
    },
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
      closeDownload(){
        this.isNew=false
        localStorage.setItem('isNew','false')
      },
      test(){
        console.log(this.$refs.downloadApp.scrollHeight);
        console.log(window.scrollHeight);
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headContent
    .clsoebtn
      display: inline-block;
      width: 5%;
      margin-right: 2%;
      vertical-align: middle;
      position: absolute;
      top: 20%;
      left: 2%;
      img
        width: 100%;
    .downloadApp
      width: 100%
      &>img
        width: 100%
  .wid
    position relative
    top: 161px
  .widS
    position relative
    top: 106px
</style>
