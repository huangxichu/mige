<template>
  <div class="row p-row p-header"  id="head">
    <div class="p-logo">
      CMS管理系统
    </div>
    <div class="p-header-navbar">
      <ul>
        <!--<c-menu-item path="/nm" icon="users" name="新闻管理" notooltip/>-->
        <!--<c-menu-item path="/product" icon="users" name="产品中心" notooltip/>-->
        <c-menu-item path="/sys" icon="users" name="系统管理" notooltip/>
      </ul>
    </div>
    <div class="p-header-right">
      <span>
        <i class="fa fa-user fa-1x"></i>
      </span>
      <span>{{userName}}</span>
      <span>|</span>
      <span>
        <i class="fa fa-sign-out fa-1x" v-on:click="logout" title="退出登录"></i>
      </span>
    </div>
  </div>
</template>

<script>
  import {requestLogout} from '../../pages/login/api'
  import Vue from 'vue'
  import { getLoginUser } from '../../assets/js/assist'

  export default {
    methods: {
      logout () {
        requestLogout().catch(this.handleError)
        this.$router.push('/')
      }
    },
    data(){
      return {userName:''}
    },
    mounted(){
      var user = getLoginUser()
      this.userName = user.realName
    },
  }

</script>

<style>

</style>
