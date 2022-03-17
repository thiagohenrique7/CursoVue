import Vue from 'vue'
// import appContador from './appContador.vue' //importando o component
import app from './app.vue'


// Vue.component('app-contador', appContador)
// Vue.component('AppHeader', AppHeader)
new Vue({
  
 render: h=> h(app)
}).$mount('#app')

