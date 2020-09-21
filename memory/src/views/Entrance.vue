<template>
  <div class="entrance">
    <canvas id="stone" ref="stone"></canvas>
    <button class="button playBtn" @click="play">PLAY</button>
  </div>
</template>

<script>
export default {
  name: "Entrance",
  data: () => {
    return {};
  },
  mounted() {
    this.stone();
  },
  methods: {
    // 绘制纹理文字
    textureOverlay(obj) {
      let { context, width, height, img, last } = obj;
      // 渐变和纹理
      var gradient, pattern;
      // 创建材质canvas
      var canvasPattern = document.createElement("canvas");
      var contextUnder = canvasPattern.getContext("2d");
      canvasPattern.width = 100;
      canvasPattern.height = 90;

      // 纹理对象，img指纹理图片对象
      img.onload = function() {
        pattern = contextUnder.createPattern(img, "repeat");
        contextUnder.fillStyle = pattern;
        contextUnder.fillRect(0, 0, width, height);
        // 给当前context创建pattern
        pattern = context.createPattern(canvasPattern, "repeat");
        // 绘制文本
        context.fillStyle = pattern;
        last();
      };
    },
    stone() {
      let stone = this.$refs.stone;
      let context = stone.getContext("2d");
      let img = new Image();
      img.src = require("../assets/bg.jpg");
      // 绘制底层
      context.fillStyle = "#7E00BB";
      context.beginPath();
      context.moveTo(0, 28);
      context.lineTo(stone.width - 50, 2);
      context.lineTo(stone.width - 10, 20);
      context.lineTo(stone.width, stone.height - 30);
      context.lineTo(stone.width / 2, stone.height - 2);
      context.lineTo(20, stone.height - 20);
      context.closePath();
      context.fill();
      // 绘制上层
      context.fillStyle = "#8C01D0";
      context.beginPath();
      context.moveTo(50, 42);
      context.lineTo(stone.width - 50, 32);
      context.lineTo(stone.width - 20, 60);
      context.lineTo(stone.width - 20, stone.height - 40);
      context.lineTo(stone.width / 2, stone.height - 22);
      context.lineTo(30, stone.height - 40);
      context.closePath();
      context.fill();
      // 绘制纹理文本
      this.textureOverlay({
        context,
        img,
        width: stone.width,
        height: stone.height,
        last: () => {
          let text = "MEMORY";
          context.font = "bold 60px fangsong";
          context.textAlign = "left";
          context.fillText(
            text,
            (stone.width - context.measureText(text).width) / 2,
            100,
            stone.width
          );
        }
      });
    },
    play() {
      this.$router.push({ name: "Memory" });
    }
  }
};
</script>

<style scoped lang="stylus">
.entrance {
  max-width 400px
  margin auto

  #stone {
    width 300px
    height 140
    margin 100px auto 0 auto
  }

  .playBtn {
    position fixed
    bottom 100px
    left 50%
    transform translateX(-50%)
  }
}
</style>
