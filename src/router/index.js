import Vue from 'vue'
import Router from 'vue-router'

import { getLoginUser, removeTokenCookie } from '../assets/js/assist'
import SysManage from '../pages/sysmanage/index.js'
import NewsManage from '../pages/sysmanage/news_index.js'

Vue.use(Router)

const menuType = {
  header: 'headerMenu',
  left: 'leftMenu'
}

/**
 * 不做登录校验的路由集合
 * @type {[*]}
 */
const unLoginCheckRoutes = ['/','/login','/index','/about','/recruit','/contact','/news','/product']

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
    // {
    //   path: '/news',
    //   name: 'News',
    //   component: News => require(['../pages/news/News'],News),
    //   meta:{auth:false}
    // },
    {
      path: '/product',
      name: 'Product',
      component: Product => require(['../pages/product/Product'],Product),
      meta:{auth:false}
    },
    {
      path: '/about',
      name: 'About',
      component: About => require(['../pages/about/about'],About),
      meta:{auth:false}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login => require(['../pages/login/Login'],Login),
      meta:{auth:false}
    },
    {
      path: '/sys',
      name: 'sys',
      component: SysManage,
      type: menuType.header,
      meta:{auth:true},
      children: [
        {path: 'newsCategory', name: '新闻类型', component: SysManage.NewsCategory, type: menuType.left,meta:{auth:true}},
        {path: 'news', name: '新闻资讯', component: SysManage.News, type: menuType.left,meta:{auth:true}},
        {path: 'productCategory', name: '产品分类', component: SysManage.ProductCategory, type: menuType.left,meta:{auth:true}},
        {path: 'product', name: '产品管理', component: SysManage.Product, type: menuType.left,meta:{auth:true}},
        {path: 'dept', name: '部门管理', component: SysManage.Dept, type: menuType.left,meta:{auth:true}},
        {path: 'post', name: '岗位管理', component: SysManage.Post, type: menuType.left,meta:{auth:true}},
        {path: 'employee', name: '员工管理', component: SysManage.Employee, type: menuType.left,meta:{auth:true}},
        {path: 'message', name: '留言管理', component: SysManage.Message, type: menuType.left,meta:{auth:true}},
        {path: 'user', name: '账号管理', component: SysManage.User, type: menuType.left,meta:{auth:true}}
      ]
    },
    {
      path: '/nm',
      name: 'nm',
      component: SysManage,
      type: menuType.header,
      meta:{auth:true},
      children: [
        {path: 'newsCategory', name: '新闻类型', component: NewsManage.NewsCategory, type: menuType.left,meta:{auth:true}},
        {path: 'news', name: '新闻资讯', component: NewsManage.News, type: menuType.left,meta:{auth:true}}
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
      next('/login')
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
