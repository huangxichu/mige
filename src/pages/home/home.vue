<template>
  <div class="mg_home"  :style="innerStyle">
    <home-header></home-header>
    <home-carousel></home-carousel>

    <div class="row"  style="margin-top: 20px!important;">
      <div class="col-md-12">
        <div class="module-full-screen-title">
          <h2>产品中心</h2>
          <div class="module-title-content"><i class="mark-left"></i>
            <h3>PRODUCT CENTER</h3>
            <i class="mark-right"></i></div>
        </div>
      </div>
    </div>
    <center>
      <div style="max-width: 1200px;">
        <div class="row" style="margin:10px 5px;" v-if="products1.length > 0">
          <div class="col-md-3" v-for="product in products1" :key="product.id">
            <div class="product-item">
              <div class="portfolio-img"><a href="javascript:;" target="_blank"><img :src="product.pic" :alt="product.productName"></a></div>
              <div class="portfolio-title">
                <h2>{{product.productName}}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin:10px 5px;" v-if="products1.length > 0">
          <div class="col-md-3" v-for="product in products2" :key="product.id">
            <div class="product-item">
              <div class="portfolio-img"><a href="javascript:;" target="_blank"><img :src="product.pic" :alt="product.productName"></a></div>
              <div class="portfolio-title">
                <h2>{{product.productName}}</h2>
              </div>
            </div>
          </div>
        </div>
        </div>
    </center>
    <div class="row">
      <div class="col-md-12">
        <div class="module-full-screen-more"><router-link to="/product">更多产品</router-link></div>
      </div>
    </div>
    <div class="row"  style="margin-top: 20px;">
      <div class="col-md-12">
        <div class="module-full-screen-title">
          <h2>公司介绍</h2>
          <div class="module-title-content"><i class="mark-left"></i>
            <h3>ABOUT US</h3>
            <i class="mark-right"></i></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="qhd-content" style="text-align: center;">
          <p>米格数字科技模型馆经过多个春秋洗礼，由原来单一的物理沙盘设计制作演变为高科技三维立体、多媒体投影、虚拟电子沙盘设计制作；三维动画、平面设计；展示展览；园林绿化、城市景观设计多元化公司。</p>
          <p>米格数字科技馆先后成立西安米格、成都米格、上海米格、昆明米格、长沙米格等五家模型制作基地。</p>
          <p>米格人以创新的精神、扎实的技术、精益求精的态度来服务新老客户!</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="module-full-screen-more"><router-link to="/about">了解更多</router-link></div>
      </div>
    </div>
    <center>
      <div style="max-width: 1200px;">
        <div class="row"  style="margin-top: 20px!important;">
          <div class="col-md-12">
            <div class="module-full-screen-title">
              <h2>新闻资讯</h2>
              <div class="module-title-content"><i class="mark-left"></i>
                <h3>NEWS CNTER</h3>
                <i class="mark-right"></i></div>
            </div>
          </div>
        </div>
        <div class="row headlines-list-2col clearfix">
          <div class="col-md-6">
            <div class="headlines-content fadeInUp animated" data-animate="fadeInUp" data-delay="200" v-if="topNews != null">
              <p style="margin-left:5%;text-align: left;"><a href="javascript:;"><img :src="topNews.pic" height="217" alt="新闻资讯"></a></p>
              <h2 style="margin-left:5%;text-align: left;"><a href="javascript:;" target="_blank">{{topNews.title}}</a></h2>
              <div class="headlines-content-summary" style="margin-left:5%;text-align: left;">
                <div class="qhd-content">
                  <p> {{topNews.introduction}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="headlines-others fadeInUp animated" data-animate="fadeInUp" data-delay="400">
              <div class="entry-list entry-list-time-hl entry-set-time-hl">
                <div class="entry-item" v-for="item in news" :key="item.id">
                  <div class="time">
                    <p class="time-day">{{item.createTimeStr_sub2}}</p>
                    <p class="time-date">{{item.createTimeStr_sub}}</p>
                  </div>
                  <div class="entry-title">
                    <h2 style="text-align: left;"><a href="javascript:;" target="_blank">{{item.title}}</a></h2>
                  </div>
                  <div class="entry-summary">
                    <div class="qhd-content" style="text-align: left;">
                      <p> {{item.introduction}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
    <div class="row">
      <div class="col-md-12">
        <div class="module-full-screen-more"><router-link to="/about">了解更多</router-link></div>
      </div>
    </div>
    <div class="row"  style="margin-top: 20px;">
      <div class="col-md-12">
        <div class="module-full-screen-title">
          <h2>在线留言</h2>
          <div class="module-title-content"><i class="mark-left"></i>
            <h3>ONLINE MESSAGE</h3>
            <i class="mark-right"></i></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <center>
          <div style="max-width: 960px;">
            <el-form ref="messageForm" :model="message" :rules="messageRules" label-width="80px">
              <el-form-item label="姓名" prop="relName">
                <el-input v-model="message.relName"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" prop="phone">
                <el-input v-model="message.phone"></el-input>
              </el-form-item>
              <el-form-item label="留言" prop="messageContext">
                <el-input type="textarea" :rows="7" v-model="message.messageContext"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </center>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="module-full-screen-more"><a href="javascript:;" @click="messageOnline('messageForm')">留言</a></div>
      </div>
    </div>
    <div class="row" style="margin-top: 20px!important;">
      <div class="col-md-12" style="padding: 0!important;">
        <home-footer></home-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import {getHomeProducts,getHomeNews,getHomeTopNews} from './api'
  import {saveYkMessage} from '../sysmanage/message/api'
  import myMarquee from '../../components/marquee/Marquee'
  import HomeFooter from '../../components/homelayout/HomeFooter'
  import HomeHeader from '../../components/homelayout/HomeHeader'
  import HomeCarousel from '../../components/homelayout/HomeCarousel'
  import moment from 'moment'

  export default {
    components: {
      'my-marquee': myMarquee,
      'home-footer': HomeFooter,
      'home-header': HomeHeader,
      'home-carousel': HomeCarousel
    },
    data () {
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入您的手机号，方便我们联系您'));
        } else {
          const reg = /^1[2|3|4|5|6|7|8|9][0-9]\d{8}$/
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
      return {
        innerStyle:'height: 100%;overflow-y: auto;',
        innerHeight: document.body.clientHeight,
        products1:[],
        split_product:4,
        products2:[],
        topNews:null,
        news:[],
        show_top_btn:2,
        message:{},
        messageRules: {
          relName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
          phone: [{ required: true,validator:checkPhone, trigger: 'blur' }],
          messageContext: [{ required: true, message: '请输入您给我们的留言', trigger: 'blur' }]
        }
      }
    },
    methods: {
      messageOnline(formName){
        let _this = this
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.message.companyCode = _this.$companyCode
            saveYkMessage(_this.message,_this).then(function(res) {
              if(res.status == '200'){
                if(res.data.code === '0'){
                  _this.$message({
                    message: '恭喜您留言成功,我们将尽快联系您。',
                    type: 'success'
                  });
                  _this.message={}
                }else{
                  var msg = res.data.message;
                  _this.$notify.warning({
                    title: msg
                  })
                }
              }
            }).catch(function (err) {

            })
          }
        });
      },
      init_product(params){
        let _this = this
        params.companyCode = _this.$companyCode
        getHomeProducts(params,_this).then(function(res) {
          if(res.status == '200'){
            if(res.data.code === '0'){
              var products = res.data.data
              for(var i in products){
                  if(i < _this.split_product){
                    _this.products1.push(products[i])
                  }else{
                    _this.products2.push(products[i])
                  }
              }
            }else{
//              var msg = res.data.message;
//              _this.$notify.warning({
//                title: msg
//              })
            }
          }
        }).catch(function (err) {

        })
      },
      init_news(){
        let _this = this
        getHomeTopNews({companyCode :_this.$companyCode},_this).then(function(res) {
//          console.info(res)
          if(res.status == '200'){
            if(res.data.code === '0'){
              _this.topNews = res.data.data
            }else{
//              var msg = res.data.message;
//              _this.$notify.warning({
//                title: msg
//              })
            }
          }
        }).catch(function (err) {

        })
        getHomeNews({companyCode :_this.$companyCode,page:1,rows:3},_this).then(function(res) {
//          console.info(res)
          if(res.status == '200'){
            if(res.data.code === '0'){
              var news = res.data.data
              for(var i in news){
                var item = news[i]
                item.createTimeStr = moment(new Date(item.createTime)).format("YYYY-MM-DD HH:mm:ss");
                item.createTimeStr_sub = item.createTimeStr.substring(0, 7);
                item.createTimeStr_sub2 = item.createTimeStr.substring(8, 10);
                _this.news.push(item)
              }
            }else{
//              var msg = res.data.message;
//              _this.$notify.warning({
//                title: msg
//              })
            }
          }
        }).catch(function (err) {

        })
      },
      init(){
        let _this = this
        _this.init_product({page:1,rows:8})
        _this.init_news()
      }
    },
    mounted(){
//      window.addEventListener('scroll', this.scrollToTop())
      let _this = this
      _this.init()
//      window.addEventListener('scroll',()=>{console.log(window.scrollY)})
    },
    destroyed () {
//      window.removeEventListener('scroll', this.scrollToTop);
    }
  }
</script>

<style>
  .row{
    margin-left: 0!important;
    margin-right: 0!important;
  }
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
    /*margin-top: 30px;*/
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
    height: 250px;
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
    /*width: 95%;*/
    /*float: left;*/
    display: inline;
    /*margin-right: 5%;*/
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
