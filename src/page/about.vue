<template>
  <div id="tab">
    <div class="tab-tit">
      <a href="javascript:;" @click="curId=0" v-bind:class="{'cur':curId===0}">html</a>
      <a href="javascript:;" @click="curId=1" :class="{'cur':curId===1}">css</a>
      <a href="javascript:;" @click="curId=2" :class="{'cur':curId===2}">javascript</a>
      <a href="javascript:;" v-on:click="curId=3" :class="{'cur':curId===3}">vue</a>
    </div>
    <div class="tab-con">
      <div v-show="curId===0">html</div>
      <div v-show="curId===1">css</div>
      <div v-show="curId===2">javascript</div>
      <div v-show="curId===3">vue</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        desc: '',
        curId: 0
      }
    },
    computed: {},
    methods: {},
    created () {
    }

  }
</script>
<style>
  body {
    font-family: "Microsoft YaHei";
  }

  #tab {
    width: 600px;
    margin: 0 auto;
  }

  .tab-tit {
    font-size: 0;
    width: 600px;
  }

  .tab-tit a {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    width: 23%;
    text-align: center;
    background: #ccc;
    color: #333;
    text-decoration: none;
    border-color: black;
    border-radius: 5px;
    margin-right: 5px;
  }

  .tab-tit .cur {
    background: #09f;
    color: #fff;
    border-color: brown;
  }

  .tab-con div {
    border: 1px solid #ccc;
    height: 400px;
    padding-top: 20px;
  }
</style>
