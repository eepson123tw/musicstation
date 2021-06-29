<template>
  <article class="article article-index">
    <MainImg></MainImg>
    <MainCard></MainCard>
    <div class="article-cart" @click="$router.push('/cart')">
       <img  src="@/assets/img/cart.png" alt="">
       <span>0</span>
    </div>
  </article>
</template>

<script>
import MainImg from '@/components/Main/MainImg.vue'
import MainCard from '@/components/Main/MainCard.vue'
export default {
  name: 'Home',
  components: {
    MainImg,
    MainCard
  }
}
</script>
<style lang="scss" scoped>
  article{
     margin: 100px 0 270px 0;
  }
  .article-cart{
    width: 50px;
    height: 50px;
    position: fixed;
    bottom:100px;
    right: 20px;
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    span{
      position: absolute;
      top: -20px;
      right: 10px;
      font-size: 15px;
      background: red;
      width: 20px;
      color: white;
      border-radius: 5px;
    }
    }

</style>
