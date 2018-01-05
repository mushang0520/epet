<template>
  <div>
    <div class="indexheader">
      <div class="indexnavcon">
        <div class="headerbox float-div">
          <div class="main">
            <div class="clearfix pt5 pl10 pr10 pb5">
              <div class="epet-search bgf">
                <div class="fl rela ft14 location">
                  <router-link to="/place">
                    <span class="catordog c89">狗狗站</span>
                    <span class="c89">|</span>
                    <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                    <i></i>
                  </router-link>
                </div>
                <p class="search-text">
                  <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
                    <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                    <span class="eico serach-ico"></span>
                  </a>
                </p>
                <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category ml10">
                  <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
                </a>
              </div>
            </div>
            <router-view></router-view>
          </div>
          <div class="find_nav">
            <div ref="findNav" class="find_nav_left dscroll">
              <div class="find_nav_list dscroll-div" style="width: 140%;">
                <ul class="dscroll-ul" v-if="main.code">
                  <li class="dscroll-li"  v-for="(menu,index) in main.menus" :class="{on: index==NO}" @click="showGreenLine(index)" :key="menu.menu_id">
                    <a v-if="menu.menu_id === '1'" :href="`https://wap.epet.com/main.html?menu_param=${menu.menu_param}&amp;pet_type=${menu.epetPageTag.big_type}&amp;fw=0`">
                      <span class="rela">
                        <span>{{menu.menu_name}}</span>
                      <i></i>
                      </span>
                    </a>
                    <a v-else href="###">
                        <span class="rela">
                          <span>{{menu.menu_name}}</span>
                        <i></i>
                        </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="switchtype">
        <div @click="toggleShow(true)" type="dog" class="go-dog pointer dog"></div>
        <div  ref="changepop" style="transform:scale(0)" class="changepop bgfff">
             <div class="cartc-bg db"></div>
             <div class="cartc-box rela overflow" style="overflow: hidden; display: block;">
               <div class="main">
                 <p class="ftc c999 ft16 rela">DOG
                   <b class="b-line c000 ft12" style="display: block">▁</b>
                 </p>
                 <p class="ftc mt20 ft20 c666">亲爱的小主</p>
                 <p class="ftc c333 ft20" style="height: 32px;line-height: 32px">您即将进入
                   <span>狗狗站</span>
                 </p>
                 <ul class="clearfix ftc change-ul">
                   <li type="cat" class="fl pet1 cat">
                     <img src="//static.epetbar.com/static_web/wap/src/images/change-cat.png">
                     <div class="pet1name">猫猫站</div>
                   </li>
                   <li type="dog" class="fl pet2 mainpet rela dog">
                     <img src="//static.epetbar.com/static_web/wap/src/images/change-dog1.png">
                     <div>狗狗站</div>
                     <b class="current-line c000 ft12">▁</b>
                     <a href="javascript:;" class="cfff ft14 ftc once-into mt15 dib">立即进入</a>
                   </li>
                   <li type="fish" class="fl pet3 fish">
                     <img src="//static.epetbar.com/static_web/wap/src/images/change-fish.png">
                     <div class="pet3name">水族站</div>
                   </li>
                 </ul>
               </div>
             </div>
             <a @click="toggleShow(false)" href="javascript:;" class="cartc-close afff ft20 ftc c666">
               <img src="//static.epetbar.com/static_web/wap/src/images/close2.png"></a></div>
       </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        NO:0
      }
    },
    computed: {
      ...mapState(['main'])
    },
    watch: {
      main(){
        this.main.code && this.$nextTick(() => {
          this.Scroll.refresh()
        })

      }
    },
    methods: {
      toggleShow(isShow){
        if(isShow){
          this.$refs.changepop.style='transform:scale(1)'
        }else{this.$refs.changepop.style='transform:scale(0)'
        }
      },
      showGreenLine(index){
        this.NO=index
      }
    },
    mounted(){
      this.Scroll = new BScroll(this.$refs.findNav, {click: true, scrollX: true})
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .indexheader
    .indexnavcon
      .headerbox
        .main
          .clearfix
            overflow: hidden
            .epet-search
              padding: 8px 0;
              background: #fff;
              text-align: center;
              display: -webkit-box;
              -webkit-box-align: center;
              display: -moz-box;
              -moz-box-align: center;
              width: 100%;
              .location
                float: left
                margin-right: 20px;
              .search-text
                float: left
                a
                  position relative
                  input
                    width: 220px;
                    border: 0;
                    height: 25px;
                    background: #e9e9e9;
                    border-radius: 4px;
                    color: #bcbcbc;
                    text-indent: 10px;
                    font-size: 13px;
                    outline: 0;
                  .serach-ico
                    width: 11px;
                    height: 11px;
                    position: absolute;
                    right: 5px;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    background-position: 0 0;
              .epet-category
                float: left
                display block
                img
                  display block
                  width 25px
                  height 25px
        .find_nav
          width: 100%;
          height: 35px;
          min-width: 320px;
          &>.find_nav_left
            width: 100%;
            overflow hidden
            &>.find_nav_list
              overflow: hidden
              &>.dscroll-ul
                white-space: nowrap;
                overflow: hidden;
                &>.dscroll-li
                  float: left;
                  width: 74.5px;
                  height: 36px;
                  &>a
                    display: block;
                    width: 100%;
                    height: 100%;
                    line-height: 36px;
                    font-size: 14px;
                    text-align: center;
                    color: #666;

    .switchtype
      .go-dog
        background: url(./img/godog.png) no-repeat;
        width: 41px;
        height: 46px;
        background-size: 80px auto;
        position: fixed;
        bottom: 15%;
        right: -1px;
        z-index: 2;
        -webkit-animation: nnh 2.5s steps(2) infinite;
        animation: nnh 2.5s steps(2) infinite;
        @keyframes nnh
          0%
            background-position-x 0px
          100%
            background-position-x -82px


      .changepop
        transition: all .4s linear 0s;
        position: fixed;
        top: 0;
        width: 100%;
        left: 0;
        height: 100%;
        z-index: 104;
        .cartc-bg
          background: #fff;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /*filter: alpha(opacity=100);*/
          -moz-opacity: 1;
          opacity: 1;
          display: none;
          z-index: 101;
        .cartc-box
          width: 100%;
          position: fixed;
          display: block;
          top: 107.5px;
          left: 0px;
          border-radius: 5px;
          z-index: 102;
          .main
            width: 100%;
            overflow hidden
            margin: auto;
            p>.b-line
              width: 100%;
              position: absolute;
              bottom: -4px;
              left: 0;
              text-align: center;
            .change-ul
              margin-top: 35px;
              min-width: 305px;
              padding-left: 10%;
              .cat,.fish
                float left
                width: 25%;
                text-align: center;
                margin-top: 21%;
                img
                  width 100%
              .dog
                float left
                color: #4e9a36;
                width: 40%;
                margin-top: 14%;
                /*.score-enter-active,.score-leave-active
                  transform scale(1)
                .score-enter,.score-leave-to
                  transform scale(0)*/
                img
                  width 100%
                a
                  text-decoration: none;
                  border-radius: 30px;
                  padding: 3px 15px;
                  margin-top: 25px;
                  font-size: 12px;
                  line-height: 1.6;
                  font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
                  background: #4e9a36;
                .current-line
                  width: 100%;
                  position: absolute;
                  top: -58px;
                  left: 0;
                  text-align: center;

        .cartc-close
          width: 100%;
          height: 40px;
          line-height: 50px;
          position: fixed;
          bottom: 20px;
          left: 0;
          display: block;
          border-top: 1px solid #e7e7e7;
          z-index: 103;
          img
            width: 23px;
</style>
