import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    },
  ]
})

router.afterEach((e) => {
  setTimeout(() => {
    if (!e.hash) {
      window.scroll(0, 0)
    } else {
      document.getElementById(e.hash.replace('#', '')).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center"
      });
    }
  }, 100)
});

export default router
