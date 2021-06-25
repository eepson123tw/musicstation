<template>
  <Header></Header>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
  </div> -->
  <router-view/>
</template>

<script>
import Header from '@/components/Header/Header.vue'
export default {
  components: {
    Header
  },
  mounted () {
    // console.log(this)
    // this.axios.get('https://randomuser.me/api/').then((res) => {
    //   console.log(res)
    // })
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
  margin: 0 auto;
}

html,body{
  width: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
