<template>
  <el-container>
    <el-header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </el-header>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppMain from "./components/AppMain.vue";

@Component({
  components: {
    AppMain
  }
})
export default class Layout extends Vue {}
</script>
<style lang="less" scoped>
.layout-mixin1 {
  color: #333;
  text-align: center;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  .layout-mixin1();
}
.el-aside {
  background-color: #d3dce6;
  transition: width 1s;
  .layout-mixin1();
}
.el-main {
  background-color: #e9eef3;
  .layout-mixin1();
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
