<template>
  <el-container style="height: 100%" id="news_table">
    <el-header id="article_head" style="margin-top: 10px!important;height: 40px!important;">
      <el-form ref="search"  :model="search" label-width="80px" style="width: 100%;">
        <el-row>
          <el-col :span="4">
            <el-input v-model="search.relName" placeholder="姓名" size="small "></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="search.phone" placeholder="手机号码" size="small "></el-input>
          </el-col>
          <el-col :span="4">
            状态:<el-select v-model="search.status" placeholder="选择状态" size="small " style="margin-left: 10px;">
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
          prop="phone"
          label="手机"
          width="200">
        </el-table-column>
        <el-table-column
          prop="messageContext"
          label="留言"
          width="200" :show-overflow-tooltip="tooltip">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="留言时间"
          width="200" :formatter="formatterLongDate">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="状态"
          width="150"
          :filters="[{ text: '游客留言', value: '0' }, { text: '已联系', value: '1' }, { text: '已忽略', value: '9' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.status === '1' ? 'primary' : (scope.row.status === '0' ? 'danger' : 'info')"
              disable-transitions>{{scope.row.status == '1' ? '已联系' : (scope.row.status == '0' ? '游客留言' : '已忽略')}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-search" title="查看" @click="gotoEdit(scope.row)"circle></el-button>
            <el-button type="success" icon="el-icon-circle-check-outline" title="已联系" @click="upStatus(scope.row,'1')"circle v-if="scope.row.status === '0'"></el-button>
            <el-button type="info" icon="el-icon-circle-close-outline" title="忽略" @click="upStatus(scope.row,'9')"circle v-if="scope.row.status === '0'"></el-button>
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
    <el-dialog title="留言" :visible.sync="dialogEditVisible"
               :close-on-press-escape="true"
               :close-on-click-modal="false"
               :show-close="true" width="900px">
      <el-form :model="form" label-width="100px" ref="editFrom">
        <el-tabs tab-position="left" style="height: 500px;">
          <el-tab-pane label="留言信息">
            <el-form-item label="姓名">
              <el-input v-model="form.relName" auto-complete="off"  :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="手机">
              <el-input v-model="form.phone" auto-complete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="留言">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 10}"
                v-model="form.messageContext" :disabled="true">
              </el-input>
            </el-form-item>
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">关 闭</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
  import {getMessages,saveMessage} from './api'
  import moment from 'moment'

  export default {
    data() {
      return {
        statuses:[{label:'游客留言',value:'0'},{label:'已联系',value:'1'},{label:'已忽略',value:'9'}],
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
          status:'',
          companyCode:'',
          messageContext:''
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
      upStatus(row,status){
        let _this = this
        row.status = status;
        saveMessage({
          id:row.id,
          relName:row.relName,
          phone:row.phone,
          status:row.status,
          companyCode:row.companyCode,
          messageContext:row.messageContext},_this).then(function(res) {
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
      searchLoad(){
        let _this = this
        _this.loadData(_this.search,1,10)
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
          status:row.status,
          companyCode:row.companyCode,
          messageContext:row.messageContext
        }
        //this.$router.push({name:'article-edit'})
        _this.dialogEditVisible = true;
      },
      loadData(params,page,rows){
        let _this = this
        params.page = page
        params.rows = rows
        _this.page = page
        _this.rows = rows
        getMessages(params,_this).then(function(res) {
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
