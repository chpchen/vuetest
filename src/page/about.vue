<template>
  <div class="tab">
    <div class="tab-tit">
      <a href="javascript:;" @click="changetab(0)" :class="{'cur':curId===0}">html</a>
      <a href="javascript:;" @click="changetab(1)" :class="{'cur':curId===1}">css</a>
      <a href="javascript:;" @click="changetab(2)" :class="{'cur':curId===2}">javascript</a>
      <a href="javascript:;" @click="changetab(3)" :class="{'cur':curId===3}">vue</a>
    </div>
    <div class="button" @click="objecttest">JavaScript对象</div>
    <div class="tab-con">
      <div v-show="curId===0">html</div>
      <div v-show="curId===1">css</div>
      <div v-show="curId===2">javascript</div>
      <div v-show="curId===3">{{datestr}}</div>
    </div>
    <div>
      <prop-test :data="person"></prop-test>
    </div>
  </div>
</template>
<script>
  import PropTest from '../components/PropTest';

  export default {
    components: {
      PropTest
    },
    name: '',
    data() {
      return {
        desc: '',
        curId: 0,
        datastr: '',
        person:{
          name:'张三张三张三张三张三',
          age:20
        }
      }
    },
    computed: {
      //时间
      datestr :function () {
        return Date()
      },
      // ttt: {
      //   getter: function () {
      //     return Date
      //   },
      //   setter: function (v) {
      //     datastr = v
      //   }
      // }
    },
    methods: {
      changetab: function (index) {
        console.log(index);
        this.curId = index;
        JSON.parse()
      },
      objecttest: function () {


      }

    },
    created() {
    },


  }
</script>
<style lang="less">
  body {
    font-family: "Microsoft YaHei";
  }

  .tab {
    width: 600px;
    margin: 0 auto;

    .tab-tit {
      font-size: 0;
      width: 600px;

      a {
        display: inline-block;
        line-height: 60px;
        font-size: 16px;
        background: #ccc;
        color: #333;
        text-decoration: underline;
        border-color: black;
        width: 25%;
        text-align: center;
        /*border-radius: 5px;*/
        /*margin-right: 5px;*/
      }

      .cur {
        background: #09f;
        color: #fff;
        border-color: brown;
      }

    }

    .tab-con {
      div {
        border: 1px solid #ccc;
        height: 400px;
        padding-top: 20px;
      }
    }

    .button {
      background-color: #4da6ff;
      width: 25%;
      height: 50px;
      line-height: 50px;
      text-align: center;

    }

  }

</style>
