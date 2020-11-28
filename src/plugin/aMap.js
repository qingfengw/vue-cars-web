//高德地图API
import Vue from "vue";
import VueAMap from "vue-amap";
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  // 高德key
  key: "49e32bd7116d2425efde892f421126f7", // 自己到官网申请，我随便写的
  // 插件集合 （插件按需引入）
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor",
    "AMap.MarkerClusterer"
  ],
  v: "1.4.15", // 我也不知道为什么要写这个，不写项目会报错，而且我随便写的，跟我下载的版本对应不了
  uiVersion: "1.0.11" // ui版本号，也是需要写
});
