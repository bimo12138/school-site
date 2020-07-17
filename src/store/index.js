import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: "",
    password: "",
    token: "",
    /**
     * loginStatus: 0 未登录 1 登陆 2 登陆但是token超过时间限制！
     * function loginSuccess CheckStatus ChangeStatus
     * 那么必须使用全局视图来进行控制 axios 的请求拦截
     * 那么更新token的操作则是需要通过特定的状态码进行更新
     * 
     */
  },
  mutations: {
    loginSuccess: (state, username, password, token) => {
      state.username = username;
      state.password = password;
      state.token = token;
      localStorage["username"] = username;
      localStorage["token"] = token;
    },
    readLocal: (state) => {
      let username = localStorage["username"];
      let token = localStorage["token"];
      state.username = username;
      state.token = token;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getToken: () => {
      return this.token;
    },
    getLocal: (state) => {
      if (state.username && state.password) {
      
        return [state.username, state.password];
      } else {
        return [localStorage.getItem("username")];
      }
    }
  }
})
