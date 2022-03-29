const state = {
  contador: 0
}
const getters = {
  getContador (state) {
    return state.contador
  },
  incrementar (state) {
    state.contador++
  },
  decrementar () {
    this.state.contador--
  }
}

export default {
  namespaced: true,
  state,
  getters
}
