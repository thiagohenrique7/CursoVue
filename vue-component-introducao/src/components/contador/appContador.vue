<template>
    <div :class="$style.contador">
        <h3> Clicado {{contador}} vezes </h3>
        <button @click="incrementar"> Incrementar </button>
    </div>
</template>

<script>
//definindo o bloco script
export default {
    data(){
        return{
           contador: 0
        }
    },
    methods:{
        incrementar(){
            this.contador++
        }
    },
    created(){
        console.log('CSS Model', this.$style)
    }
}
</script>

<style module>
.contador{
    border: 1px solid red;
}
</style>
