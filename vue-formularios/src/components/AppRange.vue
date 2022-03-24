<template>
    <div>
        <label> {{ customLabel }}</label>
        <input type="range"
        v-bind="$attrs"
        :value="value"
        :class="inputClasses"
        @input="atualizar">
    </div>
    <!-- "$emit('input',$event.target.value)"> -->
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label: String,
        value: [Number, String],
        inputClasses: [String,Object,Array]
    },
    data() {
        return{
            valorAtual: this.value || this.$attrs.min
        }
    },
    computed: {
        customLabel() {
            return `${this.label} (RS ${this.valorAtual})`
        }
    },
    methods: {
        atualizar(event){
            const valor = event.target.value
            this.$emit('input',valor)
            this.valorAtual = valor
        }
    },
    created(){
        console.log(this.$attrs)
    }
}
</script>