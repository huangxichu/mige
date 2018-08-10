<template>
  <el-container style="height: 100%" id="dept_table">
    <el-header id="dept_head" style="margin-top: 10px!important;height: 40px!important;">
      <el-form ref="search"  :model="search" label-width="80px" style="width: 100%;">
        <el-row>
          <el-col :span="4">
            <el-input v-model="search.postName" placeholder="岗位名称" size="mini"></el-input>
          </el-col>
          <el-col :span="4">
            状态:<el-select v-model="search.status" placeholder="选择状态" size="mini" style="margin-left: 10px;">
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
          prop="postName"
          label="岗位名称"
          width="200">
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
              :type="scope.row.status === '1' ? 'success' : 'info'"
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
    <el-dialog title="岗位" :visible.sync="dialogEditVisible"
               :close-on-press-escape="true"
               :close-on-click-modal="false"
               :show-close="true" width="600px">
      <el-form :model="form" label-width="100px" :rules="rules" ref="editFrom">
        <el-form-item label="岗位名称" prop="postName">
          <el-input v-model="form.postName" auto-complete="off"  placeholder="请输入岗位名称"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="savePost_2('editFrom')">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
  import {getPost,savePost,deletePost} from './api'
  import moment from 'moment'


  export default {
    data() {
      return {
        statuses:[{label:'全部',value:''},{label:'停用',value:'0'},{label:'启用',value:'1'}],
        dialogEditVisible: false,
        tableData: [],
        total:0,
        page:1,
        rows:10,
        search:{
          postName:'',
          status:''
        },
        form:{
          id:'',
          postName:'',
          companyCode:''
        },
        rules: {
          postName: [
            { required: true, message: '请输入岗位名称', trigger: 'blur' }
          ]
        },
        screenHeight: document.body.clientHeight - 40 -60 -130
      }
    },
    watch: {
      screenHeight (val) {
        this.screenHeight = val
      }
    },
    methods: {
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
      savePost_2(formName){
        let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            savePost(_this.form,_this).then(function(res) {
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
      formatterLongDate(row, column, cellValue, index){
        return moment(new Date(cellValue)).format("YYYY-MM-DD HH:mm:ss")
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
        _this.form={id:'',postName:'',companyCode:''}
        //this.$router.push({name:'article-edit'})
        _this.dialogEditVisible = true;
      },
      gotoEdit(row) {
        let _this = this
        if (_this.$refs['editFrom'] !== undefined) {
          _this.$refs['editFrom'].resetFields();
        }
        _this.form={id:row.id,postName:row.postName,companyCode:row.companyCode,status:row.status}
        //this.$router.push({name:'article-edit'})
        _this.dialogEditVisible = true;
      },
      upStatus(row,status){
        let _this = this
        row.status = status;
        savePost({id:row.id,postName:row.postName,companyCode:row.companyCode,status:row.status},_this).then(function(res) {
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
      removeRow(row){
        let _this = this
        _this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deletePost({id:row.id},_this).then(function(res) {
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
        getPost(params,_this).then(function(res) {
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
    created: function () {
      this.init()
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
</style>
