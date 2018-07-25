<template>
  <div id="allmap" ref="allmap" style="height: 500px;margin-top: 20px;"></div>
</template>

<script>
  export default {
    name: 'my-map',
    methods: {

    },
    data(){
      return {

      }
    },
    mounted(){
      var map = new BMap.Map("allmap");//请注意这段
      var x=112.983037,y=28.201199;

      map.centerAndZoom(new BMap.Point(x, y), 15);// 初始化地图,设置中心点坐标和地图级别
      map.addControl(new BMap.MapTypeControl({//添加地图类型控件
        mapTypes:[
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]}));
      map.setCurrentCity("长沙");// 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      var mk = new BMap.Marker(new BMap.Point(x, y));
      map.addOverlay(mk);
    },
  }

</script>

<style>

</style>
