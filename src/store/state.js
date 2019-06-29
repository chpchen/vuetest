// 仓库共有属性的集合，用于存储公共状态，只储存
const state = {
  // 定义了一个公共属性，并初始化赋值为 0
  count: 106,
  listname: [{'87878':'455'},{'ddd':'dds'}],
  errors: 'error info',
  userInfo: {phone: 111}, //用户信息
  orderList: [{orderno: 'NO.000005'}], //订单列表
  orderDetail: null, //订单产品详情
  login: false, //是否登录
}

export default state
