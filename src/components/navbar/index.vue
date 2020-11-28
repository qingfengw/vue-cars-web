<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-search"></i></li>
      <li>
        <a href="javascript:void(0)" class="select-car-btn">选择车辆</a>
      </li>
      <li><i class="icon icon-location"></i></li>
      <li><i class="icon icon-user"></i></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navbar {
  cursor: pointer;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  z-index: 10;
  text-align: center;
  li{
    display: inline-block;
  }
  .icon{
    vertical-align: middle;
    margin: 0 17px;
  }
  .select-car-btn{
    display: block;
    margin: 0 17px;
    width: 238px;
    height: 84px;
    border-radius: 100px;
    text-align: center;
    background: #373c41;
    color: #fff;
    line-height: 84px;
  }
}
</style>