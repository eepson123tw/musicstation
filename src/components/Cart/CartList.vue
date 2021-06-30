<template>
  <section class="section section-cartList">
      <h2>購物車列表</h2>
      <button class="btn btn-outline-danger ms-auto d-block" @click="delteCartHandler">清空購物車</button>
      <table class="table table-striped" v-if="cartLists.length>0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" class="text-center">取消</th>
          <th scope="col" class="text-center">品名</th>
          <th scope="col" class="text-center">數量/單位</th>
          <th scope="col" class="text-center">單價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) of cartLists" :key="item">
          <th scope="row" class="fs-5">{{i+1}}</th>
          <td><button class="btn btn-outline-danger" @click="delteCartItemHandler(item.id)">X</button></td>
          <td class="fs-5">{{item['product']['title']}}</td>
          <td class="fs-5">
            <input class="table-number" type="number" :value="item['qty']" @input="productNumberHandler(item.id,$event)">
          </td>
          <td class="fs-5">{{item['final_total']}}元</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
            <th class="table-info fs-5 text-end" colspan="4">總價</th>
            <th  class="table-info fs-5 text-center">{{total}}元</th>
        </tr>
      </tfoot>
    </table>
    <div v-else>
      <p class="fs-1 text-danger ">購物車無產品</p>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    cartLists: [],
    total: null
  }),
  mounted () {
    this.renderPage()
  },
  methods: {
    productNumberHandler (val, e) {
      const qty = e.target.value * 1
      this.axios.put(`/api/${process.env.VUE_APP_API_PATH}/cart/${val}`, {
        data: {
          product_id: `${val}`,
          qty: qty
        }
      }).then((res) => {
        alert(res.data.message)
        this.renderPage()
      })
    },
    delteCartHandler () {
      this.axios.delete(`/api/${process.env.VUE_APP_API_PATH}/carts`).then((res) => {
        console.log(res)
        alert(res.data.message)
        this.renderPage()
      })
    },
    delteCartItemHandler (val) {
      console.log(val)
      this.axios.delete(`/api/${process.env.VUE_APP_API_PATH}/cart/${val}`).then((res) => {
        console.log(res)
        alert(res.data.message)
        this.renderPage()
      })
    },
    renderPage () {
      this.axios.get(`/api/${process.env.VUE_APP_API_PATH}/cart`).then((res) => {
        console.log(res)
        this.cartLists = res.data.data.carts
        this.total = res.data.data.total
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .section{
    margin: 100px 0;
    padding: 10px;
    h2{
      color:burlywood;
    }
    background: #fff;
  }
  .table-number{
    width: 50px;
  }

</style>
