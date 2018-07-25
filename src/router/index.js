import Vue from 'vue'
import Router from 'vue-router'

import { getLoginUser, removeTokenCookie } from '../assets/js/assist'
import SysManage from '../pages/sysmanage'

Vue.use(Router)

const menuType = {
  header: 'headerMenu',
  left: 'leftMenu'
}

/**
 * 不做登录校验的路由集合
 * @type {[*]}
 */
const unLoginCheckRoutes = ['/','/index','/about','/recruit','/contact']

let router = new Router({
  mode: 'history',
  // base: '/cswb/',  //添加的地方
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: Home => require(['../pages/home/home'],Home),
      meta:{auth:false}
    },
    {
      path: '/recruit',
      name: 'Recruit',
      component: Recruit => require(['../pages/recruit/recruit'],Recruit),
      meta:{auth:false}
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact => require(['../pages/contact/Contact'],Contact),
      meta:{auth:false}
    },
    {
      path: '/about',
      name: 'About',
      component: About => require(['../pages/about/about'],About),
      meta:{auth:false}
    },
    {
      path: '/sys',
      name: 'sys',
      component: SysManage,
      type: menuType.header,
      meta:{auth:true},
      children: [
        {path: 'article', name: '资讯管理', component: SysManage.Article, type: menuType.left,meta:{auth:true}},
        // {path: 'role', name: '栏目管理', component: SysManage.Article, type: menuType.left,meta:{auth:true}},
        {path: 'schedue', name: '排班管理', component: SysManage.SCHEDUE, type: menuType.left,meta:{auth:true}}
      ]
    }
  ]
})



router.beforeEach( (to, from, next) => {
  // 是否要做登录及权限校验
  let loginCheck = true
  console.info(to.path);
  unLoginCheckRoutes.forEach(r => {
    if (to.path === '/' || (r != '/' && to.path.startsWith(r))) {
      loginCheck = false
    }
  })

  if (loginCheck) {
    let user = getLoginUser()
    if (user === null) {
      removeTokenCookie()
      next('/')
    }else{
      let _route = {}
      router.options.routes.forEach(r => {
        if (r.path === to.path) _route = r
      })
      if (_route === {} || _route.children === undefined || _route.children.length === 0) {
        next()
      } else {
        let _firstR = _route.children[0]
        next(to.path + '/' + _firstR.path)
      }
    }
  } else {
    let _route = {}
    router.options.routes.forEach(r => {
      if (r.path === to.path) _route = r
    })
    if (_route === {} || _route.children === undefined || _route.children.length === 0) {
      if (to.path === '/') {
        next('index')
      }else{
        next()
      }
    } else {
      let _firstR = _route.children[0]
      next(to.path + '/' + _firstR.path)
    }
  }
})


export default router
