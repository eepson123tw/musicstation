<template>
    <div class="login">
      <section class="section login_confirm">
        <h2>登入頁面</h2>
          <div class="name">
            <label for="username">帳號:</label>
            <input id="username" :class="{'warn':message.status}" type="text" v-model='loginData.username'  @change="checkUserNamethandler" placeholder="請輸入帳號">
          </div>
          <div class="password">
            <label for="password">密碼:</label>
            <input :class="{'warn':message.status}" type="text" v-model='loginData.password' id="password" placeholder="請輸入密碼">
          </div>
          <div class="sendConfirm">
               <button @click="sendLoginConfirm">Send</button>
               <router-link to="/" ><button>Home</button></router-link>
          </div>
          <div class="confirm_text" v-if="message.status">
            <p>{{message.text}}</p>
            <p>{{message.error}}</p>
          </div>
      </section>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
import { apiPostLogin } from '@/api/index.js'
export default {
  data: () => ({
    loginData: {
      username: '',
      password: ''
    },
    message: {
      text: '',
      error: '',
      status: false
    }
  }),
  methods: {
    async sendLoginConfirm () {
      const res = await apiPostLogin(this.loginData)
      if (!res.data.success) {
        this.message.text = res.data.message
        this.message.error = res.data.error.message
        this.message.status = true
        return
      };
      Cookies.set('success', res.data.success)
      Cookies.set('uid', res.data.uid)
      Cookies.set('token', res.data.token)
      this.$router.push('/BackStage/EditProduct')
    },
    checkUserNamethandler () {
      // this.username
      const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g
      const confirm = reg.test(this.loginData.username)
      if (this.loginData.username === '') return
      if (!confirm) {
        this.message.status = true
        this.message.text = '信箱格式錯誤'
      } else {
        this.message.status = false
        this.message.text = ''
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
  .login{
    background-color: #3335;
    width: 500px;
    height: 300px;
    margin: 200px auto;
    padding: 10px;
    box-sizing: border-box;
    h2{
      color: $white;
    }
  }
  .login_confirm{
    div{
      margin: 20px auto;
      p{
        color: red;
      }
    }
    label{
      font-size: 20px;
      color: #000;
      margin-right: 5px;
    }
    input{
      border: none;
      outline: none;
      font-size: 15px;
      padding: 5px;
      border-radius: 10px;
    }
  }
  input.warn{
    background-color: red;
  }
  .sendConfirm{
    button{
      border: none;
      outline: none;
      padding: 5px;
      font-size: 20px;
      border-radius: 10px;
      &:first-child{
        margin-right: 20px;
      }
    }
  }

</style>
