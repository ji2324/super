<template>
  <div class="goods-item">
    <img :src="goodsItem.show ? goodsItem.show.img : goodsItem.image" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.goods-item {
  position: relative;
  padding-bottom: 40px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  /* 超过宽度自动裁剪 */
  overflow: hidden;
  /* 多余部分使用省略号 */
  text-overflow: ellipsis;
  /* 文字不换行 */
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
/* 票数标签的第一个伪子元素 */
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /* 0 0/14px 表示   background-position/background-size的形式 */
  background: url("~assets/img/common/collect.svg") 0 0/14px;
}
</style>