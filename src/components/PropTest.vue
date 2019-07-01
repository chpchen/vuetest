<template>
  <div><span>{{data.name+'|'+data.age}}</span>

  </div>
</template>

<script>

  export default {
    name: "PropTest",
    props: {
      data: null
    },
    data() {
      return {
        msg: ''
      }
    },
    created() {
    },
    computed: {
      //计算方法
    },
  }
</script>

<style lang="less" scoped>

</style>
