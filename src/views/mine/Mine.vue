<template>
  <div>
    <navbar class="mine-navbar">
      <span slot="center">我的档案</span>
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
  .mine-navbar{
    background-color: var(--color-tint);
    color: white;
  }
</style>