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
                    <li><img src="../../assets/img/about_menu_header.jpg"></li>
                    <li class="category" @click="changePage(1)">公司简介</li>
                    <li class="category" @click="changePage(2)">公司人才</li>
                    <li class="category" @click="changePage(3)">企业文化</li>
                    <!--<li class="category">户型模型</li>-->
                    <!--<li class="category">户型模型</li>-->
                    <!--<li class="category">户型模型</li>-->
                    <!--<li class="category">户型模型</li>-->
                    <!--<li class="category">户型模型</li>-->
                  </ul>
                </div>
                <!--<div style="margin-top: 20px;">-->
                    <!--<ul>-->
                      <!--<li style="font-size: 16px;padding-left: 20px;font-weight: 600;">湖南米格模型设计有限公司</li>-->
                      <!--<li style="font-size: 16px;padding-left: 20px;font-weight: 600;">联系我们</li>-->
                    <!--</ul>-->
                <!--</div>-->
              </el-aside>
              <el-main>
                <div v-if="curr_about_page == 1">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/about' }">公司介绍</el-breadcrumb-item>
                    <el-breadcrumb-item>公司简介</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div class="qhd-content" style="margin-top: 20px;">
                    <p>米格数字科技模型馆经过多个春秋洗礼，由原来单一的物理沙盘设计制作演变为高科技三维立体、多媒体投影、虚拟电子沙盘设计制作；三维动画、平面设计；展示展览；园林绿化、城市景观设计多元化公司。</p>
                    <p>米格数字科技馆先后成立西安米格、成都米格、上海米格、昆明米格、长沙米格等五家模型制作基地。</p>
                    <p>米格人以创新的精神、扎实的技术、精益求精的态度来服务新老客户!</p>
                    <p>&nbsp;</p>
                  </div>
                </div>
                <div v-if="curr_about_page == 2">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/about' }">公司介绍</el-breadcrumb-item>
                    <el-breadcrumb-item>公司人才</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div class="qhd-content" style="margin-top: 20px;">
                    <p>米格人才：技术总监、车间主任由从事本行业12年以上且有到国外受训经验的特级技师来任职；</p>
                    <p>各部门负责人由从事本行业9年以高级技师来任职;</p>
                    <p>制作人员由从事本行业5-8中高级技师来任职。</p>
                    <p>&nbsp;</p>
                  </div>
                </div>
                <div v-if="curr_about_page == 3">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/about' }">公司介绍</el-breadcrumb-item>
                    <el-breadcrumb-item>企业文化</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div class="qhd-content" style="margin-top: 20px;">
                    <p>不断倾听和满足用户需求，引导并超越用户需求，赢得用户尊敬;</p>
                    <p>通过提升品牌形象，使员工具有高度企业荣誉感，赢得员工尊敬;</p>
                    <p>注重企业责任，用心服务，关爱社会、回馈社会，赢得社会尊敬。</p>
                    <p>&nbsp;</p>
                  </div>
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
  export default {
    components: {
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
</style>
