<template>
  <div class="page-navbar" :style="innerStyle">
    <center>
      <img :src="pic" style="width: 60px;border-radius: 50%;margin-top: 10px;">
      <div style="margin: 5px;"><span>{{nickName}}</span></div>
    </center>
    <el-card class="box-card" style="margin: 0 5px!important;">
      <mt-field label="姓名" placeholder="请输入真实姓名" v-model="register.realName"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="register.phone"></mt-field>
      <mt-field label="身份证" placeholder="身份证号作为领取号源的凭证"  v-model="register.idCard"></mt-field>
      <mt-field label="诊疗卡号" placeholder="请输入诊疗卡号（选填）" v-model="register.medicalCardNo"></mt-field>

      <div v-for="o in schedules" :key="o.code" >
        <el-radio v-model="register.scheduleCode" :label="o.code" :disabled="o.registrNum - o.usedNum == 0" border>{{o.name}}<span style="color: #FF5D38;margin-left:5px; ">(剩余：{{o.registrNum - o.usedNum}})</span></el-radio>
      </div>
      <!--<div>-->
        <!--<el-radio v-model="register.scheduleCode" label="2" border>2018-06-28 08:05-08:20 病理专家  剩余(1)</el-radio>-->
      <!--</div>-->

      <!--<span style="font-size: 12px;color: #888;margin-left: 10px;">注意：身份证和手机号必须填写一个。</span>-->
    </el-card>
    <mt-button type="primary" size="large"  plain @click="onSubmitReigster" style="margin-top: 30px!important;">确认申请</mt-button>
    <div style="margin-top: 20px;color: red;font-size: 13px;text-align: center;" v-if="showErrorMessage"><span>{{errorMessage}}</span></div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  import { Toast } from 'mint-ui'
  import {register,getAssociatorInfo,findArticleWechatshedule} from '../../api'
  import {checkIdentity,isPhoneAvailable} from '../../../../assets/js/assist.js'
  import moment from 'moment'
  import '../../../../assets/css/register.css'

  export default {
    name: 'article-register',
    data() {
      return {
        showErrorMessage:false,
        errorMessage:'',
        innerStyle:'overflow-y: auto;',
        schedules:[],
        pic:'',
        nickName:'',
        register:{
          openId:'',
          articleCode:'',
          idCard:'',
          phone:'',
          realName:'',
          medicalCardNo:'',
          scheduleCode:''
        }
      };
    },
    methods:{
      setInfo(code,openId,pic,nickName,innerHeight){
        this.innerStyle = 'overflow-y: auto;height:'+innerHeight+'px'
        this.register.articleCode = code
        this.register.openId = openId
        this.pic = pic
        this.nickName = nickName
        this.schedules = []
        this.showError(true,'')
        this.loadUserInfo()
        this.loadArticleWechatshedule()
      },
      formatterDate( cellValue){
        return moment(new Date(cellValue)).format("YYYY-MM-DD")
      },
      formatterTime( cellValue){
        return moment(new Date(cellValue)).format("HH:mm")
      },
      loadArticleWechatshedule(){
        let _this = this
        findArticleWechatshedule({articleCode:_this.register.articleCode,status:'1'}).then(res => {
//          console.info(res)
          if(res.status == '200'){
            var schedules = []
            var datas = res.data.rows
            for(var i in datas) {
              var item = {}
              item.code = datas[i].code
              item.name = datas[i].name
              item.doctorName = datas[i].doctorName
              item.registrNum = datas[i].registrNum
              item.usedNum = datas[i].usedNum
              item.onDutyDate = _this.formatterDate(datas[i].onDutyDate)
              item.startTime = _this.formatterTime(datas[i].startTime)
              item.endTime = _this.formatterTime(datas[i].endTime)
              schedules.push(item)
            }
            _this.schedules = schedules
//            _this.schedules = res.data.rows
          }
        }).catch(err => {
          _this.$message.error(err)
        });
      },
      loadUserInfo(){
        let _this = this
        getAssociatorInfo({openId:_this.register.openId}).then(res => {
//          console.info(res)
          if(res.status == '200'){
            if(res.data.resultCode == '1'){
              var ass = res.data.data
              this.register.phone = ass.phone
              this.register.idCard = ass.idCard
              this.register.realName = ass.nickName
            }
          }
        }).catch(err => {
          _this.$message.error(err)
        });
      },
      showError(show,message){
        let _this = this
        if(show){
          _this.showErrorMessage = show
          _this.errorMessage = message;
        }else{
          _this.$emit("goBack", {popupVisible:false,flag:false})
          _this.$message({
            message:message,
            type: 'error'
          });
        }
      },
      onSubmitReigster(){
        let _this = this
        _this.showError(true,'')
        if(_this.register.phone == ''){
          _this.showError(true,'手机号必须填写')
          return ;
        }
        if(_this.register.idCard == ''){
          _this.showError(true,'身份证号必须填写')
          return ;
        }
        if(_this.register.idCard != '' && !checkIdentity(_this.register.idCard)){
          _this.showError(true,'身份证号格式不正确')
          return ;
        }
        if(_this.register.phone != '' && !isPhoneAvailable(_this.register.phone)){
          _this.showError(true,'手机号格式不正确')
          return ;
        }
        if(_this.register.realName == ''){
          _this.showError(true,'真实姓名必填')
          return;
        }
        if(_this.register.scheduleCode == ''){
          _this.showError(true,'请选择挂号专家信息')
          return;
        }
        MessageBox.confirm('确定信息填写正确吗?',{closeOnClickModal:false}).then(action => {
          register(_this.register).then(res => {
            if(res.status == '200'){
              if(res.data.resultCode == '1'){
                _this.$emit("goBack", {popupVisible:false,flag:true})
                _this.$message.success(res.data.message)
              }else{
                _this.showError(false,res.data.message)
//                  MessageBox.alert(res.data.message, '提示')
              }
            } else {
              _this.showError(false,res.data.message)
            }
          }).catch(err => {
            _this.$message.error(err)
          });
        }).catch(err => {
          _this.$emit("goBack", {popupVisible:false,flag:false})
        });
      }
    }
  };
</script>

