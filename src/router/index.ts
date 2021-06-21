import { createRouter, createWebHistory } from "vue-router";
import Nprogress from 'nprogress'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
    }
  ]
});

router.beforeEach(() => {
  Nprogress.start()
})

router.afterEach(() => {
  Nprogress.done()
})

export default router;
