
<template>
  <div>
      <mt-field placeholder="评论将由长沙晚报公众号筛选后显示，对所有人可见"
                style="font-size: 10px;"
                v-model="reply.replyDetail"
                type="textarea" rows="6" ></mt-field>
      <mt-button type="primary" size="large"  @click="onReplySubmit()">评论</mt-button>
  </div>

</template>

<script>
  import {reply} from '../../api'
  import '../../../../assets/css/articleReply.css'

  export default {
    name:'article-reply',
    props: ['dialogVisible'],
    data() {
      return {
        title:'资讯评论',
        openId:'',
        reply:{
          articleCode:'',
          replyDetail:'',
          openId:''
        },
        flag: false
      }
    },
    methods: {
      handleClose(done) {
        done();
      },
      setInfo(code,title,openId){
        this.reply.articleCode = code
        this.reply.openId = openId
        this.title = title
        this.reply.replyDetail = ''
      },
      onReplySubmit(){
        var page = this;
//        console.info(this.reply.replyDetail)
//        console.info(this.reply.articleCode)
        if(this.reply.replyDetail != ''){
          reply(page.reply).then(res => {
            if (res.data.success) {
              page.$message.success(res.data.message)
              //page.$router.push('/sys/schedue')
              page.$emit("changeDialog", {dialogVisible:false,flag:true});
            } else {
              page.$message.error(res.data.message)
            }
          }).catch(err => {
//            console.info(err);
            page.$message.error(err)
          });
        }else{
          page.$message.error("请输入评论")
        }
      }
    },
    created: function () {

    },mounted(){

    }
  }
</script>

