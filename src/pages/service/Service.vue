<template>
  <div class="mg_about"  :style="innerStyle">
    <home-header></home-header>
    <home-carousel></home-carousel>
    <!--<div class="row"  style="margin-top: 20px;">-->
      <!--<div class="col-md-12">-->
        <!--<div class="module-full-screen-title">-->
          <!--<h2>服务项目</h2>-->
          <!--<div class="module-title-content"><i class="mark-left"></i>-->
            <!--<h3>Service</h3>-->
            <!--<i class="mark-right"></i></div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <center>
      <div style="max-width: 1200px;margin-top: 45px;">
        <div style="text-align: left;font-size: 14px;margin-bottom: 0px;padding-top: 45px;padding-bottom: 15px;">
          <p style="padding: 5px;">白果 白果统装 1000g起批全场零售各种</p>
          <p style="padding: 5px;">中药材 西洋参 鹿茸</p>
          <p style="padding: 5px;">鹿茸 海马 中药材 饮片</p>
          <p style="padding: 5px;">鹿茸片礼盒</p>
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
  import {saveYkMessage} from '../sysmanage/message/api'
  export default {
    components: {
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
        message:{},
        messageRules: {
          relName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
          phone: [{ required: true,validator:checkPhone, trigger: 'blur' }],
          messageContext: [{ required: true, message: '请输入您给我们的留言', trigger: 'blur' }]
        },
        innerStyle:'height: 100%;overflow-y: auto;',
        innerHeight: document.body.clientHeight
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
</style>
