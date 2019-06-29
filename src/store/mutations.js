//专门用于修改state里的属性的方法集合,只能在这里修改store
import types from './mutations-types'
const mutations = {
  // 方法名(add)随便起，参数state是固定写法
  add(state, n) {
    state.count += n
  },
  //方法名(reduce)随便起，参数state是固定写法
  reduce(state, n) {
    state.count -= n
  },
  updateerror(state, v) {
    state.errors = state.errors + v;
  }

}
export default mutations
