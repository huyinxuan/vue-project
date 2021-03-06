import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../Hello'   //引入模板
import Home from '../Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
