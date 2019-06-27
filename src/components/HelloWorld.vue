<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <ol v-for="object in person">{{object}}</ol>

    </ul>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a><br>
        <router-link to="productlist">productlist</router-link>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <ul>
      <li style="display: block" v-for="item in datas">{{item.name}}</li>
    </ul>
    <ul>
      <li v-for="item in gankIoDatas">{{item.desc}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        person: {
          name: '大搜车nihao',
          sex: 'man',
          age: 21
        },
        items: [],
        results: [],
        datas: [],
        gankIoDatas: [],
        isShowNativeResult: false,
        isShowGankIoResult: false
      }
    },
    // methods: {
    // 本地请求 json 模拟
    // getData() {
    //   var that = this
    //   this.$http.get('../static/mydata.json').then(response =>{
    //     console.log(response)
    //     if(response.body.status == '0001'){
    //       that.datas = response.body.datas
    //       that.isShowNativeResult = true
    //       that.isShowGankIoResult = false
    //     }
    //   },response => {
    //     console.log('error')
    //     that.isShowNativeResult = false
    //     that.isShowGankIoResult = false
    //   })
    // },
    // },
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
      // this.$axios.get('../static/mydata.json').then(response => {
      //   console.log(response)
      //   console.log("你好")
      //   // 注意这里是data
      //   if (response.data.status == '0001') {
      //     console.log("取到数据了")
      //     console.log("0001")
      //     that.datas = response.data.datas
      //     that.isShowNativeResult = true
      //     that.isShowGankIoResult = false
      //   } else {
      //     console.log("状态不对")
      //   }
      // }).catch(error => {
      //   console.log("出错了；；；；；")
      //   console.log(error)
      //
      // }),
      var parames = {
        'loginname': '333'
      }
      //请求远程数据
      this.$axios.create({
        headers: {
          token: '87788778'
        }
      }).get('http://gank.io/api/data/福利/10/1').then(response => {
        console.log(response)
        // 注意这里是data
        console.log("取到数据了")
        that.gankIoDatas = response.data.results
        that.isShowNativeResult = true
        that.isShowGankIoResult = false
      }).catch(error => {
        console.log("出错了；；；；；")
        console.log(error)

      })
    }, methods: {
      init() {
        const userAgent = navigator.userAgent;

        console.log(userAgent);

        const isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; // android终端
        const isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
        if (isAndroid) {
          console.log('android平台');
          return 'android'
        } else if (isIOS) {
          console.log('Ios平台');
        } else {
          console.log('浏览器');
        }

      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
