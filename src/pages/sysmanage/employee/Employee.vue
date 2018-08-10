<template>
  <el-container style="height: 100%" id="news_table">
    <el-header id="article_head" style="margin-top: 10px!important;height: 40px!important;">
      <el-form ref="search"  :model="search" label-width="80px" style="width: 100%;">
        <el-row>
          <el-col :span="4">
            <el-input v-model="search.relName" placeholder="姓名" size="mini"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="search.phone" placeholder="手机号码" size="mini"></el-input>
          </el-col>
          <el-col :span="4">
            性别:<el-select v-model="search.sex" placeholder="性别" size="mini" style="margin-left: 10px;">
              <el-option label="全部" value="" key="-1"></el-option>
              <el-option
                v-for="item in sexes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            状态:<el-select v-model="search.status" placeholder="选择状态" size="mini" style="margin-left: 10px;">
              <el-option label="全部" value="" key="-1"></el-option>
              <el-option
                v-for="item in statuses"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" icon="el-icon-search" @click="searchLoad()"  circle style="padding: 6px!important;"  title="搜索"></el-button>
            <el-button type="success" icon="el-icon-plus"  @click="gotoAdd()" circle style="padding: 6px!important;" title="新增"></el-button>
            <!--<el-button type="danger" icon="el-icon-delete" @click="removeRows()" circle style="padding: 6px!important;" title="删除"></el-button>-->
          </el-col>
        </el-row>
      </el-form>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        :height="screenHeight"
        :stripe="true"
        :fit="true"
        :highlight-current-row="true"
        style="width: 100%;margin:0;padding:0;">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="relName"
          label="姓名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="idCard"
          label="身份证号"
          width="200">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          width="100" :formatter="formatterSex">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机"
          width="200">
        </el-table-column>
        <el-table-column
          prop="adress"
          label="住址"
          width="200" :show-overflow-tooltip="tooltip">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          width="200" :formatter="formatterLongDate">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="状态"
          width="100"
          :filters="[{ text: '停用', value: '0' }, { text: '启用', value: '1' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.status === '1' ? 'primary' : 'info'"
              disable-transitions>{{scope.row.status == '1' ? '启用' : '停用'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" title="编辑" @click="gotoEdit(scope.row)"circle></el-button>
            <el-button type="success" icon="el-icon-circle-check-outline" title="启用" @click="upStatus(scope.row,'1')"circle v-if="scope.row.status === '0'"></el-button>
            <el-button type="info" icon="el-icon-circle-close-outline" title="停用" @click="upStatus(scope.row,'0')"circle v-if="scope.row.status === '1'"></el-button>
            <el-button type="danger" icon="el-icon-delete" title="删除" @click="removeRow(scope.row)" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer id="article_foot">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 50,100]"
        :page-size="rows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total" style="height: 50px;">
      </el-pagination>
    </el-footer>
    <el-dialog title="员工" :visible.sync="dialogEditVisible"
               :close-on-press-escape="true"
               :close-on-click-modal="false"
               :show-close="true" width="900px">
      <el-form :model="form" label-width="100px" :rules="rules" ref="editFrom">
        <el-tabs tab-position="left" style="height: 500px;">
          <el-tab-pane label="基本信息">
            <el-form-item label="姓名" prop="relName">
              <el-input v-model="form.relName" auto-complete="off"  placeholder="请输入员工姓名"></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="phone">
              <el-input v-model="form.phone" auto-complete="off"  placeholder="请输入员工手机号"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="idCard">
              <el-input v-model="form.idCard" auto-complete="off"  placeholder="请输入员工身份证号"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-select v-model="form.sex"
                         visible-change="false"
                         filterable>
                <el-option
                  v-for="item in sexes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="住址">
              <el-input v-model="form.adress" auto-complete="off"  placeholder="请输入员工住址"></el-input>
            </el-form-item>
            <!--<el-form-item label="产品图片">-->
              <!--<el-upload-->
                <!--class="avatar-uploader"-->
                <!--action="/api/article/upload.json"-->
                <!--:show-file-list="false"-->
                <!--:on-success="uploadThumbnailPath"-->
                <!--:http-request="handlePost"-->
                <!--:before-upload="beforeAvatarUpload">-->
                <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
                <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
              <!--</el-upload>-->
            <!--</el-form-item>-->
          </el-tab-pane>
          <el-tab-pane label="岗位信息">
              <!--<vue-editor v-model="form.productInfo" useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>-->
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEmp_('editFrom')">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
  import {getEmployees,saveEmployee,deleteEmployee} from './api'
  import {uploadFile} from '../common/api'
  import moment from 'moment'
  import {VueEditor} from 'vue2-editor'

  export default {
    components: {
      'vue-editor': VueEditor
    },
    data() {
      return {
        statuses:[{label:'停用',value:'0'},{label:'启用',value:'1'}],
        sexes:[{label:'女',value:'0'},{label:'男',value:'1'}],
        dialogEditVisible: false,
        tableData: [],
        total:0,
        page:1,
        rows:10,
        search:{
          relName:'',
          phone:'',
          sex:'',
          status:''
        },
        form:{
          id:'',
          relName:'',
          phone:'',
          sex:'',
          status:'',
          companyCode:'',
          adress:'',
          idCard:''
        },
        rules: {
          relName: [{ required: true, message: '请输入员工姓名', trigger: 'blur' }],
          phone: [{ required: true, message: '请输入员工手机号', trigger: 'blur' }],
          idCard: [{ required: true, message: '请输入员工身份证号', trigger: 'blur' }],
          sex: [{required: true, message: '请选择性别', trigger: 'blur'}]
        },
        tooltip:true,
        screenHeight: document.body.clientHeight - 50 -60 -130
      }
    },
    watch: {
      screenHeight (val) {
        this.screenHeight = val
      }
    },
    methods: {
      handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        var _this = this;
        var formData = new FormData();
        formData.append('editormd-image-file', file)
        uploadFile(formData).then(function(res){
          if(res.status === 200){
            if (res.data.code === '0') {
              Editor.insertEmbed(cursorLocation, 'image', res.data.data);
              resetUploader();
            } else {
              _this.$message.error(res.data.message);
            }
          }else{
            _this.$message.error('上传图片失败');
          }
        }).catch(function(){
          _this.$message.error('上传图片失败');
        })
      },
      handleSizeChange (rows) {
        let _this = this
        _this.loadData(_this.search,1,rows)
      },
      handleCurrentChange (page) {
        let _this = this
        _this.loadData(_this.search,page,this.rows)
      },
      formatterSex(row, column, cellValue, index){
        let _this = this
        var sexes = _this.sexes
        for(var i in sexes){
          if(cellValue === sexes[i].value){
            return sexes[i].label;
          }
        }
        return "未知"
      },
      filterTag(value, row) {
        return row.status === value;
      },
      saveEmp_(formName){
        let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            saveEmployee(_this.form,_this).then(function(res) {
              if(res.status == '200'){
                if(res.data.code === '0'){
                  _this.dialogEditVisible = false
                  _this.loadData({},1,10)
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
      upStatus(row,status){
        let _this = this
        row.status = status;
        saveEmployee({
          id:row.id,
          relName:row.relName,
          phone:row.phone,
          sex:row.sex,
          status:row.status,
          companyCode:row.companyCode,
          adress:row.adress,
          idCard:row.idCard},_this).then(function(res) {
          if(res.status == '200'){
            if(res.data.code === '0'){
              _this.dialogEditVisible = false
              _this.loadData({},1,10)
            }else{
              var msg = res.data.message;
              _this.$notify.warning({
                title: msg
              })
            }
          }
        }).catch(function (err) {

        })
      },
      formatterLongDate(row, column, cellValue, index){
        return moment(new Date(cellValue)).format("YYYY-MM-DD HH:mm:ss")
      },
      beforeAvatarUpload(file) {
        return true;
      },
      uploadThumbnailPath(res, file) {
//        this.imageUrl = URL.createObjectURL(file.raw);
        this.form.pic = file.response.url;
      },
      handlePost(item){
        var _this = this;
        var formData = new FormData();
        formData.append('editormd-image-file', item.file)
        uploadFile(formData).then(function(res){
          console.info(res)
          if(res.status === 200){
            if (res.data.code === '0') {
//              _this.imageUrl = res.data.data;
              _this.form.pic = res.data.data;
            } else {
              _this.$message.error(res.data.message);
            }
          }else{
            _this.$message.error('上传图片失败');
          }
        }).catch(function(){
          _this.$message.error('上传图片失败');
        })
      },
      searchLoad(){
        let _this = this
        _this.loadData(_this.search,1,10)
      },
      gotoAdd() {
        let _this = this
        if (_this.$refs['editFrom'] !== undefined) {
          _this.$refs['editFrom'].resetFields();
        }
        _this.form = {
          id:'',
          relName:'',
          phone:'',
          sex:'',
          status:'',
          companyCode:'',
          adress:'',
          idCard:''
        }
        //this.$router.push({name:'article-edit'})
        _this.dialogEditVisible = true;
      },
      gotoEdit(row) {
        let _this = this
        if (_this.$refs['editFrom'] !== undefined) {
          _this.$refs['editFrom'].resetFields();
        }
        _this.form={
          id:row.id,
          relName:row.relName,
          phone:row.phone,
          sex:row.sex,
          status:row.status,
          companyCode:row.companyCode,
          adress:row.adress,
          idCard:row.idCard
        }
        //this.$router.push({name:'article-edit'})
        _this.dialogEditVisible = true;
      },
      removeRow(row){
        let _this = this
        _this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteEmployee({id:row.id},_this).then(function(res) {
            if(res.status == '200'){
              if(res.data.code === '0'){
                _this.dialogEditVisible = false
                _this.loadData({},1,10)
              }else{
                var msg = res.data.message;
                _this.$notify.warning({
                  title: msg
                })
              }
            }
          }).catch(function (err) {

          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      loadData(params,page,rows){
        let _this = this
        params.page = page
        params.rows = rows
        _this.page = page
        _this.rows = rows
        getEmployees(params,_this).then(function(res) {
          if(res.status == '200'){
            if(res.data.code === '0'){
              _this.tableData = res.data.data.content
              _this.total = res.data.data.totalElements
            }else{
              var msg = res.data.message;
              _this.$notify.warning({
                title: msg
              })
            }
          }
        }).catch(function (err) {

        })
      },
      init(){
        var that = this;
        that.loadData({},1,10)
      }
    },
    mounted(){
      this.init()
      var that = this;
      window.onresize = () => {
        return (() => {
          window.screenHeight = document.body.clientHeight
          that.screenHeight = window.screenHeight - 60 -60 -130
        })()
      }
    }
  }
</script>
<style>
  tbody .el-button.is-circle{
    padding: 6px!important;
  }
  .el-dialog__body{
    padding-top: 5px!important;
  }

  .el-table td{
    padding: 6px 0!important;
  }

  #news_table .quillWrapper{
    height: 499px!important;
  }
  #news_table .ql-container{
    height: 410px!important;
  }

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
