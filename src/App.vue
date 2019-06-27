<template>
  <transition name=”slide-fade”>
    <div id="app">

      <router-view/>

      <div class="tabs">
        <ul class="ul">
          <li v-for="(item,index) in this.namelist" :id="index">
            <router-link :to="item.router" push>{{item.text}}</router-link>
          </li>
        </ul>
      </div>
      <div id="inline" style="display: none">
        display:inline 在同一行，并且宽度就等于文字内容的宽度且设置宽度无用<p>内容内容内容内容内容内容内容</p>内容内容内容内容内容内容
      </div>
      <div id="inline-block" style="display: none">
        display:inline-block 既有行级元素的特性，也有块级元素的特性，因此在同一行，能设置宽高，margin，padding<p>内容内容内容内容内容内容内容</p>内容内容内容内容内容内容
      </div>
      <div id="block" style="display:none">
        display:block 块级元素会自动换新行，占领一行,可以设置宽高，margin，padding <p>内容内容内容内容内容内容内容</p>内容内容内容内容内容内容
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        key: "value",
        person: {
          name: 'name',
          sex: 'man',
          age: "44"
        },
        namelist: [
          {text: '首页', router: 'jstest'},
          {text: '大厅', router: 'about'},
          {text: '订阅', router: 'about'},
          {text: '订单', router: 'about'}
        ]
      }
    },


  }
</script>

<style>
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 10px;
  }

  #inline p {
    display: none;
    background-color: red;
    width: 300px; /*这里设置无用*/
  }

  #inline-block p {
    display: none;
    background-color: red;
    width: 100px;
    padding: 10px;
  }

  #block p {
    display: none;
    background-color: red;
    width: 100px;
    padding: 20px;
  }
  .centera{
    display: block;
    width: 300px;
    height: 300px;
    line-height:300px;
    border: 1px solid black;
    text-align:center;
    margin:0;
  }
  a {
    text-decoration: none;
    text-transform: capitalize;
    /*text-indent: 5em;*/
  }

  .tabs {
    width: 600px;
    background-color: #dddddd;
    margin: 0 auto;
  }

  .tabsitem {
    /*display: inline-block;*/
    float: left;
    width: 25%;
    text-decoration: none;
    border-color: black;
    text-align: center;
    background-color: #dddddd;
    border-radius: 5px;
  }

  .ul li {
    background-color: brown;
    display: inline-block;
    width: 25%;
    text-align: center;
  }

  li {
    display: inline;
  }
</style>
