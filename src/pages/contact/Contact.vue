<template>
  <div class="mg_about"  :style="innerStyle">
    <table width="980" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
      <tbody>
      <tr>
        <el-container>
          <el-header style="height: 597px!important;">
            <home-header></home-header>
          </el-header>
          <el-main class="about_main">
            <el-container style="margin-top: 0px!important;">
              <el-aside width="250px">
                <div>
                  <ul>
                    <li><img src="../../assets/img/contact_menu_header.jpg"></li>
                    <li class="category" @click="changePage(1)">联系方式</li>
                    <li class="category" @click="changePage(2)">地理位置</li>
                  </ul>
                </div>
              </el-aside>
              <el-main>
                <div v-if="curr_about_page == 1">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/contact' }">联系我们</el-breadcrumb-item>
                    <el-breadcrumb-item>联系方式</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div class="qhd-content" style="margin-top: 20px;">
                    <p><span style="font-weight: 600;">联系电话：</span>000-84593781</p>
                    <p><span style="font-weight: 600;">联系手机：</span>13725222222</p>
                    <p><span style="font-weight: 600;">联系地址：</span>湖南省长沙市五一广场 </p>
                    <p><span style="font-weight: 600;">公司邮箱：</span>xxxxxxx@QQ.com</p>
                    <p><span style="font-weight: 600;">公司官网：</span>www.xxx.com</p>
                    <p>&nbsp;</p>
                  </div>
                </div>
                <div v-if="curr_about_page == 2">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/contact' }">联系我们</el-breadcrumb-item>
                    <el-breadcrumb-item>地理位置</el-breadcrumb-item>
                  </el-breadcrumb>
                  <my-map></my-map>
                </div>
              </el-main>
            </el-container>
          </el-main>
          <el-footer>
            <home-footer></home-footer>
          </el-footer>
        </el-container>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import HomeFooter from '../../components/homelayout/HomeFooter'
  import HomeHeader from '../../components/homelayout/HomeHeader'
  import Map from '../../components/homelayout/Map'
  export default {
    components: {
      'my-map': Map,
      'home-footer': HomeFooter,
      'home-header': HomeHeader
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
