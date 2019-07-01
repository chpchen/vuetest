<template>
  <div class="item clearfix">
    <div class="checkitem fl clearfix"><span class="check-span" @click="produce.select=!produce.select"
                                             :class="{'check-true':produce.select}"></span></div>
    <div class="itmeproduct fl clearfix">
      <img v-bind:src="produce.pro_img" width="98" height="98">
      <div class="product-info">
        <h6>{{produce.pro_name}}</h6>
        <p>品牌：{{produce.pro_brand}}&nbsp;&nbsp;产地：{{produce.pro_place}}</p>
        <p>规格/纯度:{{produce.pro_purity}}&nbsp;&nbsp;起定量：{{produce.pro_min}}千克</p>
        <p>配送仓储：{{produce.pro_depot}}</p>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="item-num fl">
      <div class="product-num">
        <a href="javascript:;" class="num-reduce num-do fl"
           @click.stop="produce.pro_num>0?produce.pro_num--:null"><span></span></a>
        <input type="text" class="num-input" v-model="produce.pro_num">
        <a href="javascript:;" class="num-add num-do fr" @click="produce.pro_num++"><span></span></a>
      </div>
    </div>
    <div class="item-price fl">
      <p class="red-text">￥<span class="price-text">{{produce.pro_price.toFixed(2)}}</span></p>
    </div>
    <div class="item-total fl">
      <p class="red-text">￥<span class="total-text">{{produce.pro_price*produce.pro_num}}</span>.00</p>
    </div>
    <div class="item-do fl"><a href="javascript:;" class="product-delect" @click="deleteOneProduct(index)">删除</a></div>
    <hr>
  </div>
</template>

<script>
  export default {
    name: "Productitem",
    props: [
      'heading',//标题
      'produce'//内容对象
    ],
  }
</script>

<style scoped>
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  blockquote, body, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, img, input, li, ol, p, table, td, textarea, th, ul {
    margin: 0;
    padding: 0;
  }

  .clearfix {
    zoom: 1;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix:after {
    content: '.';
    display: block;
    overflow: hidden;
    visibility: hidden;
    font-size: 0;
    line-height: 0;
    width: 0;
    height: 0;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    vertical-align: middle;
  }

  hr {
    width: 100%;
    border-color: #dddddd;
  }

  .item .checkitem .check-span {
    display: block;
    width: 24px;
    height: 20px;
    background: url("../assets/xuanzeweixuanze.png") no-repeat 0 0;
    background-size: 100% 100%;
    margin: 39px 6px 0 20px;
  }

  .item .checkitem .check-span.check-true {
    display: block;
    width: 24px;
    height: 20px;
    background: url("../assets/xianshi_xuanze.png") no-repeat 0 0;
    background-size: 100% 100%;
  }

  .item .checkitem {
    width: 70px;
  }

  .item .itmeproduct {
    width: 460px;
    margin-left: 50px;
  }

  .item .itmeproduct img {
    border: 1px solid #e3e3e3;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .item .itmeproduct .product-info {
    display: inline-block;
    vertical-align: middle;
  }

  .item .item-num {
    width: 160px;
    padding: 40px 0;
  }

  .item .item-price, .item .item-total {
    width: 160px;
    height: 70px;
    line-height: 70px;
    padding: 20px 0;
  }

  .item .item-do {
    width: 100px;
    height: 70px;
    line-height: 70px;
    padding: 20px 0;
  }


  /*.item .cart-product tr:last-child {*/
  /*border-bottom: none;*/
  /*}*/

  .item .item-num .product-num {
    border: 1px solid #e3e3e3;
    display: inline-block;
    /*text-align: center;*/
  }

  .item .item-num .product-num .num-do {
    /*width: 24px;*/
    /*height: 28px;*/
    /*display: block;*/
    /*background: #f7f7f7;*/
  }

  .item .item-num .product-num .num-reduce span {
    background: url("../assets/jianhao.png") no-repeat 0px 0px;
    display: block;
    width: 16px;
    height: 12px;
    margin: 4px auto 0 auto;
    background-size: 100% 100%;
  }

  .item .item-num .product-num .num-add span {
    background: url("../assets/jiahao.png") no-repeat 0px 0px;
    display: block;
    width: 16px;
    height: 12px;
    margin: 4px auto 0 auto;
    background-size: 100% 100%;
  }

  .item .item-num .product-num .num-input {
    width: 32px;
    height: 20px;
    line-height: 28px;
    border: none;
    text-align: center;
  }

  .item .cart-product .td-do {
    font-size: 12px;
  }


</style>
