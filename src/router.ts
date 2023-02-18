import { createRouter, createWebHistory } from 'vue-router'

const Home = { template: '<div>Home</div>' }

const routes = [
  { path: '/', component: Home }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
