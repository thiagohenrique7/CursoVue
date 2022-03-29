const state = {
  tarefas: []
}
const getters = {
  tarefasConcluidas: (state, getters, rootState, rootGetters) => {
    console.log('Getters: state: ', state, rootState)
    return state.tarefas.filter(t => t.concluido)
  },
  tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
  totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
  buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id),
  boasVindas: (state, getters, rootState, rootGetters) => {
    console.log('State Global:  ', rootState.usuario)
    console.log('Getter Global:  ', rootGetters.mensagemBoasVindas)
    return rootGetters.mensagemBoasVindas
  }
}
const mutations = {
  listarTarefas: (state, payload) => {
    state.tarefas = payload.tarefas
  }
// listarTarefas: (state, { tarefas }) => {
//   state.tarefas = tarefas
// },
}
const actions = {
  buscarTarefas: (context, payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, titulo: 'Aprender Vue', concluido: true },
          { id: 2, titulo: 'Aprender Vue Router', concluido: true },
          { id: 3, titulo: 'Aprender Vuex', concluido: false }
        ])
      }, 3000)
    })
  },
  listarTarefas: async ({ commit, dispatch, state, rootState, getters, rootGetters }, payload) => {
    console.log('Action: listarTarefas')
    const tarefas = await dispatch('buscarTarefas')
    console.log('Mutation: listarTarefas')
    commit('listarTarefas', { tarefas })
    console.log('Actions: state: ', state, rootState)

    // commit('logar', 'Thiago Nogueira') // tarefas/logar (não funciona)
    // commit('logar', 'Thiago Nogueira', { root: true }) // logar - FUNCIONA
    // dispatch('logar', 'Thiago Nogueira') // tarefas/logar (não funciona)
    dispatch('logar', 'Thiago Nogueira', { root: true }) // logar - FUNCIONA
    // dispatch('logar', null, { root: true }) // /logar - caso não tenha payload na action do root - FUNCIONA
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
