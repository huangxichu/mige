<template>
  <div class="mg_about"  :style="innerStyle">
    <home-header></home-header>
    <home-carousel></home-carousel>
    <section class="main">
      <div class="page-width clearfix">
        <section class="content float-right">
          <section class="page-title page-title-inner clearfix">
            <div class="breadcrumbs float-left" skinobjectzone="HtmlBreadCrumb_2918">
              <span>当前位置：</span><a href="http://www.gzbqt.com/">首页</a> &gt;
              <a href="javascript:;">公司介绍</a> &gt;
              <a href="javascript:;">公司简介</a>
            </div>
            <!--<div class="page-name float-left">-->
              <!--<h2>产品一类</h2>-->
            <!--</div>-->
          </section>
          <div v-if="curr_about_page == 1">
            <div class="qhd-content" style="margin-top: 20px;">
              <p>米格数字科技模型馆经过多个春秋洗礼，由原来单一的物理沙盘设计制作演变为高科技三维立体、多媒体投影、虚拟电子沙盘设计制作；三维动画、平面设计；展示展览；园林绿化、城市景观设计多元化公司。</p>
              <p>米格数字科技馆先后成立西安米格、成都米格、上海米格、昆明米格、长沙米格等五家模型制作基地。</p>
              <p>米格人以创新的精神、扎实的技术、精益求精的态度来服务新老客户!</p>
              <p>&nbsp;</p>
            </div>
          </div>
          <div v-if="curr_about_page == 2">
            <div class="qhd-content" style="margin-top: 20px;">
              <p>米格人才：技术总监、车间主任由从事本行业12年以上且有到国外受训经验的特级技师来任职；</p>
              <p>各部门负责人由从事本行业9年以高级技师来任职;</p>
              <p>制作人员由从事本行业5-8中高级技师来任职。</p>
              <p>&nbsp;</p>
            </div>
          </div>
          <div v-if="curr_about_page == 3">
            <div class="qhd-content" style="margin-top: 20px;">
              <p>不断倾听和满足用户需求，引导并超越用户需求，赢得用户尊敬;</p>
              <p>通过提升品牌形象，使员工具有高度企业荣誉感，赢得员工尊敬;</p>
              <p>注重企业责任，用心服务，关爱社会、回馈社会，赢得社会尊敬。</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </section>
        <section class="sidebar float-left">
          <section class="page-menu" skinobjectzone="menu_3101">
            <div class="page-menu-content">
              <ul>
                <li class="current" @click="changePage(1)"><a href="javascript:;" style="text-decoration: none;">公司简介</a><i></i></li>
                <li class="" @click="changePage(2)"><a href="javascript:;"  style="text-decoration: none;">公司人才</a><i></i></li>
                <li class="" @click="changePage(3)"><a href="javascript:;"  style="text-decoration: none;">企业文化</a><i></i></li>
              </ul>
            </div>
          </section>
          <div class="clear"></div>
          <div id="a1portalSkin_sidebarAreaA" class="QHDEmptyArea sidebar-content"></div>
        </section>
      </div>
    </section>
    <div class="row" style="margin-top: 20px!important;">
      <div class="col-md-12" style="padding: 0!important;">
        <home-footer></home-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeFooter from '../../components/homelayout/HomeFooter'
  import HomeHeader from '../../components/homelayout/HomeHeader'
  import HomeCarousel from '../../components/homelayout/HomeCarousel'
  export default {
    components: {
      'home-footer': HomeFooter,
      'home-header': HomeHeader,
      'home-carousel': HomeCarousel
    },
    data () {
      return {
        innerStyle:'height: 100%;overflow-y: auto;',
        innerHeight: document.body.clientHeight,
        curr_about_page:1
      }
    },
    methods: {
      changePage(value){
        var page = this
        page.curr_about_page = value
      }
    }
  }
</script>

<style>

  .about_main ul,.about_main li{
    padding: 0;
    margin: 0;
  }
  .about_main li{
    margin-left: 20px!important;
  }
  .about_main{
    padding-top: 0!important;
  }
  .mg_about ul>li{
    list-style-type: none;
  }
  .mg_about ul>li.category{
    /*height: 27px;*/
    border-bottom: solid 1px #E2E2E2;
    padding: 10px 10px 10px 40px;
    font-size: 14px;
    color: #6c6c6c;
    cursor: pointer;
  }

  .qhd-content p{
    text-indent:25px;
    font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: #4d4d4d;
    line-height: 1.8;
    font-size: 14px;
  }
  /*  main*/
  .mg_about .main {
    min-height: 150px;
    height: auto !important;
    _height: 150px;
  }
  section {
    display: block;
  }
  .mg_about .page-width {
    width: 1120px;
    margin: 0 auto;
  }
  .mg_about .content.float-right {
    border-left: 1px solid #E5E5E5;
    padding-left: 50px;
  }
  .mg_about .content {
    width: 750px;
    padding-top: 45px;
    padding-bottom: 65px;
    _overflow: hidden;
  }
  .mg_about .float-right {
    float: right;
    display: inline;
  }
  .mg_about .sidebar {
    width: 280px;
    padding: 45px 0 65px;
  }
  .mg_about .float-left {
    float: left;
    display: inline;
  }
  .mg_about .page-menu {
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .mg_about .clear {
    clear: both;
    visibility: hidden;
    display: block;
    font-size: 0;
    line-height: 0;
  }
  .mg_about .QHDEmptyArea {
    line-height: 0;
    height: 0;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .mg_about .page-menu-content {
    padding: 10px 0 25px;
  }
  .mg_about .page-menu-content ul {
    padding: 0 15px;
  }
  .mg_about .page-menu-content ul li {
    position: relative;
    border-bottom: 1px solid #e5e5e5;
  }
  .mg_about .page-menu-content ul li.current a {
    color: #CE9407;
  }
  .mg_about .page-menu-content ul li a {
    display: block;
    padding: 15px 10px 15px 15px;
    line-height: normal;
    color: #000;
    font-size: 14px;
  }

  .mg_about .page-menu-content ul li.current i {
    background-image: url(../../assets/img/page-menu-c.png);
  }
  .mg_about .page-menu-content ul li i {
    display: block;
    width: 7px;
    height: 12px;
    overflow: hidden;
    position: absolute;
    top: 17px;
    right: 0;
    _right: 15px;
    background: url(../../assets/img/page-menu-c.png) no-repeat 0 0;
  }
  .mg_about .page-title-inner {
    background: none;
    border-bottom: 1px solid #e5e5e5;
    padding: 0;
    margin-bottom: 30px;
  }
  .mg_about .page-title-inner .breadcrumbs {
    padding-left: 16px;
    background: url(../../assets/img/icon-home.png) no-repeat left center;
  }
  .mg_about .page-title .breadcrumbs {
    line-height: 44px;
  }
  .mg_about .breadcrumbs {
    font-size: 12px;
    color: #808080;
  }
  .mg_about .page-title .page-name {
    line-height: 44px;
  }
  .mg_about .page-title .page-name h2 {
    font-size: 20px;
    font-weight: normal;
  }
  .mg_about .breadcrumbs a {
     color: #808080;
   }

  :link, :visited, ins {
    text-decoration: none;
  }
  ol, ul {
    list-style: none;
  }
  @media screen and (max-width: 1200px) {
    .mg_about .page-width, .boxed-layout {
      width: 100%;
    }
    .mg_about .content {
      width: 100%;
      padding: 10px 0 15px;
    }
    .mg_about .sidebar {
      width: 100%;
      padding: 0;
    }
    .mg_about .sidebar .page-menu {
      display: none;
    }
    .mg_about .sidebar .sidebar-content {
      padding: 15px 0 25px;
    }
    .mg_about .page-title-inner {
      display: none;
    }
  }
</style>
