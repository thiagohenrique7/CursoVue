<template>
  <div>
    <h2 class="font-weight-light">Contador: {{ getContador }}</h2>
    <h4 class="font-weight-light">Alias: {{ getContador }}</h4>
    <h4 class="font-weight-light">Multiplicado: {{ contadorMultiplciado }}</h4>
    <button class="btn btn-lg btn-danger mr-1" @click="decrementar">-</button>
    <button class="btn btn-lg btn-success" @click="incrementar">+</button>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'contador-click',
  data () {
    return {
      contadorLocal: 2
    }
  },
  computed: {
    ...mapGetters('contador', ['getContador']),
    ...mapState('contador', {
      contador: state => state.contador,
      // contador: 'contador',
      contadorAlias: state => state.contador,
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

  methods: {
    // ...mapMutations(['incrementar']),
    decrementar () {
      this.$store.state.contador.contador--
    },
    incrementar () {
      this.$store.state.contador.contador++
    }

  //  {
  //   decrementar () {
  //     this.$store.state.contador--
  //   },
  // incrementar () {
  //   this.$store.state.contador++
  // }
  }
}
</script>
