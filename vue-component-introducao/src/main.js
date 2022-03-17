import Vue from 'vue'
// import appContador from './appContador.vue' //importando o component
import app from './app.vue'

// Vue.component('app-contador', appContador)

new Vue({
  
  render: h=> h(app)
}).$mount('#app')

