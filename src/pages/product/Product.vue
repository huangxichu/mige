<template>
  <div class="mg_about"  :style="innerStyle">
    <home-header></home-header>
    <home-carousel></home-carousel>
    <table width="980" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
      <tbody>
      <tr>
        <el-container>
          <el-main class="about_main">
            <el-container style="margin-top: 0px!important;">
              <el-aside width="250px">
                <div>
                  <ul>
                    <li><img src="../../assets/img/product_menu_header.jpg"></li>
                    <li class="category" @click="changePage(0)">全部</li>
                    <li class="category" @click="changePage(1)">住宅模型</li>
                    <li class="category" @click="changePage(2)">户型模型</li>
                    <li class="category" @click="changePage(3)">规划模型</li>
                    <li class="category" @click="changePage(4)">壁挂区位模型</li>
                    <li class="category" @click="changePage(5)">地形地貌沙盘模型</li>
                    <li class="category" @click="changePage(6)">工业机械模型</li>
                    <li class="category" @click="changePage(7)">地产动画</li>
                  </ul>
                </div>
              </el-aside>
              <el-main>
                <div v-if="curr_about_page == 0">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/product' }">产品中心</el-breadcrumb-item>
                    <el-breadcrumb-item>全部</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div id="a1portalSkin_ctr332505332505_mainArea" class="module-full-screen-content" style="margin-top: 20px;">
                    <div class="portfolio-list product-list ieCode-del">
                      <ul class="row2-svar-center clearfix">
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product1.jpg" alt="规划模型"></a></div>
                            <div class="portfolio-title">
                              <h2>规划模型</h2>
                            </div>
                          </div>
                        </li>
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product2.jpg" alt="工业机械模型"></a></div>
                            <div class="portfolio-title">
                              <h2>工业机械模型</h2>
                            </div>
                          </div>
                        </li>
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product3.jpg" alt="户型模型"></a></div>
                            <div class="portfolio-title">
                              <h2>户型模型</h2>
                            </div>
                          </div>
                        </li>
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product4.jpg" alt="工业机械模型"></a></div>
                            <div class="portfolio-title">
                              <h2>工业机械模型</h2>
                            </div>
                          </div>
                        </li>
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product5.jpg" alt="住宅模型"></a></div>
                            <div class="portfolio-title">
                              <h2>住宅模型</h2>
                            </div>
                          </div>
                        </li>
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="/a/product/p1/15.html" target="_blank"><img src="../../assets/img/product6.jpg" alt="壁挂区位模型"></a></div>
                            <div class="portfolio-title">
                              <h2>壁挂区位模型</h2>
                            </div>
                          </div>
                        </li>
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product7.jpg" alt="地形地貌沙盘模型"></a></div>
                            <div class="portfolio-title">
                              <h2>地形地貌沙盘模型</h2>
                            </div>
                          </div>
                        </li>
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product8.jpg" alt="地产动画"></a></div>
                            <div class="portfolio-title">
                              <h2>地产动画</h2>
                            </div>
                          </div>
                        </li>

                      </ul>
                    </div>

                  </div>
                </div>
                <div v-if="curr_about_page == 1">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/product' }">产品中心</el-breadcrumb-item>
                    <el-breadcrumb-item>住宅模型</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div class="module-full-screen-content" style="margin-top: 20px;">
                    <div class="portfolio-list product-list ieCode-del">
                      <ul class="row2-svar-center clearfix">
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product5.jpg" alt="住宅模型"></a></div>
                            <div class="portfolio-title">
                              <h2>住宅模型</h2>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
                <div v-if="curr_about_page == 2">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/product' }">产品中心</el-breadcrumb-item>
                    <el-breadcrumb-item>户型模型</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div class="module-full-screen-content" style="margin-top: 20px;">
                    <div class="portfolio-list product-list ieCode-del">
                      <ul class="row2-svar-center clearfix">
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product3.jpg" alt="户型模型"></a></div>
                            <div class="portfolio-title">
                              <h2>户型模型</h2>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div v-if="curr_about_page == 3">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/product' }">产品中心</el-breadcrumb-item>
                    <el-breadcrumb-item>规划模型</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div  class="module-full-screen-content" style="margin-top: 20px;">
                    <div class="portfolio-list product-list ieCode-del">
                      <ul class="row2-svar-center clearfix">
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product1.jpg" alt="规划模型"></a></div>
                            <div class="portfolio-title">
                              <h2>规划模型</h2>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div v-if="curr_about_page == 4">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/product' }">产品中心</el-breadcrumb-item>
                    <el-breadcrumb-item>壁挂区位模型</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div  class="module-full-screen-content" style="margin-top: 20px;">
                    <div class="portfolio-list product-list ieCode-del">
                      <ul class="row2-svar-center clearfix">
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="/a/product/p1/15.html" target="_blank"><img src="../../assets/img/product6.jpg" alt="壁挂区位模型"></a></div>
                            <div class="portfolio-title">
                              <h2>壁挂区位模型</h2>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div v-if="curr_about_page == 5">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/product' }">产品中心</el-breadcrumb-item>
                    <el-breadcrumb-item>地形地貌沙盘模型</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div  class="module-full-screen-content" style="margin-top: 20px;">
                    <div class="portfolio-list product-list ieCode-del">
                      <ul class="row2-svar-center clearfix">
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product7.jpg" alt="地形地貌沙盘模型"></a></div>
                            <div class="portfolio-title">
                              <h2>地形地貌沙盘模型</h2>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div v-if="curr_about_page == 6">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/product' }">产品中心</el-breadcrumb-item>
                    <el-breadcrumb-item>工业机械模型</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div  class="module-full-screen-content" style="margin-top: 20px;">
                    <div class="portfolio-list product-list ieCode-del">
                      <ul class="row2-svar-center clearfix">

                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product2.jpg" alt="工业机械模型"></a></div>
                            <div class="portfolio-title">
                              <h2>工业机械模型</h2>
                            </div>
                          </div>
                        </li>
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product4.jpg" alt="工业机械模型"></a></div>
                            <div class="portfolio-title">
                              <h2>工业机械模型</h2>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
                <div v-if="curr_about_page == 7">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/product' }">产品中心</el-breadcrumb-item>
                    <el-breadcrumb-item>地产动画</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div  class="module-full-screen-content" style="margin-top: 20px;">
                    <div class="portfolio-list product-list ieCode-del">
                      <ul class="row2-svar-center clearfix">
                        <li class="col-3-1 fadeInUp animated" data-animate="fadeInUp">
                          <div class="product-item">
                            <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product8.jpg" alt="地产动画"></a></div>
                            <div class="portfolio-title">
                              <h2>地产动画</h2>
                            </div>
                          </div>
                        </li>

                      </ul>
                    </div>

                  </div>
                </div>
              </el-main>
            </el-container>
          </el-main>
        </el-container>
      </tr>
      </tbody>
    </table>
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
        curr_about_page:0
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

  /*产品*/
  .mg_home ol, .mg_home ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .row2-svar-center:before, .row2-svar-center:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
  .row2-svar-center .col-2-1:nth-of-type(2n+1), .row2-svar-center .col-3-1:nth-of-type(3n+1), .row2-svar-center .col-4-1:nth-of-type(4n+1), .row2-svar-center .col-5-1:nth-of-type(5n+1) {
    clear: both;
  }
  .row2-svar-center .col-4-1 {
    width: 22%;
    margin-right: 3%;
  }
  .row2-svar-center .col-3-1 {
    width: 22%;
    margin-right: 3%;
  }
  .row2-svar-center .col-2-1, .row2-svar-center .col-3-1, .row2-svar-center .col-4-1, .row2-svar-center .col-5-1 {
    float: left;
    min-height: 1px;
  }
  .product-list li {
    margin-bottom: 25px;
    text-align: center;
  }
  .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
  }
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
  .product-item {
    position: relative;
  }
  .product-list li {
    margin-bottom: 25px;
    text-align: center;
  }
  .product-item .portfolio-img {
    background-color: #f2f2f2;
    overflow: hidden;
    position: relative;
    margin-bottom: 13px;
  }
  .portfolio-img a, .portfolio-img img {
    width: 100%;
    display: block;
    overflow: hidden;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    height: 150px;
  }
  .portfolio-img a {
    position: relative;
  }

  .portfolio-title h2{
    font-size: 15px;
    color: black;
  }
  .portfolio-title h2 a{
    color: black;
  }
</style>
