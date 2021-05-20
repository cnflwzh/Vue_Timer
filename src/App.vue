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
      <el-button @click="startTimer()" type="primary" plain :disabled="disabledStart">开始</el-button>
      <el-button @click="stopTimer()" type="info" plain :disabled="disabledStop">停止</el-button>
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
      disabledStart: false,
      disabledStop: true,
      zeroSeconds:0,
    }
  },
  created() {

  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    startTimer() {
      this.disabledStart = true;
      this.disabledStop = false;
      this.timer = setInterval(() => {
        this.seconds += 1;
        if (this.seconds >= 60) {
          this.seconds = 0;
          this.minute = this.minute + 1;
          if (this.minute == 4) {
            this.$message({
              type: 'warning',
              message: '已经到4分钟了哦',
              duration:5000,
            });
          }
          if(this.seconds<10){
            this.zeroSeconds=this.addZero(this.seconds);
            return this.zeroSeconds
          }else {
            this.zeroSeconds=this.seconds;
            return this.zeroSeconds
          }

        }
      }, 1000)
    },
    stopTimer() {
      if (this.minute >= 4) {
        this.overMinutes = this.minute - 4;
        this.overSeconds = this.seconds
        this.$message({
          message: "超时时间是" + this.overMinutes + "分" + this.overSeconds + "秒",
          type: 'error',
          duration:10000,
        });
      }
      this.disabledStart = false;
      this.disabledStop = true;
      clearInterval(this.timer);

    },
    resetTimer() {
      console.log("上次计时时间为"+this.minute+"分"+this.seconds+"秒")
      this.disabledStart = false;
      this.disabledStop = true;
      clearInterval(this.timer);
      this.seconds = 0;
      this.minute = 0;
      this.overMinutes = 0;
      this.overSeconds = 0;
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
