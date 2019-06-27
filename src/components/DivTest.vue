<template>
  <div class="div1">
    <div class="top"></div>
    <div class="content">

      <div v-for="index in 5" :id="index">jhsdjlasjflskjfls uhkhskjhkhkhk
      </div>

    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
  export default {
    name: "DivTest"
  }
</script>

<style scoped>

  .div1 {
    margin: 0 auto;
  }

  .div {

  }

  .top {
    border-color: brown;
    background-color: #dddddd;
    height: 50px;
    width: 100%;
  }

  .content {
    margin: 0 auto;
    text-align: center;
    background-color: aqua;
    height: 300px;
    width: 600px;
  }

  .content div {
    /*float: left;*/
    width: 100px;
    height: 80px;
    margin-right: 10px;
    background-color: antiquewhite;
  }

  .footer {
    background-color: darkgreen;
    border-color: chocolate;
    height: 10px;
    width: 100%;
  }
</style>
