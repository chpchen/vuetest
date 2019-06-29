/*
 工具类函数文件
 * */
/*
 * isIosOrAndroid 判断是ios还是android系统，返回'android'/'ios'
 * go 跳转到app/小程序的某个页面
 * setTitle 设置页面标题
 * showToast 普通提示框
 * showSuccessToast 成功提示框
 * showLoadingToast loading提示窗
 * hideLoadingToast 关闭loading提示窗
 * trimAll 去除一个字符串的所有空格，返回字符串
 * isNull 判断一个字符串是否为空，返回布尔值
 * isTelephone 判断手机号码格式是否正确，返回布尔值
 * isRealName 判断姓名格式是否正确，返回布尔值
 * isMsgCode 判断短信验证码格式是否正确，返回布尔值
 * strToJson 将一个对象字符串转化为json对象，返回json对象
 * setStorage 将数据存储在本地缓存中指定的key中
 * getStorage 从本地缓存中异步获取指定key的内容，返回对应key的内容
 * getUrlPramas 获取地址栏参数集，返回地址栏参数集
 * getHeader 获取本地缓存的header对象，返回header对象
 * setHeader 设置本地缓存的header对象
 * isIphonex 判断是非为 iphoneX Series 机型
 */
import Vue from 'vue';
// import jsBridge from '@/assets/js/jsBridge/jsBridge';
import store from '../store';

/*
 * go 跳转到app/小程序的某个页面
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params url String 是 页面路径
 * @params type String 否 跳转方式，默认：navigateTo
 * 返回值 无
 * */
const go = (url = '', type = 'navigateTo') => {
  if (store.state.common.platform === 'ios' || store.state.common.platform === 'android') {
    window.location.href = url;
    return;
  }
  if (store.state.common.platform === 'mini') {
    switch (type) {
      case 'navigateTo':
        wx.miniProgram.navigateTo({
          url: url
        })
        break
      case 'redirectTo':
        wx.miniProgram.redirectTo({
          url: url
        })
        break
      case 'reLaunch':
        wx.miniProgram.reLaunch({
          url: url
        })
        break
      case 'switchTab':
        wx.miniProgram.switchTab({
          url: url
        })
    }
  }
}

/*
 * isIosOrAndroid 判断是ios还是android系统，返回'android'/'ios'
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params 无
 * 返回值 String 'android'/'ios'
 * */
const isIosOrAndroid = () => {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
  if (isAndroid) {
    return 'android'
  }
  if (isIOS) {
    return 'ios'
  }
}

/*
 * trimAll 去除一个字符串的所有空格，返回字符串
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params v String 是 要操作的值
 * 返回值 String 操作成功的值
 * */
const trimAll = (v) => {
  return v.replace(/\s*/g, '')
}

/*
 * isNull 判断一个字符串是否为空，返回布尔值
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params v String 是 要判断的值
 * 返回值 Boolean
 * */
const isNull = (v) => {
  return v.replace(/\s*/g, '').length === 0
}

/*
 * isTelephone 判断手机号码格式，返回布尔值
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params v String 是 要判断的值
 * 返回值 Boolean
 * */
const isTelephone = (v) => {
  return /^1[3|4|5|6|7|8|9]\d{9}$/.test(v.replace(/\s*/g, ''))
}

/*
 * isRealName 判断姓名格式，返回布尔值
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params v String 是 要判断的值
 * 返回值 Boolean
 * */
const isRealName = (v) => {
  return /^[\u4e00-\u9fa5]{2,20}$/.test(v.replace(/\s*/g, ''))
}

/*
 * isMsgCode 判断短信验证码格式，返回布尔值
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params v String 是 要判断的值
 * 返回值 Boolean
 *
 * */
const isMsgCode = (v) => {
  return /^\d{6}$/.test(v)
}

/*
 * strToJson 将一个对象字符串转化为json对象，返回json对象
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params v String 是 要转化的值
 * 返回值 json对象
 *
 * */
const strToJson = (v) => {
  /* eslint-disable */
  let json = eval('(' + v + ')');
  /* eslint-disable */
  return json;
}

/*
 * setStorage 将数据存储在本地缓存中指定的key中
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params key String 是 键名
 * @params val String/Number/Boolean/Object 是 值
 * 返回值 无
 * */
const setStorage = (key, val) => {
  window.localStorage.setItem(key, JSON.stringify(val));
}

/*
 * getStorage 从本地缓存中异步获取指定key的内容，返回对应key的内容
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params key String 是 键名
 * 返回值 指定key的内容，若无，返回值为""
 * */
const getStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key)) || "";
}

/*
 * getUrlPramas 获取地址栏参数集，返回地址栏参数集
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params url String 否 地址栏url，默认：window.location.href
 * 返回值 Object 地址栏参数集
 * */
const getUrlPramas = (url = window.location.href) => {
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach(function (item) {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    })
  }
  return obj;
}

/*
 * getHeader 获取本地缓存的header对象，返回header对象
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params 无
 * 返回值 Object header对象
 *
 * */
const getHeader = () => {
  let header = getStorage('header');
  return header ? header : {};
}
/*
 * setHeader 设置本地缓存的header对象
 * @params 参数名称 参数类型 参数是否必填 参数说明
 * @params obj Object 否 以键值对形式对header中的属性进行新增或修改操作
 * 返回值 无
 *
 * */
const setHeader = (obj) => {
  let header = getStorage('header');
  if (!header) {
    header = {};
  }
  let newHeader = Object.assign({}, header, obj);
  setStorage('header', newHeader);
};

const isIphonex = () => {
  if (typeof window !== 'undefined' && window) {
    return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812;
  }
  return false;
}

export default {
  isIosOrAndroid,
  go,
  trimAll,
  isNull,
  isTelephone,
  isRealName,
  isMsgCode,
  strToJson,
  setStorage,
  getStorage,
  getUrlPramas,
  getHeader,
  setHeader,
  isIphonex
}
