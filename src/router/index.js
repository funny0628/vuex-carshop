import List from '../components/list.vue'
import Car from '../components/car.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

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
];


export const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
  window.console.log(to, from);

     store.commit('CHANGE',to.path)
  
   next()
     
 });