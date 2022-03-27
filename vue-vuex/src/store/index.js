import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0,
    tarefas: [
      { id: 1, titulo: 'Aprender Vue', concluido: true },
      { id: 2, titulo: 'Aprender Vue Router', concluido: true },
      { id: 3, titulo: 'Aprender Vuex', concluido: false }
    ]
  },
  getters: {
    tarefasConcluidas: (state) => {
      return state.tarefas.filter(t => t.concluido)
    },
    tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
    totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length
  },
  mutations: {
    incrementar () {
      this.state.contador++
    },
    decrementar () {
      this.state.contador--
    }
  },
  actions: {
  },
  modules: {
  }
})
