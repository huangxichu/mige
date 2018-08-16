<template>
  <div class="mg_about"  :style="innerStyle">
    <home-header></home-header>
    <home-carousel></home-carousel>
    <center>
      <div style="max-width: 1200px;">
        <my-map></my-map>
        <div style="text-align: left;font-size: 14px;margin-bottom: 0px;padding-top: 45px;padding-bottom: 15px;">
          <p style="padding: 5px;">赣州宝庆堂参茸店 </p>
          <p style="padding: 5px;">联系人：赵经理</p>
          <p style="padding: 5px;">电话：0797-8680908/18046774189</p>
          <p style="padding: 5px;">邮箱：439616593@qq.com</p>
          <p style="padding: 5px;">邮编：341000</p>
          <p style="padding: 5px;">网址：www.xxx.com</p>
          <p style="padding: 5px;">地址：赣州市章贡区贸易广场中心街</p>
        </div>
      </div>
    </center>
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
  import Map from '../../components/homelayout/Map'
  export default {
    components: {
      'my-map': Map,
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
      },
      map(){
      }

    },
    mounted(){
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
</style>
