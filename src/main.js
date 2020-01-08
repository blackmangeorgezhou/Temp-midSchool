// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'

import router from './router'
import { Spinner } from 'mint-ui'
import 'mint-ui/lib/style.css'

import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'
import Divider from 'vant/lib/divider'
import 'vant/lib/divider/style'
import Tabbar from 'vant/lib/tabbar'
import 'vant/lib/tabbar/style'
import TabbarItem from 'vant/lib/tabbar-item'
import 'vant/lib/tabbar-item/style'
import DropdownMenu from 'vant/lib/dropdown-menu'
import 'vant/lib/dropdown-menu/style'
import DropdownItem from 'vant/lib/dropdown-item'
import 'vant/lib/dropdown-item/style'
import Dialog from 'vant/lib/dialog'
import 'vant/lib/dialog/style'

Vue.use(Divider).use(Toast).use(Tabbar).use(TabbarItem).use(DropdownMenu).use(DropdownItem).use(Dialog)

Vue.component(Spinner.name, Spinner)

Vue.config.productionTip = false

// Vue.directive('isIphoneX', {
//   bind: function (el, binding) {
//     const _local = 'ios'
//     let isIphoneX = false
//     if (_local === 'ios' && window.screen.height) {
//       isIphoneX = window.screen.height > 750
//     }
//     if (isIphoneX) {
//       alert(123)
//       if (binding.value === 'margin') {
//         console.log('use margin')
//         el.setAttribute('style', 'margin-bottom: 8vw !important;')
//       } else if (binding.value === 'height') {
//         console.log('use height')
//         el.setAttribute(
//           'style',
//           ` padding-bottom: 15vh !important;min-height: 85vh !important;`
//         )
//       } else {
//         console.log('use padding')
//         el.setAttribute('style', 'padding-bottom: 8vw !important;')
//       }
//     } else {
//       if (binding.value === 'height') {
//         el.setAttribute(
//           'style',
//           ` padding-bottom: 11vh !important;min-height: 89vh !important;`
//         )
//       }
//     }
//   },
//   update: function (el, binding) { }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
