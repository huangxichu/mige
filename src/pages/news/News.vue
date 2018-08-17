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
                    <li><img src="../../assets/img/news_menu_header.jpg"></li>
                    <li class="category" @click="changePage(1)">公司新闻</li>
                    <li class="category" @click="changePage(2)">行业新闻</li>
                  </ul>
                </div>
              </el-aside>
              <el-main>
                <div v-if="curr_about_page == 1">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/news' }">新闻资讯</el-breadcrumb-item>
                    <el-breadcrumb-item>公司新闻</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div style="margin-top: 20px;">
                    <ul >
                      <li class="category" v-for="item in newsData1" :key="item" style="padding: 10px 0!important;height: 30px;">
                        <div style="float: left;">{{item.title}}</div>
                        <div style="float: right;">{{item.date}}</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-if="curr_about_page == 2">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/news' }">新闻资讯</el-breadcrumb-item>
                    <el-breadcrumb-item>行业新闻</el-breadcrumb-item>
                  </el-breadcrumb>

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
        curr_about_page:1,
        newsData1: [{
          title: '公司新闻1',
          date: '2016-05-03',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          title: '公司新闻2',
          date: '2016-05-02',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          title: '公司新闻3',
          date: '2016-05-04',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          title: '公司新闻4',
          date: '2016-05-01',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          title: '公司新闻5',
          date: '2016-05-08',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          title: '公司新闻6',
          date: '2016-05-06',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          title: '公司新闻7',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
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
  .row{
    margin-right: 0!important;
    margin-left: 0!important;
  }
</style>
