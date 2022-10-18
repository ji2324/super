<template>
  <div>
    <navbar class="category-navbar">
      <span slot="center">商品分类</span>
    </navbar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
export default {
  components:{
    Navbar
  }
}
</script>

<style scoped>
  .category-navbar{
    background-color: var(--color-tint);
    color: white;
  }
</style>