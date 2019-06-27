<template>
  <div class="container">

    <div :class="{ divwhole: isshow }">v-show</div>
    <div v-if="isshow">v-if</div>
    <div v-show="indextest===1" class="fs32">1111111</div>
    <div v-show="indextest===2">22222222</div>
    <div v-show="indextest===3">33333333</div>
    <div class="checknormal fs28" :class="{ checkclass: indextest===3 }">等于三时显示</div>
    <img :src="'/path/to/images/' + fileName" alt="altText"/>
    <!--<div>button</div>-->
    <div class="button" @click="handler()">显示隐藏</div>
  </div>
</template>

<script>
  export default {
    name: "JsTest",
    data() {
      return {
        msg: '',
        isshow: false,
        indextest: 1
      }
    },
    created() {
    },
    computed: {
      //计算方法
    }, methods: {
      handler: function () {
        // console.log(this.isshow);
        // this.$util.showToast('dddd')
        this.isshow = !this.isshow;
        this.indextest = (this.indextest + 1) % 3 + 1
        console.log(this.indextest);
        console.log();
      }
    },
  }
</script>

<style lang="less" scoped>
  @colord: #dddddd;
  .container {
    background-color: @colord;
    padding: 0 16px;
    margin: 0 32px;
    text-align: center;

    .divwhole {
      border-color: red green blue pink;
      border-style: solid;
      color: red;
      width: 200px;
      height: 50px;
      background: white;
      margin: 0 auto;
      /*display: none;*/
      /*visibility: hidden;*/
    }

    .checknormal {
      color: lightseagreen;
      background-color: @colord;
      width: 200px;
      height: 50px;
      margin: 0 auto;
      text-align: center;
      line-height: 50px;
      vertical-align: center;
      opacity: 0.5;

    }

    .checkclass {
      color: red;
      background-color: @colord;
      width: 200px;
      height: 50px;
      margin: 0 auto;
      text-align: center;
      line-height: 50px;
      vertical-align: center;
      opacity: 0.5;

      background: url("../assets/start.png") no-repeat;
    }

    .button {
      border-radius: 5px;
      background-color: darkgreen;
      width: 200px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border: 2px dotted red;
    }
  }

</style>
