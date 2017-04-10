import menubar from './menu-bar.vue'

const Menu = {
	install:function(Vue){
		Vue.component('aside-menu', menubar)
	}
}
export default  Menu