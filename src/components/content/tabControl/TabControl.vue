<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(title, index) in titles"
      :key="index"
      @click="changeCurrent(index)"
      :class="{ active: currentIndex == index }"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changeCurrent(i) {
      this.currentIndex = i;
      //   console.log(i);
      this.$emit("choiceType", i);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-tint);
}

.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-high-text);
}
</style>