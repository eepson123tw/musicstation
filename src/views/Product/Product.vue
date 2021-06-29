<template>
    <article class="container">
      <h3 class="sr-only">影音產品頁</h3>

      <section class="section section-productlLists row">
        <div class="product-group col-3">
          <div class="product-img">
            <img src="@/assets/img/Eva.png" alt="">
          </div>
          <div class="product-text">
            <h2>EVA</h2>
            <p>Lorem ipsum dolor, sit amet consecteturadipisicing elit. Rerum iusto, officia quasi aspernatur nobis animi delectus at necessitatibus, tempore blanditiis dignissimos voluptate temporibus id magnam doloremque voluptates iure, quo est.</p>
          </div>
        </div>
       <transition-group name="fade">
        <div class="product-group col-3" v-for="item of productsList " :key="item.id">
          <div class="product-img">
            <img :src="item.imageUrl" alt="">
          </div>
          <div class="product-text">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
          </div>
        </div>
         </transition-group>
      </section>
    </article>
</template>

<script>
export default {
  data: () => ({
    list: {},
    startIdx: 0,
    showCard: 3,
    loading: false
  }),
  methods: {
    scrollHandler () {
      if (this.loading) {
        return
      }
      if (window.scrollY + window.innerHeight > document.body.scrollHeight - 100) {
        this.loading = true
        this.next().then((res) => {
          this.loading = false
          this.showCard += 4
        })
      }
    },
    next () {
      return new Promise(resolve => setTimeout(() => {
        resolve(1)
      }, 1000)
      )
    }
  },
  computed: {
    productsList () {
      return Object.values(this.list).splice(this.startIdx, this.showCard)
    }
  },
  mounted () {
    this.axios.get(`/api/${process.env.VUE_APP_API_PATH}/admin/products/all`).then((res) => {
      this.list = res.data.products
    })
    window.addEventListener('scroll', this.scrollHandler)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style lang="scss" scoped>

article{
  margin: 150px auto;
}
.product-group{
  padding: 10px;
  border:1px solid gray;
  cursor: pointer;
  border-radius: 5px;
  transition: all .3s ;
  &:hover{
    border:1px solid white;
  }
}
.product-text{
  h2{
    margin-bottom: 20px;
  }
  p{
    text-align: left;
  }
}
.product-loading{
  margin: 100px;
  font-size: 20px;
  color: white;
}
.product-img{
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 20px;
  img{
    object-fit: contain;
    width: 100%;
  }
}
.sr-only{
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
