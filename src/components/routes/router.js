import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        name:'app',
        component: ()=>import("../views/App.vue")
    },
    {
        path:'/formulario',
        name:'Formulario',
        component: ()=>import("../views/Formulario.vue")
    },
    {
        path:'/paginacion',
        name:'paginacion',
        component:Paginacion
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router;