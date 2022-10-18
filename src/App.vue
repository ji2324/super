<template>
  <div id="app">
    <router-view/>
    <mall-tabbar></mall-tabbar>
  </div>
  
</template>

<script>
import MallTabbar from "components/content/mallTabbar/MallTabbar";

export default {
  name: "App",
  components: {
    MallTabbar,
  },
};
</script>

<style scoped>
@import url("assets/css/base.css");
</style>
