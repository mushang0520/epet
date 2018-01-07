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
            <div ref="leftUl" style="height: 100%;overflow: hidden">
              <ul>
                <li v-for="(item,index) in category.categorys" :data-id="item.cateid"
                    @click="showCate(item.cateid)" class="ftc bgfff" :class="{on:item.cateid==cateid}" :key="item.cateid">
                  {{item.name}}
                </li>
              </ul>
            </div>
          </div>
          <div class="rightbox bgfff scrollbar-none">
            <!--type=0-->
            <div v-for="(cate,i) in categoryChildren.cate_list" :key="i" >
              <div v-if="cate.type=='0'" class="sort-detail-list"><!----> <!---->
                <div class="sort-recom bgfff">
                  <div class="hot-recom bbtf3">
                    <a href="javascript:;" class="title c999 db ft12 mt10 pl5">
                      {{cate.title}}
                      <!----></a>
                    <ul class="clearfix">
                      <li v-if="!item.logo" v-for="(item,sy) in cate.list" class="fl mt10">
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
              <!--type=2-->
              <div v-if="cate.type=='2'" class="hot-recom bbtf3">
                <a href="javascript:;" class="title c999 db ft12 mt10 pl5">
                  {{cate.title}}
                </a>
                <ul class="clearfix">
                  <li v-for="(item,sy) in cate.list" class="fl mt10 rela llogo">
                    <a :href="`https://wap.epet.com/brand/bd${item.target.param}.html?fw=0`" class="db">
                      <div v-if="item.recommend">
                        <img src="//static.epetbar.com/static_web/wap/src/images/background/jian.png" class="jian abs">
                      </div>
                      <span v-if="item.tagongyi" class="logo abs cfff ft10">TA公益</span>
                      <div class="img loadimg-nofixed rela overflow">
                        <img class="lheight image" :src="item.logo" lazy="loaded">
                      </div>
                      <p class="ftc ft12  mt5">{{item.name}}</p>
                    </a>
                  </li>

                </ul>
              </div>
              <!--分割线-->
            </div>
          </div>



        </div> <!---->
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
        cateid: localStorage.getItem('cateid') || '88888',
      }
    },
    mounted(){
      this.$store.dispatch('getCategory')
      this.$store.dispatch('getCategoryChildren', {
        cateid: this.cateid,
        cb:()=>{
          this.scroll=new BScroll(this.$refs.leftUl,{click:true})
        }
      })
    },
    computed: {
      ...mapState(['category', 'categoryChildren'])
    },
    methods: {
      showCate(cateid){
        this.$store.dispatch('getCategoryChildren', {cateid})
        this.cateid=cateid
        localStorage.setItem('cateid',cateid)
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

  .kindbox
    margin-top: 43px;
    .leftbox
      position: absolute;
      top: 40px;
      left: 0;
      overflow-y: scroll;
      bottom: 0;
      padding-bottom: 45px;
      ul > li.on
        background: #f3f4f5;
        color: #ed4044;
      ul > li
        padding: 15px 0;
        border-bottom: 1px solid #f3f4f5;
        width: 70px;
        height: 50px;
        font-size: 13px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    .rightbox
      margin-left: 75px;
</style>
