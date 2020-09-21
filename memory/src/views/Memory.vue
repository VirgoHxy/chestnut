<template>
  <div class="memory">
    <div class="info">
      <div>
        <div>Time:</div>
        {{ time }}
      </div>
      <div>
        <div>Turns:</div>
        {{ turns }}
      </div>
      <div>
        <div>score:</div>
        {{ score }}
      </div>
    </div>
    <ul class="cardList" @click="cardClick">
      <li
        v-for="(item, index) in cardList"
        :key="index"
        :style="item.hide && { opacity: 0, visibility: 'hidden' }"
        class="card"
      ></li>
    </ul>
    <div v-if="this.turns == 12" class="tip">Play Again?</div>
    <div class="btns">
      <button class="button replayBtn" @click="replay">REPLAY</button>
      <button class="button homeBtn" @click="home">HOME</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Memory",
  data: () => {
    let color = [
      "#ee0000",
      "#009688",
      "#409eff",
      "#E6A23C",
      "#13ce66",
      "#1d3bf8"
    ];
    return {
      color,
      indeArr: [], // 下标储存
      clickFlag: true, // false不可点击
      timeTimer: null, // 倒计时timer
      restoreTimer: null, // 恢复timer
      time: 30, // 时间
      turns: 0, // 反转数
      score: 0, //得分
      // 初始化
      cardList: Array(12)
        .fill("")
        .map((ele, index) => ({
          color: color[Math.floor(index / 2)],
          hide: false
        }))
    };
  },
  mounted() {
    this.play();
  },
  methods: {
    play() {
      // 洗牌
      for (let index = this.cardList.length - 1; index >= 0; index--) {
        let randomIndex = Math.floor(Math.random() * (index + 1));
        [this.cardList[index], this.cardList[randomIndex]] = [
          this.cardList[randomIndex],
          this.cardList[index]
        ];
      }
      // 初始化
      clearInterval(this.timeTimer);
      this.timeTimer = null;
      this.time = 30;
      this.turns = 0;
      this.score = 0;
      // 倒计时
      this.timeTimer = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          clearInterval(this.timeTimer);
          this.timeTimer = null;
          setTimeout(() => {
            this.clickFlag = false;
            alert(
              `Fail: You scored ${this.score} ponits in ${30 -
                this.time} seconds`
            );
          }, 0);
        }
      }, 1000);
    },
    // 委托点击
    cardClick(event) {
      if (!this.clickFlag) {
        if (!this.timeTimer) {
          alert(`Tip: Please clik Replay button`);
        }
        return;
      }
      let target = event.target;
      if (target.classList.contains("card")) {
        let cardList = document.getElementsByClassName("card");
        // 取得indedx
        let index = [].indexOf.call(cardList, target);
        if (index == this.indeArr[0]) {
          return;
        }
        this.turns++;
        this.indeArr.push(index);
        target.style.backgroundColor = this.cardList[index].color;
        if (this.indeArr.length >= 2) {
          this.clickFlag = false;
          this.restoreTimer = setTimeout(() => {
            // 判断颜色是否相等
            if (
              this.cardList[this.indeArr[0]].color ==
              this.cardList[this.indeArr[1]].color
            ) {
              this.cardList[this.indeArr[0]].hide = true;
              this.cardList[this.indeArr[1]].hide = true;
              if (this.time > 25) {
                this.score += 20;
              } else if (this.time > 20) {
                this.score += 15;
              } else if (this.time > 15) {
                this.score += 10;
              } else if (this.time > 10) {
                this.score += 5;
              } else if (this.time > 1) {
                this.score += 2;
              }
            } else {
              this.turns = this.turns - 2 != 0 ? this.turns - 2 : 0;
            }
            // 恢复
            setTimeout(() => {
              for (let index = 0; index < this.indeArr.length; index++) {
                const element = this.indeArr[index];
                cardList[element].style.backgroundColor = "#fff";
              }
              this.indeArr = [];
              this.clickFlag = true;
            }, 0);
            // 成功
            if (this.turns == 12) {
              clearInterval(this.timeTimer);
              this.timeTimer = null;
              setTimeout(() => {
                this.clickFlag = false;
                alert(
                  `Success: You scored ${this.score} ponits in ${30 -
                    this.time} seconds`
                );
              }, 0);
            }
          }, 1000);
        }
      }
    },
    // 重新
    replay() {
      clearTimeout(this.timer);
      // 重新洗牌
      this.cardList.forEach(ele => {
        ele.hide = false;
      });
      this.play();
      // 初始数据
      let cardList = document.getElementsByClassName("card");
      for (let index = 0; index < this.indeArr.length; index++) {
        const element = this.indeArr[index];
        cardList[element].style.backgroundColor = "";
      }
      this.clickFlag = true;
      this.indeArr = [];
    },
    home() {
      this.$router.push({ name: "Entrance" });
    }
  },
  beforeDestroy() {
    clearInterval(this.timeTimer);
    this.timeTimer = null;
  }
};
</script>

<style scoped lang="stylus">
.memory {
  max-width 400px
  margin auto
  padding 0 20px

  .info {
    display flex
    justify-content space-between
    padding 20px 0 40px 0
    font-size 2rem
    color #fff

    >div {
      width 33.3%
    }
  }

  .cardList {
    display flex
    flex-wrap wrap
    justify-content space-between

    .card {
      width calc(25% - 10px)
      margin-bottom 40px
      height 100px
      border-radius 4px
      background-color #fff
      overflow hidden
      color #303133
      transition all 0.3s linear
      cursor pointer
      user-select none
    }
  }

  .tip {
    position absolute
    left 50%
    top 50%
    font-size 3rem
    color #fff
    transform translate(-50%, -50%)
    white-space nowrap
  }

  .btns {
    position fixed
    bottom 60px
    left 50%
    transform translateX(-50%)

    >button {
      display block
      width 260px
      margin-top 20px
    }
  }
}
</style>
