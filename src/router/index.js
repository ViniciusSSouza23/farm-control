import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BreedersView from "../views/BreedersView.vue";
import SalesView from "../views/SalesView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/matrizes',
    name: 'breeders',
    component: BreedersView
  },{
    path: '/vendas',
    name: 'sales',
    component: SalesView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
