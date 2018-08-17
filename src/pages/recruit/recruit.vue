<template>
  <div class="mg_about"  :style="innerStyle">
    <home-header></home-header>
    <home-carousel></home-carousel>
    <section class="main">
      <div class="page-width clearfix">
        <section class="content float-right">
          <section class="page-title page-title-inner clearfix">
            <div class="breadcrumbs float-left" skinobjectzone="HtmlBreadCrumb_2918">
              <span>当前位置：</span><router-link to="/index">首页</router-link> &gt;
              <a href="javascript:;">人才招聘</a> &gt;
              <a href="javascript:;">{{curr_about_page == 1 ? '人才理念' : '招聘岗位'}}</a>
            </div>
            <!--<div class="page-name float-left">-->
            <!--<h2>产品一类</h2>-->
            <!--</div>-->
          </section>
          <div v-if="curr_about_page == 1">
            <div class="qhd-content" style="margin-top: 20px;">
              <p>在用人上以'忠、诚、能'为衡量标准，坚持以品德第一，能力第二为任用标准，坚持'有德无才，其德可用，有才无德，其才难用'的造才原则。坚持用'待遇、感情、事业'来吸引人、培养人、留用人。注重员工培训，让每一位员工提高与企业共同成长。注重员工职业生涯规划，给每一位人才提供发展空间。</p>
              <p>杰出的人才是杰出企业的基础。我们始终认为，人才是企业经营与发展的灵魂。在人才资源开发方面，我们的人才战略是透过现代人力资源管理实践挖掘员工潜能、提升员工素质、优化人才结构，以提升企业的竞争优势，抢占未来发展制高点，为喜好创新和挑战的人才提供充分施展的舞台，营造个人价值实现的优良环境，追求企业需要和员工需要的最佳结合。</p>
              <p>公司在人力资源管理过程中坚持管理创新、制度创新、观念创新；营造一种公开、公平、公正的环境，建立一套充分发挥个人潜能的机制，给员工提供充分实现自我价值的发展空间。</p>
              <p>&nbsp;</p>
            </div>
          </div>
          <div v-if="curr_about_page == 2">
            <div class="qhd-content" style="margin-top: 20px;">
              <p><span style="font-weight: 600;">招聘岗位：</span></p>
              <p><span style="font-weight: 600;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>设计师 1名 </p>
              <p><span style="font-weight: 600;">岗位职责：</span> </p>
              <p><span style="font-weight: 600;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>1、在部门负责人安排下，独立负责装饰项目的设计工作;</p>
              <p><span style="font-weight: 600;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>2、按设计标准，绘制各类图纸; </p>
              <p><span style="font-weight: 600;">任职资格：</span> </p>
              <p><span style="font-weight: 600;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>1、大专以上学历，室内设计和环艺等相关专业；</p>
              <p><span style="font-weight: 600;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>2、三年及以上同行工作经验；</p>
              <p><span style="font-weight: 600;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>3、能够吃苦耐劳，服从领导安排；</p>
              <p><span style="font-weight: 600;">联系方式：</span></p>
              <p><span style="font-weight: 600;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>xxxxxxx@QQ.com  </p>
              <p>&nbsp;</p>
            </div>
          </div>
        </section>
        <section class="sidebar float-left">
          <section class="page-menu" skinobjectzone="menu_3101">
            <div class="page-menu-content">
              <ul>
                <li   @click="changePage(1)"><a href="javascript:;" style="text-decoration: none;">人才理念</a><i></i></li>
                <li class="" @click="changePage(2)"><a href="javascript:;"  style="text-decoration: none;">招聘岗位</a><i></i></li>
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
        innerStyle:'height: 100%;width:100%;overflow-y: auto;',
        innerHeight: document.body.clientHeight,
        curr_about_page:1
      }
    },
    methods: {
      changePage(value){
        var page = this
        page.curr_about_page = value
      }
    },
    mounted(){
      let _this = this
      var index = _this.$route.params.index
      if (index != undefined && index != '') {
        _this.curr_about_page = index
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
    padding-left: 10px;
  }
  .mg_about .content {
    width: 800px;
    padding-top: 0px;
    padding-bottom: 65px;
    _overflow: hidden;
  }
  .mg_about .float-right {
    float: right;
    display: inline;
  }
  .mg_about .sidebar {
    width: 280px;
    padding: 0px 0 65px;
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
  @media screen and (min-width: 1200px) {
    .mg_about .main {
      margin-top: 30px;
    }
  }
  .row{
    margin-right: 0!important;
    margin-left: 0!important;
  }
</style>
