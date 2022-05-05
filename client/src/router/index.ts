import { createRouter, createMemoryHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import Nprogress from "nprogress"
import "nprogress/nprogress.css" // progress bar style
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/home.vue"),
  },
]
const router = createRouter({
  routes,
  history: createMemoryHistory(),
})
router.beforeEach((to, form, next) => {
  Nprogress.start()

  next()
})
router.afterEach(() => {
  Nprogress.done()
})
export default router
