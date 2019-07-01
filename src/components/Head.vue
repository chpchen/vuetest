<template>
  <header class="top">
    <div class="headleft fl">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="headtitle fl fs32"><span>{{headtitle}}</span></div>
    <div class="headeright fr"><a href="javascript:;"><span>登陆按钮</span></a></div>
  </header>
</template>

<script>

  export default {
    data() {
      return {
        msg: '',
      }
    },
    props: {
      headtitle: '',
      data: Object,
      imgList: Array
    },
    created() {
    },
    computed: {
      //计算方法
      tttt: function () {
        console.log('adaa');
      }
    },
  }
</script>

<style lang="less" scoped>
  .fr {
    float: right;
  }

  .fl {
    float: left;
  }

  .top {
    background-color: #FF571A;
    height: 100px;
    width: 100%;
    position: fixed;
    z-index: 100;
    margin-bottom: 100px;
    left: 0;
    top: 0;
    line-height: 100px;
    padding-right: 16px;
    padding-left: 16px;

    .headleft {
      width: 20%;

      img {
        width: 80px;
        height: 80px;
      }

    }

    .headtitle {
      width: 60%;
      height: 100%;
      text-align: center;

      a {
        span {
          display: inline-block;
          text-align: center;
          margin: 0 auto;
        }
      }
    }

    .headright {
      width: 20%;
      height: 100%;
      background-color: black;
    }
  }

</style>
