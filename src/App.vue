<template>
    <div>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <transition name="fade">
        <div class="loading" v-if="page">
            <img src="@/assets/img/sand-clock.png" alt="">
        </div>
    </transition>
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  data: () => ({
    page: true
  }),
  watch: {
    $route (old, val) {
      (old.fullPath === val.fullPath) ? this.page = '' : this.page = true
    },
    page (val) {
      setTimeout(() => {
        this.page = false
      }, 1000)
    }
  },
  mounted () {
    this.page = false
  }

}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1400px;
  height: 100%;
  margin: 0 auto;
}

html,body{
  width: 100%;
  height: 100%;
  position: relative;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.loading{
  width: 99vw;
  height: 50vw;
  background-color:#efec;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  img{
    position:absolute;
    animation: rotate .7s infinite;
  }
  @keyframes rotate {
    0%{
      transform: rotateZ(180deg)
    }
    100%{
      transform: rotateZ(0deg)
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
