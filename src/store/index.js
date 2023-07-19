import { createStore } from "vuex";

export default createStore({
  state: {
    url:"http://localhost:3000"
  },
  getters: {
    url(state){
      return state.url
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})