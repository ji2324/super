<template>
  <div class="tabbar-item" @click="choice">
    <div>
      <slot name="item-normal-img" v-if="!isActive"></slot>
      <slot name="item-active-img" v-else></slot>
    </div>
    <div :style="isActive? {color:'red'}:{}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    }
  },
  methods:{
    choice(){
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) >= 0;
    },
  },
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 0px;
}
</style>