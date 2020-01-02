<template>
  <div>
    <div class="bg">
      <div class="topbar">
        <router-link to="/list">商品列表</router-link>
        <router-link to="/car">购物车（{{getnum}}）</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      
    };
  },
  computed: {
    getnum(){
      return this.$store.getters.getnum
    }
    // ...mapGetters(["getnum"])
  },
  created () {

      //保存初始的数据
      // localStorage.setItem('LIST',JSON.stringify(this.list))
        window.onbeforeunload = () => {
          localStorage.removeItem('LIST')
            // localStorage.setItem('LIST',JSON.stringify(this.$store.state.carlist))
        }
  },

};
</script>

<style lang="less" scoped>
.bg {
  width: 300px;
  height: 500px;
  background-color: #eee;
  border: 1px solid #ccc;
  margin: 0 auto;

  .topbar {
    color: red;
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding: 0px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    a {
      display: inline-block;
      margin-right: 10px;
      text-decoration: none;
    }
  }
  .router-link-active {
    color: pink;
  }
}
</style>
