<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de Tarefas</h1>
      </div>
      <div class="col-sm-2">
        <button
          class="btn btn-primary float-right"
          @click="exibirFormularioCriarTarefa"
        >
          <i class="fa fa-plus mr-2"></i>
          <span>Criar</span>
        </button>
      </div>
    </div>

     <h3 class="font-weight-light mt-4">A fazer ({{ tarefasAFazer.length }})</h3>

    <ul class="list-group" v-if="tarefasAFazer.length > 0">
      <TarefasListaIten
        v-for="tarefa in tarefasAFazer"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao"
      />
    </ul>

    <p v-else>Nenhuma tarefa a fazer.</p>

    <h3 class="font-weight-light mt-4">Concluídas ({{ totalDeTarefasConcluidas }})</h3>

    <ul class="list-group" v-if="totalDeTarefasConcluidas > 0">
      <TarefasListaIten
        v-for="tarefa in tarefasConcluidas"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao"
      />
    </ul>

    <p v-else>Nenhuma tarefa foi concluída.</p>

    <TarefaSalvar v-if="exibirFormulario" :tarefa="tarefaSelecionada" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

export default {
  components: {
    TarefaSalvar,
    TarefasListaIten
  },
  data () {
    return {
      exibirFormulario: false,
      tarefaSelecionada: undefined
    }
  },
  computed: {
    ...mapState(['tarefas']),
    ...mapGetters(['tarefasAFazer',
      'tarefasConcluidas',
      'totalDeTarefasConcluidas'])
    // ...mapState({
    //   tarefas: 'tarefas'
    // })
  },
  created () {
    setTimeout(() => {
      this.$store.dispatch('listarTarefas', {
        tarefas: [{ id: 1, titulo: 'Aprender Vue', concluido: true },
          { id: 2, titulo: 'Aprender Vue Router', concluido: true },
          { id: 3, titulo: 'Aprender Vuex', concluido: false }]
      })
    }, 1000)
  },
  /* this.$store.commit('listarTarefas', {
      //// type: 'listarTarefas',
      tarefas: [{ id: 1, titulo: 'Aprender Vue', concluido: true },
        { id: 2, titulo: 'Aprender Vue Router', concluido: true },
        { id: 3, titulo: 'Aprender Vuex', concluido: false }]
    }) */
  // this.listarTarefas({
  //   tarefas: [{ id: 1, titulo: 'Aprender Vue', concluidotrue },
  //     { id: 2, titulo: 'Aprender Vue Router', concluidotrue },
  //     { id: 3, titulo: 'Aprender Vuex', concluido: false }]
  // })
  methods: {
    exibirFormularioCriarTarefa (event) {
      if (this.tarefaSelecionada) {
        this.tarefaSelecionada = undefined
        return
      }
      this.exibirFormulario = !this.exibirFormulario
    },
    selecionarTarefaParaEdicao (tarefa) {
      this.exibirFormulario = true
      this.tarefaSelecionada = tarefa
    },
    resetar () {
      this.exibirFormulario = false
      this.tarefaSelecionada = undefined
    }
  }
}
// ...mapMutations(['listarTarefas']),
// ...mapMutations({
//   carregarTarefas: 'listarTarefas',
//   listarTarefas: (commit, payload, options) => {
//     commit('listarTarefas', payload, options)
//   }
// }),

</script>
