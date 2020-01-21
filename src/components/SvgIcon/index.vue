<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-ion="$listeners"
  ></div>
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :href="iconName" />
  </svg>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { isExternal } from "@/utils/validate";

@Component
export default class SvgIcon extends Vue {
  @Prop({ required: true }) iconClass!: string;
  @Prop({ default: "" }) className!: string;

  //computed
  get isExternal() {
    return isExternal(this.iconClass);
  }
  get styleExternalIcon() {
    return {
      mask: `url(${this.iconClass}) no-repeat 50% 50%`,
      "-webkit-mask": `url(${this.iconClass}) no-repeat 50% 50%`
    };
  }
  get svgClass() {
    if (this.className) {
      return "svg-icon " + this.className;
    } else {
      return "svg-icon";
    }
  }
  get iconName() {
    return `#icon-${this.iconClass}`;
  }
}
</script>
<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-exteranl-icon {
  display: inline-block;
  background-color: currentColor;
  mask-size: cover !important;
}
</style>
