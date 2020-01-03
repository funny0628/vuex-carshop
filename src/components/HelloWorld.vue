<template>
  <div class="bg">
    <div class="topbar">
      <router-link to="/list">商品列表</router-link>
      <router-link to="/car">购物车（{{ getnum }}）</router-link>
    </div>
    <router-view></router-view>
    <div v-if="isshow" class="foot">
      <span
        >总价: <i>{{ gettotalprice }}</i>
      </span>
      <span class="submit" @click="tosubmit">提交订单</span>
    </div>
    <!-- dialog -->
    <el-dialog
    class="dialog"
    v-loading="loading"
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <span>{{data}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="tochange(0)">取 消</el-button>
        <el-button type="primary" @click="tochange(1)"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from 'vuex'
import { Loading } from 'element-ui';
export default {
  data() {
    return {
      loading:true
    };
  },
  computed: {
    ...mapGetters(["getnum", "gettotalprice"]),
    ...mapState(["isshow","dialogVisible","data"])
  },
  methods: {
    ...mapMutations({
      tochange: "TOCHANGE"
    }),
    ...mapActions({
       tosubmit: "ASYNCDATA",
    })
  },

  created() {
    // this.$forceUpdate()
    // window.console.log(this.$router.history.current.path);
    window.onbeforeunload = () => {
      sessionStorage.setItem(
        "CARLIST",
        JSON.stringify(this.$store.state.carlist)
      );
    };
  }
};
</script>

<style lang="less" scoped>

.bg {
  width: 300px;
  height: 500px;
  background-color: #eee;
  border: 1px solid #ccc;
  margin: 0 auto;
  position: relative;
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
  .foot {
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 0px 10px;
    height: 40px;
    line-height: 40px;
    // background-color: pink;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    span {
      i {
        color: red;
      }
    }
    .submit {
      width: 30%;
      height: 100%;
      background-color: red;
      cursor: pointer;
    }
  }
  .dialog{
    text-align: left;
  }
}
</style>
