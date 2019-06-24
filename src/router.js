import Vue from 'vue'//引入vue模块
import Router from 'vue-router'//引入路由模块
import Home from './views/Home.vue'//引入组件
import About from './views/About.vue'
import Resource from './views/Resource.vue'
import Case from './views/Case.vue'
import resourceDetail from './views/resourceDetail.vue'
import Contact from './views/Contact.vue'



Vue.use(Router)//实例化

export default new Router({//创建路由器对象
  routes: [//路由字典
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        name:'home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta:{
        name:'about'
      }
    },
    {
      path:'/resource',
      name:'resource',
      component:Resource,
      meta:{
        name:'resource'
      }
    },
    {
      path:'/resourceDetail/:id',
      name:'resourceDetail',
      component:resourceDetail,
      meta:{
        name:'resource'
      }
    },
    {
      path:'/case',
      name:'case',
      component:Case,
      meta:{
        name:'case'
      }
    },
    
    {
      path:'/contact',
      name:'contact',
      component:Contact,
      meta:{
        name:'contact'
      }
    },
  ]
})
