<template>
  <div class="layout_body" :style="outerStyle">

    <div class="art_tit_s" v-if="my != null">
      <h4 class="art_head">{{my.title}}</h4>
      <h5 class="art_author">编辑:{{my.editor}} | 来源:{{my.source}} | {{my.createDateStr}}</h5>
    </div>

    <div class="h20"></div>

    <div v-if="my == null"><center style="margin-top: 10px;">正在努力加载全文....</center></div>
    <article class="art" v-html="my.content" v-if="my != null" style="margin: 10px;"></article>

    <el-card class="box-card" style="margin: 20px;" v-if="doctor != null">
      <div slot="header" class="clearfix">
        <!--<span>专家名片</span>-->
        <span>
          <div style="float: left;">
            <img :src="doctor.picturePath" style="width: 64px;height: 64px;">
          </div>
          <div style="margin: 5px;">
            <div style="float: left;margin-left: 10px;font-size: 14px;font-weight: 600;">
              姓名：{{doctor.name}}
            </div>
            <div style="float: left;margin-left: 10px;margin-top: 5px;font-size:14px; font-weight: 600;">
                就职医院：{{doctor.organName}}
            </div>
             <div style="clear: both;"></div>
          </div>
          <div style="clear: both;"></div>
        </span>
        <!--<el-button style="float: right; padding: 3px 0" type="text">详情</el-button>-->
      </div>
      <div class="text item" style="padding: 10px;font-size: 13px;line-height:20px;">
        擅长：{{doctor.speciality}}
      </div>
      <div class="text item" style="padding: 2px 10px 10px 10px;font-size: 13px;line-height:20px;">
        个人简历：{{doctor.synopsis}}
      </div>
    </el-card>
    <div class="h20"></div>
    <div style="margin: 30px;">
      <mt-button type="danger" size="large" v-if="show == 1" plain @click="unRegister()">您已成申请，点击取消申请</mt-button>
      <mt-button type="default" size="large" v-if="show == 9" disabled plain>活动结束</mt-button>
      <mt-button type="primary" size="large" v-if="show == 3" plain @click="gotoRegister()">申请号源</mt-button>
    </div>
    <div style="margin: 10px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 14px;">评论区 <span v-if="replyTotal > 0"
                                                   style="font-size: 11px;color: #999;margin-left: 10px;"> {{replyTotal}} 次评论</span></span>
          <el-badge class="item">
            <el-button size="small" @click="gotoReply()">评论</el-button>
          </el-badge>
          <!--<el-badge :value="100" :max="10" class="item">-->
          <!--<el-button size="small">回复</el-button>-->
          <!--</el-badge>-->
        </div>
        <div v-for="o in replays" :key="o.code" class="text_item">
          <el-container>
            <el-aside style="width:40px;">
              <img style="width:30px;height: 30px;margin:0 5px 5px 5px;" :src="o.persionPicUrl"/>
            </el-aside>
            <el-main style="padding: 2px 2px 35px 0;font-size: 14px;">
              <div style="margin-bottom: 2px;font-size: 13px;color: #666;">{{o.personName}}<span
                style="font-size: 12px;color:#777;padding-left: 10px;">{{o.createDateStr}}</span>
                <img src="../../../../assets/img/top.png" v-if="o.isTop == '1'" style="width: 32px;"></div>
              {{o.replyDetail}}
            </el-main>
          </el-container>
        </div>
        <div style="text-align: center;font-size: 14px;margin-bottom: 10px;" v-if="showMore"><a
          style="text-decoration: none;color: #333;" @click="loadMoreReply()"><i
          class="el-icon-caret-bottom"></i>更多评论</a></div>
      </el-card>
      <!--<article-reply ref="articleReply" v-bind:dialogVisible="dialogVisible" v-on:changeDialog="changeDialog($event)"></article-reply>-->
      <mt-popup modal="false"
                v-model="dialogVisible"
                position="top" style="height: 100%;width: 100%;">
        <mt-header title="资讯评论">
          <router-link to="" slot="left" @click="changeDialog({dialogVisible:false,flag:false})">
            <mt-button icon="back" @click="changeDialog({dialogVisible:false,flag:false})"></mt-button>
          </router-link>
        </mt-header>
        <article-reply ref="articleReply" v-on:changeDialog="changeDialog($event)"></article-reply>
      </mt-popup>
      <mt-popup modal="false"
                v-model="popupVisible"
                position="right" style="height: 100%;width: 100%;">
        <mt-header title="申请号源">
          <router-link to="" slot="left" @click="back({popupVisible:false,flag:false})">
            <mt-button icon="back" @click="back({popupVisible:false,flag:false})"></mt-button>
          </router-link>
        </mt-header>
        <article-register ref="articleRegister" v-on:goBack="back($event)"></article-register>
      </mt-popup>
      <mt-popup
        style="width:100%;height:100%;"
        v-model="bindAssPopupVisible"
        position="right">
        <center>
          <img :src="pic" style="width: 100px;border-radius: 50%;margin-top: 10px;">
          <div><span>{{nickName}}</span></div>
        </center>
        <el-card class="box-card" style="margin: 0 5px!important;margin-top:10px;">
          <mt-field label="姓名" placeholder="请输入姓名" v-model="realName"></mt-field>
          <mt-field label="身份证" placeholder="请输入身份证" v-model="idCard"></mt-field>
          <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        </el-card>
        <mt-button type="primary" size="large" @click="bindAssociator" style="margin-top: 30px!important;">确认绑定
        </mt-button>
        <span style="color:red;text-align: center;">{{popupErrMsg}}</span>
      </mt-popup>
    </div>

  </div>
</template>

<script>
  import {
    registerAssociator,
    getUserInfo,
    getAssociatorInfo,
    getArticleInfo,
    getArticleReply,
    wechatLogin, replyed, registered, getDoctor, getWechatWebAccessToken,
    unRegister
  } from '../../api'
  import '../../../../assets/css/articleInfo.css'
  import { MessageBox } from 'mint-ui'
  import ArticleReply from './ArticleReply.vue'
  import Register from './Register.vue'
  import {
    randomString,
    getWechatCode,
    setWechatCode,
    setWechatRefreshToken,
    getWechatRefreshToken,
    removeWechatWechat,
    getWechatUser,
    setWechatUser,
    removeWechatUser
  } from '../../../../assets/js/assist'
  export default {
    name: 'ArticleInfo',
    components: {
      'article-reply': ArticleReply,
      'article-register': Register
    },
    data() {
      return {
        outerStyle: 'height: 100%;overflow-y: auto;',
        wechatCode: '',
        showMore: false,
        dialogVisible: false,
        popupVisible: false,
        bindAssPopupVisible: false,
        popupErrMsg: '',
        code: '',
        weixinpic: '',
        replyTotal: 0,
        replyPage: 1,
        replyRows: 10,
        realName: '',
        idCard: '',
        phone: '',
        openId: '',
        pic: '',
        nickName: '',
        userInfo: null,
        my: null,
        doctor: null,
        replays: [],
        testPics: [],
        show: 5,
        innerHeight: document.body.clientHeight - 40
      }
    },
    watch: {
      popupVisible (val) {
//        if(val){
//          this.outerStyle = 'height: 100%;overflow-y: hidden;'
//        }else{
//          this.outerStyle = 'height: 100%;overflow-y: auto;'
//        }
      }
    },
    methods: {
      isweixin() {
        const ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
//          console.info('is wechat');
          return true;
        } else {
          return false;
        }
      },
      changeDialog(params) {
        this.dialogVisible = params.dialogVisible
        if (params.flag) {
          this.replays = []
          this.loadReply(1, 10)
//          this.showBtn()
        }
      },
      back(params){
        this.popupVisible = params.popupVisible
        if (params.flag) {
          this.show = 6
          this.showBtn()
        }
      },
      getUserInfo(){
        let _this = this
//        var openId = randomString(16)
//        _this.openId = '87GyG4C6hBMa82hP'
//        _this.nickName = '麦迪'
//        var now = new Date()
//        var ss = now.getSeconds()
//        _this.pic = 'http://175.6.21.11:8484/avatar/15874920900_avatar_fd8aca9d-ac57-4c2c-ba20-4ff78574bee5.'

        if (_this.openId != '') {
          _this.wechatLogin()
        }
      },
      wechatLogin(){
        let _this = this
        wechatLogin({openId: _this.openId, pic: _this.pic, nickName: _this.nickName}).then(function (res) {
          if (res.status == '200') {
            if (res.data.resultCode == '1') {
              _this.userInfo = res.data.data
              setWechatUser(_this.userInfo);
              _this.loadData({code: _this.code})
            } else {
              _this.userInfo = null
            }
          }
        }).catch(this.handleError)
      },
      loadData(params){
        let _this = this
        getArticleInfo(params).then(function (res) {
//          console.info(res)
          if (res.status == '200') {
            _this.my = res.data
            _this.replays = []
            _this.replyTotal = 0
            _this.loadReply(_this.replyPage, _this.replyRows)
            if(_this.my.status != '9'){
              _this.showBtn()
            }else{
              _this.show = 9
            }
            //加载专家信息
            if (res.data != undefined && res.data != null && res.data.doctorCode != undefined && res.data.doctorCode != null) {
              _this.loadDoctor(res.data.doctorCode)
            }
          } else {
            var msg = "请求数据失败";
            _this.$notify.warning({
              title: msg
            })
          }
        }).catch(this.handleError)
      },
      loadReply(page, rows){
        let _this = this
        getArticleReply({articleCode: _this.code, page: page, rows: rows, status: 1}).then(function (res) {
//          console.info(res)
          if (res.status == '200') {
            var rows = res.data.rows
            for (var i in rows) {
              _this.replays.push(rows[i])
            }
            if (_this.replays.length >= _this.replyRows * _this.replyPage) {
              _this.showMore = true
            } else {
              _this.showMore = false
            }
//            _this.replays = res.data.rows
            _this.replyTotal = res.data.total
          } else {
            var msg = "请求数据失败";
            _this.$notify.warning({
              title: msg
            })
          }
        }).catch(this.handleError)
      },
      loadMoreReply() {
        var page = this
        if ((page.replyRows * page.replyPage) > page.replyTotal) {
          return
        } else {
          page.replyPage = page.replyPage + 1
        }
        page.loadReply(page.replyPage, page.replyRows)
      },
      showBtn(){
        let _this = this
        registered({articleCode: _this.code, openId: _this.openId}).then(function (res) {
//          console.info(res)
          if (res.status == '200') {
            if (res.data.resultCode == '1') {
              if (res.data.data == '1') {
                _this.show = 4
              } else if (res.data.data == '3') {
                _this.show = 1
              }  else if (res.data.data == '2') {
                _this.show = 5
              }   else if (res.data.data == '4') {
                _this.show = 3
              } else {
                _this.show = 2
              }
            }
          } else {
//            var msg = "用户验证成功"
//            _this.$notify.warning({
//              title: msg
//            })
          }
//          if (_this.show != 1 && _this.show != 4) {
//            replyed({articleCode: _this.code, personCode: _this.userInfo.code}).then(function (res) {
//              if (res.status == '200') {
//                if (res.data.resultCode == '1') {
//                  if (res.data.data) {
//                    _this.show = 3
//                  } else {
//                    _this.show = 2
//                  }
//                }
//              } else {
//                var msg = "用户验证成功"
//                _this.$notify.warning({
//                  title: msg
//                })
//              }
//            }).catch();
//          }
        }).catch(function (err) {

        })
      },
      gotoReply(){
        let _this = this
        if (_this.userInfo == null || _this.userInfo == undefined) {
          _this.$message.error("验证未通过")
        } else {
          this.dialogVisible = true;
          this.$refs.articleReply.setInfo(this.code, this.my.title, this.openId);
        }
      },
      gotoRegister(){
        this.popupVisible = true
        this.$refs.articleRegister.setInfo(this.code, this.openId,this.pic, this.nickName,this.innerHeight);
      },
      unRegister(){
        var _this = this
        MessageBox.confirm('确定取消申请吗?',{closeOnClickModal:false}).then(action => {
          unRegister({articleCode:_this.code,openId:_this.openId}).then(res => {
            console.info(res)
            if(res.status == '200'){
              if(res.data.resultCode == '1'){
                this.showBtn()
              }else{
                _this.$message({
                  message:res.data.message,
                  type: 'error'
                });
              }
            } else {
              _this.$message({
                message:res.data.message,
                type: 'error'
              });
            }
          }).catch(err => {
            _this.$message.error(err)
          });
        }).catch(_ => {

        });
      },
      loadDoctor(doctorCode){
        let _this = this
        getDoctor({doctorCode: doctorCode}).then(function (res) {
//          console.info(res)
          if (res.status == '200') {
            if (res.data.resultCode == '1') {
              var doctor = res.data.data
              if (doctor != undefined) {
                doctor.picturePath = 'http://health.kzyyw.cn:9080/document/' + doctor.picturePath
              }
              _this.doctor = doctor
            }
          } else {
            var msg = "请求数据失败";
            _this.$notify.warning({
              title: msg
            })
          }
        }).catch(this.handleError)
      },
      checkWechatLogin() {
        var page = this;
        if (page.isweixin()) {
//          removeWechatUser();
          var _user = getWechatUser();
//          console.info(2222);
//          console.info('user:',_user);
          if (_user != undefined && _user != null) {
            page.userInfo = _user
            page.nickName = _user.nickName;
            page.pic = _user.pic;
            page.openId = _user.openId;
            page.loadData({code: page.code})
          } else {
            var wechat_code = page.wechatCode
//            console.info(444444)
//            console.info(wechat_code)
//          console.info('wechat_code:', wechat_code);
            if (wechat_code == undefined || wechat_code == '') {
//            console.info('wechat_code is null')
              window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + page.$appid + '&redirect_uri=' + page.$articleInfo_url + page.code + '&response_type=code&scope=snsapi_userinfo';
            } else {
              var params = {}
              params.wechatCode = page.wechatCode
              params.secret = page.$secret
              params.appid = page.$appid
//              console.info(params)
              getWechatWebAccessToken(params).then(function (res) {
//                console.info(11111);
//                console.info(res);
                if (res.data.errcode != undefined) {
                  removeWechatWechat();
//                  console.info('remove wechat_code is fail');
                  window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + page.$appid + '&redirect_uri=' + page.$articleInfo_url + page.code + '&response_type=code&scope=snsapi_userinfo';
                } else {
                  var openId = res.data.openid;
                  var accessToken = res.data.access_token;
                  //setWechatAccessToken(accessToken);
//                console.info('openId:', openId);
//                console.info('accessToken:', accessToken);
                  page.getAssociator(accessToken, openId)
                }
              }).catch(function (err) {

              });

            }
          }
        }else{
          page.loadData({code: page.code})
        }
      },
      getAssociator(accessToken, openId) {
        var page = this
        getUserInfo(accessToken, openId).then(function (res) {
//          console.info(55555);
//          console.info(res);
          if (res.status === 200) {
            page.nickName = res.data.nickname;
            page.pic = res.data.headimgurl;
            page.openId = res.data.openid;
            page.wechatLogin()
          }
//          getAssociatorInfo({openId: openId}).then(function (res) {
//            if (res.status === 200) {
//              if (res.data.data != undefined) {
////              page.associator = res.data.data;
////                console.info(res)
//                page.wechatLogin()
//              } else {
//                page.bindAssPopupVisible = true;
//              }
//            }
//          }).catch(err => {
//
//          });
        }).catch(function (err) {
        })
      },
      bindAssociator() {
        var page = this;
        if (page.idCard == '' || page.idCard == undefined || page.idCard == null) {
          page.popupErrMsg = '身份证不问为空!';
          return;
        }
        if (page.phone == '' || page.phone == undefined || page.phone == null) {
          page.popupErrMsg = '手机号码不能为空!';
          return;
        }
        if (page.realName == '' || page.realName == undefined || page.realName == null) {
          page.popupErrMsg = '姓名不能为空!';
          return;
        }
        registerAssociator({
          nickName: page.nickName,
          openId: page.openId,
          pic: page.pic,
          name: page.realName,
          phone: page.phone,
          idCard: page.idCard
        }).then(res => {
//          console.info(res);
          if (res.data.resultCode == '1') {
            page.userInfo = res.data.data;
            page.popupErrMsg = '';
            page.bindAssPopupVisible = false;
//            page.showBtn();
          } else {
            page.popupErrMsg = res.data.message;
          }
        }).catch(err => {

        });
      }
    },
    created: function () {

    },
    mounted(){
      let _this = this
      _this.my = {}
      _this.replays = []
      _this.replyTotal = 0
      _this.wechatCode = ''
      var acode = _this.$route.params.acode
      _this.code = acode
      var code = _this.$route.query.code;
      var state = _this.$route.query.state;
//      console.info('code:',code)
      if (code != undefined && code != '') {
//        console.info('init wechat code');
        _this.wechatCode = code;
      }
      _this.checkWechatLogin();
    }
  }
</script>
