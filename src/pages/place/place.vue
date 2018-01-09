<template>
  <div ref="myAddressBox" style="height: 100%">
    <div id="nTalk_post_hiddenElement"
         style="left: -10px; top: -10px; visibility: hidden; display: none; width: 1px; height: 1px;">
    </div>

    <cateHeader ref="cateHeader" :text="'请选择收货地址'"/>
    <!------------------------------------------->
    <div id="myAddressBox" @touchmove.stop="toTop($refs.myAddressBox)">
      <div>
        <div class="pad10 cat-dog clearfix">
          <a href="javascript:;" class="fl db" @click="toggleChecked(0)" :class="{on:checkedNo==0}" type="cat">
            <span class="db ml10 mr10 round30 ftc pt5 pb5">猫猫站</span>
          </a>
          <a href="javascript:;" class="fl db" @click="toggleChecked(1)" :class="{on:checkedNo==1}" type="dog" >
            <span class="db ml10 mr10 round30 ftc pt5 pb5" >狗狗站</span>
          </a>
          <a href="javascript:;" class="fl db" @click="toggleChecked(2)" :class="{on:checkedNo==2}" type="fish">
            <span class="db ml10 mr10 round30 ftc pt5 pb5">水族站</span>
          </a>
        </div>
        <div class="addressbox bgfff" >
          <div ref="pagetop" class="this-pagetop" :class="{floathearder:isTop}">
            <div class="yselect pad10 ft14 btborder">
              <span >{{text}}</span>
              <span>{{checkedPlace||defaultPlace||'重庆'}}</span>
            </div>
          </div>
          <div class="cityList">
            <ul>
              <li v-for="(item,index) in place.places" class="pad10 ft13 btborder" :placeid="item.placeid" @click="showPlace(item.placeid,item.name)" :key="item.placeid" >{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import cateHeader from '../../components/cateHeader/cateHeader.vue'
  export default {
    data(){
      return{
        placeLevel:0,
        cityId:'',
        checkedPlace:localStorage.getItem('defaultPlace')||'',
        isTop:false,
        checkedNo:1,
        text:'当前默认地址：'
      }
    },
    mounted(){
      this.$store.dispatch('getPlace',{'faid':'0'})
    },
    computed:{
      ...mapState(['place','defaultPlace'])
    },
    methods: {
      toggleChecked(checkedNo){
        this.checkedNo=checkedNo
      },
      showPlace(faid,placeName){
        this.placeLevel++;
        this.text='选择新地址：'
        let checkedPlace= this.placeLevel==1?'':this.checkedPlace
        this.cityId=this.cityId?(this.cityId+'_'+faid):faid
        this.checkedPlace=checkedPlace ? (checkedPlace+' '+placeName) : placeName
        this.$store.dispatch('getPlace', {faid})
        if(this.placeLevel==3){
          this.$store.dispatch('setPlace', {cityId:this.cityId,cb:()=>{this.$router.back()}})

        }
      },
      toTop(el){
        console.log(el.getBoundingClientRect());
        let y=el.getBoundingClientRect().top
        this.isTop=y<0?true:false
      }
    },
    components:{
      cateHeader
    }

  }
</script>

<style>
  .floathearder {
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    z-index: 1000;
    box-shadow: 2px 2px 2px #e9e9e9;
  }
</style>
