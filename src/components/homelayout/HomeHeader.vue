<template>
  <el-container class="home_header">
    <!--<el-header class="header_logo">-->
      <!--<div style="" class="mg_header">-->
        <!--<div style="float: right;font-size: 12px;"><span onclick="var strHref=window.location.href;this.style.behavior='url(#default#homepage)';this.setHomePage('http://www.xxxx.com');" style="CURSOR: hand">设为首页</span>　┃  <router-link to="/contact">联系我们</router-link>　┃  <span style="CURSOR:hand" onclick="window.external.addFavorite('http://www.xxxx.com','湖南米格模型设计有限公司')">加入收藏</span></div>-->
      <!--</div>-->
    <!--</el-header>-->
    <nav class="navbar navbar-default" style="width: 100%;">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!--<a class="navbar-brand" href="#">宝庆堂</a>-->
          <img src="../../assets/img/logo.png" style="height: 50px;width: 50px;">
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><router-link to="/index">首页 <span class="sr-only">(current)</span></router-link></li>
            <!--<li><router-link to="/about/1">公司介绍</router-link></li>-->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><router-link to="/about/1">公司介绍 </router-link></a>
              <ul class="dropdown-menu">
                <li @click="changeAboutPage(1)"><a href="javascript:;">公司简介</a></li>
                <li role="separator" class="divider"></li>
                <li @click="changeAboutPage(2)"><a href="javascript:;">公司人才</a></li>
                <li role="separator" class="divider"></li>
                <li @click="changeAboutPage(3)"><a href="javascript:;">企业文化</a></li>
              </ul>
            </li>
            <li><router-link to="/news">新闻资讯</router-link></li>
            <li><router-link to="/product">产品中心</router-link></li>
            <li><router-link to="/service">服务项目</router-link></li>
            <li><router-link to="/message">在线留言</router-link></li>
            <!--<li><router-link to="/recruit">人才招聘</router-link></li>-->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><router-link to="/recruit/1">人才招聘 </router-link></a>
              <ul class="dropdown-menu">
                <li @click="changeRecruitPage(1)"><a href="javascript:;">人才理念</a></li>
                <li role="separator" class="divider"></li>
                <li @click="changeRecruitPage(2)"><a href="javascript:;">招聘岗位</a></li>
              </ul>
            </li>
            <li><router-link to="/contact">联系我们</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="javascript:;" @click="SetHome('http://172.16.10.100:8880/index')" style="CURSOR: hand" ref="setH">设为首页</a></li>
            <li><a href="javascript:;" @click="AddFavorite('湖南米格模型设计有限公司','http://172.16.10.100:8880/index')"  style="CURSOR: hand">加入收藏</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </el-container>
</template>

<script>
  export default {
    name: 'home-header',
    methods: {
      SetHome(url){
        var obj = this.$refs['setH']
        try{
          obj.style.behavior='url(#default#homepage)';
          obj.setHomePage(url);
        }catch(e){
          if(window.netscape){
            try{
              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e){
              alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
          }else{
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
          }
        }
      },
      AddFavorite(title, url) {
        try {
          window.external.addFavorite(url, title);
        }
        catch (e) {
          try {
            window.sidebar.addPanel(title, url, "");
          }
          catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请进入新网站后使用Ctrl+D进行添加");
          }
        }
      },
      changeAboutPage(value){
        let routeData = this.$router.resolve('/about/'+value)
        window.open(routeData.href, '_self')
      },
      changeRecruitPage(value){
        let routeData = this.$router.resolve('/recruit/'+value)
        window.open(routeData.href, '_self')
      }
    },
    data(){
      return {

      }
    },
    mounted(){

    }
  }

</script>

<style>
  .home_header .el-header{
    height: 107px!important;
  }
  .header_logo{
    height: 107px;
    text-align: center;
    vertical-align: top;
    float: right;
    padding:20px;
    background-image: url(../../assets/img/top_bg_1.jpg);
  }
  .header_btm{
    height: 490px;
    padding:0!important;
  }
  .mg_header a{
    text-decoration: none;
  }
  .mg_header span,.mg_header a{
    font-size: 14px;
    color: black;
  }
  .mg_main_menu{
    padding: 0!important;
  }
  .mg_main_menu .el-menu--horizontal{
    border-bottom: 0!important;
  }
  .mg_carousel{
    height: 390px!important;
  }
  .mg_carousel .el-carousel__container{
    height: 390px!important;
  }

  .navbar-default {
    background-color: #ffffff!important;
    border-color: #ffffff!important;
  }
  .navbar-default .navbar-nav > li > a {
    color: #000000!important;
  }
  /*.navbar-default .navbar-brand {*/
    /*color: #ffffff!important;*/
  /*}*/
  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
    color: #000000!important;
    background-color: #ffffff!important;
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: #000000!important;
  }
  .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {
    background-color: #ffffff!important;
  }
  .home_header a{
    color: #000000;
    text-decoration: none;
  }

  @media screen and (max-width: 1200px) {
    .navbar-header {
      text-align: center;
      margin-left: 44px!important;
    }
    .navbar{
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 1200px) {
    .navbar .nav > li .dropdown-menu {
      margin: 0;
    }
    .navbar .nav > li:hover .dropdown-menu {
      display: block;
    }
    .navbar{
      margin-bottom: 0!important;
    }
  }
</style>
