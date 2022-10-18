<template>
  <div>
    <!-- 头部导航 -->
    <navbar class="home-navbar">
      <span slot="center">小码哥商城</span>
    </navbar>

    <!-- 轮播 -->
    <main-swiper :banners="banners" />

    <!-- 福利特惠 -->
    <main-recommends :recommends="recommends" />

    <!-- 本周流行 -->
    <div class="feature">
      <img src="~assets/img/home/recommend_bg.jpg" />
    </div>

    <!-- 风格选择 -->
    <tab-control :titles="['流行', '新款', '精选']" @choiceType="choiceType" />

    <!-- 商品展示 -->
    <goods-list :goodsList="getGoodsList" />
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";
import MainSwiper from "./childComp/MainSwiper";
import MainRecommends from "./childComp/MainRecommends";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultiData, getHomeShopData } from "network/home";
export default {
  components: {
    Navbar,
    MainSwiper,
    MainRecommends,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      goodsType: "pop",
    };
  },
  created() {
    this.getHomeMultiDataList();

    this.getHomeShopByType("pop");
    this.getHomeShopByType("new");
    this.getHomeShopByType("sell");
  },
  methods: {
    getHomeMultiDataList() {
      getHomeMultiData().then((res) => {
        // console.log(res);
        //轮播数据
        this.banners = res.data.banner.list;
        //推荐数据
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeShopByType(type) {
      let pageNum = this.goods[type].page;
      getHomeShopData(pageNum, type).then((res) => {
        //获取数据后 修改对应类别商品数据
        //添加数据
        this.goods[type].list.push(...res.data.list);
        //下一次请求 页码加一
        this.goods[type].page++;
      });
    },
    choiceType(i) {
      switch (i) {
        case 0:
          this.goodsType = "pop";
          break;
        case 1:
          this.goodsType = "new";
          break;
        case 2:
          this.goodsType = "sell";
          break;
        default:
          break;
      }
    },
  },
  computed: {
    getGoodsList() {
      return this.goods[this.goodsType].list;
    },
  },
};
</script>

<style scoped>
.home-navbar {
  background-color: var(--color-tint);
  color: white;
}

.feature > img {
  width: 100%;
}
</style>