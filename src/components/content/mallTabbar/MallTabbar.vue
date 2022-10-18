<template>
  <tabbar>
    <tabbar-item path="/home">
      <img slot="item-normal-img" src="~assets/img/tabbar/home.svg" />
      <img slot="item-active-img" src="~assets/img/tabbar/home_active.svg" />
      <span slot="item-text">首页</span>
    </tabbar-item>
    <tabbar-item path="/category">
      <img slot="item-normal-img" src="~assets/img/tabbar/category.svg" />
      <img slot="item-active-img" src="~assets/img/tabbar/category_active.svg" />
      <span slot="item-text">分类</span>
    </tabbar-item>
    <tabbar-item path="/shopCar">
      <img slot="item-normal-img" src="~assets/img/tabbar/shopcart.svg" />
      <img slot="item-active-img" src="~assets/img/tabbar/shopcart_active.svg" />
      <span slot="item-text">购物车</span>
    </tabbar-item>
    <tabbar-item path="/mine">
      <img slot="item-normal-img" src="~assets/img/tabbar/profile.svg" />
      <img slot="item-active-img" src="~assets/img/tabbar/profile_active.svg" />
      <span slot="item-text">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style>
</style>