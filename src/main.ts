import Vue from "vue";
import "normalize.css/normalize.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons";
import { Component } from "vue-property-decorator";

Vue.config.productionTip = false;
// 按需引入element-ui的组件
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Row,
  Col,
  Message,
  Button,
  Select,
  Option
} from "element-ui";
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Main);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Message.name, Message);
Vue.prototype.$message = Message;
// 注册组件内部使用路由监听钩子
Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteUpdate",
  "beforeRouteLeave"
]);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
