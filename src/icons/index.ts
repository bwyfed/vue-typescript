import Vue from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue"; // svg component

// register globally
Vue.component("svg-icon", SvgIcon);

const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext);
const requireContext = require.context("./svg", false, /\.svg$/);
requireAll(requireContext);
