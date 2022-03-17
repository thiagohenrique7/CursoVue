<template>
  <div>
    <app-header/>
    <ContadorInfo/>
    <app-contador></app-contador>
  </div>
</template>


<script>
import appContador from "./components/contador/appContador.vue";
import AppHeader from "./components/shared/AppHeader.vue";
import ContadorInfo from "./components/contador/ContadorInfo.vue"

export default {
  components: {
    appContador,
    AppHeader: AppHeader, //AppHeader apenas
    ContadorInfo
  },
};
</script>
