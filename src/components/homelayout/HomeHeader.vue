<template>
  <el-container class="home_header">
    <el-header class="header_logo">
      <div style="" class="mg_header">
        <div style="float: right;font-size: 12px;"><span onclick="var strHref=window.location.href;this.style.behavior='url(#default#homepage)';this.setHomePage('http://www.xxxx.com');" style="CURSOR: hand">设为首页</span>　┃  <router-link to="/contact">联系我们</router-link>　┃  <span style="CURSOR:hand" onclick="window.external.addFavorite('http://www.xxxx.com','湖南米格模型设计有限公司')">加入收藏</span></div>
      </div>
    </el-header>
    <el-main class="header_btm">
      <el-container>
        <el-main class="mg_main_menu">
          <el-menu class="el-menu-demo" mode="horizontal" >
            <el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/about">公司介绍</router-link></el-menu-item>
            <!--<el-submenu index="2">-->
            <!--<template slot="title">公司介绍</template>-->
            <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
            <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
            <!--<el-submenu index="2-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
            <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
            <!--</el-submenu>-->
            <!--</el-submenu>-->
            <el-menu-item index="3"><router-link to="/news">新闻资讯</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/product">产品中心</router-link></el-menu-item>
            <el-menu-item index="5">服务项目</el-menu-item>
            <el-menu-item index="6">在线留言</el-menu-item>
            <el-menu-item index="7"><router-link to="/recruit">人才招聘</router-link></el-menu-item>
            <el-menu-item index="8"><router-link to="/contact">联系我们</router-link></el-menu-item>
            <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
          </el-menu>
        </el-main>
        <el-footer class="mg_carousel">
          <el-carousel height="150px" class="mg_carousel">
            <el-carousel-item>
              <img src="../../assets/img/home_bg1.jpg" style="height: 390px;">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../assets/img/home_bg1.jpg" style="height: 390px;">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../assets/img/home_bg1.jpg" style="height: 390px;">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../assets/img/home_bg1.jpg" style="height: 390px;">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../assets/img/home_bg1.jpg" style="height: 390px;">
            </el-carousel-item>
          </el-carousel>
        </el-footer>
      </el-container>
    </el-main>
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

    },
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
    width: 980px;
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
</style>
