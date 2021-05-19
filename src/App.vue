<template>
  <div id="app">
    <div id="background">
      <div id="buttons">
        <span class="afont"><span v-text="minute">00</span>分</span>
        <span class="afont"><span v-text="seconds">00</span>秒</span>
      </div>
      <div id="overTime" style="color: red;font-size: large">&nbsp;</div>
    </div>

    <div id="buttonGroup">
      <el-button @click="startTimer()" type="primary" plain>开始</el-button>
      <el-button @click="stopTimer()" type="info" plain>停止</el-button>
      <el-button @click="resetTimer()" type="danger" plain>重置</el-button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      timer: "",
      content: "",
      seconds: 0,
      minute: 0,
      overSeconds: 0,
      overMinutes: 0,
    }
  },
  created() {
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {


    startTimer() {
      this.timer = setInterval(() => {
        this.seconds += 1;
        if (this.seconds >= 60) {
          this.seconds = 0;
          this.minute = this.minute + 1;
          if (this.minute == 4) {
            this.$message({
              type: 'warning',
              message: '已经到4分钟了哦'
            });
          }
        }
      }, 10)


    },
    stopTimer() {
      if (this.minute >= 4) {
        this.overMinutes = this.minute - 4;
        this.overSeconds = this.seconds
        this.$message({
          message: "超时时间是" + this.overMinutes + "分" + this.overSeconds + "秒",
          type: 'error'
        });
      }
      clearInterval(this.timer);

    },
    resetTimer() {
      clearInterval(this.timer);
      this.seconds = 0;
      this.minute = 0;
    },
    addZero(value) {
      if (value < 10) {
        return '0' + value;
      }
      return value;
    },
  },

}
</script>

<style>
@import "css/main.css";

</style>
