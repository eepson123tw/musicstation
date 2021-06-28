<template>
  <article class="article article-card container">
    <section class="section section-card row mt-5">
      <div class="carditem col-4">
        <div class="card-img">
          <img src="@/assets/img/vivy.png" alt="專輯封面">
        </div>
        <div class="card-text">
          <h2>每周新發現</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque hic in facere est a distinctio sunt exercitationem repudiandae nulla recusandae enim inventore rem veritatis voluptatum, asperiores eum ab quia explicabo?</p>
        </div>
        <div class="card-play">
          <img src="@/assets/img/play.png" alt="">
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .article{
      margin: 0 auto;
    }
    .section-card{
      justify-content: space-between;
    }
    .carditem{
      position: relative;
      border: 1px solid gray;
      background-color: #333e;
      padding: 10px;
      box-sizing: border-box;
     transition:  all 0.3s;
      &:hover{
      border: 1px solid #fff4;
      background-color: #fff4;
      }
      &:hover .card-play{
          opacity: 1;
          top: 380px;
      }
    }
    .card-img{
      width: 100%;
      height: 450px;
      background-color: white;
      img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        object-position:bottom;
      }
    }
    .card-text{
      line-height: 1.3;
      color: white;
      h2{
        margin: 10px 0;
        font-size: 32px;
      }
      p{
        font-size: 18px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .card-play{
      position: absolute;
      width: 50px;
      height: 50px;
      top: 450px;
      right: 30px;
      opacity: 0;
      transition:  all 0.3s;
      &:hover{
        transform: scale(1.2);
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

</style>
