<template>
  <section class="section modal_section">
    <h2>修改目前項目</h2>
    <p>{{item}}</p>
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
  methods: {
    isCloseHandler () {
      this.$emit('update:isClose', !this.isClose)
    }
  }

}
</script>

<style lang="scss" scoped>

  .modal_section{
      padding: 20px;
      position: absolute;
      width: 800px;
      background-color: #666e;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: white;
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
      &::after{
        display: block;
        content: "";
        width: 100%;
        height: 500px;
        top: 50%;
        left: 50%;
         transform: translate(-50%,-50%);
        position: absolute;
        z-index: -1;
      }
  }

</style>
