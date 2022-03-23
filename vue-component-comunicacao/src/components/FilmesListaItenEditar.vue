<template>
  <div>
    <h2>Editar filme</h2>

    <div class="form-group">
      <label>Título:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Insira o título"
        :value="filme.titulo"
        @input="filmeSelecionado = { propriedade: 'título', valor: $event.target.value}"
      />
    </div>

    <div class="form-group">
      <label>Ano:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Insira o ano"
        :value="filme.ano"
         @input="filmeSelecionado = { propriedade: 'ano', valor: $event.target.value}"
      />
    </div>
    <button @click="salvarFilme()" class="btn btn-primary float-right"> Salvar </button>
  </div>
</template>

<script>
export default {
  props: {
    filme: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      filmeLocal: this.filme
    }
  },
  computed: {
    filmeSelecionado: {
      set (dados) {
        this.filmeLocal = Object.assign(
          {},
          this.filmeLocal,
          { [dados.propriedade]: dados.valor }
        )
      },
      get () {
        return this.filme
      }
    }
  }
//   methods: {
//     salvarFilme (event) {
//       this.$emit('atualizarFilme', this.filmeLocal)
//     }
//   }
}
</script>
