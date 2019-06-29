<template>
  <div class="container">

    <div :class="{ divwhole: isshow }">v-show</div>
    <div v-if="isshow">v-if</div>
    <div v-show="indextest===1" class="fs32">1111111</div>
    <div v-show="indextest===2">{{this.$store.state.orderList.orderno}}</div>
    <div v-show="indextest===3">33333333</div>
    <div>{{$store.state.count}}</div>
    <div class="checknormal fs28" :class="{ checkclass: indextest===3 }">等于三时显示</div>
    <!--<div>button</div>-->
    <div class="button" @click="handler()">显示隐藏</div>
    <div class="button" @click="add(3)">stroe属性测试+</div>
    <div class="button" @click="updateerror(5)">stroe属性测试-</div>
    <div class="button" @click="gettest()">stroe属性测试-</div>
  </div>
</template>

<script>

  import {mapGetters, mapState, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        msg: '',
        isshow: false,
        indextest: 1,
        pramas: '',
        header: ''
      }
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      // 接口请求
      // this.$http.get("http://gank.io/api/data/福利/10/1").then((response) => {
      //   // console.log(response)
      //   // 给对象赋值
      //   this.$set('results',response.results)
      //
      // }), response => {
      //   console.log('erroe')
      // }

      var that = this
      this.init();
      //本地数据请求
      // this.$http.get('../static/mydata.json').then(response =>{
      //   console.log(response)
      //   if(response.body.status == '0001'){
      //     console.log("0001")
      //     that.datas = response.body.datas
      //     that.isShowNativeResult = true
      //     that.isShowGankIoResult = false
      //   }
      // },response => {
      //   console.log('error')
      //   that.isShowNativeResult = false
      //   that.isShowGankIoResult = false
      // })
      //服务端接口请求
      // this.$http.get('http://gank.io/api/data/福利/10/1').then(response =>{
      //   console.log(response)
      //     console.log(response)
      //     that.datas = response.body.results
      //     that.isShowNativeResult = true
      //     that.isShowGankIoResult = false
      // },response => {
      //   console.log('error')
      //   that.isShowNativeResult = false
      //   that.isShowGankIoResult = false
      // })
      // axios请求本地文件
      this.$axios.get('../static/hotcity.json').then(response => {
        console.log(response)
        console.log("你好")
        // 注意这里是data
        if (response.data.status == '0001') {
          console.log("取到数据了")
          console.log("0001")
          that.datas = response.data.datas
          that.isShowNativeResult = true
          that.isShowGankIoResult = false
        } else {
          console.log("状态不对")
        }
      }).catch(error => {
        console.log("出错了；；；；；")
        console.log(error)

      })
      // var parames = {
      //   'loginname': '333'
      // }
      //请求远程数据
      // this.$axios.create({
      //   headers: {
      //     token: '87788778'
      //   }
      // }).get('http://gank.io/api/data/福利/10/1').then(response => {
      //   console.log(response)
      //   // 注意这里是data
      //   console.log("取到数据了")
      //   that.gankIoDatas = response.data.results
      //   that.isShowNativeResult = true
      //   that.isShowGankIoResult = false
      // }).catch(error => {
      //   console.log("出错了；；；；；")
      //   console.log(error)
      //
      // })
    },
    computed: {
      //计算方法，Store中的属性变量
      // count(){
      //   return this.$store.state.count
      // }
      listname() {
        return this.$store.state.listname
      },
      ...mapGetters([
        'count',
        'errors',
        'login'
      ]),
      ...mapState({
        errors: 'errors',
        count: 'count'
      })
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
      console.log(this.errors); // 打印出 0
      console.log(this.count); // 打印 0
    },
    beforeDestroy() {
      console.log('beforeDestroy');
    },
    destroyed() {
      console.log('destroyed');
    },
    methods: {
      ...mapMutations([
        'add',
        'reduce',
        'updateerror'
      ]),
      handler: function () {
        console.log(this.errors);
        this.isshow = !this.isshow;
        this.indextest = (this.indextest + 1) % 3 + 1
        console.log(this.indextest);
        console.log();
      },
      gettest: function () {

        this.pramas = this.$util.getUrlPramas();
        if (this.pramas.platform) {
          this.platform = this.pramas.platform;
          console.log(this.platform);
          this.$util.setStorage('platform', this.platform);
        } else {
          this.platform = this.$util.getStorage('platform');
          console.log(this.platform);
        }
        let lsHeader = this.$util.getHeader();
        console.log(lsHeader);
        // this.setPlatform(this.platform);


        // 首先在使用localStorage的时候，我们需要判断浏览器是否支持localStorage这个属性

        if (!window.localStorage) {
          alert("浏览器不支持localstorage");
          return false;
        } else {
          this.$util.setStorage('aa', '{"userid":"14455","username":"chpchen"}')
          // console.log(typeof this.$util.getStorage('aa'));
          // console.log(typeof window.localStorage.getItem('a'));
          //主逻辑业务
        }
        // alert(this.listname.length)
        // var arr = [1, 2, 6, 20, 1];
        // console.log(Object.keys(arr), "arr")//["0", "1", "2", "3", "4"] "arr"
        //
        // const object1 = {
        //   a: 1,
        //   b: 2,
        //   c: 3
        // };
        // const object2 = Object.assign({
        //   c: 4,
        //   d: 5
        // }, object1);
        //
        // console.log(object2, "-", object1);
        // console.log(typeof str);
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
      margin: 0 auto;
      display: block;
      border-radius: 5px;
      background-color: darkgreen;
      width: 200px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border: 2px dotted red;
      cursor: pointer;
    }
  }

</style>
