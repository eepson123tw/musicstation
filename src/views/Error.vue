<template>
  <section class="section error">
    <h1>{{title}}</h1>
    <h2>您目前查詢的頁面不存在</h2>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: '404'
  })
}
</script>

<style lang="scss" scoped>

  .section{
    width: 500px;
    height: 20vw;
    margin: 100px auto;
    h1{
      margin-bottom: 20px;
      color: red;
    }
  }

</style>
