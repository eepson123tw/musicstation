<template>
<section>
    <h2>修改商品列表</h2>
    <div class="text-end px-1 mb-4">
        <button class=" btn btn-outline-success" @click="editCurrentProductHandler">新增項目</button>
        <button class=" btn btn-outline-warning" @click="userLogout">使用者登出</button>
    </div>
    <table class="table table-primary table-striped">
    <thead>
          <tr>
            <th scope="col">編號</th>
            <th scope="col">Id</th>
             <th scope="col">是否上架</th>
            <th scope="col">種類</th>
            <th scope="col">名稱</th>
            <th scope="col">描述</th>
            <th scope="col">原價</th>
            <th scope="col">售價</th>
            <th scope="col">修改項目</th>
            <th scope="col">刪除項目</th>
          </tr>
    </thead>
    <tbody>
          <tr v-for='(item,index) of productList' :key="item.id">
            <th scope="row">{{index+1}}</th>
            <td>{{item.id}}</td>
            <td><input type="checkbox" readonly :checked="item.is_enabled"></td>
            <td>{{item.category}}</td>
            <td>{{item.content}}</td>
            <td>{{item.description}}</td>
            <td>{{item.origin_price}}</td>
            <td>{{item.price}}</td>
            <td><button class="btn btn-outline-primary" @click="editCurrentProductHandler(item)">修改</button></td>
            <td><button @click="deleteCurrentProductHandler(item)" class="btn btn-outline-danger">刪除</button></td>
          </tr>
    </tbody>
  </table>
  <EditProduct @isLoadingDone="isLoadingDoneHandler" @updateProductlist='productListHandler' :key="editCurrentProduct" :item="editCurrentProduct" v-model:is-close="isModalShow" v-if="isModalShow"></EditProduct>
  <Loading v-show="!isLoadingDone"></Loading>
</section>
</template>

<script>
import EditProduct from '@/components/Modal/EditProduct.vue'
import Loading from '@/components/Loading/Loading.vue'
import Cookies from 'js-cookie'
export default {
  components: {
    EditProduct,
    Loading
  },
  data: () => ({
    productLists: [],
    editCurrentProduct: {},
    isModalShow: false,
    isLoadingDone: false
  }),
  computed: {
    productList () {
      const ary = Object.values(this.productLists)
      return ary
    }
  },
  methods: {
    isLoadingDoneHandler (val) {
      this.isModalShow = val
    },
    editCurrentProductHandler (item = []) {
      this.editCurrentProduct = item
      this.isModalShow = !this.isModalShow
    },
    deleteCurrentProductHandler (item) {
      this.axios.delete(`/api/${process.env.VUE_APP_API_PATH}/admin/product/${item.id}`).then((res) => {
        if (res.data !== undefined) {
          this.isLoadingDone = false
        };
      }).then(() => {
        this.axios.get(`/api/${process.env.VUE_APP_API_PATH}/admin/products/all`).then((res) => {
          this.isLoadingDone = true
          this.productLists = res.data.products
        })
      })
    },
    userLogout () {
      this.axios.post('/logout').then((res) => {
        Cookies.remove('success')
        Cookies.set('uid')
        Cookies.set('token')
        this.$router.push('/BackStage')
      })
    },
    productListHandler () {
      this.axios.get(`/api/${process.env.VUE_APP_API_PATH}/admin/products/all`).then((res) => {
        if (res.data !== undefined) {
          this.isLoadingDone = true
        };
        this.productLists = res.data.products
      })
    }
  },
  mounted () {
    this.productListHandler()
  }
}
</script>
<style lang="scss" scoped>
    section{
      margin: 100px 0;
      >h2{
        margin-bottom: 20px;
      }
    }
    table{
      font-size: 15px;
    }
    td{
      text-align: left;
      line-height: 2.5;
    }
    tbody{
      th{
         line-height: 2.5;
      }
    }
   div > button.btn:first-child{
    margin-right: 15px;
   }
</style>
