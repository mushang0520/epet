<template>
  <div>
    <div class="surprise_day" ><!---->
      <div class="surprise" v-if="dynamic.data">
        <div class="surprise-tit clearfix pad10 rela overflow">
          <div class="fl titimg">
            <img src="./img/suprice.png">
          </div>
          <div class="fl ft13 ml10" style="margin-top: 1px;">距本场结束</div>
          <div class="fl surprise-time hide">{{dynamic.data['3'].time}}</div>
          <div class="time ftc fl ml5">
            <div class="time1 dib clearfix ft12 dtime">
              <span class="time1-1">{{hour}}</span>
              <span class="time-zi ft12">:</span>
              <span class="time1-1">{{min}}</span>
              <span class="time-zi ft12">:</span>
              <span class="time1-1">{{sec}}</span>
            </div>
          </div>
          <div class="more">
            <a href="http://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0" class="db ftr">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/10/bc4f0db8483e9084f5923cb92bfe2b7a.jpg">
            </a>
          </div>
        </div>
        <div class="surprise-pro pl5 mb10">
          <div ref="sps">
            <div  class="surprise-scroll " :style="`width:${dynamic.data['3'].goods.length*100+100}px`">
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;" v-for="(good,index) in dynamic.data['3'].goods" :key="index">
                <div class="pro-block">
                  <a href="http://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                    <div class="thispro-img loadimg-nofixed">
                      <img class="image" style="width: 100%" :src="good.image.image">
                    </div>
                    <div class="cred ftc mt5">
                      <span class="ft12">¥</span>
                      <span class="ft17">{{good.sale_price}}</span>
                    </div>
                    <p class="c999 ftc ft12">{{good.little_price}}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        //endTime:this.dynamic&&this.dynamic.sys_time
        hour:'00',
        min:'00',
        sec:'00',
        timer:0
      }
    },
    computed:{
      ...mapState(['dynamic'])

      },
    mounted (){
      this.$store.dispatch('getDynamic',{cb:()=>{
        this.$nextTick(()=>{
          console.log('this.$watch');
          if (this.scroll) {
            this.scroll.refresh()
          } else {
            this.$nextTick(() => {
              console.log('this.$refs.sps', this.$refs.sps);
              this.scroll = new BScroll(this.$refs.sps, {click: true, scrollX: true})
            })
          }
          if (!this.timer) {
            let endTime = this.dynamic.data['3'].time * 1
            this.timer = setInterval(() => {
              let date = parseInt((new Date()).getTime().toString().slice(0, 10))
              let timeDiff = endTime - date
              if (timeDiff > 0) {
                let hour = Math.floor(timeDiff / 3600)
                let min = Math.floor((timeDiff - hour * 3600) / 60)
                let sec = (endTime - date) % 60
                this.hour = ('' + hour).length == 1 ? '0' + hour : hour
                this.min = ('' + min).length == 1 ? '0' + min : min
                this.sec = ('' + sec).length == 1 ? '0' + sec : sec
              } else {
                this.hour = '00'
                this.min = '00'
                this.sec = '00'
              }
            }, 1000)
          }
        })
      }})

    },
    beforeDestroy(){
      clearInterval(this.timer)
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
.surprise_day
  .surprise
    .surprise-tit
      .titimg
        img
          display block
          height: 24px;
          margin-left: -20px;
      .time
        .time1
          .time1-1
            border 1px solid #ddd
            padding 1px 2px
            font-size 13px
      .more
        position: absolute;
        top: 2px;
        right: -8px;
        a
          text-align: right;
          display block
          width 100%
          height 100%
          img
            margin: 0 0 0 auto;
            width: 50%;
            border: 0;

    .surprise-pro
      overflow hidden
      .surprise-scroll
        overflow hidden
        .swiper-slide
          float left
          .pro-block
            margin: 0 0.5em;
            a
              display: block;
              .thispro-img
                .image
                  display: block;
                  width 100%

</style>
