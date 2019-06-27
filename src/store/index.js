import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// 仓库共有属性的集合，用于存储公共状态，只储存
const state = {
  // 定义了一个公共属性，并初始化赋值为 0
  count: 106,
  listname:[]

}
//专门用于修改state里的属性的方法集合
const mutations = {
  // 方法名(add)随便起，参数state是固定写法
  add(state,n) {
    state.count+=n
  },
  //方法名(reduce)随便起，参数state是固定写法
  reduce(state,n) { 
    state.count-=n
  }

}


export default new Vuex.Store({
  state,
  mutations
});


