<template>
  <main class="main main-hero">
    <transition-group name="fade">
     <div class="hero-group" v-show="idx==i" v-for="(item,i) of list" :key="item">
       <div class="hero-img">
        <img :src="item['img']" alt="">
      </div>
      <div class="hero-text">
        <h2>{{item['title']}}</h2>
          <p>{{item['dis']}}></p>
      </div>
    </div>
    </transition-group>
    <div class="main-btn">
      <button @click="indexhandler('next')"  class="next btn btn-outline-light">next</button>
       <button @click="indexhandler('prev')" class="prev btn btn-outline-light">prev</button>
    </div>
  </main>
</template>

<script>
import vivy from '@/assets/img/vivy.png'
import palette from '@/assets/img/palette.png'
import Eva from '@/assets/img/Eva.png'
export default {
  data: () => ({
    idx: 0,
    autoplay: false,
    list: {
      0: {
        title: "Vivy -Fluorite Eye's Song-",
        img: vivy,
        dis: '在AI發展已經非常蓬勃的2161年，AI主題公園「新樂園」中的AI正在虐殺人類。在絕境中，松本博士趕在被追殺前以生命為代價，將一部神秘AI傳送至100年前的2061年4月11日，發動「奇點計劃」，希望「薇薇」能夠改寫歷史。2061年，史上首台自律人型AI歌姬「薇薇」啟動第一年，身懷「用歌聲使大家幸福」這一使命，在「新樂園」的小舞台上表演唱歌，由於技術上的限制，每部AI都只能夠設定一項使命。4月11日，薇薇面前出現了自稱為「松本」的AI，並表示自己是來自100年後的AI，其使命是「阻止100年後AI與人類之間發生的戰爭」，為了完成博士的使命，強求薇薇與它合作執行計畫。最初薇薇對於松本所描述的未來感到不可置信，也覺得跟自己設定的使命無關。不過，松本以不阻止AI與人類之間的鬥爭會使其一直以來的使命「用歌聲使大家幸福」有所衝突為由，成功說服薇薇參與奇點計劃，開啟了漫長的百年之旅。「正史」上有多宗導致AI過度發展的重大事件，稱為「奇點」。在奇點計劃中，薇薇和松本需要介入並阻止那些事件再次發生，以防止AI過度發展。然而，薇薇和松本走在「修正史」的軌跡上，發展流向已經跟正史大有不同，但背後隱藏的危機依然在蠢蠢欲動。'
      },
      1: {
        title: 'One Last Kiss',
        img: Eva,
        dis: '《One Last Kiss》是日本創作歌手宇多田光所發行的首張迷你專輯，於2021年3月9日由日本索尼音樂娛樂旗下的廠牌史詩唱片日本發行。作品收錄由宇多田光獻唱的電影《福音戰士新劇場版》系列所有歌曲，當中包括迷你專輯同名新曲與宇多田自我翻唱的〈Beautiful World〉新版本「Da Capo Version」。'
      },
      2: {
        title: 'palette',
        img: palette,
        dis: '日本娛樂公司 COVER 所成立的虛擬 Youtuber（Vtuber）事務所 hololive production 宣布，旗下所屬藝人 常闇永遠（常闇トワ）首支原創歌曲「Palette」於今（26）日展開數位發行。hololive production 旗下所屬藝人 常闇永遠 所演唱的首支原創歌曲「Palette」，由 常闇永遠 本人親自擔任作詞、niki 擔任 作曲 以及 編曲、かかげ 則是負責封面插圖的繪製。'
      }
    }
  }),
  methods: {
    indexhandler (val) {
      this.autoplay = false
      clearInterval(this.time)
      const num = Object.values(this.list)
      if (val === 'next') {
        this.idx += 1
        if (this.idx >= num.length) {
          this.idx = 0
        }
      } else {
        this.idx -= 1
        if (this.idx < 0) {
          this.idx = num.length - 1
        }
      };
    },
    countIdx () {
      const num = Object.values(this.list)
      this.idx += 1
      if (this.idx >= num.length) {
        this.idx = 0
      }
    }
  },
  watch: {
    idx: {
      immediate: true,
      handler (val) {
        this.autoplay = true
      }
    },
    autoplay: {
      handler (val) {
        if (val === false) {
          this.time = setInterval(() => {
            this.countIdx()
          }, 10000)
        }
      }
    }
  },
  mounted () {
    if (this.autoplay === true) {
      this.time = setInterval(() => {
        this.countIdx()
      }, 4000)
    }
  },
  beforeUnmount () {
    clearInterval(this.time)
  }

}
</script>

<style lang="scss" scoped>
  .main-hero{
    width: 1400px;
    height: 820px;
    position: relative;
    margin: 0 auto;
  }
  .hero-group{
    width: 1400px;
    margin: 0 auto;
    position: absolute;
    padding: 10px;
    }
    .hero-img{
      width: 100%;
      height: 800px;
      position: relative;
      z-index: 2;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .hero-text{
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 20% 20px 0px 20px;
      top: 0;

      background-color: #fff1;
      transition: all 1s;
      border-radius: 5px;
      color: whitesmoke;
      z-index: 3;
      &:hover{
         background-color: #fff7;
      }
      h2{
        width: 400px;
        margin: 0 auto;
        margin-bottom: 20px;
        text-shadow: 1px -2px black,1px -4px gray;
      }
      p{
        width: 400px;
        display: -webkit-box;
        overflow: hidden;
        line-height: 2;
        margin: 0 auto;
        font-size: 18px;
        -webkit-line-clamp:5;
        -webkit-box-orient: vertical;
        color: #000;
        text-shadow: 1px -2px white,1px -4px gray;
      }

    }
    .main-btn{
      .next{
        position: absolute;
        bottom: 20%;
        right: -100px;
        z-index: 3;
      }
      .prev{
        position: absolute;
        bottom: 20%;
        left: -100px;
        z-index: 3;
      }
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 1s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }
</style>
