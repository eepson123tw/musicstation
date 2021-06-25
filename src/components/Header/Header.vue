<template>
    <header class="d-flex  p-1 justify-content-between">
      <div class="d-flex align-items-center justify-content-evenly logo" >
        <Logo></Logo>
        <h2 class="tilte fs-6">影音撥放平台</h2>
      </div>
      <nav class="flex-grow-2">
            <ul class="d-flex w-100 p-1 justify-content-between">
              <li><a href="">wow123</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li><a href="">5</a></li>
            </ul>
      </nav>
    </header>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
    header{
       background-color: $blue-500;
      >.logo{
       width: 200px;
       h2{
          color: white;
       }
      }
    }
    .logo{
      cursor: pointer;
    }
</style>
