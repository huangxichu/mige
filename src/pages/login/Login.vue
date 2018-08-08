<template>
  <div class="p-login p-middle">
    <div style="width: 300px;">
      <div class="row p-row">
        <div class="p-login-input">
          <button class="p-login-submit-button">CMS管理系统</button>
        </div>
      </div>
      <div class="row p-row">
        <div class="p-login-input" :class="{'has-text' : username != ''}">
          <input v-model.trim()="username" placeholder="请输入账号"/>
        </div>
      </div>
      <div class="row p-row">
        <div class="p-login-input" :class="{'has-text' : password != ''}">
          <input v-model="password" type="password" placeholder="请输入密码"/>
        </div>
      </div>
      <div class="row p-row">
        <div class="p-login-input">
          <button class="p-login-submit-button" @click="doLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {requestLogin,getKey} from './api'
  import { setLoginUser } from '../../assets/js/assist'
  import {SHA2} from '../../assets/js/sha'
  import Vue from 'vue'
  export default {
    data () {
      return {
        username: '',
        password: '',
        publicKey:''
      }
    },
    methods: {
      doLogin () {
        var _this = this
        if (this.username === '' || this.password === '') {
          this.$notify.warning({
            title: '请输入账号和密码!'
          })
          return
        }
//        getKey({}).then(res => {
//          if(res.code === '0'){
//            _this.publicKey = res.data
//            console.info(_this.publicKey)
            var c = SHA2(_this.password);
//            let encrypt = new _this.$jsEncrypt()
//            encrypt.setPublicKey(_this.publicKey);
//            encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----\n'+
//              _this.publicKey+
//'\n-----END PUBLIC KEY-----')
//            var encryptData = encrypt.encrypt(_this.password);//加密后的字符串
            requestLogin({b: _this.username, c: c,a:_this.$companyCode,p:_this.publicKey}).then(res => {
//              console.info(res)
              if(res.data.code === '0'){
                var user = res.data.data.userInfo
                user.token = res.data.data.token
                setLoginUser(user)
                _this.$router.push('/sys')
              }else if(res.data.code === '2002'){
                _this.doLogin()
              }else{
                var msg = res.data.message;
                _this.$notify.warning({
                  title: msg
                })
              }
            }).catch(this.handleError)
          }
//        }).catch(this.handleError)
//      }
    },
    mounted(){
      var _this = this
//      getKey({}).then(res => {
//        if(res.code === '0'){
//          _this.publicKey = res.data
//        }
//      }).catch(this.handleError)
    }
  }
</script>

<style>

</style>
