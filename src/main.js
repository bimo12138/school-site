import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import qs from "qs";


axios.interceptors.request.use(
  config => {
    const token = store.getters.getToken;
    if (token) {
      config.headers.authorization = token;
    }
    config.data = qs.stringify(config.data);
    return config;
  }
)

axios.interceptors.response.use(
  response => {
    const token = response.data.get("token");
    if (token) {
      store.commit("updateToken", token);
    }
    return response;
  }
)

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = axios;
axios.defaults.baseURL = "/api";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
