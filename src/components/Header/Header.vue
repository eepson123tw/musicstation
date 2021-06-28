<template>
    <header class="d-flex  px-2 justify-content-between align-items-center">
      <div class="d-flex align-items-center justify-content-evenly logo" >
        <router-link to="/"><Logo></Logo></router-link>
        <h2 class="tilte pt-2 fs-5">影音撥放平台</h2>
      </div>
      <nav class="flex-grow-2">
            <h3 class="sr-only">導覽區塊</h3>
            <ul class="d-flex  justify-content-between">
              <li><a href="" class="fs-6">更多音樂</a></li>
              <li><a href="" class="fs-6">關於我們</a></li>
              <li><a href="" class="fs-6">我的最愛</a></li>
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
        background-color: #000000;
        >.logo{
          width: 200px;
          h2{
              color: white;
          }
        }
        ul{
          padding: 0;
          margin: 0;
        }
        nav{

           a{
             display: inline-block;
             padding: 10px;
             color: white;
             text-decoration: none;
             transition: all 1s;
             &:hover{
               color: $yellow;
             }
           }

        }
    }
    .logo{
      cursor: pointer;
    }
    .sr-only{
      width: 1px;
      height: 1px;
      position:absolute;
      overflow: hidden;
    }
</style>
