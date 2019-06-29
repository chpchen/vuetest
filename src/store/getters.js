const getters = {

  count: state => state.count,
  listname: state => state.listname,
  errors: state => state.errors,
  userInfo: state => state.userInfo,
  orderList: state => state.orderList, //订单列表
  orderDetail: state => state.orderDetail, //订单产品详情
  login: state => state.login //是否登录

}

export default getters
