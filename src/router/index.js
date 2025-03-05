import { createMemoryHistory, createRouter, createWebHistory } from "vue-router"
import Inicio from "./../views/page/Inicio.vue"
import Nosotros from "./../views/page/Nosotros.vue"
import Login from "./../views/auth/Login.vue"
import Perfil from "../views/admin/perfil/Perfil.vue"
import Usuario from "../views/admin/usuario/Usuario.vue"

const routes = [
    { path: '/', component: Inicio },
    { path: '/nosotros', component: Nosotros },
    { path: '/login', component: Login,name: 'Login', meta: {redirectIfAuth: true} },
    { 
        path: '/admin/perfil', 
        name: "MiPerfil",
        component: Perfil,
        meta: {requireAuth: true}
    },
    { 
        path: '/admin/usuario', 
        name: "Usuario",
        component: Usuario,
        meta: {requireAuth: true}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("access_token");

    console.log("TO: ", token)
    if(to.meta.requireAuth){
        if(!token){
            return next({name: "Login"});
        }
        return next();
    }
    if(to.meta.redirectIfAuth && token){
        return next({name: "MiPerfil"});
    }
    return next()

})

export default router;