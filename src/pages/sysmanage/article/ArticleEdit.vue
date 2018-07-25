<template>
  <el-dialog
    title="编辑资讯"
    center
    fullscreen
    :close-on-press-escape="flag"
    :show-close="flag"
    :visible.sync="dialogVisible"
    :before-close="handleClose">
    <el-container>
      <el-main>
        <el-form ref="form" :rules="rulesArticle" :model="article" label-width="80px">
          <el-tabs v-model="activeName">
            <el-tab-pane label="基本信息" name="basicInfo">
              <el-form-item label="资讯标题" prop="title">
                <el-input v-model="article.title" prop="title"></el-input>
              </el-form-item>
              <el-form-item label="作者" prop="author">
                <el-input v-model="article.author"></el-input>
              </el-form-item>
              <el-form-item label="编辑" prop="editor">
                <el-input v-model="article.editor"></el-input>
              </el-form-item>
              <el-form-item label="导语" prop="describe">
                <el-input v-model="article.describe"></el-input>
              </el-form-item>
              <el-form-item label="来源" prop="source">
                <el-input v-model="article.source"></el-input>
              </el-form-item>
              <el-form-item label="状态"  prop="status">
                <el-select v-model="article.status" clearable placeholder="请选择">
                  <el-option
                    v-for="item in statusOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="缩略图">
                <el-upload
                  class="avatar-uploader"
                  action="/api/article/upload.json"
                  :show-file-list="false"
                  :on-success="uploadThumbnailPath"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="咨询内容" name="content" >
              <el-form-item >
                <vue-editor v-model="article.content" useCustomImageHandler @imageAdded="handleImageAdded" style="height: 600px;"></vue-editor>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="专家信息" name="mavin" >
              <el-form-item label="医院">
                <el-select style="width: 460px;"
                           v-model="article.organCode"
                           filterable
                           remote
                           reserve-keyword
                           visible-change="false"
                           placeholder="请输入关键词"
                           :remote-method="remoteSearchOrgans"
                           @change="onChangeOrgan"
                           :loading="loading">
                  <el-option
                    v-for="item in organs"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="科室">
                <el-select v-model="article.officeCourseCode"
                           @change="onChangeOffice"
                           visible-change="false"
                           filterable placeholder="请选择科室"
                           style="width: 460px;">
                  <el-option
                    v-for="item in offices"
                    :key="item.code"
                    :label="item.officeName"
                    :value="item.code">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="专家">
                <el-select v-model="article.doctorCode"
                           @change="onChangeDoctor"
                           visible-change="false"
                           filterable placeholder="请选择专家"
                           style="width: 460px;">
                  <el-option
                    v-for="item in doctors"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="挂号排班" name="scheduled">
              <el-form-item>
                <el-transfer
                  :titles="['待选排班', '已选排班']"
                  v-model="selectSheduleIds"
                  :props="{key: 'code',label: 'name'}"
                  :data="shedules">
                </el-transfer>
              </el-form-item>
            </el-tab-pane>
          </el-tabs>
        </el-form>
      </el-main>
      <el-footer>
        <el-button type="success" @click="onSubmit">提交</el-button>
        <el-button type="danger" @click="onClickReset()">重置</el-button>
        <el-button type="info" @click="gotoBack()">返回</el-button>
      </el-footer>
    </el-container>
  </el-dialog>
</template>

<script>
  import {VueEditor} from 'vue2-editor'
  import {uploadFile, savearticle, getArticleInfo, getSchedue, bindArticleRegistr, findArticleRegistrs,searchOrgans, findOffices, findDoctors} from '../api'


  export default {
    name: 'article-edit',
    components: {
      'vue-editor': VueEditor
    },
    props: ['dialogVisible'],
    data() {
      return {
        organs: [],
        offices: [],
        doctors: [],
        statusOptions:[{label:'编辑',value:'0'},{label:'发布',value:'1'},{label:'结束',value:'9'}],
        flag: false,
        loading: true,
        activeName: 'basicInfo',
        imageUrl: '',
        shedules: [],
        selectSheduleIds: [],
        article: {
          code: '',
          organCode: '',
          organName: '',
          officeCourseCode: '',
          doctorCode: '',
          title: '',
          status: '',
          author: '',
          describe: '',
          editor: '',
          content: '',
          source: '',
          thumbnailPath: '',
          companyCode: '0008',
          companyName: '长沙晚报'
        },
        rArticle: {
          code: '',
          organCode: '',
          organName: '',
          officeCourseCode: '',
          doctorCode: '',
          title: '',
          status: '',
          author: '',
          describe: '',
          editor: '',
          content: '',
          source: '',
          thumbnailPath: '',
          companyCode: '0008',
          companyName: '长沙晚报'
        },
        rulesArticle: {
          title: [{required: true, message: '请输入资讯标题', trigger: 'blur'}],
          status: [{required: true, message: '请选择状态', trigger: 'blur'}],
          author: [{required: true, message: '请输入作者', trigger: 'blur'}],
          editor: [{required: true, message: '请输入编辑', trigger: 'blur'}],
          describe: [{required: true, message: '请输入导语', trigger: 'blur'}],
          source: [{required: true, message: '请输入来源', trigger: 'blur'}]
        }
      }
    },
    methods: {
      onChangeOrgan(value){
        var page = this;
        if (value != '' && value != null && value != undefined) {
          var organs = page.organs;
          for (var i in organs) {
            if (organs[i].code == page.article.organCode) {
              page.article.organName = organs[i].name;
              break;
            }
          }
          page.remoteFindOffices(value);
        } else {
          page.article.organCode = '';
          page.article.officeCourseCode = '';
          page.article.doctorCode = '';
//          page.article.doctorName = '';
          page.offices = [];
          page.doctors = [];
        }
      },
      onChangeOffice(value) {
        var page = this;
        if (value != '' && value != null && value != undefined) {
//          var offices = page.offices;
//          for (var i in offices) {
//            if (offices[i].code == page.schedue.officeCode) {
//              page.schedue.officeName = offices[i].officeName;
//              break;
//            }
//          }
          page.remoteFindDoctors(value);
        } else {
          page.article.officeCourseCode = '';
          page.article.doctorCode = '';
          page.doctors = [];
        }
      },
      onChangeDoctor(value) {
//        var page = this;
//        if (value != '' && value != null && value != undefined) {
//          var doctors = page.doctors;
//          for (var i in doctors) {
//            if (doctors[i].code == page.schedue.doctorCode) {
//              page.schedue.doctorName = doctors[i].name;
//              break;
//            }
//          }
//        } else {
//          page.article.doctorCode = '';
//        }
      },
      remoteSearchOrgans(value) {
        var page = this;
        page.article.organCode = '';
        page.article.officeCourseCode = '';
        page.article.doctorCode = '';
        page.organs = [];
        page.offices = [];
        page.doctors = [];
        if (value != null && value != '' && value != undefined) {
          searchOrgans({organName: value}).then(res => {
//            console.info(res);
            if (res.status === 200) {
              page.organs = res.data
            }
          }).catch(err => {

          });
        }
      },
      remoteFindOffices(organCode) {
        var page = this;
        page.article.officeCourseCode = '';
        page.article.doctorCode = '';
        page.offices = [];
        page.doctors = [];
        findOffices({organCode: organCode}).then(res => {
          if (res.status === 200) {
            page.offices = res.data
          }
        }).catch(err => {
        })
      },
      remoteFindDoctors(officeCode) {
        var page = this;
        page.article.doctorCode = '';
        page.doctors = [];
        findDoctors({organCode: page.article.organCode, officeCode: officeCode}).then(res => {
          if (res.status === 200) {
            page.doctors = res.data
//            console.info(page.doctors)
          }
        }).catch(err => {
          console.info(err);
        })
      },
      filterMethod(value) {
        console.info('filterMethod:', value);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      onSubmit() {
        var page = this;
        savearticle(page.article).then(res => {

          if (res.data.success) {
            var articleCode = res.data.message;
            var sheduleCodes = page.selectSheduleIds.join(',')
            console.info('articleCode:',articleCode);
            bindArticleRegistr({articleCode: articleCode, sheduleCodes: sheduleCodes}).then(res => {
              console.info(res);
              if(res.status == 200) {
                page.$message.success('保存成功');
                page.$emit("changeDialog", false);
              } else {

                page.$message.error(res.data.message);
              }
            }).catch(err => {
              console.info(err);
            })

          } else {
            page.$message.error(res.data.message)
          }
        }).catch(err => {
          console.info(err);
          page.$message.error(err)
        });
      },
      uploadThumbnailPath(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.article.thumbnailPath = file.response.url;
      },
      beforeAvatarUpload(file) {
        return true;
      },
      onClickReset() {
        var page = this;
        page.$confirm('是否确认重置编辑内容?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          page.article = page.rArticle;
          page.$message({
            type: 'success',
            message: '重置成功!'
          });
        }).catch(() => {
          page.$message({
            type: 'info',
            message: '已取消重置'
          });
        });

      },
      gotoBack() {
        //this.$router.push('/sys/article')
        this.$emit("changeDialog", false);
      },
      handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        var page = this;
        var formData = new FormData();
        formData.append('image', file)
        uploadFile(formData).then(res => {
          if (res.data.error == 0) {
            Editor.insertEmbed(cursorLocation, 'image', res.data.url);
            resetUploader();
          } else {
            page.$message.error('上传图片失败');
          }
        }).catch(() => {
          page.$message.error('上传图片失败');
        })
      },
      getArticle(code) {
        var page = this;
        page.initData()
//        console.info('code:', code);
        if (code != '' && code != undefined) {
          getArticleInfo({code: code}).then(res => {
            if (res.status == '200') {
              var article = {
                code: res.data.code,
                organCode: res.data.organCode,
                organName: res.data.organName,
                officeCourseCode: res.data.officeCourseCode,
                doctorCode: res.data.doctorCode,
                title: res.data.title,
                status: res.data.status,
                author: res.data.author,
                describe: res.data.describe,
                editor: res.data.editor,
                content: res.data.content,
                source: res.data.source,
                thumbnailPath: res.data.thumbnailPath,
                companyCode: res.data.companyCode,
                companyName: res.data.companyName
              }
              var organs = [{code: res.data.organCode, name: res.data.organName}]
              page.organs = organs
              page.onChangeOrgan(res.data.organCode)
              page.onChangeOffice(res.data.officeCourseCode)
              page.article = article
              page.rArticle = article
              page.imageUrl = article.thumbnailPath
              page.loadShedules()
            } else {
              var msg = "请求数据失败";
              page.$notify.warning({
                title: msg
              })
            }
          }).catch(err => {

          });
          findArticleRegistrs({articleCode: code}).then(res => {
//            console.info(res);
            if(res.status === 200) {
              var datas = res.data;
              for(var i in datas) {
                page.selectSheduleIds.push(datas[i].sheduleCode);
              }
            }
          }).catch(err => {
            console.info(err);
          })
        }
      },
      loadShedules() {
        var page = this
        var params = {type:0,status:1,articleCode:page.article.code}
//        getSchedue(params).then(res => {
//          if(res.status == '200'){
//            _this.tableData = res.data.rows
//            _this.schedueTotal = res.data.total
//          }else{
//            var msg = "请求数据失败";
//            _this.$notify.warning({
//              title: msg
//            })
//          }
//        }).catch(this.handleError)
        getSchedue(params).then(res => {
          if(res.status == '200'){
            page.shedules = res.data.rows
          }
        })
      },
      initData(){
        this.article = {
          code: '',
          organCode: '',
          organName: '',
          officeCourseCode: '',
          doctorCode: '',
          title: '',
          status: '',
          author: '',
          describe: '',
          editor: '',
          content: '',
          source: '',
          thumbnailPath: '',
          companyCode: '0008',
          companyName: '长沙晚报'
        }
        this.rArticle = this.article
        this.organs = []
        this.offices = []
        this.doctors = []
        this.flag = false
        this.imageUrl = ''
        this.shedules = []
        this.selectSheduleIds = []
      }
    },
    mounted() {
      this.loadShedules();
    },

  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
