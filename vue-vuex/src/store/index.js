import { createStore } from 'vuex'
import contador from '@/resources/contador/_$store/index'
import tarefas from '@/resources/tarefas/_$store/index'

const state = {
  usuario: 'Thiago'
}

const mutations = {
  logar (state, usuario) {
    state.usuario = usuario
    // logar: (state, usuario) => {
  //   state.usuario = usuario
  // }
  }
}

const getters = {
  mensagemBoasVindas (state) {
    return `Olá ${state.usuario}`
    // mensagemBoasVindas: state => `Olá ${state.usuario}`
  }
}
const actions = {
  logar: ({ commit }, usuario) => {
    commit('logar', usuario)
  }
}
const modules = {
  contador,
  tarefas
}
export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules
})
