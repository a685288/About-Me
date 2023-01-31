import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Skill from '../views/Skill.vue'
import Experience from '../views/Experience.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: Index
  },
  {
    path: '/Skill',
    name: 'Skill',
    component: Skill
  },
  {
    path: '/Experience',
    name: 'Experience',
    component: Experience
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router