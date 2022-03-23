<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <ul class="list-group list-group-flush">

        <FilmesListaIten
        v-for="filme in filmes"
        :key="filme.id"
        :filme="filme"
        :class="aplicarClasse(filme)"
        @selecionarFilme="filmeSelecionado = $event"
       />
 <!-- :filmeTitulo="filme.titulo"
        :filmeAno="filme.ano" -->

        <!-- <FilmesListaIten filmeTitulo="Marvel Demolidor"/> -->

        <!-- <FilmesListaIten
        v-for="(filme,index) in filmes"
        :key="index"
        :filmeTitulo="filme"/> -->

          <!-- <FilmesListaIten :filmeTitulo="Vingadores"/> -->

        <!-- <FilmesListaIten :filmeTitulo="'Vingadores: Guerra Infinita'" />
        <FilmesListaIten filmeTitulo="Homem de Ferro" horario="15:00"/>
        <FilmesListaIten filmeTitulo="Pantera Negra" horario="19:00"/> -->

      </ul>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo
      v-if="!editar"
      :filmeSelecionadoInfo="filmeSelecionado"
      @editarFilme="editarFilme"/>

      <FilmesListaItenEditar
      v-else
      :filme="filmeSelecionado"/>

    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'
import FilmesListaItenEditar from './FilmesListaItenEditar.vue'

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
    FilmesListaItenEditar
  },
  data () {
    return {
      filmes: [
        { id: 1, titulo: 'Vingadores: Guerra Infinita', ano: 2022, diretor: 'Stan Lee' },
        { id: 2, titulo: 'Homem de Ferro', ano: 2022, diretor: 'Stan Lee' },
        { id: 3, titulo: 'Pantera Negra', ano: 2022, diretor: 'Stan Lee' },
        { id: 4, titulo: 'Deadpool 2', ano: 2022, diretor: 'Stan Lee' }
      ],
      filmeSelecionado: undefined,
      editar: false
    }
  },
  methods: {
    aplicarClasse (filmeIterado) {
      return {
        active: this.filmeSelecionado && this.filmeSelecionado.id === filmeIterado.id
      }
    },
    editarFilme (filmeEditado) {
      this.editar = true
      this.filmeSelecionado = filmeEditado
    }
    // atualizarFilme (filmeAtualizado) {
    //   const indice = this.filmes.findIndex(filme => filme.id === filmeAtualizado.id),
    //   this.filmes.splice(indice,1,filmeAtualizado),
    //   this.filmeSelecionado = undefined
    //   this.editar=false
    // }
  }
}
</script>
