<template>
  <div class="car">
    <ul>
      <li v-for="(item, index) in carlist" :key="index">
        <img :src="item.url" />
        <div>
          <div class="line">
            <span>单价:{{ item.price }}</span>
            <span>数量:{{ item.num }}</span>
          </div>
          <div class="btn">
            <button @click="ADDNUM(item)">+</button>
            <button @click="MENUNUM(item)">-</button>
          </div>
        </div>
      </li>
    </ul>
   
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapState} from 'vuex'
export default {
  data() {
    return {};
  },
  
  computed: {
      ...mapState(["carlist"])
    
    // /与下面的方式结果是一样的,也可以使用对象的语法
    //  list(){
    //      return this.$store.state.carlist;
    //  }  
  },
  methods: {

    ...mapMutations(["ADDNUM","MENUNUM"])

    //与上面的方式结果一样
    // numaddone(item) {
    //  this.$store.commit('ADDNUM',item)
    // },
    // numnmenuone(item) {
    //     this.$store.commit('MENUNUM',item)
    // },
  },
};
</script>

<style lang="less" scoped>
.car {
  position: relative;
  ul {
    list-style: none;

    li {
      display: flex;
      position: relative;
      padding: 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        display: block;
        //   background-color: pink;
      }
      .line {
        span {
          margin-right: 20px;
        }
      }
      .btn {
        position: absolute;
        bottom: 10px;
        right: 0;
        button {
          width: 20px;
          height: 20px;
          margin-right: 20px;
        }
      }
    }
  }

}
</style>
