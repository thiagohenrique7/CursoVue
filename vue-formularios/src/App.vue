<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Formulários no Vue</h1>
        <p class="lead">Treinando a manipulação de formulários</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <!-- formulario -->
        <div class="col-sm-6">
          <h3>Preencha abaixo</h3>

          <form @submit.prevent="enviar" @reset="resetar" > <!-- action="" -->

            <div class="form-group">
              <label>Nome:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Seu nome"
                v-model.lazy.trim="desenvolvedor.nome"
              />
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input
                type="email"
                class="form-control"
                placeholder="Seu email"
                v-model.lazy="desenvolvedor.email"
              />
            </div>

            <div class="form-group">
              <label>Idade:</label>
              <input
                type="number"
                class="form-control"
                placeholder="Sua idade"
                v-model.number="desenvolvedor.idade"
              />
            </div>

            <div class="form-group">
              <p>Gênero:</p>

              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  value="Masculino"
                  v-model="desenvolvedor.genero"
                />
                <!-- name="genero"
                  checked  -->
                <label class="form-check-label">Masculino</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  value="Feminino"
                  v-model="desenvolvedor.genero"
                />
                <label class="form-check-label">Feminino</label>
              </div>
            </div>

            <div class="form-group">
              <label>Ocupação:</label>
              <select class="form-control" v-model="desenvolvedor.ocupacao">
                <option value="" disabled>Selecione uma opção...</option>
                <option
                  v-for="(ocupacao, indice) in ocupacoes"
                  :key="indice"
                  :value="ocupacao"
                >
                  <!-- :selected="ocupacao ==='Desenvolvedor Back End'" -->
                  {{ ocupacao }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <p>Tecnologias:</p>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="JavaScript"
                  v-model="desenvolvedor.tecnologias"
                />
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Vue JS"
                  v-model="desenvolvedor.tecnologias"
                />
                <label class="form-check-label">Vue JS</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Vuex"
                  v-model="desenvolvedor.tecnologias"
                />
                <label class="form-check-label">Vuex</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="desenvolvedor.tecnologias"
                  value="Vue Router"
                />
                <label class="form-check-label">Vue Router</label>
              </div>
            </div>

            <div class="form-group">
              <label>Resumo de perfil:</label>
              <textarea
                class="form-control"
                :placeholder="desenvolvedor.biografia"
                v-model="desenvolvedor.biografia"
              >
              </textarea>
            </div>

            <div class="form-group">
              <AppRange
              label="Salario pretendido: "
              v-model.number="desenvolvedor.salario"
              min="800"
              max="15000"
              step="50"
              :inputClasses="[{'form-control-range': true}, 'minha-classe']"
              />
              <!-- inputClasses="form-control-range" -->
              
              
            </div>

            <div class="form-group">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="desenvolvedor.notificacoes"
                  true-value="Sim"
                  false-value="Não"
                />
                <label class="form-check-label"
                  >Receber notificações por email</label
                >
              </div>
            </div>

            <button class="btn btn-secondary" type="reset" >Resetar</button>
            <!-- <button class="btn btn-success" type="button" @click="enviar">
              Enviar
            </button> -->
             <button class="btn btn-success" type="submit">
              Enviar
            </button>
          </form>

          <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="black"
              dark
              class="ma-2"
              @click="setShowFilter(true)"
              v-bind="attrs"
              v-on="on"
              small
            >
              <v-icon color="white">mdi-filter</v-icon>
            </v-btn>
          </template>
          <span>Filtro</span>
        </v-tooltip>
        
        </div>

        <!-- saida -->
        <div class="col-sm-6">
          <h3>Saída</h3>

          <div class="card">
            <div class="card-header">Dados</div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Nome: </strong> {{ desenvolvedor.nome }}
              </li>
              <li class="list-group-item">
                <strong>Email:</strong> {{ desenvolvedor.email }}
              </li>
              <li class="list-group-item">
                <strong>Idade:</strong> {{ desenvolvedor.idade }}
              </li>
              <li class="list-group-item">
                <strong>Gênero:</strong> {{ desenvolvedor.genero }}
              </li>
              <li class="list-group-item">
                <strong>Ocupação:</strong>{{ desenvolvedor.ocupacao }}
              </li>
              <li class="list-group-item">
                <strong>Tecnologias:</strong>
                <ul>
                  <li
                    v-for="(tecnologia, indice) in desenvolvedor.tecnologias"
                    :key="indice"
                  >
                    {{ tecnologia }}
                  </li>
                </ul>
              </li>
              <li class="list-group-item">
                <strong>Biografia:</strong>
                <!-- <pre> {{ desenvolvedor.biografia }} </pre> -->
                <div style="white-space: pre">
                  {{ desenvolvedor.biografia }}
                </div>
              </li>
              <li class="list-group-item">
                <strong>Receber notificações?</strong>
                {{ desenvolvedor.notificacoes }}
                <!-- desenvolvedor.notificacoes?"Sim":"Não"  -->
              </li>
              <li class="list-group-item">
                <strong>Salário pretendido:</strong>
                {{ desenvolvedor.salario }}
                <!-- desenvolvedor.notificacoes?"Sim":"Não"  -->
              </li>
            </ul>

            <div class="card-header">Model</div>

            <div class="card-body">
              <pre><code>{{ desenvolvedor }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppRange from './components/AppRange.vue'
export default {

  components:{
    AppRange
  },
  data() {
    return {
      desenvolvedor: {

      },
      valoresPadroes: {
        nome: "",
        email: "",
        idade: 0,
        biografia: "Sou dev desde 2020...",
        genero: "Masculino",
        tecnologias: [],
        notificacoes: "Não",
        ocupacao: "",
        salario: '1000'
      },
      ocupacoes: [
        "Desenvolvedor Front End (Web)",
        "Desenvolvedor Front End (Mobile)",
        "Desenvolvedor Front End (Web e Mobile)",
        "Desenvolvedor Back End",
        "Desenvolvedor Full Stack",
      ],
    };
  },
  methods: {
    enviar(){
      const formularioEnviado = Object.assign({}, this.desenvolvedor)
      console.log('Formulário Enviado', formularioEnviado)
    },
    resetar(){
      this.desenvolvedor = Object.assign({}, this.valoresPadroes)
    }
  },
  created(){
    this.resetar()
  }
};
</script>


<style scoped>
.btn {
  margin-right: 5px;
}
</style>ject.assign({}, this.desenvolvedor)
      console.log('Formulário Enviado', formularioEnviado)
    },
    resetar(){
      this.desenvolvedor = Object.assign({}, this.valoresPadroes)
    }
  },
  created(){
    this.resetar()
  }
};
</script>


<style scoped>
.btn {
  margin-right: 5px;
}
</style>