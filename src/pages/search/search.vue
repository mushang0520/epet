<template>
  <div>
    <div id="Search">
      <div data-reactid=".0">
        <div class="search bgfff clearfix">
          <span class="fl back-btn"></span>
          <div class="search-wrapper round5" >
            <form id="myform" action="">
              <input ref="skw" v-model="skw" class="search-input" type="text" placeholder="搜索你喜欢的宝贝">
            </form>
            <label>
              <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/search-ico.png" alt="">
            </label>
          </div>
          <router-link to="/keylist" :kw="skw" class="search-btn">搜索
            <!--<a @click="search" class="search-btn">搜索</a>-->
          </router-link>

        </div>
        <div class="hot" >
          <p class="title c666" >
            <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/rmss.png" alt="">
            <span>精品推荐</span>
          </p>
          <div class="label clearfix" v-if="wapData.list">
            <a v-for="(keyword,index) in wapData.list" class="fl bgfff round20" :href="`http://wap.epet.com/goodslist.html?extend_pam=keyword:${keyword.words}&amp;fw=0`">{{keyword.words}}</a>
          </div>
        </div>
        <div class="recently">
          <p class="title c666" >
            <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/zjss.png" alt="">
          <span>最近搜索</span></p>
          <div class="wrapper" v-if="keyWordHis.data">
            <a v-for="(item,index) in keyWordHis.data" class="db brand bgfff" :href="`http://wap.epet.com/goodslist.html?extend_pam=keyword:${item}&amp;fw=0`" >{{item}}</a>
          </div>
        </div>
        <div class="empty ftc round5">清空搜索历史</div>
        <div class="medal fixed hide">
          <div class="m-wrapper" >
            <div class="m-container" >
              <div class="m-text" >
                <p class="name" >
                确定要删除所有历史搜索吗？</p>
                <div class="clearfix">
                  <a class="quit fl" >取消</a><a class="confirm fl">确定</a>
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
  export default {
    data(){
      return {
        skw:''
      }
    },
    watch:{
      skw(newSkw){
        localStorage.setItem('skw',newSkw)
        /*this.$store.dispatch('setSKW',{skw})*/
      }
    },
    mounted(){
      this.$store.dispatch('getWapData')
      this.$store.dispatch('getSearchKeyWordHis')
    },
    computed:{
      ...mapState(['wapData','keyWordHis'])
    },
    methods:{

    }
  }

</script>

<style>
  #Search .search {
    padding: 7px 12px;
    display: flex;
    display: -webkit-flex;
  }
  .search .back-btn {
    width: 16px;
    height: 16px;
    margin-top: 8px;
    border-top: 1px solid #999;
    border-left: 1px solid #999;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  #Search .search .search-wrapper {
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    height: 35px;
    line-height: 35px;
    background: #f6f6f6;
    padding: 0 10px;
  }
  .round5 {
    border-radius: 5px;
  }
  #myform {
    width: 90%;
  }
  #Search .search .search-input {
    flex: 1;
    -webkit-flex: 1;
    border: none;
    background: #f6f6f6;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    padding-right: 0;
    padding-left: 0;
  }
  input[type=text] {
    height: 30px;
    -webkit-appearance: none;
    padding: 0 15px;
    background-color: #fff;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    outline: 0;
  }
  label {
    cursor: default;
  }
  #Search .search .search-wrapper img {
    height: 16px;
    margin-top: -2px;
  }
  #Search .search-btn {
    line-height: 32px;
    margin-left: 5px;
    cursor: pointer;
  }
  #Search .title {
    background: #fbfbfd;
    height: 30px;
    line-height: 30px;
    padding-left: 12px;
    font-size: 14px;
  }
  #Search .title img {
    height: 20px;
    margin: -2px 8px 0 0;
  }
  #Search .title {
    background: #fbfbfd;
    height: 30px;
    line-height: 30px;
    padding-left: 12px;
    font-size: 14px;
  }
  #Search .hot .label {
    padding: 0 12px 23px;
  }
  #Search .hot .label a {
    padding: 3px 10px;
    margin: 10px 10px 0 0;
    color: #999;
    /* color: #424242; */
    font-size: 12px;
    border-radius: 15px;
  }
  #Search .title {
    background: #fbfbfd;
    height: 30px;
    line-height: 30px;
    padding-left: 12px;
    font-size: 14px;
  }
  #Search .title img {
    height: 20px;
    margin: -2px 8px 0 0;
  }
  .recently .wrapper {
    padding-left: 12px;
    background: #fff;
  }
  #Search .empty {
    width: 60%;
    margin: 40px auto 60px;
    line-height: 40px;
    font-size: 15px;
    border: 1px solid #777;
  }
  .fixed {
    position: fixed;
  }
  .medal p {
    font-size: 16px;
  }
  .medal .quit {
    background: #777;
  }
  .medal a {
    width: 40%;
    margin: 15px 5%;
    font-size: 13px;
    color: #fff;
    padding: 5px 0;
    border-radius: 5px;
    -webkit-border-radius: 5px;
  }
  .medal .confirm {
    background: #ed4044;
  }
  .medal a {
    width: 40%;
    margin: 15px 5%;
    font-size: 13px;
    color: #fff;
    padding: 5px 0;
    border-radius: 5px;
    -webkit-border-radius: 5px;
  }
  body {
    background: #f4f5f7;
  }
</style>
