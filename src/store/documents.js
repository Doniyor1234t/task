const documents = {
  state:{
    document:{},
    documents:[]
  },
  getters:{
    document(state){return state.document},
    documents(state){return state.documents}
  },
  mutations:{
    document(state,payload){state.document = payload},
    documents(state,payload){state.documents = payload}
  },
  actions:{
    async allDocuments(context){
      const response = await fetch(`${context.getters.url}/documents`)
      const data = await response.json()
      if (response.status === 200){
          console.log(data);
          context.commit('documents',data)
      }
      console.log(response.status);
    }
  }
}

export default documents