<style>
  *{
    -webkit-overflow-scrolling : touch!important;
  }
</style>
<template>
  <el-dialog
    :title="title"
    center
    fullscreen
    :close-on-press-escape="flag"
    :show-close="flag"
    :visible.sync="dialogListVisible"
    :before-close="handleListClose">
    <el-table :data="gridData">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
  import {reply} from '../../api'

  export default {
    name:'article-reply-list',
    props: ['dialogListVisible'],
    data() {
      return {
        title:'资讯评论',
        articleCode:'',
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        listflag: false
      }
    },
    methods: {
      handleListClose(done) {
        done();
      },
      setCode(code){
        this.articleCode = code
      },
      gotoBack() {
        this.$emit("dialogListVisible", false);
      }
    },
    created: function () {

    },mounted(){

    }
  }
</script>

