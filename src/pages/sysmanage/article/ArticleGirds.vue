<template>
  <div style="height: 100%;overflow-y: auto;padding-top: 20px;">
    <mt-header fixed title="名医福利">
      <mt-button icon="search" slot="right" @click="onSearch"></mt-button>
    </mt-header>
    <div v-if="isSearch" class="my-search-input" >
      <el-input
        placeholder="请输入内容"  @change="changeSearchValue"
        v-model="searchValue">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
        <el-button slot="append" @click="clearSearchValue">清空</el-button>
      </el-input>
    </div>
    <ul style="margin: 15px 0 0 0;padding:0;"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
      <li v-for="item in articles" style="margin:3px; padding:0;" @click="handleShow(item.code)" :key="item.code">
        <el-card :body-style="{ padding: '0!important', margin: '0px',height:'100px'}" >
          <el-container>
            <el-aside width="100px" style="padding: 0!important;"><img :src="item.thumbnailPath" STYLE="height: 100px;width: 100px;"></el-aside>
            <el-main style="padding: 0!important;">
              <div style="padding: 6px;">
                <span style="font-weight: 600;font-size: 14px;">{{item.title}}</span>
                <div style="height: 50px;width: auto;font-size: 12px;color: #888;margin-top: 2px;"><p class="cont" style="margin: 0!important;">{{ item.describe}}</p></div>
                <div class="bottom clearfix" style="margin-top: 0px!important;font-size: 14px!important;">
                  <time class="time">{{ formatterLongDate(item.createDate) }}</time>
                </div>

              </div>
            </el-main>
          </el-container>
        </el-card>
      </li>
    </ul>

  </div>
</template>

<script>
  import {getArticle, removeArticle,getArticleReply,updateAtricleReply} from '../api'
  import  '../../../assets/css/articleGrids.css'
  import moment from 'moment'

  export default {
    components: {

    },
    data() {
      return {
        isSearch: false,
        searchValue: '',
        pageSize: 5,
        page: 1,
        total: 0,
        loading: false,
        defaultPageSize: 3,
        articles:[]
      }
    },
    watch: {

    },
    methods: {
      formatterLongDate(cellValue){
        return moment(new Date(cellValue)).format("YYYY-MM-DD HH:mm:ss")
      },
      handleShow(code){
//        this.$router.push('/article/info/'+code)
        let routeData = this.$router.resolve('/article/info/'+code)
        window.open(routeData.href, '_self')
      },
      onSearch() {
        this.isSearch = !this.isSearch;
      },
      changeSearchValue(value) {
        this.articles = [];
        this.loadArticles();
        this.isSearch = !this.isSearch;
      },
      clearSearchValue() {
        this.articles = [];
        this.searchValue = '';
        this.loadArticles();
        this.isSearch = !this.isSearch;
      },
      loadMore() {
        var page = this;
        if((page.pageSize*page.page) > page.total) {
          return
        } else {
          page.loading = true
          page.page = page.page+1
        }
        page.loadArticles(page.page,page.pageSize)
        page.loading = false;
      },
      loadArticles(pages,rows) {
        var page = this;
        var params = {companyCode:page.$companyCode,type:1,title: page.searchValue}
        params.page = pages
        params.rows = rows
        getArticle(params).then(function(res) {
          if(res.status == '200'){
            var rows = res.data.rows
            for(var i in rows){
              rows[i].thumbnailPath = 'http://health.kzyyw.cn:9080/document/' + rows[i].thumbnailPath
              page.articles.push(rows[i])
            }
//            console.info(page.articles)
            page.total = res.data.total
          }else{
            var msg = "请求数据失败"
            page.$notify.warning({
              title: msg
            })
          }
        }).catch(this.handleError)
      }
    },
    mounted(){
      var page = this;
      page.articles = []
      page.loadArticles(page.page,page.pageSize);
    }
  }
</script>
<style>

</style>
