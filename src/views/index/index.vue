<template>
  <div>
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>
    <!-- 地图 -->
    <Map />
    <!-- 导航 -->
    <Navbar />
    <!-- 汽车 -->
    <Cars />
  </div>
</template>

<script>
import Map from "../amap/index.vue";
import Cars from "../cars/index.vue";
import Navbar from "@c/navbar/index.vue";
export default {
  name: "Index",
  components: { Map, Cars, Navbar },
  data() {
    return {};
  },
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Index" ? false : true;
    },
  },
  watch: {},
};
</script>

<style lang="scss">
#children-view {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  width: 410px;
  background-color: #34393f;
  z-index: 100;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  &.open {
    right: 0px;
  }
}
</style>
