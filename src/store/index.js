import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const list = localStorage.getItem('LIST') || [];
const store = new Vuex.Store({
    state: {
        //购物车的数据
        carlist:list,
        listnum:0,


    },
    //作为store的计算属性 , 接受第一个参数为state
    getters: {
        getnum:state=>{
            // return state.listnum;
            return state.carlist.reduce((start,current)=>{ return start + current.num},0)
        }
    },
    mutations: {
       //添加购物车的
       ADDCAR(state,payload){
        //    window.console.log(payload)
        let tetanus = state.carlist.find(it=> it.id === payload.id);
        if(tetanus){
            payload.num ++
        } else{
            payload.num = 1
            state.carlist.push(payload);
        }
       }
    },
    actions: {
       
    }
})
export default store;