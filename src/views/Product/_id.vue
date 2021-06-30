<template>
  <section class="section section-product">
    <div class="product-img">
      <img :src="product['imageUrl']" alt="圖片照片" title="商品圖">
    </div>
    <div class="product-content">
        <h2 class="fs-1">{{product['title']}}</h2>
        <ul  class="product-detail">
          <li>
            <p >分類:{{product['category']}}</p>
          </li>
          <li>
            <p>單位:{{product['unit']}}</p>
          </li>
          <li>
            <p>說明:{{product['content']}}</p>
            </li>
          <li>
            <p>描述:{{product['description']}}</p>
            </li>
          <li>
            <p class="cancel">原價格:{{product['origin_price']}}</p>
          </li>
          <li>
            <p>特價:{{product['price']}}</p>
          </li>
        </ul>
    </div>
    <div class="product-addCart">
        <button class="btn btn-outline-success me-3" @click="addCartHandler">加入購物車</button>
        <button class="btn btn-outline-warning" @click="$router.push('/product')">返回商品頁</button>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    product: {}
  }),
  methods: {
    addCartHandler () {
      this.axios.post(`/api/${process.env.VUE_APP_API_PATH}/cart`, {
        data: {
          product_id: `${this.$route.params.id}`,
          qty: 1
        }
      }).then((res) => {
        alert(res.data.message)
      })
    }
  },
  mounted () {
    this.axios.get(`/api/${process.env.VUE_APP_API_PATH}/product/${this.$route.params.id}`).then((res) => {
      this.product = res.data.product || {}
    })
  }
}
</script>

<style lang="scss" scoped>

  .section{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 100px 0;
    padding: 10px;
    .product-img{
      width: 500px;
      height: 500px;
      margin-bottom: 50px;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .product-content{
      width: 500px;
      padding: 100px 0px 0px 20px;
      li{
        text-align: left;
        font-size: 20px;
      }
    }
    .product-addCart{
      width:100%;

    }
    .cancel{
      text-decoration:line-through;
      color: red;
    }
  }

</style>
