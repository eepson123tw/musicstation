<template>
  <section class="section section-userConfirm">
    <div class="form-group">
        <Form  ref="form" :validation-schema="schema">
          <div class="email mb-3">
             <label class="text-start d-block mb-1 fs-5 text-primary" for="exampleInputEmail1">Email address</label>
          <Field name="email" v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="請輸入信箱... example@XXX.com"/>
          <ErrorMessage name="email" class="text-danger fs-6" />
          </div>
          <div class=" mb-3 name">
             <label class="text-start d-block mb-1 fs-5 text-primary" for="name">收件人姓名</label>
          <Field name="name" v-model="user.name" type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="請輸入姓名"  />
          <ErrorMessage name="name" class="text-danger" />
          </div>
          <div class=" mb-3 phone">
             <label class="text-start d-block mb-1 fs-5 text-primary" for="phone">收件人電話</label>
          <Field name="phone" v-model="user.phone" type="text" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="請輸入收件人電話"  />
          <ErrorMessage name="phone" class="text-danger" />
          </div>
          <div class=" mb-3 address">
             <label class="text-start d-block mb-1 fs-5 text-primary" for="address">收件人地址</label>
          <Field name="address" v-model="user.address" type="text" class="form-control" id="address" aria-describedby="emailHelp" placeholder="請輸入收件人地址"  />
          <ErrorMessage name="address" class="text-danger" />
          </div>
          <div class=" mb-3 message">
             <label class="text-start d-block mb-1 fs-5 text-primary" for="message">留言</label>
          <Field name="message" v-model="user.message" type="text" class="form-control" id="message" aria-describedby="emailHelp" placeholder="留言"  />
          <ErrorMessage name="message" class="text-danger" />
          </div>
           <button type="submit" class="btn btn-success" @click.prevent="sendReqHandler">送出訂單</button>
         </Form>
    </div>
  </section>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
export default {
  components: {
    Field,
    Form,
    ErrorMessage
  },
  data () {
    const schema = {
      email (value) {
        const check = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
        if (value && value.trim()) {
          if (!check) {
            return '信箱格式錯誤'
          }
          return true
        }
        return '信箱不能為空'
      },
      name (value) {
        // validate name value...
        if (value && value.trim()) {
          return true
        }
        return '欄位不能為空'
      },
      phone (value) {
        const check = /^[0-9]{8,}/.test(value)
        if (value && value.trim()) {
          if (!check) {
            return '不能小於8個字元'
          }
          return true
        }
        return '欄位不能為空'
      }

    }
    return {
      schema,
      user: {
        email: '',
        name: '',
        phone: '',
        address: '',
        message: ''
      }
    }
  },
  methods: {
    check (val) {
      console.log(val)
    },
    sendReqHandler () {
      const orderid = new Date()
      this.axios.post(`/api/${process.env.VUE_APP_API_PATH}/pay/${orderid}`).then((res) => {
        console.log(res)
        alert(res.data.message)
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .section-userConfirm{
    width: 700px;
    margin: 50px  auto;
    padding: 20px;
    background-color: whitesmoke;
  }
</style>
7
