<template>
  <div class="about">
    <h1>This is an about page</h1>
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
import { Vue } from "vue-property-decorator";
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
