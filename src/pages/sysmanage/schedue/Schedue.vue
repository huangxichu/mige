<template>
  <el-container style="height: 100%" id="schedue_table">
    <el-header id="schedue_head">
      <el-row>
        <el-button type="success" icon="el-icon-plus" title="新增" @click="gotoAdd()"circle></el-button>

      </el-row>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        :height="screenHeight"
        style="width: 100%;margin:0;padding:0;">
        <el-table-column
          prop="name"
          label="排班名称"
          width="250">
        </el-table-column>
        <el-table-column
          prop="seq"
          label="序号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="organName"
          label="医院"
          width="250">
        </el-table-column>
        <el-table-column
          prop="officeName"
          label="科室"
          width="150">
        </el-table-column>
        <el-table-column
          prop="doctorName"
          label="专家"
          width="100">
        </el-table-column>
        <el-table-column
          prop="onDutyDate"
          label="值班日期"
          :formatter="formatterDate"
          width="120">
        </el-table-column>
        <el-table-column
          prop="startTime"
          label="开始时间"
          :formatter="formatterTime"
          width="100">
        </el-table-column>
        <el-table-column
          prop="endTime"
          label="结束时间"
          :formatter="formatterTime"
          width="100">
        </el-table-column>
        <el-table-column
          prop="registrNum"
          label="挂号数量"
          width="100">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注">
        </el-table-column>
        <el-table-column label="操作" width="200" class="operate">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" title="编辑" @click="gotoEdit(scope.row)"circle></el-button>
            <el-button type="danger" icon="el-icon-delete" title="删除" @click="removeSchedue(scope.row)" circle></el-button>
            <el-button  icon="el-icon-tickets" @click="handleShowRegister(scope.row)" title="申请" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <schedue-edit ref="schedueEdit" v-bind:dialogVisible="dialogVisible" v-on:changeDialog="changeDialog($event)"></schedue-edit>
      <el-dialog title="申请列表" :visible.sync="dialogListVisible"
                 :close-on-press-escape="true"
                 :close-on-click-modal="false"
                 :show-close="true">
        <el-form ref="registerListSearch"  :model="registerSearch" label-width="80px" style="width: 100%;">
          <el-col :span="4">
            <el-input v-model="registerSearch.realName" placeholder="姓名" size="mini"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="registerSearch.idCard" placeholder="身份证号" size="mini" style="margin-left: 5px;"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="registerSearch.phone" placeholder="手机号" size="mini" style="margin-left: 10px;"></el-input>
          </el-col>
          <el-col :span="4">
            <el-date-picker size="mini" style="margin-left: 15px;width: 150px;"
                            v-model="registerSearch.createDateStr"
                            type="date" value-format="yyyy-MM-dd"
                            placeholder="申请日期">
            </el-date-picker>
          </el-col>
          <el-col :span="4">
            <el-button type="success" icon="el-icon-search" @click="searchRegister_2()"  circle style="padding: 6px;margin-left: 60px;"></el-button>
          </el-col>
        </el-form>
        <el-table :data="registers" height="250">
          <el-table-column property="realName" label="姓名" width="120" ></el-table-column>
          <el-table-column property="idCard" label="身份证" :show-overflow-tooltip="tooltip"></el-table-column>
          <el-table-column property="phone" label="手机号" width="150"></el-table-column>
          <el-table-column property="createDate" label="申请时间" width="180"   :formatter="formatterLongDate"></el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleRegisterSizeChange"
          @current-change="handleRegisterCurrentChange"
          :current-page="registerSearch.page"
          :page-sizes="[5, 10, 20]"
          :page-size="page"
          layout="total, sizes, prev, pager, next, jumper"
          :total="registerTotal" style="height: 50px;">
        </el-pagination>
      </el-dialog>
    </el-main>
    <el-footer id="schedue_foot">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="rows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="schedueTotal" style="height: 50px;">
      </el-pagination>
    </el-footer>
  </el-container>
</template>
<style>
  tbody .el-button.is-circle{
    padding: 6px;
  }
</style>
<script>
  import {getSchedue, removeSchedue,searchRegister} from '../api'
  import SchedueEdit from '../schedue/SchedueEdit'
  import moment from 'moment'

  export default {
    components: {
      'schedue-edit': SchedueEdit
    },
    data() {
      return {
        dialogVisible: false,
        dialogListVisible: false,
        tableData: [],
        registers:[],
        registerSearch:{
          realName:'',
          scheduleCode:'',
          idCard:'',
          phone:'',
          createDateStr:'',
          page:1,
          rows:5
        },
        tooltip:true,
        schedueTotal:0,
        registerTotal:0,
        page:1,
        rows:10,
        tableHeight:400,
        screenHeight: document.body.clientHeight - 60 -60 -130
      }
    },
    watch: {
      screenHeight (val) {
        this.screenHeight = val
      }
    },
    methods: {
      changeDialog(params) {
        let _this = this
        _this.dialogVisible = params.dialogVisible
        if(params.flag){
          this.loadData({companyCode:_this.$companyCode},_this.page,_this.rows)
        }
      },
      gotoEdit(row) {
        //this.$router.push({name:'schedue-edit', params:{code: row.code}})
        this.$refs.schedueEdit.getSchedue(row.code);
        this.dialogVisible = true
      },
      gotoAdd() {
        //this.$router.push({name:'schedue-edit'})
        this.$refs.schedueEdit.initData()
        this.dialogVisible = true
      },
      formatterDate(row, column, cellValue, index){
        return moment(new Date(cellValue)).format("YYYY-MM-DD")
      },
      formatterLongDate(row, column, cellValue, index){
        return moment(new Date(cellValue)).format("YYYY-MM-DD HH:mm:ss")
      },
      formatterTime(row, column, cellValue, index){
        return moment(new Date(cellValue)).format("HH:mm")
      },
      removeSchedue(row) {
        var page = this;
        page.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          removeSchedue({code: row.code}).then(res => {
            if(res.data.success) {
              page.$message.success(res.data.message)
              this.loadData({companyCode:page.$companyCode},page.page,page.rows)
            } else {
              page.$message.error(res.data.message)
            }
          }).catch(err => {
            page.$message.error(res.data.message)
          });
        }).catch(() => {
          page.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleSizeChange (rows) {
        let _this = this
        this.loadData({companyCode:_this.$companyCode},1,rows)
      },
      handleCurrentChange (page) {
        let _this = this
        this.loadData({companyCode:_this.$companyCode},page,this.rows)
      },
      handleShow(index,row){
//        var code = row.code
//        let routeData = this.$router.resolve('/schedue/info/'+code)
//        window.open(routeData.href, '_blank')
      },
      loadData(params,page,rows){
        let _this = this
        params.page = page
        params.rows = rows
        _this.page = page
        _this.rows = rows
        getSchedue(params).then(function(res) {
          if(res.status == '200'){
            _this.tableData = res.data.rows
            _this.schedueTotal = res.data.total
          }else{
            var msg = "请求数据失败";
            _this.$notify.warning({
              title: msg
            })
          }
        }).catch(this.handleError)
      },
      handleShowRegister(row){
        let _this = this
        _this.dialogListVisible =true
        _this.registers = []
        _this.registerTotal = 0
        _this.registerSearch = {
            realName:'',
            scheduleCode:row.code,
            idCard:'',
            phone:'',
            createDateStr:'',
            page:1,
            rows:5
        }
        _this.loadRegister(_this.registerSearch,1,5)
      },
      searchRegister_2(){
        let _this = this
        _this.loadRegister(_this.registerSearch,1,5)
      },
      handleRegisterSizeChange (rows) {
        let _this = this
        _this.loadRegister(_this.registerSearch,1,rows)
      },
      handleRegisterCurrentChange (page) {
        let _this = this
        _this.loadRegister(_this.registerSearch,page,_this.registerSearch.replyrows)
      },
      loadRegister(params,page,rows){
        let _this = this
        _this.registerSearch.page = page
        _this.registerSearch.rows = rows
        params.page = page
        params.rows = rows
        searchRegister(params).then(function(res) {
          if(res.status == '200'){
            _this.registers = res.data.rows
            _this.registerTotal = res.data.total
          }else{
            var msg = "请求数据失败";
            _this.$notify.warning({
              title: msg
            })
          }
        }).catch(this.handleError)
      },
      init(){
        let _this = this
        this.loadData({companyCode:_this.$companyCode},1,10)
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
