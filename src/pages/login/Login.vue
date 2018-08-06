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
  import {requestLogin} from './api'
  import { setLoginUser } from '../../assets/js/assist'
  import {SHA2} from '../../assets/js/sha'
  import Vue from 'vue'
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      doLogin () {
        var _this = this
//        $companyCode
        if (this.username === '' || this.password === '') {
          this.$notify.warning({
            title: '请输入账号和密码!'
          })
          return
        }
        requestLogin({b: _this.username, c: SHA2(_this.password),a:_this.$companyCode}).then(res => {
          if(res.data.code === '0'){
            console.info(res)
            var user = res.data.data.userInfo
            user.token = res.data.data.token
            setLoginUser(user)
            _this.$router.push('/sys')
          }else{
            var msg = res.data.message;
            _this.$notify.warning({
              title: msg
            })
          }
        }).catch(this.handleError)
      }
    }
  }
</script>

<style>

</style>
