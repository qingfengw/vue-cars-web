<template>
  <div class="amap-wrap">
    <el-amap
      vid="amapDemo"
      :zoom="zoom"
      :events="events"
      class="amap-demo"
    ></el-amap>
  </div>
</template>

<script>
import { amapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "amap",
  data() {
    return {
      map: null,
      zoom: 12,
      amapManager,
      events: {},
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map("amapDemo", {
        center: new AMap.LngLat(121.59996, 31.197646),
        zoom: this.zoom,
      });
    });
  },
};
</script>

<style lang="scss">
.amap-wrap {
  height: 100vh;
}
</style>
