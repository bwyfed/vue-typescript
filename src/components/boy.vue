<template>
  <div class="boy-container">
    <div>
      库存(计算属性){{ localFlowersInStock }}, (全局状态){{ flowersInStock }}
    </div>
    <div>男孩</div>
    <div>手里有{{ currentFlower }}朵花</div>
    <div>
      <el-button @click="sendFlower({ sendNumber: 1 })">送花</el-button>
      <el-button @click="buyFlower({ buyNumber: 1 })">买花</el-button>
    </div>
    <div>勇气值：{{ braveScore }}</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { State, Mutation, Action, namespace } from "vuex-class";
import { BoyState } from "@/store/modules/modules-types";

@Component
export default class BoyComponent extends Vue {
  @State("flowersInStock") flowersInStock: any; // 全局的状态如何获取？
  @State("boy") boyState!: BoyState;
  @Action("sendFlower", { namespace: "boy" })
  sendFlower: any;
  @Action("buyFlower", { namespace: "boy" })
  buyFlower: any;

  // 如何使用全局状态？
  get localFlowersInStock(): number {
    return this.flowersInStock;
  }
  // 模块化的状态
  get currentFlower(): number {
    return this.boyState.currentFlower;
  }
  get braveScore(): number {
    return this.boyState.braveScore;
  }
}
</script>
