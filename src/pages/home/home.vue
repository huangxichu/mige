<template>
  <div class="mg_home"  :style="innerStyle">
    <home-header></home-header>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
      </ol>
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../../assets/img/home_bg1.jpg" >
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/img/home_bg1.jpg">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/img/home_bg1.jpg">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/img/home_bg1.jpg">
          <div class="carousel-caption">
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <el-container>
          <el-main class="home_main">
            <el-container style="margin-top: 0px!important;">
              <el-main class="product_main">
                <div class="module-full-screen-title">
                  <h2>产品中心</h2>
                  <div class="module-title-content"><i class="mark-left"></i>
                    <h3>PRODUCT CENTER</h3>
                    <i class="mark-right"></i></div>
                </div>
                <!--<my-marquee :lists="lists"></my-marquee>-->
                <div id="a1portalSkin_ctr332505332505_mainArea" class="module-full-screen-content">
                  <div class="portfolio-list product-list ieCode-del">
                    <ul class="row2-svar clearfix">
                      <li class="col-4-1 fadeInUp animated" data-animate="fadeInUp">
                        <div class="product-item">
                          <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product1.jpg" alt="规划模型"></a></div>
                          <div class="portfolio-title">
                            <h2>规划模型</h2>
                          </div>
                        </div>
                      </li>
                      <li class="col-4-1 fadeInUp animated" data-animate="fadeInUp">
                        <div class="product-item">
                          <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product2.jpg" alt="工业机械模型"></a></div>
                          <div class="portfolio-title">
                            <h2>工业机械模型</h2>
                          </div>
                        </div>
                      </li>
                      <li class="col-4-1 fadeInUp animated" data-animate="fadeInUp">
                        <div class="product-item">
                          <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product3.jpg" alt="户型模型"></a></div>
                          <div class="portfolio-title">
                            <h2>户型模型</h2>
                          </div>
                        </div>
                      </li>
                      <li class="col-4-1 fadeInUp animated" data-animate="fadeInUp">
                        <div class="product-item">
                          <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product4.jpg" alt="工业机械模型"></a></div>
                          <div class="portfolio-title">
                            <h2>工业机械模型</h2>
                          </div>
                        </div>
                      </li>
                      <li class="col-4-1 fadeInUp animated" data-animate="fadeInUp">
                        <div class="product-item">
                          <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product5.jpg" alt="住宅模型"></a></div>
                          <div class="portfolio-title">
                            <h2>住宅模型</h2>
                          </div>
                        </div>
                      </li>
                      <li class="col-4-1 fadeInUp animated" data-animate="fadeInUp">
                        <div class="product-item">
                          <div class="portfolio-img"><a href="/a/product/p1/15.html" target="_blank"><img src="../../assets/img/product6.jpg" alt="壁挂区位模型"></a></div>
                          <div class="portfolio-title">
                            <h2>壁挂区位模型</h2>
                          </div>
                        </div>
                      </li>
                      <li class="col-4-1 fadeInUp animated" data-animate="fadeInUp">
                        <div class="product-item">
                          <div class="portfolio-img"><a href="javascript:;" target="_blank"><img src="../../assets/img/product7.jpg" alt="地形地貌沙盘模型"></a></div>
                          <div class="portfolio-title">
                            <h2>地形地貌沙盘模型</h2>
                          </div>
                        </div>
                      </li>
                      <li class="col-4-1 fadeInUp animated" data-animate="fadeInUp">
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
                <div class="module-full-screen-more"><router-link to="/product">更多产品</router-link></div>
              </el-main>
            </el-container>
            <!--<el-container style="margin-top: 20px!important;">-->
              <!--<el-main class="product_main">-->
                <!--<div class="module-full-screen module-full-screen-bg-img" style="">-->
                  <!--<div class="module-inner fadeInUp animated" data-animate="fadeInUp" data-delay="200">-->
                    <!--<div class="page-width">-->
                      <!--<div id="a1portalSkin_ctr332506332506_mainArea" class="module-full-screen-content">-->
                        <!--<div class="qhd-content">-->
                          <!--<p style="text-align: center;font-size: 28px;"><span>匠心</span></p>-->
                          <!--<p style="text-align:center">-->
                            <!--<span>上等茶</span>-->
                            <!--<img src="../../assets/img/index13.jpg">-->
                            <!--<span>上等味</span>-->
                            <!--<img src="../../assets/img/index13.jpg">-->
                            <!--<span>收藏级</span>-->
                            <!--<img src="../../assets/img/index13.jpg">-->
                            <!--<span>非凡品</span>-->
                          <!--</p>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</el-main>-->
            <!--</el-container>-->
            <el-container style="margin-top: 20px!important;">
              <el-main class="product_main">
                <div class="module-full-screen-title">
                  <h2>公司介绍</h2>
                  <div class="module-title-content"><i class="mark-left"></i>
                    <h3>ABOUT US</h3>
                    <i class="mark-right"></i></div>
                </div>
                <div class="qhd-content">
                  <p>米格数字科技模型馆经过多个春秋洗礼，由原来单一的物理沙盘设计制作演变为高科技三维立体、多媒体投影、虚拟电子沙盘设计制作；三维动画、平面设计；展示展览；园林绿化、城市景观设计多元化公司。</p>
                  <p>米格数字科技馆先后成立西安米格、成都米格、上海米格、昆明米格、长沙米格等五家模型制作基地。</p>
                  <p>米格人以创新的精神、扎实的技术、精益求精的态度来服务新老客户!</p>
                  <p>&nbsp;</p>
                </div>
                <div class="module-full-screen-more"><router-link to="/about">了解更多</router-link></div>
              </el-main>
            </el-container>
            <el-container style="margin-top: 20px!important;">
              <el-main class="new_main">
                <div class="module-full-screen-title">
                  <h2>新闻资讯</h2>
                  <div class="module-title-content"><i class="mark-left"></i>
                    <h3>NEWS CNTER</h3>
                    <i class="mark-right"></i></div>
                </div>
                <div id="a1portalSkin_ctr332508332508_mainArea" class="module-full-screen-content">
                  <div class="headlines-list-2col clearfix">
                    <div class="headlines-content fadeInUp animated" data-animate="fadeInUp" data-delay="200">
                      <p><a href="javascript:;"><img src="../../assets/img/news.jpg" height="217" alt="新闻资讯"></a></p>
                      <h2><a href="javascript:;" target="_blank">打造优质营销理念 从立体模型做起</a></h2>
                      <div class="headlines-content-summary">
                        <div class="qhd-content">
                          <p> 近年来，各行各业在营销方面不断的做出努力，但是，由于模型立体感不强，给销售带来一定影响。作为热销的房地产更是如此，有房地产企业负责人表示，由于模型做的不够好，导致前期营销出现差错，很多业主期待看到更直观的模型，可是，宣传过程中没有该类模型就给营销带来一定的阻碍...</p>
                        </div>
                      </div>
                    </div>
                    <div class="headlines-others fadeInUp animated" data-animate="fadeInUp" data-delay="400">
                      <div class="entry-list entry-list-time-hl entry-set-time-hl">
                        <div class="entry-item">
                          <div class="time">
                            <p class="time-day">20</p>
                            <p class="time-date">2017-10</p>
                          </div>
                          <div class="entry-title">
                            <h2><a href="javascript:;l" target="_blank">沙盘模型的实用价值和艺术收藏价值</a></h2>
                          </div>
                          <div class="entry-summary">
                            <div class="qhd-content">
                              <p>沙盘制作是一门艺术，更是一种学问。模型不同于流水线上的物品，能够有统一的尺寸、样式，它们有着不同的造型，甚至是不同的个性。每个模型都是有自己的灵魂，自己的生命的。除了大自然所赋予的属性外...</p>
                            </div>
                          </div>
                        </div>
                        <div class="entry-item">
                          <div class="time">
                            <p class="time-day">20</p>
                            <p class="time-date">2017-10</p>
                          </div>
                          <div class="entry-title">
                            <h2><a href="javascript:;" target="_blank">如何看房屋模型</a></h2>
                          </div>
                          <div class="entry-summary">
                            <div class="qhd-content">
                              <p>沙盘盘模型是展示一商品住宅开发项目整体风貌的绝佳道具，一般来说，模型是比较准确的，但由于以下原因，模型也可能给买房人造成一些误导：　　密度错觉 有不少情形是这样的，沙盘上看起来，楼与楼之间宽松通透，楼间绿化，清新可人，但实际上盖到现房时，才发现楼与楼之间其实非常接近...</p>
                            </div>
                          </div>
                        </div>
                        <div class="entry-item">
                          <div class="time">
                            <p class="time-day">20</p>
                            <p class="time-date">2017-10</p>
                          </div>
                          <div class="entry-title">
                            <h2><a href="javascript:;" target="_blank">模型制作和材料的关系</a></h2>
                          </div>
                          <div class="entry-summary">
                            <div class="qhd-content">
                              <p>模型制作的材料从早期出土的陶土模型、到早期使用木头、纸质材料，再到现在的有机分子材料、合金材料等，这种变化正是得益于材料业的发展。但是，作为模型制作的专业材料还是屈指可数的，远远不能满足模型制作的要求。从某种意义上说，材料限制着模型的表现形式...</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <!--<div class="module-full-screen-more"><a href="/a/product/" target="_blank">了解更多</a></div>-->
              </el-main>
            </el-container>

          </el-main>
          <el-footer>
            <home-footer></home-footer>
          </el-footer>
        </el-container>
    <div class="gotop-wrapper" v-if="show_top_btn == 1"><a href="javascript:;" class="fixed-gotop gotop" style="display: block;" @click="toTop"></a></div>
  </div>
</template>

<script>
  import myMarquee from '../../components/marquee/Marquee'
  import HomeFooter from '../../components/homelayout/HomeFooter'
  import HomeHeader from '../../components/homelayout/HomeHeader'
  export default {
    components: {
      'my-marquee': myMarquee,
      'home-footer': HomeFooter,
      'home-header': HomeHeader
    },
    data () {
      return {
        innerStyle:'height: 100%;overflow-y: auto;',
        innerHeight: document.body.clientHeight,
        lists: [
          '连雨不知春去',
          '一晴方觉夏深'
        ],
        show_top_btn:2
      }
    },
    methods: {
      toTop() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      },
      scrollToTop() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let browserHeight = window.outerHeight;
        console.info(scrollTop)
        console.info(browserHeight)
        if (scrollTop > browserHeight) {
          this.show_top_btn = 1;
        } else {
          this.show_top_btn = 2;
        }
      }
    },
    mounted(){
//      window.addEventListener('scroll', this.scrollToTop())
      let page = this
//      window.addEventListener('scroll',()=>{console.log(window.scrollY)})
    },
    destroyed () {
//      window.removeEventListener('scroll', this.scrollToTop);
    }
  }
</script>

<style>

  .home_main{
    padding-top: 0!important;
  }
  .mg_home ul>li{
    list-style-type: none;
  }
  .mg_home ul>li.category{
    /*height: 27px;*/
    border-bottom: solid 1px #606266;
    padding: 5px;
  }
  .module-full-screen-title {
    margin-bottom: 40px;
    text-align: center;
    margin-top: 20px;
  }
  .module-full-screen-title > h2 {
    line-height: normal;
    font-weight: normal;
    color: #131313;
    font-size: 20px!important;
    font-size: 2rem;
    background: url(../../assets/img/module-title-bg.png) no-repeat center top;
    padding-top: 17px;
  }
  .module-full-screen-title {
    margin-bottom: 40px;
    text-align: center;
  }
  i, cite, em, var, address, dfn {
    font-style: italic;
  }
  .module-full-screen-title > .module-title-content > h3 {
    display: inline-block;
    margin: 0 20px;
    line-height: normal;
    font-weight: normal;
    color: #616161;
    font-size: 22px;
  }
  .module-full-screen-title > .module-title-content > i {
    display: inline-block;
    display: none;
    position: relative;
    top: -5px;
    width: 180px;
    height: 1px;
    overflow: hidden;
    background-color: #d9d9d9;
  }
  .product_main{
    margin:0 20px!important; ;
    padding: 0!important;
  }
  .new_main{
    margin:0 20px!important; ;
    padding: 0!important;
  }
  .qhd-content p{
    text-indent:25px;
    font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: #4d4d4d;
    line-height: 1.8;
    font-size: 14px;
  }
  .module-full-screen-more {
    float: none;
    clear: both;
    margin-top: 30px;
    text-align: center;
  }

  .module-full-screen-more a {
    display: inline-block;
    line-height: 34px;
    padding: 0 35px;
    border: 1px solid #CCCCCC;
    color: #666;
    transition: all 0.5s ease 0s;
    border-radius: 10px;
    text-decoration: none;
  }
  :link, :visited, ins {
    text-decoration: none;
  }
  .module-full-screen-more a:hover{
    color: #ffffff;
    background-color: #664342;
    font-weight: 600;
  }
  /*产品*/
  .mg_home ol, .mg_home ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .row2-svar:before, .row2-svar:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
  .row2-svar .col-2-1:nth-of-type(2n+1), .row2-svar .col-3-1:nth-of-type(3n+1), .row2-svar .col-4-1:nth-of-type(4n+1), .row2-svar .col-5-1:nth-of-type(5n+1) {
    clear: both;
  }
  .row2-svar .col-4-1 {
    width: 22%;
    margin-right: 3%;
  }
  .row2-svar .col-2-1, .row2-svar .col-3-1, .row2-svar .col-4-1, .row2-svar .col-5-1 {
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

  /*分割图片*/
  .module-full-screen-bg-img {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image:url(../../assets/img/indexbg.jpg);
  }

  /*新闻资讯*/
  .headlines-list-2col .headlines-content {
    width: 48%;
    float: left;
    display: inline;
    margin-right: 5%;
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
  .headlines-list-2col .headlines-others {
    overflow: hidden;
  }
  .headlines-list-2col .headlines-content p {
    margin-bottom: 15px;
  }
  .headlines-list-2col .headlines-content p a {
    display: block;
  }
  .headlines-list-2col .headlines-content p img {
    display: block;
    width: 100%;
  }
  fieldset, img {
    border: 0;
  }
  .headlines-list-2col .headlines-content h2 {
    font-size: 16px;
    line-height: normal;
    margin-bottom: 8px;
  }
  .headlines-list-2col .headlines-content-summary {
    font-size: 13px;
    line-height: 1.5;
    color: #666;
  }
  .headlines-list-2col .headlines-content p {
    margin-bottom: 15px;
  }
  .headlines-list-2col .headlines-others .entry-set-time-hl .entry-item {
    border-bottom: none;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .entry-set-time-hl .entry-item {
    padding-left: 80px;
    min-height: 70px;
    height: auto !important;
    _height: 70px;
  }
  .entry-list-time-hl .entry-item {
    position: relative;
    _height: 80px;
  }
  .entry-set-time-hl .time {
    width: 60px;
  }

  .entry-list-time-hl .time {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #f2f2f2;
    text-align: center;
    font-family: Arial;
  }
  .entry-set-time-hl .time-day {
    font-size: 25px;
    line-height: 40px;
  }
  .entry-list-time-hl .time-day {
    display: block;
    border-bottom: 1px solid #fff;
    color: #666;
  }
  .entry-set-time-hl .time-date {
    font-size: 11px;
  }
  .entry-list-time-hl .time-date {
    display: block;
    color: #999;
    line-height: 22px;
  }
  .entry-set-time-hl .entry-title {
    margin-bottom: 10px;
  }
  .entry-set-time-hl .entry-title h2 {
    font-size: 14px;
    /* font-weight: normal; */
  }
  .headlines-list-2col .headlines-others .entry-set-time-hl .entry-summary {
    margin-bottom: -8px;
  }
  .entry-set-time-hl .entry-summary {
    color: #808080;
    font-size: 12px;
  }
  .new_main h2 a{
    color: #000000!important;
    font-weight: 600;
  }
  /* 回到顶部*/
  .gotop-wrapper {
    position: fixed;
    bottom: 50px;
    right: 15px;
    z-index: 1001;
    background-color: rgba(0,0,0,0.3);
  }
  .gotop-wrapper a {
    display: none;
    _display: none !important;
    width: 55px;
    height: 55px;
    overflow: hidden;
    background: url(../../assets/img/icon-gotop-fixed.gif) no-repeat center;
  }
</style>
