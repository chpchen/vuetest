import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// 仓库共有属性的集合，用于存储公共状态，只储存
const state = {
  // 定义了一个公共属性，并初始化赋值为 0
  count: 106,
  listname: [],
  errors: 'error info',
  userInfo: {phone: 111}, //用户信息
  orderList: [{orderno: '1111'}], //订单列表
  orderDetail: null, //订单产品详情
  login: false, //是否登录
}
const getters = {

  count: state => state.count,
  listname: state => state.listname,
  errors: state => state.errors,
  userInfo: state => state.userInfo,
  orderList: state => state.orderList, //订单列表
  orderDetail: state => state.orderDetail, //订单产品详情
  login: state => state.login //是否登录

}

//专门用于修改state里的属性的方法集合,只能在这里修改store
const mutations = {
  // 方法名(add)随便起，参数state是固定写法
  add(state, n) {
    state.count += n
  },
  //方法名(reduce)随便起，参数state是固定写法
  reduce(state, n) {
    state.count -= n
  },
  updateerror(state,v){
    state.errors = state.errors + v;
  }

}

const actions = {}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});


export default store
