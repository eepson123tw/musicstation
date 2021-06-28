<template>
  <section class="section section-loading">
    <h1>loading <span>...</span></h1>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    section{
      position: absolute;
      width: 1400px;
      height:500px;
      padding: 50px;
      background-color: #333;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      h1{
        text-align: center;
        color: white;
      }
      span{
        color: pink;
        animation: color 1.5s infinite;
      }
      @keyframes color {
        0%{
          color:red
        }
        10%{
          color:orange
        }
        50%{
          color:orangered
        }
        100%{
          color: pink;
        }
      }
    }

</style>
