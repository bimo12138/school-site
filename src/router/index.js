import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: "/index",
    name: "Index",
    component: () => import("../views/Index.vue"),
    children: [{
      path: "about",
      name: "About",
      component: () => import("../views/About.vue")
    }, {
      path: "",
      name: "IndexMain",
      component: () => import("../views/IndexMain.vue")
    }]
  }, { 
    path: "/mini",
    name: "MiniProgream",
    component: () => import("../views/MiniProgream.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
