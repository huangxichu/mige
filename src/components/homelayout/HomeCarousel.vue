<template>
  <el-container class="home_carousel">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" style="width: 100%;">
      <!-- Indicators -->
      <!--<ol class="carousel-indicators">-->

      <!--</ol>-->
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../../assets/img/bg-1.jpg" style="width: 100%;min-height: 200px;">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <img src="../../assets/img/bg-2.jpg" style="width: 100%;min-height: 200px;">
          <div class="carousel-caption">
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: 'home-carousel',
    methods: {

    },
    data(){
      return {

      }
    },
    mounted(){

    }
  }

</script>

<style>

</style>
