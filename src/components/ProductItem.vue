<template>
  <table>
    <tr>
      <td class="td-check"><span class="check-span" @click="produce.select=!produce.select"
                                 :class="{'check-true':produce.select}"></span></td>
      <td class="td-product">
        <img v-bind:src="produce.pro_img" width="98" height="98">
        <div class="product-info">
          <h6>{{produce.pro_name}}</h6>
          <p>品牌：{{produce.pro_brand}}&nbsp;&nbsp;产地：{{produce.pro_place}}</p>
          <p>规格/纯度:{{produce.pro_purity}}&nbsp;&nbsp;起定量：{{produce.pro_min}}千克</p>
          <p>配送仓储：{{produce.pro_depot}}</p>
        </div>
        <div class="clearfix"></div>
      </td>
      <td class="td-num">
        <div class="product-num">
          <a href="javascript:;" class="num-reduce num-do fl"
             @click.stop="produce.pro_num>0?produce.pro_num--:0"><span></span></a>
          <input type="text" class="num-input" v-model="produce.pro_num">
          <a href="javascript:;" class="num-add num-do fr" @click="produce.pro_num++"><span></span></a>
        </div>
      </td>
      <td class="td-price">
        <p class="red-text">￥<span class="price-text">{{produce.pro_price.toFixed(2)}}</span></p>
      </td>
      <td class="td-total">
        <p class="red-text">￥<span class="total-text">{{produce.pro_price*produce.pro_num}}</span>.00</p>
      </td>
      <td class="td-do"><a href="javascript:;" class="product-delect" @click="deleteOneProduct(index)">删除</a></td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: "Productitem",
    props:[
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


  .page-shopping-cart .check-span.check-true {
    display: block;
    width: 24px;
    height: 20px;
    background: url("../assets/xianshi_xuanze.png") no-repeat 0 0;
    background-size: 100% 100%;
  }

  .page-shopping-cart .td-check {
    width: 70px;
  }

  .page-shopping-cart .td-product {
    width: 460px;
  }

  .page-shopping-cart .td-num, .page-shopping-cart .td-price, .page-shopping-cart .td-total {
    width: 160px;
  }

  .page-shopping-cart .td-do {
    width: 150px;
  }

  .page-shopping-cart .cart-product-title {
    text-align: center;
    height: 38px;
    line-height: 38px;
    padding: 0 20px;
    background: #f7f7f7;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
  }

  .page-shopping-cart .cart-product-title .td-product {
    text-align: center;
    font-size: 14px;
  }

  .page-shopping-cart .cart-product-title .td-check {
    text-align: left;
  }

  .page-shopping-cart .cart-product-title .td-check .check-span {
    margin: 9px 6px 0 0;
  }

  .page-shopping-cart .cart-product {
    padding: 0 20px;
    text-align: center;
  }

  .page-shopping-cart .cart-product table {
    width: 100%;
    text-align: center;
    font-size: 14px;
  }

  .page-shopping-cart .cart-product table td {
    padding: 20px 0;
  }

  .page-shopping-cart .cart-product table tr {
    border-bottom: 1px dashed #e3e3e3;
  }

  .page-shopping-cart .cart-product table tr:last-child {
    border-bottom: none;
  }

  .page-shopping-cart .cart-product table .product-num {
    border: 1px solid #e3e3e3;
    display: inline-block;
    text-align: center;
  }

  .page-shopping-cart .cart-product table .product-num .num-do {
    width: 24px;
    height: 28px;
    display: block;
    background: #f7f7f7;
  }

  .page-shopping-cart .cart-product table .product-num .num-reduce span {
    background: url("../assets/jianhao.png") no-repeat 0px 0px;
    display: block;
    width: 16px;
    height: 12px;
    margin: 8px auto 0 auto;
    background-size: 100% 100%;
  }

  .page-shopping-cart .cart-product table .product-num .num-add span {
    background: url("../assets/jiahao.png") no-repeat 0px 0px;
    display: block;
    width: 16px;
    height: 12px;
    margin: 10px auto 0 auto;
    background-size: 100% 100%;
  }

  .page-shopping-cart .cart-product table .product-num .num-input {
    width: 42px;
    height: 28px;
    line-height: 28px;
    border: none;
    text-align: center;
  }

  .page-shopping-cart .cart-product table .td-product {
    text-align: left;
    font-size: 12px;
    line-height: 20px;
  }

  .page-shopping-cart .cart-product table .td-product img {
    border: 1px solid #e3e3e3;
    margin-right: 10px;
  }

  .page-shopping-cart .cart-product table .td-product .product-info {
    display: inline-block;
    vertical-align: middle;
  }

  .page-shopping-cart .cart-product table .td-do {
    font-size: 12px;
  }



</style>
