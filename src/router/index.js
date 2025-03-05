import { createMemoryHistory, createRouter, createWebHistory } from "vue-router"
import Inicio from "./../views/page/Inicio.vue"
import Nosotros from "./../views/page/Nosotros.vue"
import Login from "./../views/auth/Login.vue"

const routes = [
    { path: '/', component: Inicio },
    { path: '/nosotros', component: Nosotros },
    { path: '/login', component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;