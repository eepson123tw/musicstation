<template>
  <footer class="d-flex justify-content-evenly flex-wrap">
      <section>
          <h2>社群</h2>
          <ul>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
      </section>
      <section>
          <h2>幫助</h2>
          <ul>
            <li><a href="#">常見問答</a></li>
            <li><a href="#">使用條款</a></li>
            <li><a href="#">隱私權政策</a></li>
          </ul>
      </section>
      <section>
          <h2>關於</h2>
          <ul>
            <li><a href="#">關於我們</a></li>
            <li><a href="#">商標資源</a></li>
          </ul>
      </section>
       <section class="info_text">
          <h3 class="sr-only">copyright</h3>
         <p>©  2021 影音平台 Co., Ltd, all rights reserved.</p>
       <p>僅供學習研究並無任何營利，如有問題請聯繫eepson123@gmail.com</p>
       <p><router-link class="backStage_text" to="/BackStage">前往後台</router-link></p>
       </section>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
  footer{
     background-color: #000000;
     color: white;
     padding: 10px;
  }
  section{
    box-sizing: border-box;
    padding: 10px;
    width: 400px;
    display: flex;
    flex-direction: column;
    h2{
      margin-bottom: 20px;
      text-shadow: 1px -1px 3px black;
    }
    ul{
      padding: 0;
    }
    ul a{
        display: block;
        text-align: center;
        color: $white;
        text-decoration: none;
        margin-bottom: 10px;
        transition: all .3s;
        &:hover{
          color: $yellow-200
        }
      }

    }
    .backStage_text{
      display: inline-block;
      padding: 10px;
      background-color: white;
      border-radius: 20px;
      box-shadow: 0px -5px 3px #3332 inset;
      text-decoration: none;
      color: $yellow;
      font-size: 20px;
      &:hover{
        color:white;
        background-color: $pink-300;
        box-shadow: 0px -5px 10px white inset;
      }
    }
    section.info_text{
      display: flex;
      flex-direction: row;
      justify-content:center;
      align-items: center;
      width: 100%;
      p{
        margin-right: 5px;
        color:  $white;
      }
    }
      .sr-only{
      width: 1px;
      height: 1px;
      position:absolute;
      overflow: hidden;
    }
</style>
