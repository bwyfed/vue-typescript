<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-row>
      <el-col :span="12">
        <boy-comp class="boy"></boy-comp>
      </el-col>
      <el-col :span="12">
        <girl-comp class="girl"></girl-comp>
      </el-col>
    </el-row>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item of options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BoyComp from "@/components/boy.vue";
import GirlComp from "@/components/girl.vue";

@Component({
  components: {
    BoyComp,
    GirlComp
  }
})
export default class About extends Vue {
  private options: Array<object> = [
    {
      value: "选项1",
      label: "黄金糕"
    },
    {
      value: "选项2",
      label: "双皮奶"
    },
    {
      value: "选项3",
      label: "蚵仔煎"
    },
    {
      value: "选项4",
      label: "龙须面"
    },
    {
      value: "选项5",
      label: "北京烤鸭"
    }
  ];
  private value: string = "选项2";
}
</script>
<style lang="less" scoped>
.el-row,
.el-col {
  height: 300px;
  color: white;
  font-size: 40px;
}
.boy {
  height: 100%;
  background-color: #409eff;
}
.girl {
  height: 100%;
  background-color: #f56c6c;
}
</style>
