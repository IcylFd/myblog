import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Blog from './views/blog/Blog.vue'
import Index from './views/index/Index.vue'
import Resume from './views/resume/Resume.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'home',
          component: Home
      },
      {
          path:'/blog',
          name:'blog',
          component: Blog
      },
      {
          path:'/index',
          name:'index',
          component:Index,
      },
      {
          path:'/resume',
          name:'resume',
          component:Resume
      }
  ]
})
