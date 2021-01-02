import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

//通过路由懒加载方式导入路由
const Home = () => import('@/components/Home')
const HomeNews = () => import('@/components/HomeNews')
const HomeMessage = () => import('@/components/HomeMessage')
const About = () => import('@/components/About')
const User = () => import('@/components/User')
const Profile = () => import('@/components/Profile')

//1.通过Vue.use(插件) 安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象 配置路由和组件之间的应用关系
const routes = [
  {
    path: '',
    //redirect重定向  默认进入首页
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    //meta 元数据 描述数据的数据
    meta: {
      title: '首页'
    },
    //子路由
    children: [
      // {
      //   path: '',
      //   redirect: 'news' //默认显示新闻页面
      // },
      {
        //子路由这边不需要加斜杠
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userId', //动态路由的方式
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

//2.创建VueRouter对象
const router = new VueRouter({
  routes,
  mode: 'history' //将hash模式改成html5的history模式
})

//3.将router对象传入到vue实例中

//全局导航守卫
//前置守卫(guard)
router.beforeEach((to, from, next) => {
  // console.log(to);
  //从from跳转到to to其实是定义的一个个路由 获取matched数组中的第一个
  document.title = to.matched[0].meta.title
  //该函数里面必须要调用next()
  next()
})

//后置钩子(hook)
router.afterEach((to,from)=>{

})

export default router
