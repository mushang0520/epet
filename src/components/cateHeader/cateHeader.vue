<template>
  <div>
    <div class="wap-top-bar hide" style="display: block;">
      <header class="ftc head-top bgfff zcolor rela">
        <div class="">
          <a @click.prevent="$router.go(-1)" class="aback page-top go-back"></a>
          <span class="ft18 topbar-title">{{text}}</span>
          <div class="zfont ft16 block">
            <a class="zcolor topbar-link "></a>
          </div>
          <span @click="isShow=!isShow" class="mla pull-right Jbur ml J_bur"></span>
        </div>
      </header>
      <transition  name="fade">
        <div ref="fade" style="display: block;overflow: hidden" class="header-quick header-quicknew Jtk" v-show="isShow">
          <router-link to="/">
            <span class="icon1"></span>
            <p>首页</p>
          </router-link>

          <router-link to="/category">
            <span class="icon2"></span>
            <p>商品分类</p>
          </router-link>
          <router-link to="/cart">
            <span class="icon4" id="getCartNum"><em>0</em></span>
            <p>购物车</p>
            </router-link>
          <router-link to="/user">
            <span class="icon5"></span>
            <p>我的e宠</p>
            </router-link>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
  export default {
    props:['text'],
    data(){
      return {
        isShow: false
      }
    },
  }

</script>

<style>
  .header-quick{
    height: 70px;
    overflow: hidden;
  }
  .header-quick a span.icon4 em {
    display: inline-block;
    height: 22px;
    width: 22px;
    color: #fff;
    text-align: center;
    line-height: 18px;
    font-size: 12px;
    background: red;
    border-radius: 1em;
    border: #fff solid 2px;
    position: relative;
    top: -.5em;
    left: 1em;
  }

  i, em {
    font-style: normal;
  }
  .fade-enter-active, .fade-leave-active{
    transition: height .2s linear
  }

  .fade-enter, .fade-leave-to{
    height: 0px;
  }
</style>
