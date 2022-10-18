<template>
  <div>
    <navbar class="shopcar-navbar">
      <span slot="center">购物车</span>
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
  .shopcar-navbar{
    background-color: var(--color-tint);
    color: white;
  }
</style>