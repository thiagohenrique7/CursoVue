<template>
  <div>
    <h2>Filme selecionado</h2>

    <div class="card" v-if="filmeSelecionadoInfo">
      <div class="card-body">
        <h5 class="card-title">{{ filmeSelecionadoInfo.titulo }} || {{ filmeSelecionadoInfo.ano }}</h5>
        <button @click="editar()" class="btn btn-danger float-right">Editar</button>
      </div>
    </div>
    <p v-else> Nenhum filme selecionado </p>
  </div>
</template>

<script>
// import { eventBus } from './../main'
export default {
  // data () {
  //   return {
  //     filmeSelecionadoInfo: undefined
  //   }
  // }
  // created () {
  //   eventBus.$on('selecionarFilme', (filmeSelecionado) => {
  //     this.filmeSelecionadoInfo = filmeSelecionado
  //   })
  props: {
    filmeSelecionadoInfo: Object
  },
  methods: {
    editar (event) {
      this.$emit('editarFilme', this.filmeSelecionadoInfo)
    }
  }
}
//  }
</script>
