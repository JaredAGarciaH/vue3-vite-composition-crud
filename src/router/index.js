import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import LibrosView from '../views/LibrosView.vue'
import NuevoLibroView from '../views/NuevoLibroView.vue'
import EditarLibroView from '../views/EditarLibroView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView,
  },
  {
    path: '/libros',
    name: 'libros',
    component: LibrosView,
  },
  {
    path: '/libros/nuevo',
    name: 'nuevo-libro',
    component: NuevoLibroView,
  },
  {
    path: '/libros/editar/:id',
    name: 'editar-libro',
    component: EditarLibroView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
