<template>
  <article class="article article-index">
    <MainImg></MainImg>
    <MainCard></MainCard>
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
</style>
