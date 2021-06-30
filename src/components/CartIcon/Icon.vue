<template>
    <div v-show="!isShow" class="article-cart" @click="$router.push('/cart')">
       <img  src="@/assets/img/cart.png" alt="">
       <span>{{cartNumber}}</span>
    </div>
</template>

<script>
export default {
  data: () => ({
    isShow: true,
    cartNumber: 0
  }),
  watch: {
    $route (old, val) {
      console.log(old.fullPath)
      const forntTarget = old.fullPath
      const checkIsShow = /BackStage/g.test(forntTarget)
      this.isShow = checkIsShow
    }
  },
  methods: {
    getCart () {
      this.axios.get(`/api/${process.env.VUE_APP_API_PATH}/cart`).then((res) => {
        this.cartNumber = res.data.data.carts.length
      })
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.getCart()
    }, 1000)
  },
  beforeUnmount () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
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
