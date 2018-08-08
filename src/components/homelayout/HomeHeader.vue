<template>
  <el-container class="home_header">
    <!--<el-header class="header_logo">-->
      <!--<div style="" class="mg_header">-->
        <!--<div style="float: right;font-size: 12px;"><span onclick="var strHref=window.location.href;this.style.behavior='url(#default#homepage)';this.setHomePage('http://www.xxxx.com');" style="CURSOR: hand">设为首页</span>　┃  <router-link to="/contact">联系我们</router-link>　┃  <span style="CURSOR:hand" onclick="window.external.addFavorite('http://www.xxxx.com','湖南米格模型设计有限公司')">加入收藏</span></div>-->
      <!--</div>-->
    <!--</el-header>-->
    <nav class="navbar navbar-default" style="width: 100%;margin-bottom: 0!important;">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">米格</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">首页 <span class="sr-only">(current)</span></a></li>
            <li><a href="#">公司介绍</a></li>
            <li><a href="#">新闻资讯</a></li>
            <li><a href="#">产品中心</a></li>
            <li><a href="#">服务项目</a></li>
            <li><a href="#">在线留言</a></li>
            <li><a href="#">人才招聘</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
            <li><a href="javascript:var strHref=window.location.href;this.style.behavior='url(#default#homepage)';this.setHomePage('http://www.xxxx.com');"  style="CURSOR: hand">设为首页</a></li>
            <li><a href="javascript:window.external.addFavorite('http://www.xxxx.com','湖南米格模型设计有限公司');"  style="CURSOR: hand">加入收藏</a></li>
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
    background-color: #15a701!important;
    border-color: #15a701!important;
  }
  .navbar-default .navbar-nav > li > a {
    color: #ffffff!important;
  }
  .navbar-default .navbar-brand {
    color: #ffffff!important;
  }
  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
    color: #ffffff!important;
    background-color: #48b104!important;
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: #ffffff!important;
  }
  .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {
    background-color: #48b104!important;
  }
</style>
