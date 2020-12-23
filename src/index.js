import Vue from "vue";
import vueCustomElement from "vue-custom-element";
import MyCounter from "./index.vue";

Vue.use(vueCustomElement);
Vue.customElement("my-counter", MyCounter, {});
