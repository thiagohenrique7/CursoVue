import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0,
    tarefas: []
  },
  getters: {
    tarefasConcluidas: (state) => {
      return state.tarefas.filter(t => t.concluido)
    },
    tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
    totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id)
  },
  mutations: {
    listarTarefas: (state, payload) => {
      state.tarefas = payload.tarefas
    },
    // listarTarefas: (state, { tarefas }) => {
    //   state.tarefas = tarefas
    // },
    incrementar () {
      this.state.contador++
    },
    decrementar () {
      this.state.contador--
    }
  },
  actions: {
    listarTarefas: ({ commit }, payload) => {
      console.log('action chamada')
      setTimeout(() => {
        console.log('action executada')
        commit('listarTarefas', payload)
      }, 3000)
    }
  },
  modules: {
  }
})
