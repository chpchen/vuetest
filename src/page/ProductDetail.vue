<template>
  <div id="detail" class="detail">
    <!--头部图片-->
    <div>
      <img :src="img" class="detail banner">
    </div>
    <!--商品信息-->
    <h2 class="detail title">{{product.name}}</h2>
    <!--年份排量信息-->
    <div class="baseinfo">
      <div class="fl">2013-04 | &nbsp;</div>
      <div class="fl">14万公里| &nbsp;</div>
      <div class="fl">国五| &nbsp;</div>
      <div class="fl">京A88888</div>
    </div>
    <!--拒绝列-->
    <div class="clearfix">
      <span style="font-size: 20px ">已拒绝</span> <span>&nbsp;&nbsp;&nbsp;&nbsp 拒绝时间: 2019年06月16日21:03:49</span>
    </div>

    <!--拒绝原因-->
    <div class="detail reason">
      <p>
        那么今天就写vue入门的三个小实例，这三个小实例是我刚接触vue的时候的练手作品，难度从很简单到简单，都是入门级的。希望能帮到大家更好的学习和了解vue，也是让自己能够复习一下vue。如果发现文章写得有什么不好，写错了，或者有什么建议！欢迎大家指点迷津！
      </p></div>
    <!--一条线-->
    <hr class="line1">
    <!--估价助手，箭头跳转-->
    <div class="detail help">
      估价助手
      <span><img :src="righticon" alt="" style="width: 44px;height: 44px"></span>
    </div>
    <hr class="line2">
    <!--车辆分类-->
    <div class="detail normal">
      <div class="title">车辆分类</div>
      <div class="content">常规竞价车辆</div>
    </div>
    <hr class="line1">
    <!--凭证，三张图-->
    <div class="pingzheng">
      <p>收车凭证</p>
      <img v-for="index in 4" class="fl" :src="img"   alt="">

      <div class="clear"></div>
    </div>
    <!--20像素背景图-->
    <hr class="line2 clear">
    <!--备注-->
    <div class="clear">
      <div>备注</div>
      <p>
        vue是现在很火的一个前端MVVM框架，它以数据驱动和组件化的思想构建，与angular和react并称前端三大框架。相比angular和react，vue更加轻巧、高性能、也很容易上手。大家也可以移步，看一下vue的介绍和核心功能官网介绍。简单粗暴的理解就是：用vue开发的时候，就是操作数据，然后vue就会处理，以数据驱动去改变DOM（不知道有没有理解错，理解错了指点下）。
        下面就是一个最简单的说明例子
      </p>
    </div>
    <div class="bottom"></div>

  </div>
</template>

<script>
  export default {
    name: 'ProductDetail',
    data () {
      return {
        key: 'key',
        img: require('../assets/start.png'),
        righticon: require('../assets/jiahao.png'),
        product: {
          name: '打底裤凯迪拉克打底裤凯迪拉克打底裤凯迪拉克',
          price: 2000
        }
      }
    },
  }
</script>

<style scoped>
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .clear {
    clear: both
  }

  .clearfix {
    zoom: 1;
  }

  .clearfix:after {
    clear: both;
  }

  .line1 {
    height: 1px;
    border: none;
    border-top: 1px;
    background-color: #dddddd;
  }

  .line2 {
    height: 10px;
    border: none;
    border-top: 1px;
    margin-top: 5px;
    background-color: #dddddd;
  }


  blockquote, body, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, img, input, li, ol, p, table, td, textarea, th, ul {
    margin: 0;
    padding: 0;
  }

  p {
    text-indent: 2em;
  }

  line {
    background-color: #dddddd;
    height: 1px;
    margin-left: 20px;
    margin-right: 20px;
  }

  div {
    text-align: left;
  }

  img {
    vertical-align: middle;
  }

  .detail {
    width: 600px;
    align-content: flex-start;
    margin: 0 auto;
  }

  .detail .title {
    color: #000000;
    font-size: 16px;
    line-height: 30px;
    vertical-align: center;
    text-align: left;
    padding-left: 10px;
  }

  .detail .baseinfo {
    width: 600px;
    height: 40px;
    padding-left: 20px;
    background-color: #dddddd;
    text-align: center;
    display: table-cell; /*div居中*/
    vertical-align: middle;
  }

  .detail .banner {
    width: 600px;
    height: 300px;
    margin: 0 auto;
    background-size: 100% 100%;
  }

  .detail .reason {
    margin-top: 10px;
  }

  .detail .help {
    margin-top: 10px;
    margin-left: 20px;
    font-weight: bold;
  }

  .detail .help span {
    width: 44px;
    height: 34px;
    margin-right: 20px;
    margin-top: -10px;
    float: right;
  }

  .detail .normal .title {
    font-size: 20px;
    font-weight: bold;
  }

  .detail .normal .content {
    font-size: 12px;
    margin-left: 10px;
  }

  .detail .pingzheng img {
    width: 100px;
    height: 80px;
    margin-right: 20px;
    background-size: 100% 100%;
  }

  .detail .bottom {
    margin-top: 10px;
    height: 50px;
    background-color: #dddddd;
  }
</style>
