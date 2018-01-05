<template>
  <div>
    <div class="footernav bottom_menu_bar bgfff bottomBox">
      <ul class="clearfix footernav_ul bgfff">
        <li class="index-a dogon"><router-link to="/home"></router-link></li>
        <li class="type-a"><router-link to="/category"></router-link></li>
        <li class="cart-a"><router-link to="/cart"></router-link></li>
        <li class="myepet-a"><router-link to="/user"></router-link></li>
        <router-view></router-view>
      </ul>
    </div>





  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footernav
    height: 45px;
    box-sizing: content-box;
    .footernav_ul
      height: 45px;
      line-height: 45px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 103;
      border-top: 1px solid #e7e7e7;
      padding-bottom: constant(safe-area-inset-bottom);
      box-sizing: content-box;
      &>li
        float: left;
        width: 25%;
        height: 55px;
        a
          display block
          background: url('./img/img.png') no-repeat;
          background-size: 234px 163px;
          margin: 0 auto;
          height: 40px;
          width: 42px;
          margin-top: 2px;
      .index-a
        .router-link-exact-active
          background-position 0 0
      .index-a
        a
          background-position -82px 0
      .type-a
        .router-link-exact-active
          background-position 0 -41px
      .type-a
        a
          background-position -82px -41px
      .cart-a
        .router-link-exact-active
          background-position 0 -80px
      .cart-a
        a
          background-position -82px -80px
      .myepet-a
        .router-link-exact-active
          background-position 0 -122px
      .myepet-a
        a
          background-position -82px -122px
</style>
