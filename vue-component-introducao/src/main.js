import Vue from 'vue'
// const data = {
//   titulo: 'Curso de VueJS',
//   contador: 0
// }
//dessa forma todos objetos compartilham a mesma ref de mémoria


 // Vue.component('th-component', {
//   data: function () {
//     return {
//       titulo: 'Curso de VueJS',
//       contador: 0
//       //possui seu próprio estado independente das outras instâncias
//     }
//   },
//   methods: {
//     incrementar: function () {
//       this.contador++
//     }
//   },
//   template: `
//   <div>
//   <h1> {{titulo}} </h1>
//   <button @click="incrementar"> Clicado {{contador}} vezes</button>
//   </div>
//   `
// })
const thComponent = { data: function () {
      return {
        titulo: 'Curso de VueJS',
        contador: 0
      
      }
    },
    methods: {
      incrementar: function () {
        this.contador++
      }
    },
    template: `
    <div>
    <h1> {{titulo}} </h1>
    <button @click="incrementar"> Clicado {{contador}} vezes</button>
    </div>
    `
  }

new Vue({
  el: '#app',
  components:{
    'th-component': thComponent
  }
})

new Vue({
  el: '#app2'
})
