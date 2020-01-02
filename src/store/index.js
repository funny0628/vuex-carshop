import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const list = localStorage.getItem('LIST') || [];
const store = new Vuex.Store({
    state: {
        //购物车的数据
        carlist:list,

    },
    //作为store的计算属性 , 接受第一个参数为state
    getters: {
       
    },
    mutations: {
       //添加购物车的
       ADDCAR(state,payload){
           window.console.log(payload)
        let tetanus = state.carlist.find(it=> it.id === payload.id);
        if(tetanus) return 
        else state.carlist.push(payload);
       }
    },
    actions: {
       
    }
})
export default store;