<template>
  <div class="p-login p-middle">
    <div style="width: 300px;">
      <div class="row p-row">
        <div class="p-login-input">
          <button class="p-login-submit-button">三湘名医在线</button>
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
        if (this.username === '' || this.password === '') {
          this.$notify.warning({
            title: '请输入账号和密码!'
          })
          return
        }
        requestLogin({loginCode: this.username, password: SHA2(this.password)}).then(res => {
          if(res.data.resultCode === '1'){
            var user = res.data.data
            user.token = user.code
            setLoginUser(res.data.data)
            this.$router.push('/sys')
          }else{
            var msg = res.data.message;
            this.$notify.warning({
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
