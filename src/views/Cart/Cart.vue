<template>
  <div class="cart-page">
    <CartList></CartList>
    <UserCheck></UserCheck>
  </div>
</template>

<script>
import CartList from '@/components/Cart/CartList.vue'
import UserCheck from '@/components/Cart/UserCheck.vue'
export default {
  components: {
    CartList,
    UserCheck
  }
}
</script>

<style>

</style>
