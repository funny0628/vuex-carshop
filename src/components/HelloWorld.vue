<template>
  <div>
    <div class="bg">
      <div class="topbar">
        <router-link to="/list">商品列表</router-link>
        <router-link to="/car">购物车（num）</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // list: [
      //   {
      //     name: "口红",
      //     id: 1,
      //     price: 168,
      //     url:
      //       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577965954437&di=5c4da7f582b55a7c4b2bc6d66e6bb5a1&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838be2d845bb399a9014c08f159.jpg"
      //   },
      //   {
      //     name: "眼线笔",
      //     id: 2,
      //     price: 198,
      //     url:
      //       "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2337959827,3409834616&fm=26&gp=0.jpg"
      //   },
      //   {
      //     name: "粉饼",
      //     id: 3,
      //     price: 156,
      //     url:
      //       "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2550013609,815179700&fm=26&gp=0.jpg"
      //   },
      //   {
      //     name: "香水",
      //     id: 4,
      //     price: 288,
      //     url:
      //       "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3374876894,3548143103&fm=26&gp=0.jpg"
      //   },
      //   {
      //     name: "眉笔",
      //     id: 5,
      //     price: 135,
      //     url:
      //       "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1174774135,664068047&fm=115&gp=0.jpg"
      //   }
      // ]
    };
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
