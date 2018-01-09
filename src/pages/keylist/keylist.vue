<template>
  <div>
    <cateHeader :text="'商品列表'"/>
    <!--{{keyList}}-->
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import cateHeader from '../../components/cateHeader/cateHeader.vue'
  export default {
    data(){
      return {
        skw:localStorage.getItem('skw')||'热门'
      }
    },
    computed:{
      ...mapState['keyList']
    },
    mounted(){
      this.$store.dispatch('getSearchList',{keywords:this.skw})
    },
    components:{
      cateHeader
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
