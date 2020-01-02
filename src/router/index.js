import List from '../components/list.vue'
import Car from '../components/car.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        // component:List,
        redirect: '/list'
    },
    {
        path:'/list',
        component:List,

    },
    {
        path:'/car',
        component:Car
    }
]

export const router = new VueRouter({
    routes
})