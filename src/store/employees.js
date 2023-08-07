const employees = {
  state:{
    employee:{},
    employees:[]
  },
  getters:{
    employee(state){return state.employee},
    employees(state){return state.employees}
  },
  mutations:{
    employee(state,payload){state.employee = payload},
    employees(state,payload){state.employees = payload}
  },
  actions:{
    async allEmployees(context){
      const response = await fetch(`${context.getters.url}/workers`)
      const data = await response.json()
      if (response.status === 200){
          console.log(data);
          context.commit('employees',data)
      }
      console.log(response.status);
    }
  }
}

export default employees