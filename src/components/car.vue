<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img
          :src="item.url"
        />
        <div>
          <div class="line">
            <span>单价:{{item.price}}</span>
            <span>合计:num</span>
          </div>
          <div class="btn">
            <button @click="numaddone">+</button>
            <button @click="numnmenuone">-</button>
          </div>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created () {
    //    this.list = JSON.parse(localStorage.getItem('LIST'));
       this.list = this.$store.state.carlist;
    //    this.list = localStorage.getItem('LIST') || []
  },
  methods: {
      numaddone(){

      },
      numnmenuone(){

      }
  }
};
</script>

<style lang="less" scoped>
ul {
  list-style: none;

  li {
    display: flex;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    border-bottom:1px solid #ccc;
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
</style>
