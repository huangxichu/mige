<template>
  <el-container style="height: 100%" id="news_table">
    <el-header id="article_head" style="margin-top: 10px!important;height: 40px!important;">
      <el-form ref="search"  :model="search" label-width="80px" style="width: 100%;">
        <el-row>
          <el-col :span="4">
            <el-input v-model="search.productName" placeholder="产品名称" size="mini"></el-input>
          </el-col>
          <el-col :span="4">
            产品类别:<el-select v-model="search.productCategoryId" placeholder="选择产品类别" size="mini" style="margin-left: 10px;">
              <el-option label="全部" value="" key="-1"></el-option>
              <el-option
                v-for="item in categories"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            是否热推:<el-select v-model="search.isHot" placeholder="是否热推" size="mini" style="margin-left: 10px;">
              <el-option label="全部" value="" key="-1"></el-option>
              <el-option
                v-for="item in marks"
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
          prop="productName"
          label="产品名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="productCategoryId"
          label="产品类别"
          width="200" :formatter="formatterCategory">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="是否热推"
          :filters="[{ text: '否', value: '0' }, { text: '是', value: '1' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
          width="200" >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.isHot === '1' ? 'primary' :  'info'"
              disable-transitions>{{scope.row.isHot == '1' ? '是' : '否'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          width="200" :formatter="formatterLongDate">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="状态"
          width="200"
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
    <el-dialog title="产品" :visible.sync="dialogEditVisible"
               :close-on-press-escape="true"
               :close-on-click-modal="false"
               :show-close="true" width="900px">
      <el-form :model="form" label-width="100px" :rules="rules" ref="editFrom">
        <el-tabs tab-position="left" style="height: 500px;">
          <el-tab-pane label="产品属性">
            <el-form-item label="产品名称" prop="productName">
              <el-input v-model="form.productName" auto-complete="off"  placeholder="请输入产品名称"></el-input>
            </el-form-item>
            <el-form-item label="产品类别" prop="productCategoryId">
              <el-select v-model="form.productCategoryId"
                         visible-change="false"
                         filterable>
                <el-option
                  v-for="item in categories"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否热推" prop="isHot">
              <el-select v-model="form.isHot"
                         visible-change="false"
                         filterable>
                <el-option
                  v-for="item in marks"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品图片">
              <el-upload
                class="avatar-uploader"
                action="/api/article/upload.json"
                :show-file-list="false"
                :on-success="uploadThumbnailPath"
                :http-request="handlePost"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="产品详情">
              <vue-editor v-model="form.productInfo" useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveProduct_('editFrom')">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
  import {getProduct,saveProduct,deleteProduct,getCategory} from './api'
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
        marks:[{label:'否',value:'0'},{label:'是',value:'1'}],
        dialogEditVisible: false,
        tableData: [],
        total:0,
        page:1,
        rows:10,
        search:{
          productName:'',
          productCategoryId:'',
          isHot:'',
          status:''
        },
        categories:[],
        form:{
          id:'',
          productName:'',
          productCategoryId:'',
          isHot:'0',
          status:'',
          companyCode:'',
          productInfo:'',
          pic:''
        },
        imageUrl: '',
        rules: {
          productName: [{ required: true, message: '请输入产品名称', trigger: 'blur' }],
          isHot: [{required: true, message: '请选择是否热推', trigger: 'blur'}],
          productCategoryId: [{required: true, message: '请选择产品类别', trigger: 'blur'}]
        },
        screenHeight: document.body.clientHeight - 50 -60 -130
      }
    },
    watch: {
      screenHeight (val) {
        this.screenHeight = val
      }
    },
    methods: {
      getCategory(){
        let _this = this
        getCategory({companyCode:_this.$companyCode,status:'1'}).then(function(res) {
          if(res.status == '200'){
            if(res.data.code === '0'){
              _this.categories = res.data.data
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
      filterTag(value, row) {
        return row.status === value;
      },
      saveProduct_(formName){
        let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            saveProduct(_this.form,_this).then(function(res) {
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
        saveProduct({
          id:row.id,
          productName:row.productName,
          productCategoryId:row.productCategoryId,
          isHot:row.isHot,
          status:row.status,
          companyCode:row.companyCode,
          productInfo:row.productInfo,
          pic:row.pic},_this).then(function(res) {
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
        this.imageUrl = URL.createObjectURL(file.raw);
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
              _this.imageUrl = res.data.data;
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
      formatterCategory(row, column, cellValue, index){
        let _this = this
        var categories = _this.categories
        for(var i in categories){
          if(cellValue === categories[i].id){
            return categories[i].name;
          }
        }
        return "未知类别"
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
        _this.imageUrl = ''
        _this.form = {
          id:'',
          productName:'',
          productCategoryId:'',
          isHot:'0',
          status:'',
          companyCode:'',
          productInfo:'',
          pic:''
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
          productName:row.productName,
          productCategoryId:row.productCategoryId,
          isHot:row.isHot,
          status:row.status,
          companyCode:row.companyCode,
          productInfo:row.productInfo,
          pic:row.pic
        }
        _this.imageUrl = row.pic
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
          deleteProduct({id:row.id},_this).then(function(res) {
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
        getProduct(params,_this).then(function(res) {
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
        that.getCategory()
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
