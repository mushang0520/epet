<template>
  <div>
    <header>
      <div class="login_bg" style="background: url(//img1.epetbar.com/2017-09/21/11/2ac7b0a4f0ab1e4a63819e0668d1cb39.png) no-repeat;  background-size: 100% 100%">
        <div class="rela ftc head-top">
          <a href="javascript:void(0)" @click="$router.back()" class="aback page-top"></a>
          <div class="zfont ft16 block">
            <a href="https://wap.epet.com/register.html" class="afff">注册</a>
          </div>
        </div>
        <div class="mlogo">
          <img src="//static.epetbar.com/mpet/images/login/logo.png">
        </div>
        <div class="es_por4">
          <ul id="tags4" class="clearfix login_style">
            <li class="selectTag4">
              <a href="javascript:;" @click="isNameLogin=true">普通登录</a>
              <i :style="`display: ${isNameLogin?'block':'none'};`"></i>
            </li>
            <li class="">
              <a href="javascript:;" @click="isNameLogin=false">手机动态密码登录</a>
              <i :style="`display: ${isNameLogin?'none':'block'};`"></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="bgfff">
      <div class="mformBox">
        <div id="Content">
          <form ref="loginForm" method="post" action="https://wap.epet.com/api.html?cp=login&do=postSubmit&inajax=1">
            <input type="hidden" name="formhash" value="181dc84f88">
            <input type="hidden" id="referer" name="referer" value="https://wap.epet.com/user/UserCenter.html">
            <input type="hidden" name="inajax" value="1">
            <input type="hidden" value="qa7wmzLOo7pMyDy3">
            <input type="hidden" value="" name="imgkey">
            <input type="hidden" value="" name="moid">
            <input type="hidden" value="0" name="yzm">
            <input type="hidden" name="login_fromway" value="2">
            <div class="Content4" id="Content0" :style="`display: ${isNameLogin?'block':'none'};`">
              <ul class="mform">
                <li>
                  <span class="mNameIco"></span>
                  <input v-model="username" type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input v-model="password" type="password" placeholder="输入密码" class="text" name="password" id="password">
                </li>
              </ul>
            </div>
          </form>
          <form method="post" ref="newloginForm" action="https://wap.epet.com/api.html?cp=bdphone&do=sendDynamicCodeByVarify&m=user&inajax=1">
            <input type="hidden" name="formhash" value="181dc84f88">
            <input type="hidden"  name="referer" value="https://wap.epet.com/user/UserCenter.html">
            <input type="hidden" name="inajax" value="1">
            <input type="hidden" name="login_fromway" value="2">
            <input type="hidden" value="" name="moid">
            <input type="hidden" value="qa7wmzLOo7pMyDy3">

            <div class="Content4" id="Content1" :style="`display: ${isNameLogin?'none':'block'};`">
              <ul class="mform">
                <li>
                  <span class="mNumIco"></span>
                  <input type="text" placeholder="已注册的手机号" class="dttext" name="phone" id="bdphone">
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input type="text" placeholder="请输入图片内容" class="dttext" name="varify" id="varify">
                  <span style="display:block;position: absolute;top:5px;right:0px;">
                    <img @click="change($event)" src="https://wap.epet.com/share/seccode.html?hash=5157&amp;height=30&amp;width=85" name="varify" class="codevar" align="absbottom"></span>
                </li>
                <li>
                  <span class="mpasswordIco"></span><input type="text" class="dttext" placeholder="动态密码" name="code" id="code" style="padding-right:8.5em;">
                  <a class="get_phonepass afff ft14 w9 nocode" style="display:none;margin-right:0px">短信已发送</a>
                  <a href="javascript:;" @click="getCode" style="color: #ff4259;" class="get_phonepass afff ft12 " id="scodebtn">获取动态密码</a>
                </li>
              </ul>
              <div class="forget_pass"></div>
            </div>
          </form>
        </div>
      </div>

      <div class="ftc" style="overflow: hidden; padding-left: 2em;padding-right: 2em;">
        <a href="https://wap.epet.com/login.html?do=findpassword" class="btn-register ft14 forget pull-right">忘记密码？</a>
        <div class="clear"></div>
      </div>
      <div class="picture-yz"></div>
      <div class="ftc pt5 loginbtn" id="Content0_btn">
        <a href="javascript:;" @click="login" class="btn-login afff" style="margin:0 4%">登 录</a>
      </div>
      <div style="height:6em"></div>
      <div class="other-login">
        <div class="ftc ft16 mt c666 partners"><b>合作网站登录</b></div>
        <ul class="uList1 clearfix">
          <li>
            <a href="https://passport.epet.com/Oauth.html?type=4&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
              <img src="//static.epetbar.com/mpet/images/login/login_ico4.png">
            </a>
          </li>
          <li>
            <a href="https://passport.epet.com/Oauth.html?type=2&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
              <img src="//static.epetbar.com/mpet/images/login/login_ico2.png">
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import fetch from '../../api/fetch'
  import { MessageBox } from 'mint-ui';
  export default {
    data(){
      return {
        isNameLogin:true,
        username:'',
        password:'',
        username1:'',
        password1:'',
      }
    },
    methods:{
      post(url,data){
        return axios.post(url,data)
      },
      login(){
        if(this.username==''){
          MessageBox.alert('请输入账号！', '警告');
          return
        }
        if(this.password==''){
          MessageBox.alert('请输入密码！', '警告');
          return
        }
        let data={
          system:'wap',
          postsubmit:'r9b8s7m4',
          version:'1.0',
          referer:'https://wap.epet.com/user/UserCenter.html',
          inajax:1,
          imgkey:'',
          moid:"",
          yzm:0,
          login_fromway:2,
          username:this.username,
          password:this.password
        }
        if(this.isNameLogin){
          console.log(this.$refs.loginForm.submit())
        }else{
          this.$refs.newloginForm.submit()
        }

       /* axios.post('/test/api.html?cp=login&do=postSubmit&inajax=1',data).then((res)=>{
          console.log(res);
          MessageBox.alert(res.msg, '警告');
        })*/
        /*let a=fetch('/test/api.html?cp=login&do=postSubmit&inajax=1',data,'POST')
          console.log(a);*/


      },
      getCode(){
        let data={
          system:'wap',
          postsubmit:'r9b8s7m4',
          version:'1.0',
          type:'login',
          phone:122,
          varify:111
        }
        axios.post('/test/api.html?cp=bdphone&do=sendDynamicCodeByVarify&m=user&inajax=1',data).then((res)=>{
          console.log(res);
          MessageBox.alert(res.data, '警告');
        })
      },
      change(event){
        event.target.src='https://wap.epet.com/share/seccode.html?amp;height=30&amp;width=85&_='+Math.random()
      }
    }
  }

</script>

<style>
  .login_bg .mlogo img {
    display: block;
    margin: auto;
    width: 20%;
  }
  .login_style li {
    float: left;
    width: 50%;
    text-align: center;
    height: 44px;
    line-height: 44px;
    position: relative;
  }
  .mNumIco {
    float: left;
    display: inline;
    width: 17px;
    height: 17px;
    background: url(./img/ico1.png) no-repeat;
    background-size: contain;
    margin: 2px 0 0 -25px;
  }
  .mpasswordIco {
    float: left;
    display: inline;
    width: 17px;
    height: 20px;
    margin: 0px 0 0 -25px;
    background: url(./img/ico4.png) no-repeat;
    background-size: contain;
  }
  .nocode {
    background: #f5f5f5;
    color: #b8b8b8;
    border: 1px solid #b8b8b8;
  }
  .get_phonepass {
    background: #fff;
    color: #ff4259;
    border: 1px solid #eb4c33;
    position: absolute;
    right: 0;
    top: 0.5em;
    border-radius: 3px;
    width: 100px;
    text-align: center;
    padding: 0.3em 0;
  }
  .get_phonepass {
    background: #fff;
    color: #ff4259;
    border: 1px solid #eb4c33;
    position: absolute;
    right: 0;
    top: 0.5em;
    border-radius: 3px;
    width: 100px;
    text-align: center;
    padding: 0.3em 0;
  }
  .mNameIco {
    float: left;
    display: inline;
    width: 17px;
    height: 21px;
    background: url(./img/ico3.png) no-repeat;
    background-size: contain;
    margin: 1px 0 0 -25px;
  }
  .mform li input {
    display: block;
    height: 21px;
    width: 100%;
    font-size: 15px;
    border: none;
    padding: 0px;
    color: #666;
    font-family: "Microsoft Yahei",tahoma,arial;
    outline: none;
  }
  .mform li input {
    display: block;
    height: 21px;
    width: 100%;
    font-size: 15px;
    border: none;
    padding: 0px;
    color: #666;
    font-family: "Microsoft Yahei",tahoma,arial;
    outline: none;
  }
  input[type="text"] {
    height: 30px;
    -webkit-appearance: none;
    padding: 0 15px;
    background-color: #fff;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    outline: none;
  }
  input[type="text"] {
    height: 30px;
    -webkit-appearance: none;
    padding: 0 15px;
    background-color: #fff;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    outline: none;
  }

  .partners {
    color: #d7d7d7;
    margin-top: 0.5em;
  }
  .uList1 {
    padding: 1.5em 0;
  }
  .uList1 li {
    width: 33.3%;
    padding: 0 1.2em;
    float: left;
    display: inline;
  }
  .uList1 li a {
    display: block;
  }
  .uList1 li img {
    width: 60%;
    height: auto;
    display: block;
    margin: auto;
    max-width: 176px;
  }
  .login_style li a {
    font-size: 15px;
    color: #fff;
    display: block;
  }
  .afff {
    color: #fff;
  }
  .login_style li i {

    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: auto;
  }
  i {
    font-style: normal;
  }
  .mlogo {
    padding: 1em 0 2em 0;
  }
  .es_por4 {
    background-color: rgba(255,255,255,0.3);
  }
  .login_bg .head-top .aback {
    background: url(./img/personal-bico3.png) no-repeat;
    background-size: 12px 17px;
  }
  .head-top .aback {
    background: url(./img/personal-bico3.png) no-repeat;
    background-size: 9px 17px;
    display: block;
    width: 22px;
    height: 20px;
    position: absolute;
    margin-top: 16px;
  }
  .login_bg .head-top .zfont {
    right: 10px;
  }
  .head-top .zfont {
    position: absolute;
    right: 2.5em;
    top: 0;
  }
  .mformBox {
    background: #fff;
    border-radius: 0.5em;
    margin: 0em 4% 1em 4%;
    padding: 0 1.6%;
  }
  .mform li {
    border-bottom: #e2e2e2 solid 1px;
    padding: 12px 0 12px 30px;
    position: relative;
  }
  .btn-login {
    display: block;
    letter-spacing: 5px;
    margin: 0 10%;
    border-radius: 5px;
    background: #2ec975;
    font-size: 15px;
    padding: .6em 0;
    text-align: center;
  }


</style>
