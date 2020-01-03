import Vue from 'vue'
import Vuex from 'vuex'
import { Loading } from 'element-ui';

Vue.use(Vuex);
const list =JSON.parse(sessionStorage.getItem('CARLIST') || "[]");
const store = new Vuex.Store({
    state: {
        //购物车的数据
        carlist: list,
        //商品总数
        listnum: 0,
        //商品总价钱
        totalprice:0,
        //结算按钮的显示
        isshow:false,
        dialogVisible:false,
        data:'',
        loading:true

    },
    //作为store的计算属性 , 接受第一个参数为state
    getters: {
        
        getnum: state => {
            return state.carlist.reduce((start, current) => { return start + current.num }, 0)
        },
        gettotalprice:state=>{
            return state.carlist.reduce((start,current)=> {return  start + current.num * current.price },0)
        }     
    },
    mutations: {
        //添加购物车的
        ADDCAR(state, payload) {
            let oldlist = JSON.parse(JSON.stringify(state.carlist))
            let tetanus = oldlist.find(it => it.id === payload.id);
            if (tetanus) {
                Vue.prototype.$message({
                    message:'该商品已存在',
                    type:"warning"
                });
            } else {
                payload.num = 1
                oldlist.push(payload);
                Vue.prototype.$message({
                    message:'添加购物车成功',
                    type:"warning"
                });
            }
            return state.carlist = oldlist
        },
        //add num
        ADDNUM(state,payload){
            let oldlist = JSON.parse(JSON.stringify(state.carlist))
            let str = oldlist.find(item => item.id === payload.id);
            if(str){
                str.num ++ 
            }
            window.console.log(state.carlist)
            return state.carlist = oldlist;
        },
        //menu num
        MENUNUM(state,payload){
            let oldlist = JSON.parse(JSON.stringify(state.carlist))
            let str = oldlist.find(item => item.id === payload.id);
            if(str)   str.num --
            if(str.num < 1) return 
            window.console.log(state.carlist)
            return state.carlist = oldlist;
        },
        CLEARCARLIST(state){
            // if(state.carlist.length === 0 ) return
            Vue.prototype.$confirm(`总金额 : ${this.getters.gettotalprice}`,"提示",{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
              }).then(()=>{
                state.carlist = [];
                sessionStorage.setItem("CARLIST","[]")
              })
        },
        CHANGE(state,payload){
            if(payload !== '/list')  state.isshow = true;
            else state.isshow = false;
        },
        CHANGEDATA(state,payload){
            state.data = payload
        },
        TOCHANGE(state,payload){
            state.dialogVisible = false;
            if(payload===0){
                return
            }
            else if(payload===1){
                store.commit("CLEARCARLIST")
            }
        }
    },
    actions: {
        ASYNCDATA(context){
             //先显示dialog
             if(context.state.carlist.length !== 0) context.state.dialogVisible = true;
            
            //  https://www.v2ex.com/api/site/info.json
            Vue.prototype.$http.asyncdata().then(backdata =>{
                let loadingInstance1 = Loading.service({ fullscreen: true,background:"rgba(255, 255, 255, 0.6)"});
                    context.commit('CHANGEDATA',backdata.data);
              
                
            })

        }
    }
})
export default store;