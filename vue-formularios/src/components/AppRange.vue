<template>
    <div>
        <label> {{ customLabel }}</label>
        <input type="range"
        v-bind="$attrs"
        :value="valor"
        :class="inputClasses"
        @change="atualizar">
    </div>
    <!-- "$emit('input',$event.target.value)"> -->
</template>

<script>
export default {
    inheritAttrs: false,
    model: {
        prop: 'valor',
        event: 'change'
    },
    props: {
        label: String,
        valor: [Number, String],
        inputClasses: [String,Object,Array]
    },
    data() {
        return{
            valorAtual: this.valor || this.$attrs.min
        }
    },
    computed: {
        customLabel() {
            return `${this.label} (RS ${this.valorAtual || this.$attrs.min})`
        }
    },
    methods: {
        atualizar(event){
            const valor = event.target.value
            this.$emit('change',valor)
            
        }
    },
    created(){
        console.log(this.$attrs)
    }
}
</script>