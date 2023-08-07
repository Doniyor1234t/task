import { createStore } from "vuex";
import employees from "./employees";
import documents from "./documents";

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
    employees, documents
  }
})