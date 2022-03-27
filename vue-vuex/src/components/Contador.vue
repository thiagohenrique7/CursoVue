<template>
  <div>
    <h2 class="font-weight-light">Contador: {{ contador }}</h2>
    <h4 class="font-weight-light">Alias: {{ contadorAlias }}</h4>
    <h4 class="font-weight-light">Multiplicado: {{ contadorMultiplciado }}</h4>
    <button class="btn btn-lg btn-danger mr-1" @click="decrementar">-</button>
    <button class="btn btn-lg btn-success" @click="incrementar">+</button>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'contador-click',
  data () {
    return {
      contadorLocal: 2
    }
  },
  computed: {
    ...mapState({
    // contador: state => state.contador
      contador: 'contador',
      contadorAlias: 'contador',
      contadorMultiplciado (state) {
        return state.contador * this.contadorLocal
      }
    })
  // outras computed properties
  },

  // computed: mapState(['contador']),

  // contador(){
  //   return this.$store.state.contador
  // }

  methods: mapMutations(['incrementar', 'decrementar'])
  //  {
  //   decrementar () {
  //     this.$store.state.contador--
  //   },
  // incrementar () {
  //   this.$store.state.contador++
  // }
}

</script>
