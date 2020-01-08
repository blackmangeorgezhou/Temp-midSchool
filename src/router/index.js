import Vue from 'vue'
import Router from 'vue-router'

// 新高一
import YH80To2000IndexPage from '@/views/YouHui/80To2000/index'
import YH80To2000HomePage from '@/views/YouHui/80To2000/home'
import YouHuiPage80To2000 from '@/views/YouHui/80To2000/YouHui2000'
import YouHuiPage2Select from '@/views/YouHui/80To2000/ToSelect'

// 中考
import DianJingClassPage from '@/views/YouHui/DianJingClass/SelectClass'

Vue.use(Router)

let routers = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/you-hui_80To2000',
      name: '优惠80抵1000',
      component: YH80To2000IndexPage,
      meta: {
        title: '新东方新高一暑假班钜惠来袭'
      },
      children: [
        {
          path: 'home',
          name: '首页',
          component: YH80To2000HomePage
        },
        {
          path: 'bao_ming',
          name: '我要报名',
          component: YouHuiPage80To2000
        },
        {
          path: 'to_select',
          name: '我要选课',
          component: YouHuiPage2Select
        },
        {
          path: '',
          redirect: 'home'
        }
      ]
    },
    {
      path: '/dianjing-class',
      name: '中考全科期末专题点睛班',
      component: DianJingClassPage,
      meta: {
        title: '新高一暑假班优惠券首日拼团福利'
      }
    },
    {
      path: '',
      redirect: '/you-hui_80To2000'
    }
  ]
})

routers.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default routers
