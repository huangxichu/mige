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
                    <li><img src="../../assets/img/recruit_menu_header.jpg"></li>
                    <li class="category" @click="changePage(1)">人才理念</li>
                    <li class="category" @click="changePage(2)">人才招聘</li>
                  </ul>
                </div>
              </el-aside>
              <el-main>
                <div v-if="curr_about_page == 1">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/recruit' }">人才招聘</el-breadcrumb-item>
                    <el-breadcrumb-item>人才理念</el-breadcrumb-item>
                  </el-breadcrumb>
                  <div class="qhd-content" style="margin-top: 20px;">
                    <p>在用人上以'忠、诚、能'为衡量标准，坚持以品德第一，能力第二为任用标准，坚持'有德无才，其德可用，有才无德，其才难用'的造才原则。坚持用'待遇、感情、事业'来吸引人、培养人、留用人。注重员工培训，让每一位员工提高与企业共同成长。注重员工职业生涯规划，给每一位人才提供发展空间。</p>
                    <p>杰出的人才是杰出企业的基础。我们始终认为，人才是企业经营与发展的灵魂。在人才资源开发方面，我们的人才战略是透过现代人力资源管理实践挖掘员工潜能、提升员工素质、优化人才结构，以提升企业的竞争优势，抢占未来发展制高点，为喜好创新和挑战的人才提供充分施展的舞台，营造个人价值实现的优良环境，追求企业需要和员工需要的最佳结合。</p>
                    <p>公司在人力资源管理过程中坚持管理创新、制度创新、观念创新；营造一种公开、公平、公正的环境，建立一套充分发挥个人潜能的机制，给员工提供充分实现自我价值的发展空间。</p>
                    <p>&nbsp;</p>
                  </div>
                </div>
                <div v-if="curr_about_page == 2">
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/recruit' }">人才招聘</el-breadcrumb-item>
                    <el-breadcrumb-item>人才招聘</el-breadcrumb-item>
                  </el-breadcrumb>
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
