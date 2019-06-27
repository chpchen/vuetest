import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/page/about'
import ProductList from '@/page/ProductList'
import ProductDetail from '@/page/ProductDetail'
import CssTest from '../components/CssTest'
import JsTest from '../components/JsTest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: CssTest
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: ProductList
    },
    {
      path: '/productdetail/:id',
      name: 'productdetail',
      component: ProductDetail
    },
    {
      path: '/jstest',
      name: 'jstest',
      component: JsTest
    }
  ],
  // linkActiveClass: "active"
})
