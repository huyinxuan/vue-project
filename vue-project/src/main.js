// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Apps from './App'
import router from './components/router'   //引入路由
Vue.config.productionTip = false
import topbar from './components/top-bar/index.js'
import menubar from './components/menu-bar/index.js'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'




Vue.use(topbar)

Vue.use(menubar)
Vue.use(ElementUI)

/* eslint-disable no-new */
 

// Vue.component('top-bar', {  //头部组件
//   template: '<h1>标题000!</h1>'
// });

// Vue.component('aside-menu', {  //菜单组件
//   template: '<ul>'+
//           '<li><router-link to="/">index</router-link></li>'+
//           '<li> <router-link to="/home">Go  home</router-link></li>'+
//           '</ul>'
// });


var vues = new Vue({
  el: '#app',
  router,
  template: '<Apps/>',

  render: h => h(Apps)
})

