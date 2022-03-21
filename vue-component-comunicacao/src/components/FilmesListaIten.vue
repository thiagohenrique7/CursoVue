<template>
  <li class="list-group-item">
    <span>{{ filmeTituloConcatenado }} <br> Lançamento: {{ ano }}</span>
    <button class="btn btn-success float-right">Editar</button>
  </li>
</template>

<script>
export default {
  props: {
    // filmeTitulo: String
    titulo: {
      type: String,
      required: true // prop obrigatória
      // default: 'Vingadores'// valor a ser utilizado por padrão ->TIPO PRIMITIVO
      // default () {
      //   return 'Vingadores'// ARRAY,OBJETOS E FUNÇÕES
      // },
      // validator (filmeTitulo) {
      //   return filmeTitulo.includes('Marvel') // VALIDAÇÃO
      // }
    },
    ano: {
      type: Number
    }
  },
  computed: {
    filmeTituloConcatenado () {
      return `Título: ${this.titulo}`
    }
  },
  created () {
    // console.log(typeof this.titulo)
  }
}
</script>
