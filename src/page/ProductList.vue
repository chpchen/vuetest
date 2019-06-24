<template>
  <div class="page-shopping-cart" id="shopping-cart">
    <!--标题-->
    <h4 class="cart-title">购物清单</h4>
    <!--头部标题栏-->
    <div class="cart-product-title">
      <div class="td-check fl"><span
        class="check-span fl" :class="{'check-true':isSelectAll}" @click="selectProduct(isSelectAll)"></span>全选
      </div>
      <div class="td-product fl">商品</div>
      <div class="td-num fl">数量</div>
      <div class="td-price fl">单价(元)</div>
      <div class="td-total fl">金额(元)</div>
      <div class="td-do fl">操作</div>
    </div>
    <!--表格内容-->
    <div class="cart-product clearfix">
      <product-item v-for="item in productList" :produce="item"></product-item>
    </div>
    <!--底部按钮-->
    <div class="cart-product-info">
      <a class="delect-product" href="javascript:;" @click="deleteProduct">删除所选商品</a>
      <a class="keep-shopping" href="#"><span></span>继续购物</a>
      <a class="btn-buy fr" href="javascript:;">去结算</a>

      <p class="fr product-total">￥<span>{{getTotal.totalPrice}}</span></p>
      <p class="fr check-num"><span>{{getTotal.totalNum}}</span>件商品总计（不含运费）：</p>
      <div class="todetail">
        <router-link :to="{name:'productdetail',params:{id:12}}"><span>详情</span></router-link>
      </div>
    </div>
    <!--跟单员-->
    <!--<div class="cart-worder">-->
    <div>
      <p class="tttt"><a href="#" ><span style="color: white">跟订单</span> </a></p>
      <!--</div>-->
      <!--<p class="tttt"><a href="#">文字</a></p>-->
    </div>

  </div>
</template>

<script>
  import ProductItem from '../components/ProductItem.vue';

  export default {
    data() {
      return {
        productList: [
          {
            'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
            'pro_brand': 'skc',//品牌名称
            'pro_place': '韩国',//产地
            'pro_purity': '99.7%',//规格
            'pro_min': '215千克',//最小起订量
            'pro_depot': '上海仓海仓储',//所在仓库
            'pro_num': 3,//数量
            'pro_img': require('../assets/shopping_cart.png'),//图片链接
            'pro_price': 800//单价
          },
          {
            'pro_name': '【欧莱雅】草拟吗 | 砒霜',//产品名称
            'pro_brand': 'skc',//品牌名称
            'pro_place': '发货',//产地
            'pro_purity': '99.99%',//规格
            'pro_min': '295千克',//最小起订量
            'pro_depot': '美国仓海仓储',//所在仓库
            'pro_num': 2,//数量
            'pro_img': require('../assets/start.png'),//图片链接
            'pro_price': 500//单价
          },
          {
            'pro_name': '【玉兰油】护手霜 | 你用吗',//产品名称
            'pro_brand': 'aaa',//品牌名称
            'pro_place': '法国',//产地
            'pro_purity': '69.99%',//规格
            'pro_min': '123千克',//最小起订量
            'pro_depot': '北京仓海仓储',//所在仓库
            'pro_num': 5,//数量
            'pro_img': require('../assets/shopping_cart.png'),//图片链接
            'pro_price': 340//单价
          },
          {
            'pro_name': '【羽西】护手霜 | 你敢吗',//产品名称
            'pro_brand': 'cccc',//品牌名称
            'pro_place': '法国',//产地
            'pro_purity': '58.00%',//规格
            'pro_min': '321千克',//最小起订量
            'pro_depot': '北京仓海仓储',//所在仓库
            'pro_num': 10,//数量
            'pro_img': require('../assets/start.png'),//图片链接
            'pro_price': 620//单价
          }
        ]
      }
    },
    components: {ProductItem},
    mounted: function () {
      //这个是钩子函数
      //如果methods函数要执行，必须先执行钩子函数
      //这个钩子函数完成了对cratView函数的调用
      //应该注意的是，使用mounted 并不能保证钩子函数中的 this.$el 在 document 中。为此还应该引入

      //为productList添加select（是否选中）字段，初始值为true
      var _this = this
      //为productList添加select（是否选中）字段，初始值为true
      this.productList.map(function (item) {
        _this.$set(item, 'select', true)
      })
      //要像上面这样写双向绑定才能起效，下面的写法是有问题的，双向绑定不起效的！
      //this.productList.map(function (item) {item.select=true})
    },
    computed: {
      isSelectAll: function () {
        //如果productList中每一条数据的select都为true，返回true，否则返回false;
        return this.productList.every(function (val) {
          return val.select
        })
      },
      //获取总价和产品总件数
      getTotal: function () {
        //获取productList中select为true的数据。
        var _proList = this.productList.filter(function (val) {
            return val.select
          }),
          totalPrice = 0
        for (var i = 0, len = _proList.length; i < len; i++) {
          //总价累加
          totalPrice += _proList[i].pro_num * _proList[i].pro_price
        }
        //选择产品的件数就是_proList.length，总价就是totalPrice
        return {totalNum: _proList.length, totalPrice: totalPrice}
      }
    },
    methods: {
      //全选与取消全选
      selectProduct: function (_isSelect) {
        //遍历productList，全部取反
        for (var i = 0, len = this.productList.length; i < len; i++) {
          this.productList[i].select = !_isSelect
        }
      },
      //删除已经选中(select=true)的产品
      deleteProduct: function () {
        this.productList = this.productList.filter(function (item) {
          return !item.select
        })
      },
      //删除单条产品
      deleteOneProduct: function (index) {
        //根据索引删除productList的记录
        this.productList.splice(index, 1)
      },
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

  .page-shopping-cart {
    width: 1200px;
    margin: 50px auto;
    font-size: 14px;
    border: 1px solid #e3e3e3;
    border-top: 2px solid #317ee7;
  }

  .page-shopping-cart .cart-title {
    /*color: #000000;*/
    /*text-align: center;*/
    /*padding-left: 20px;*/
    /*line-height: 28px;*/
  }

  .page-shopping-cart .red-text {
    color: #e94826;
  }

  .page-shopping-cart .check-span {
    display: block;
    width: 24px;
    height: 20px;
    margin-top: 7px;
    background: url("../assets/xuanzeweixuanze.png") no-repeat 0 0;
    background-size: 100% 100%;
  }

  .page-shopping-cart .td-check {
    width: 70px;
  }

  .page-shopping-cart .check-span.check-true {
    display: block;
    width: 24px;
    height: 20px;
    background: url("../assets/xianshi_xuanze.png") no-repeat 0 0;
    background-size: 100% 100%;
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

  /*底部*/

  .page-shopping-cart .cart-product-info {
    height: 50px;
    line-height: 50px;
    background: #f7f7f7;
    padding-left: 20px;
  }

  .page-shopping-cart .cart-product-info .delect-product {
    color: #666;
  }

  .page-shopping-cart .cart-product-info .delect-product span {
    display: inline-block;
    vertical-align: top;
    margin: 18px 8px 0 0;
    width: 13px;
    height: 15px;
    background: url("../assets/shopping_cart.png") no-repeat -60px 0;
  }

  .page-shopping-cart .cart-product-info .product-total {
    font-size: 14px;
    color: #e94826;
  }

  .page-shopping-cart .cart-product-info .product-total span {
    font-size: 20px;
  }

  .page-shopping-cart .cart-product-info .check-num {
    color: #333;
  }

  .page-shopping-cart .cart-product-info .check-num span {
    color: #e94826;
  }

  .page-shopping-cart .cart-product-info .keep-shopping {
    color: #666;
    margin-left: 40px;
  }

  .page-shopping-cart .cart-product-info .keep-shopping span {
    display: inline-block;
    vertical-align: top;
    margin: 18px 8px 0 0;
    width: 15px;
    height: 15px;
    background: url("../assets/shopping_cart.png") no-repeat -40px 0;
  }

  .page-shopping-cart .cart-product-info .btn-buy {
    height: 50px;
    color: #fff;
    font-size: 20px;
    display: block;
    width: 110px;
    background: #ff7700;
    text-align: center;
    margin-left: 30px;
  }

  .page-shopping-cart .cart-product-info .todetail {
    background-size: 20pt;
    background-color: brown;
    color: #ffffff;
    height: 50px;
    width: 120px;
    text-align: center;
    align-content: center;
    margin: 0 auto;
  }

  .choose-worker-box {
    width: 620px;
    background: #fff;
  }

  .choose-worker-box .box-title {
    height: 40px;
    line-height: 40px;
    background: #F7F7F7;
    text-align: center;
    position: relative;
    font-size: 14px;
  }

  .choose-worker-box .box-title a {
    display: block;
    position: absolute;
    top: 15px;
    right: 16px;
    width: 10px;
    height: 10px;
    background: url("../assets/shopping_cart.png") no-repeat -80px 0;
  }

  .choose-worker-box .box-title a:hover {
    background: url("../assets/shopping_cart.png") no-repeat -80px -22px;
  }

  .choose-worker-box .worker-list {
    padding-top: 30px;
    height: 134px;
    overflow-y: auto;
  }

  .choose-worker-box .worker-list li {
    float: left;
    width: 25%;
    text-align: center;
    margin-bottom: 30px;
  }

  .choose-worker-box .worker-list li p {
    margin-top: 8px;
  }

  .choose-worker-box .worker-list li.cur a {
    color: #f70;
  }

  .choose-worker-box .worker-list li.cur a img {
    border: 1px solid #f70;
  }

  .choose-worker-box .worker-list li a:hover {
    color: #f70;
  }

  .choose-worker-box .worker-list li a:hover img {
    border: 1px solid #f70;
  }

  .choose-worker-box .worker-list li img {
    border: 1px solid #fff;
    border-radius: 100%;
  }

  .page-shopping-cart .cart-worder {
    padding: 20px;
  }

  .page-shopping-cart .cart-worder .choose-worder {
    /*color: #fff;*/
    /*display: inline-block;*/
    /*background: #39e;*/
    /*width: 140px;*/
    /*height: 40px;*/
    /*line-height: 40px;*/
    /*!*border-radius: 4px;*!*/
    /*text-align: center;*/
    /*margin-right: 20px;*/
  }

  .nihao {
    color: #fff;
    display: inline-block;
    /*background: #39e;*/
    /*width: 140px;*/
    /*height: 40px;*/
    /*line-height: 40px;*/
    /*border-radius: 4px;*/
    /*text-align: left;*/

    /*margin-right: 20px;*/
  }

  .tttt {
    color: #fff;
    display: inline-block;
    background: #39e;
    width: 140px;
    height: 40px;
    line-height: 40px;
    padding: 5px;
    /*display: inline-block;*/
    /*color:#fff ;*/
    text-align: center;
    background-color: #39e;
    /*width: 120px*/
  }

</style>
