import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// 按需引入element-ui的组件
import { Button, Select, Option } from "element-ui";
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
