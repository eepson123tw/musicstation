<template>
  <section class="section modal_section">
    <h2>{{title}}</h2>
    <div>
      <div class="form-group">
        <label for="productTilte">產品名稱</label>
        <div>
          <input type="text"  class="form-control" id="productTilte" placeholder="XX影音" v-model="productDetail.title" >
          <small id="emailHelp" class="form-text text-danger text-muted">標題不能為空</small>
        </div>
      </div>
      <div class="input-Area">
          <div class="product-price">
              <label for="productOriPrice">項目原價</label>
              <div>
                <input type="number" class="form-control" id="productOriPrice" placeholder="請輸入原價" v-model.number="productDetail.origin_price">
                <small id="emailHelp" class="form-text text-muted  text-danger ">項目原價不能為空</small>
              </div>
          </div>
          <div class="product-Oriprice">
             <label for="productPrice">項目售價</label>
              <div>
                <input type="number"  class="form-control" id="productPrice" v-model.number="productDetail.price" placeholder="請輸入售價">
                <small class="form-text text-muted  text-danger ">項目售價不能為空</small>
              </div>
          </div>
          <div class="product-Oriprice">
             <label for="productPrice">產品單位</label>
              <div>
                <input type="text"  class="form-control" id="productPrice" v-model="productDetail.unit" placeholder="請輸入單位">
                <small class="form-text text-muted  text-danger ">產品單位不能為空</small>
              </div>
          </div>
      </div>
      <div class="form-group">
        <label for="productCateGory">產品分類</label>
        <div>
          <input type="text"  class="form-control" id="productCateGory" placeholder="XX影音"   v-model="productDetail.category">
          <small id="emailHelp" class="form-text text-muted  text-danger ">產品分類不能為空</small>
        </div>
      </div>
       <div class="form-group">
        <label for="productDes">產品描述</label>
        <div>
           <textarea class="form-control" id="productDes" rows="3" v-model="productDetail.description"></textarea>
          <small id="emailHelp" class="form-text text-muted  text-danger ">We'll never share your email with anyone else.</small>
        </div>
      </div>
      <div class="form-group">
        <label for="productContent">說明內容</label>
        <div>
           <textarea  v-model="productDetail.content" class="form-control" id="productContent" rows="3"></textarea>
          <small id="emailHelp" class="form-text  text-danger text-muted">We'll never share your email with anyone else.</small>
        </div>
      </div>
      <div class="form-group productIsEnabled">
        <label for="productIsEnabled" class="me-3">是否上架</label>
        <input type="checkbox" v-model="productDetail.is_enabled"  id="productIsEnabled">
      </div>
      <div class="input-group mb-3">
      <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01" @change="fileselected" aria-describedby="inputGroupFileAddon01">
          <label class="custom-file-label" for="inputGroupFile01">選擇上傳團片</label>
          <p>{{file}}</p>
       </div>
      </div>
      <div class="form-button">
        <button class="btn btn-outline-warning me-3" @click="isCloseHandler">取消</button>
        <button v-if="!item.id" class="btn btn-outline-success" @click="checkForm">新增</button>
        <button v-else class="btn btn-outline-success" @click="editForm(item.id)">修改</button>
      </div>
    </div>
    <span  @click="isCloseHandler">X</span>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
      required: true
    },
    isClose: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    image: '',
    file: '',
    productDetail: {
      title: '',
      category: '',
      origin_price: '',
      price: '',
      unit: '',
      description: '',
      content: '',
      is_enabled: '',
      imageUrl: ''
    }
  }),
  methods: {
    isCloseHandler () {
      this.$emit('update:isClose', !this.isClose)
    },
    fileselected (e) {
      const file = e.target.files.item(0)
      // fileList 的資料型態
      const reader = new FileReader()
      reader.addEventListener('load', this.imageLoaded)
      reader.readAsDataURL(file)
      this.file = file.name
    },
    imageLoaded (evt) {
      this.image = evt.target.result // base 64
    },
    checkForm () {
      if (this.productDetail.is_enabled === true) this.productDetail.is_enabled = 1
      if (this.productDetail.is_enabled === false) this.productDetail.is_enabled = 0
      const data = {
        data: {
          ...this.productDetail
        }
      }
      this.$emit('isLoadingDone', false)
      this.axios.post(`/api/${process.env.VUE_APP_API_PATH}/admin/product`, data).then((res) => {
        this.$emit('isLoadingDone', true)
        this.$emit('updateProductlist')
        this.$emit('update:isClose', !this.isClose)
      })
    },
    editForm (id) {
      const data = {
        data: {
          ...this.productDetail
        }
      }
      this.axios.put(`/api/${process.env.VUE_APP_API_PATH}/admin/product/${id}`, data).then((res) => {
        this.$emit('updateProductlist')
        this.$emit('update:isClose', !this.isClose)
      })
    }
  },
  computed: {
    title () {
      let key = ''
      if (!this.item.id) key = '新增項目'
      if (this.item.id) key = '修改項目'
      return key
    }
  },
  watch: {
    item: {
      immediate: true,
      handler (val) {
        console.log(val)
        if (val !== undefined) {
          this.productDetail = val
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>

  .modal_section{
      padding: 20px;
      position: absolute;
      width: 500px;
      background-color: rgba(79, 169, 248, 0.933);
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: white;
      font-size: 18px;
      h2{
        margin-bottom: 20px;
      }
      span{
        position: absolute;
        top: 10px;
        right: 10px;
        color: wheat;
        font-size: 20px;
        cursor: pointer;
      }
      input{
        padding: 5px;
      }
      label{
        margin: 10px 0px;
          display: block;
          text-align: left;
      }
      .productIsEnabled{
        label{
          display: inline-block;
        }
      }
      .input-Area{
        display: flex;
      }
      .text-muted{
        display: none;
      }
      .custom-file-input{
        display: none;
      }
      .custom-file-label{
        cursor: pointer;
      }
  }

</style>
