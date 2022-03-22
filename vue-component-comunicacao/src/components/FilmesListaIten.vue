<template>
  <!-- <div>
    <input type="text" :value="titulo" :placeholder="$attrs.placeholder" />
  </div> -->

  <li class="list-group-item">
    <span
      >{{ filme.titulo }} <br />
      Lançamento: {{ filme.ano }}</span
    >
    <button @click="selecionar" class="btn btn-success float-right">
      Selecionar
    </button>
  </li>
</template>

<script>

// import { eventBus } from './../main'
export default {
  // inheritAttrs: false,
  props: {
    // filmeTitulo: String
    // titulo: {
    //   type: String,
    //   required: true // prop obrigatória
    //   // default: 'Vingadores'// valor a ser utilizado por padrão ->TIPO PRIMITIVO
    //   // default () {
    //   //   return 'Vingadores'// ARRAY,OBJETOS E FUNÇÕES
    //   // },
    //   // validator (filmeTitulo) {
    //   //   return filmeTitulo.includes('Marvel') // VALIDAÇÃO
    //   // }
    // },
    // ano: {
    //   type: Number,
    //   required: true
    // }
    filme: {
      type: Object,
      required: true
    }
  },
  methods: {
    selecionar (event) {
      // eventBus.$emit('selecionarFilme', this.filme) // emitindo evento por meio do eventBus e não mais pelo this
      // eventBus.selecionarFilme(this.filme)
      this.$emit('selecionarFilme', this.filme)
    }
  }
  // computed: {
  //   filmeTituloConcatenado () {
  //     return `Título: ${this.titulo}`
  //   }
  // },
  // created () {
  //   console.log('Attrs:', this.$attrs)
  // }
}
</script>
