import Home from './views/Home.vue'
import Playground from './views/Playground.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/playground',
    meta: { title: 'Playground' },
    component: Playground,
  },
  { path: '/:path(.*)', component: NotFound },
]
