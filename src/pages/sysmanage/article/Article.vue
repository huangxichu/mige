<template>
  <el-container style="height: 100%" id="article_table">
    <el-header id="article_head">
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
          prop="title"
          label="标题"
          width="400">
        </el-table-column>
        <el-table-column
          prop="editor"
          label="编辑"
          width="200">
        </el-table-column>
        <el-table-column
          prop="source"
          label="来源"
          width="200">
        </el-table-column>
        <el-table-column
          prop="createDateStr"
          label="时间"
          width="200">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="状态"
          width="100"
          :filters="[{ text: '编辑', value: '0' }, { text: '发布', value: '1' }, { text: '结束', value: '9' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.status === '1' ? 'primary' : (scope.row.status === '0' ? 'success' : 'info')"
              disable-transitions>{{scope.row.status == '1' ? '发布' : (scope.row.status == '0' ? '编辑' : '结束')}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" title="编辑" @click="gotoEdit(scope.row)"circle></el-button>
            <el-button type="danger" icon="el-icon-delete" title="删除" @click="removeArticle(scope.row)" circle></el-button>
            <el-button type="success" icon="el-icon-search" @click="handleShow(scope.$index, scope.row)" title="预览" circle></el-button>
            <el-button  icon="el-icon-tickets" @click="handleShowReply(scope.row)" title="评论" circle></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- -->
      <article-edit ref="articleEdit" v-bind:dialogVisible="dialogVisible" v-on:changeDialog="changeDialog($event)"></article-edit>
      <el-dialog title="资讯评论列表" :visible.sync="dialogListVisible"
                 :close-on-press-escape="true"
                 :close-on-click-modal="false"
                 :show-close="true">
        <el-form ref="replyListSearch"  :model="replySearch" label-width="80px" style="width: 100%;">
          <el-col :span="4">
            <el-input v-model="replySearch.personName" placeholder="昵称" size="mini"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="replySearch.replyDetail" placeholder="评论内容" size="mini" style="margin-left: 5px;"></el-input>
          </el-col>
          <el-col :span="4">
            <el-select v-model="replySearch.status" placeholder="选择可见状态" size="mini" style="margin-left: 10px;">
              <el-option
                v-for="item in statuses"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-date-picker size="mini" style="margin-left: 10px;width: 150px;"
              v-model="replySearch.createDateStr"
              type="date" value-format="yyyy-MM-dd"
              placeholder="评论日期">
            </el-date-picker>
          </el-col>
          <el-col :span="4">
            <el-button type="success" icon="el-icon-search" @click="searchReply()"  circle style="padding: 6px;margin-left: 40px;"></el-button>
          </el-col>
        </el-form>
        <el-table :data="replays" height="250">
          <el-table-column property="personName" label="昵称" width="120" :show-overflow-tooltip="tooltip"></el-table-column>
          <el-table-column property="replyDetail" label="评论内容" :show-overflow-tooltip="tooltip"></el-table-column>
          <el-table-column property="createDateStr" label="评论时间" width="150"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button type="info" icon="el-icon-caret-top" v-if="scope.row.isTop == 0" title="置顶" @click="handleTop(scope.row,1)"circle></el-button>
              <el-button type="danger" icon="el-icon-caret-bottom" v-if="scope.row.isTop == 1" title="取消置顶" @click="handleTop(scope.row,0)"circle></el-button>
              <el-button type="info" icon="el-icon-view" title="不可见" v-if="scope.row.status == 0" @click="handleView(scope.row,1)" circle></el-button>
              <el-button type="success" icon="el-icon-view" title="可见" v-if="scope.row.status == 1" @click="handleView(scope.row,0)" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleReplySizeChange"
          @current-change="handleReplyCurrentChange"
          :current-page="replypage"
          :page-sizes="[5, 10, 20]"
          :page-size="page"
          layout="total, sizes, prev, pager, next, jumper"
          :total="replyTotal" style="height: 50px;">
        </el-pagination>
      </el-dialog>
      <!--<article-reply-list ref="articleReplyList" v-bind:dialogVisible="dialogListVisible" v-on:changeDialog="changeListDialog($event)"></article-reply-list>-->
    </el-main>
    <el-footer id="article_foot">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 50,100]"
        :page-size="rows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="articleTotal" style="height: 50px;">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
  import {getArticle, removeArticle,getArticleReply,updateAtricleReply} from '../api'
  import ArticleEdit from '../article/ArticleEdit'

  //  import ArticleReplyList from '../article/info/ArticleReplyList.vue'
  export default {
    components: {
      'article-edit': ArticleEdit,
//      'article-reply-list': ArticleReplyList
    },
    data() {
      return {
        statuses:[{label:'全部',value:''},{label:'可见',value:'1'},{label:'不可见',value:'0'}],
        replySearch:{
          personName:'',
          replyDetail:'',
          status:'',
          createDateStr:'',
          articleCode:''
        },
        dialogVisible: false,
        dialogListVisible: false,
        tableData: [
        ],
        replays: [],
        articleTotal:0,
        replyTotal:0,
        page:1,
        rows:10,
        replypage:1,
        replyrows:5,
        tableHeight:400,
        tooltip:true,
        screenHeight: document.body.clientHeight - 60 -60 -130
      }
    },
    watch: {
      screenHeight (val) {
        this.screenHeight = val
      }
    },
    methods: {
      filterTag(value, row) {
        return row.status === value;
      },
      changeDialog(dialogVisible) {
        this.dialogVisible = dialogVisible;
        this.loadData({companyCode:this.$companyCode},this.page,this.rows)
      },
      changeListDialog(dialogListVisible){
        this.dialogListVisible = dialogListVisible
      },
      gotoEdit(row) {
        //this.selectCode = row.code;
        this.dialogVisible =true;
        this.$refs.articleEdit.getArticle(row.code);
        //this.$router.push({name:'article-edit', params:{code: row.code}})
      },
      gotoAdd() {
        //this.$router.push({name:'article-edit'})
        this.$refs.articleEdit.initData()
        this.dialogVisible = true;
      },
      removeArticle(row) {
        var page = this;
        page.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          removeArticle({code: row.code}).then(res => {
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
        this.loadData({companyCode:this.$companyCode},1,rows)
      },
      handleCurrentChange (page) {
        this.loadData({companyCode:this.$companyCode},page,this.rows)
      },
      handleReplySizeChange (rows) {
        let _this = this
        this.loadReply(_this.replySearch,1,rows)
      },
      handleReplyCurrentChange (page) {
        let _this = this
        this.loadReply(_this.replySearch,page,_this.replyrows)
      },
      handleShow(index,row){
        var code = row.code
//        this.$router.push('/article/info/'+code)
        let routeData = this.$router.resolve('/article/info/'+code)
        window.open(routeData.href, '_blank')
      },
      loadData(params,page,rows){
        let _this = this
        params.page = page
        params.rows = rows
        _this.page = page
        _this.rows = rows
        getArticle(params).then(function(res) {
          if(res.status == '200'){
            _this.tableData = res.data.rows
            _this.articleTotal = res.data.total
          }else{
            var msg = "请求数据失败";
            _this.$notify.warning({
              title: msg
            })
          }
        }).catch(this.handleError)
      },
      handleShowReply(row){
        let _this = this
        _this.dialogListVisible =true
//        this.$refs.articleReplyList.setCode(row.code)
        _this.replays = []
        _this.replyTotal = 0
        _this.replySearch = {
          personName:'',
          replyDetail:'',
          status:'',
          createDateStr:'',
          articleCode:row.code
        }
        _this.loadReply(_this.replySearch,1,5)
      },
      loadReply(params,page,rows){
        let _this = this
        _this.replypage = page
        _this.replyrows = rows
//        _this.articleCode = params.articleCode
        params.page = page
        params.rows = rows
        getArticleReply(params).then(function(res) {
          if(res.status == '200'){
            _this.replays = res.data.rows
            _this.replyTotal = res.data.total
          }else{
            var msg = "请求数据失败";
            _this.$notify.warning({
              title: msg
            })
          }
        }).catch(this.handleError)
      },
      handleTop(row,isTop){
        var page = this;
        updateAtricleReply({code:row.code,isTop:isTop}).then(res => {
            if (res.data.success) {
              page.$message.success(res.data.message)
              //page.$router.push('/sys/schedue')
              page.loadReply(page.replySearch,page.replypage,page.replyrows)
            } else {
              page.$message.error(res.data.message)
            }
          }).catch(err => {
            page.$message.error(err)
          });
      },
      handleView(row,status){
        var page = this;
        updateAtricleReply({code:row.code,status:status}).then(res => {
          if (res.data.success) {
            page.$message.success(res.data.message)
            //page.$router.push('/sys/schedue')
            page.loadReply(page.replySearch,page.replypage,page.replyrows)
          } else {
            page.$message.error(res.data.message)
          }
        }).catch(err => {
          page.$message.error(err)
        });
      },
      searchReply(){
        let _this = this
        _this.loadReply(_this.replySearch,1,5)
      },
      init(){
        var that = this;
        this.loadData({companyCode:that.$companyCode},1,10)
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
</style>
