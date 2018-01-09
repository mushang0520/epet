<template>
  <div>
    <cateHeader/>
    <div id="CartBox">
      <div class="mycart">
        <div class="m-emptycoupon ftc bgfff">
          <div ><span class="u-emtcoupon">&nbsp;</span></div>
          <div class="ftc emttip ft16">购物车是空的</div>
          <div class="emt-a mt15">
            <a href="http://wap.epet.com" class="c999 ft16 mr5">去逛逛</a>
            <a href="/zt/knowledge/favorites.html" class="c999 ft16" data-reactid=".0.0.2.1">我的收藏</a></div>
        </div>
        <span></span>
        <div class="chooseaddbg hide"></div>
        <div class="chooseadd hide">
          <p class="addtext">收货地址</p>
          <ul class="choose">
            <li class="handcur tab1 now" >请选择</li>
          </ul>
          <div class="address" >
            <ul class="chooseone" ></ul>
          </div>
          <div class="addclose handcur"></div>
        </div>
        <div class="addresslist hide">
          <p class="addtext">收货地址</p>
          <ul ></ul>
          <p class="handcur choseother">选择其他配送区域</p>
          <div class="addclose handcur" ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cateHeader from '../../components/cateHeader/cateHeader.vue'
  export default {
    components:{
      cateHeader
    }
  }

</script>

<style>
  .u-emtcoupon {
    margin: 50px auto 20px;
    display: inline-block;
    width: 100px;
    height: 100px;
    background: url(./img/cart-ico.png) no-repeat 0 -160px;
    background-size: 105px auto;
  }
</style>
