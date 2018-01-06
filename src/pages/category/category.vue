<template>
  <div>
    <div id="categorybox">
      <div class="allkind">
        <header class="clearfix rela top bgfff">
          <div id="1" class="fl sort nav-sort ft13 bold cur"><a href="#tab1"><span>分类</span></a></div>
          <div id="2" class="fl brand nav-sort ft13 bold"><a href="#tab2"><span>品牌</span></a></div>
          <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0"><img
            src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" class="abs search"></a>
        </header>
        <div id="tab1" class="kindbox">
          <div class="leftbox bgfff scrollbar-none">
            <div>
              <ul>
                <li v-for="(item,index) in category.categorys" :data-id="item.cateid" @click="showCate(item.cateid)" class="ftc bgfff on" :key="item.cateid">{{item.name}}</li>
              </ul>
            </div>
          </div>
          <div class="rightbox bgfff scrollbar-none">
            <div class="sort-detail-list"><!----> <!---->
              <div v-for="(cate,i) in categoryChildren.cate_list"  class="sort-recom bgfff" :key="i">
                <div class="hot-recom bbtf3">
                  <a href="javascript:;" class="title c999 db ft12 mt10 pl5">
                  {{cate.title}}
                  <!----></a>
                  <ul class="clearfix">
                    <li v-for="(item,sy) in cate.list" class="fl mt10">
                      <a :href="`https://wap.epet.com/goodslist.html?id_param=${item.id_param}&amp;fw=0`" class="db">
                        <div class="rela loadimg-nofixed">
                          <img class="w100 image" :src="item.photo" lazy="loaded">
                        </div>
                        <p class="ftc ft12 mt10 c333">{{item.name}}</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> <!---->
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getCategory')
      this.$store.dispatch('getCategoryChildren',{cateid:'88888'})
    },
    computed: {
      ...mapState(['category','categoryChildren'])
    },
    methods:{
      showCate(cateid){
        this.$store.dispatch('getCategoryChildren',{cateid})
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .allkind
    .top
      padding: 0 15px;
      border-bottom: 1px solid #cbcbcb;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: 40px;
      z-index: 11;
      .sort
        text-align: right;
        padding-right: 5%;
      .nav-sort
        width: 50%;
        height: 40px;
        line-height: 40px;
      .brand
        padding-left: 5%;
      .nav-sort
        width: 50%;
        height: 40px;
        line-height: 40px;
      a
        .search
          top: 13px;
          right: 15px;
          width: 14px;
          height: 14px;
</style>
